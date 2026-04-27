Get-ChildItem -Path "src/app" -Recurse -Filter "*.tsx" | ForEach-Object {
  $lines = Get-Content $_.FullName
  $newLines = $lines |
    ForEach-Object { $_ -replace "text-6xl md:text-8xl lg:text-9xl text-white leading-\[0\.9\] tracking-tight", "text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight" } |
    ForEach-Object { $_ -replace "text-5xl md:text-7xl lg:text-8xl text-white leading-\[0\.9\] tracking-tight", "text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight" }
  Set-Content -Path $_.FullName -Value $newLines
  Write-Host "Done: $($_.Name)"
}
