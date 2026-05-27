@echo off
cd /d "%~dp0"
if exist .git\index.lock del .git\index.lock
git add affiliate.html netlify\functions\generate-script.js netlify.toml
git commit -m "Affiliate page full rebuild: hero, angle cards, 4Q script tool, free affiliates, system prompt, mobile, animations"
git push origin main
pause
