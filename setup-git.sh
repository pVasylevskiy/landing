#!/bin/bash

echo "Настройка git репозитория для Pavel.Dev Landing..."

# Проверяем наличие git
if ! command -v git &> /dev/null; then
    echo "Git не найден. Попробуем использовать полный путь..."
    GIT_CMD="/usr/bin/git"
else
    GIT_CMD="git"
fi

# Инициализируем git репозиторий
echo "Инициализация git репозитория..."
$GIT_CMD init

# Добавляем удаленный репозиторий
echo "Добавление удаленного репозитория..."
$GIT_CMD remote add origin https://github.com/pVasylevskiy/landing.git

# Добавляем все файлы
echo "Добавление файлов в git..."
$GIT_CMD add .

# Создаем первый коммит
echo "Создание коммита..."
$GIT_CMD commit -m "feat: landing Pavel.Dev (dark mode, clean code, a11y, animations)"

echo "Git репозиторий настроен!"
echo "Для пуша выполните: $GIT_CMD push -u origin main"
echo ""
echo "Если возникнут проблемы, попробуйте:"
echo "1. Установить Command Line Tools: xcode-select --install"
echo "2. Или использовать GitHub Desktop"
