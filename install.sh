#!/bin/bash

echo "Установка зависимостей для Pavel.Dev Landing..."

# Проверяем наличие Node.js
if ! command -v node &> /dev/null; then
    echo "Node.js не найден. Устанавливаем..."
    
    # Попытка установить через Homebrew
    if command -v brew &> /dev/null; then
        brew install node
    else
        echo "Homebrew не найден. Устанавливаем Homebrew..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        brew install node
    fi
fi

# Проверяем версию Node.js
echo "Версия Node.js: $(node --version)"
echo "Версия npm: $(npm --version)"

# Устанавливаем зависимости
echo "Устанавливаем зависимости..."
npm install

echo "Зависимости установлены!"
echo "Запускаем dev сервер..."
npm run dev

