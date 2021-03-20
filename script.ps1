Write-Output '# LANGUAGE TO CONVERT TO'
Write-Output 'Available : french, english, german, polish, russian, spanish, simp_chinese, braz_por'
Write-Output 'Help on https://github.com/khoeos'
$language = Read-Host -Prompt 'Language '
$language = 'l_' + $language

$dir = Split-Path $script:MyInvocation.MyCommand.Path

# Create new dir for the new files
New-Item -Name $language -ItemType "directory" -Force

# Get all the config file based on english file and get them in a loop
Get-ChildItem $dir -Filter *l_english.yml -Recurse |
    Foreach-Object {

        # Extract name and replace to targetted language
        $name = $_.FullName| %{$_ -replace "l_english",$language}
        $name = Split-Path $name -leaf

        # Create path to the new folder
        $path = './' + $language + '/' + $name

        # Replace English localisation keyword to targetted language
        $content = get-content $_.FullName | %{$_ -replace "l_english",$language}

        # Create new files, and force writing if file already exist
        New-Item $path -Force
        Set-Content $path $content -Encoding unicode
    }
