# 실행 : .\batch.ps1

# 패키지 초기화
yarn init -y

# 기초 파일 생성
md public, src
new-item public/index.html, src/index.js

# .gitignore 파일 경로를 변수로 정의합니다.
$gitignorePath = ".\.gitignore"

# .gitignore 파일이 존재하는지 확인합니다.
if (-Not (Test-Path $gitignorePath)) {
    # 파일이 없는 경우 새로 생성하고, 필요한 내용을 추가합니다.
    "node_modules`n" | Out-File -FilePath $gitignorePath -Encoding UTF8
    "yarn.lock`n" | Add-Content -Path $gitignorePath -Encoding UTF8
    Write-Output ".gitignore file created and entries added."
} else {
    # 파일이 이미 있는 경우, node_modules가 존재하는지 확인하고 없으면 추가합니다.
    if (-Not (Get-Content $gitignorePath | Select-String -Pattern "^node_modules$")) {
        "node_modules`n" | Add-Content -Path $gitignorePath -Encoding UTF8
        Write-Output "node_modules entry added to .gitignore."
    } else {
        Write-Output "node_modules already exists in .gitignore."
    }

    # yarn.lock 항목도 동일하게 확인하고 없으면 추가합니다.
    if (-Not (Get-Content $gitignorePath | Select-String -Pattern "^yarn.lock$")) {
        "yarn.lock`n" | Add-Content -Path $gitignorePath -Encoding UTF8
        Write-Output "yarn.lock entry added to .gitignore."
    } else {
        Write-Output "yarn.lock already exists in .gitignore."
    }
}

# Git의 줄바꿈 설정 확인 및 조정
git config --global core.autocrlf true