$source = "C:\Users\lucas\.gemini\antigravity\brain\b1a1d0c7-b32f-4ca8-b945-9f6eb7631ad5"
$dest = "c:\Users\lucas\OneDrive\Desktop\Site Institucional Colo e Calor\public\images"

# Get the latest files for each type
$hero = Get-ChildItem "$source\hero_mother_baby_*.png" | Sort-Object CreationTime -Descending | Select-Object -First 1
$consultant = Get-ChildItem "$source\consultant_portrait_*.png" | Sort-Object CreationTime -Descending | Select-Object -First 1
$method = Get-ChildItem "$source\method_illustration_*.png" | Sort-Object CreationTime -Descending | Select-Object -First 1

if ($hero) { Copy-Item $hero.FullName "$dest\hero.png" -Force; Write-Host "Copied hero.png" }
if ($consultant) { Copy-Item $consultant.FullName "$dest\consultant.png" -Force; Write-Host "Copied consultant.png" }
if ($method) { Copy-Item $method.FullName "$dest\method.png" -Force; Write-Host "Copied method.png" }
