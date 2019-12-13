# Deep-Learning-based-Chemical-Graphics-Analysis-Platform-FE
![deploy](https://github.com/everbrez/Deep-Learning-based-Chemical-Graphics-Analysis-Platform-FE/workflows/deploy/badge.svg)
Deep Learning-based Chemical Graphics Analysis Platform FrontEnd

# Git Hook - commitizen

if the commitizen doesn't work, try to modify `.git/hooks/prepare-commit-msg` with the following code:
```bash
exec < /dev/tty && node_modules/.bin/git-cz --hook || true
```

if git warn you with `it's not set as executable`, you can fix it with following command:
```bash
chmod +x .git/hooks/prepare-commit-msg
```