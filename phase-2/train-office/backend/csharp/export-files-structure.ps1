# Set the path to your project directory relative to the script's location
$projectPath = "$PSScriptRoot"

# Set the path for the output file relative to the script's location
$outputFile = "$PSScriptRoot\project_structure.txt"

# Define a regular expression pattern to match excluded folders
$excludePattern = 'bin|obj|logs|\.vs'

# Get the project structure, excluding specified folders at any depth
Get-ChildItem -Recurse -Path $projectPath -Force |
    Where-Object {
        # Exclude any item if its full path contains 'bin', 'obj', or '.vs'
        $_.FullName -notmatch $excludePattern
    } |
    Select-Object FullName, Name, Length, LastWriteTime, Attributes |
    Format-Table -AutoSize |
    Out-String -Width 4096 |
    Out-File -FilePath $outputFile

Write-Host "Project structure has been exported to $outputFile"