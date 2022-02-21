# This code is in the public domain.
# Based on work from Oleh Prypin.
# Link to their GitHub account: https://github.com/oprypin
# Offered code as public domain: https://github.com/mkdocs/mkdocs/discussions/2757#discussioncomment-2092565

def on_page_markdown(markdown, page, **kwargs):
    edit_url = page.meta.get('edit_url')
    if edit_url:
        page.edit_url = edit_url

    repo_url = page.meta.get('repo_url')
    if repo_url:
        page.repo_url= repo_url
