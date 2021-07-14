import json
import logging
import re
from textwrap import indent

import yaml


log = logging.getLogger("mkdocs.mkdocs_simple_hooks")

CODEBLOCK_INDENT = " " * 4
CODEBLOCK_JSON_RE = re.compile(r"```json\s*(.*?)```", re.DOTALL)
CODEBLOCK_TABBED = """\
=== "json"

    ``` json

%s

    ```

=== "YAML"

    ``` yaml
    
%s

    ```\
"""


def _substitute_codeblocks(block):
    match = block.group(1)
    try:
        parsed = json.loads(match)
    except json.decoder.JSONDecodeError as e:
        log.warn(f"Invalid JSON: {e}\nSkipping YAML block creation")
        return match

    json_block = indent(match.strip(), CODEBLOCK_INDENT)
    yaml_block = indent(yaml.dump(parsed), CODEBLOCK_INDENT)

    return CODEBLOCK_TABBED % (json_block, yaml_block)


def make_tabbed_codeblocks(markdown, page, config, **kwargs):
    log.info(f"Adding YAML codeblocks to {page.file.src_path}")
    return re.sub(CODEBLOCK_JSON_RE, _substitute_codeblocks, markdown)
