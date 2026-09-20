# Run from any directory; requires Git, Node.js and authenticated GitHub CLI.
$ErrorActionPreference = 'Stop'
$travelRoot = Split-Path -Parent $PSScriptRoot
Push-Location -LiteralPath $travelRoot
try {
    node scripts/validate.mjs
    if ($LASTEXITCODE -ne 0) { throw 'Validation failed.' }
    $travelChanges = git status --porcelain
    if ($travelChanges) { throw 'Commit reviewed changes before publishing. Working tree is not clean.' }
    $travelOrigin = git remote get-url origin
    if ($travelOrigin -notin @('https://github.com/wangliumeiagent-creator/madagascar-travel-journal.git', 'https://github.com/wangliumeiagent-creator/madagascar-travel-journal')) { throw 'Unexpected origin. Inspect before publishing.' }
    git -c 'credential.helper=!gh auth git-credential' push origin HEAD:main
    if ($LASTEXITCODE -ne 0) { throw 'Source push failed.' }
    git -c 'credential.helper=!gh auth git-credential' subtree push --prefix dist origin gh-pages
    if ($LASTEXITCODE -ne 0) { throw 'Pages push failed. Do not force-push; inspect remote history.' }
    Write-Output 'Push complete. Verify Pages build: gh api repos/wangliumeiagent-creator/madagascar-travel-journal/pages/builds/latest'
} finally { Pop-Location }
