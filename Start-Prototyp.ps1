param([switch]$Build)
$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$nodePath = if ($nodeCommand) { $nodeCommand.Source } else { Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' }
if (-not (Test-Path -LiteralPath $nodePath)) { throw 'Node.js fehlt. Bitte Node.js 22.12 oder neuer installieren.' }
$astroPath = Join-Path $PSScriptRoot 'node_modules\astro\bin\astro.mjs'
if (-not (Test-Path -LiteralPath $astroPath)) { throw 'Abhängigkeiten fehlen. Zuerst pnpm install im Projektordner ausführen.' }
$env:ASTRO_TELEMETRY_DISABLED = '1'
if ($Build) {
    & $nodePath $astroPath build
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    & $nodePath (Join-Path $PSScriptRoot 'scripts\check-content.mjs')
    exit $LASTEXITCODE
}
Write-Host 'Lokaler Prototyp: http://127.0.0.1:4321/de/ (Beenden mit Strg+C)'
& $nodePath $astroPath dev --host 127.0.0.1 --port 4321
