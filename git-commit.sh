#!/bin/bash

echo "Инициализация git репозитория..."
git init

echo "Добавление всех файлов..."
git add .

echo "Создание коммита..."
git commit -m "feat: landing Pavel.Dev (dark mode, clean code)"

echo "Git репозиторий готов!"
echo "Для пуша в удаленный репозиторий выполните:"
echo "git remote add origin <URL_ВАШЕГО_РЕПОЗИТОРИЯ>"
echo "git push -u origin main"
