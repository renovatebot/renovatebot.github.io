<!-- Material for MkDocs shows a tooltip when you hover over any abbreviation in this list. -->
<!-- https://squidfunk.github.io/mkdocs-material/reference/tooltips/#adding-a-glossary -->

<!-- Please keep this list sorted from A-Z. -->

<!-- Put real abbreviations in this section. -->

*[AMI]: Amazon Machine Images
*[AUR]: Arch User Repository
*[AWS]: Amazon Web Services
*[CD]: Continuous Deployment
*[CI]: Continuous Integration
*[CLI]: Command-Line Interface
*[CVE]: Common Vulnerabilities and Exposures
*[DCO]: Developer Certificate of Origin
*[GCR]: Google Container Registry
*[GPG]: GNU Privacy Guard
*[IaC]: Infrastructure as Code
*[IAM]: Identity and Access Management
*[JDK]: Java Development Kit
*[JRE]: Java Runtime Environment
*[LTS]: Long Term Support
*[OCI]: Open Container Initiative
*[PAT]: Personal Access Token
*[SDK]: Software Development Kit
*[SemVer]: Semantic Versioning
*[SSH]: Secure Shell
*[SSL]: Secure Sockets Layer
*[TLS]: Transport Layer Security
*[URL]: Uniform Resource Locator
*[UTC]: Coordinated Universal Time
*[VM]: Virtual Machine

<!-- Grab description string from config options typescript file, and copy/paste it into the right format here -->

*[detectGlobalManagerConfig]: If `true`, Renovate tries to detect global manager configuration from the file system.
*[detectHostRulesFromEnv]: If `true`, Renovate tries to detect host rules from environment variables.
*[allowPostUpgradeCommandTemplating]: Set this to `true` to allow templating for post-upgrade commands.
*[allowedPostUpgradeCommands]: A list of regular expressions that decide which post-upgrade tasks are allowed.
*[postUpgradeTasks]: Post-upgrade tasks that are executed before a commit is made by Renovate.
*[commands]: A list of post-upgrade commands that are executed before a commit is made by Renovate.
*[fileFilters]: Files that match the glob pattern will be committed after running a post-upgrade task.
*[executionMode]: Controls when the post upgrade tasks run: on every update, or once per upgrade branch.
*[onboardingBranch]: Change this value to override the default onboarding branch name.
*[onboardingCommitMessage]: Change this value to override the default onboarding commit message.
*[onboardingConfigFileName]: Change this value to override the default onboarding config file name.
*[onboardingNoDeps]: Onboard the repository even if no dependencies are found.
*[onboardingPrTitle]: Change this value to override the default onboarding PR title.
*[configMigration]: Enable this to get config migration PRs when needed.
*[productLinks]: Links which are used in PRs, issues and comments.
*[hostType]: hostType for a package rule. Can be a platform name or a datasource name.
*[matchHost]: A domain name, host name or base URL to match against.
*[timeout]: Timeout (in milliseconds) for queries to external endpoints.
*[insecureRegistry]: Explicitly turn on insecure Docker registry access (HTTP).
*[authType]: Authentication type for HTTP header. e.g. `"Bearer"` or `"Basic"`. Use `"Token-Only"` to use only the token without an authorization type.
*[hostRules]: Host rules/configuration including credentials.
*[hostType]: hostType for a package rule. Can be a platform name or a datasource name.
*[matchHost]: A domain name, host name or base URL to match against.
*[addLabels]: Labels to add to Pull Request.
*[labels]: Labels to set in Pull Request.
*[packageRules]: Rules for matching package names.
*[matchPackagePatterns]: Package name patterns to match. Valid only within a `packageRules` object.
*[matchDepTypes]: List of depTypes to match (e.g. [`peerDependencies`]). Valid only within `packageRules` object.
*[additionalBranchPrefix]: Additional string value to be appended to `branchPrefix`.
