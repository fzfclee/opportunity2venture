@echo off
setlocal

cd /d "%~dp0"

echo.
echo Publishing O2V Framework site to GitHub...
echo Repository: https://github.com/fzfclee/opportunity2venture.git
echo.

git --version >nul 2>&1
if errorlevel 1 (
  echo Git is not installed or not available in PATH.
  pause
  exit /b 1
)

if not exist ".git" (
  git init -b main
) else (
  git branch -M main
)

git config --global --add safe.directory "%cd%"
git config user.name >nul 2>&1
if errorlevel 1 git config user.name "Li Zhi"

git config user.email >nul 2>&1
if errorlevel 1 git config user.email "fzfclee@users.noreply.github.com"

git remote remove origin >nul 2>&1
git remote add origin https://github.com/fzfclee/opportunity2venture.git

git add .

git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Initial O2V Framework publication site"
) else (
  echo No staged changes to commit.
)

git push -u origin main

echo.
echo Done. If GitHub asks you to sign in, complete the browser or credential prompt and run this file again if needed.
pause
