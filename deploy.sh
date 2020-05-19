
set -e



npm run build




cd dist


git init

git add -A

git commit -m 'deploy'

https://github.com/HolyKillin/hivue


git push -f git@github.com:HolyKillin/hivue.git master:gh-pages

