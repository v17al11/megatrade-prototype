# MegaTrade.GG — Feature Prototype

Этот репозиторий содержит одностраничный прототип новых фич MegaTrade.GG, реализованный на React и Bootstrap. Код собирается с помощью [Vite](https://vitejs.dev/), что позволяет быстро запускать локальный dev-сервер и формировать production-бандл в папке `dist`.

## Быстрый старт

1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите dev-сервер Vite:
   ```bash
   npm run dev
   ```
3. Откройте в браузере адрес, который выведет Vite (по умолчанию `http://localhost:5173`). В прототипе используется `HashRouter`, поэтому маршруты имеют вид `/#/auction`, `/#/quests` и т.д.

## Production-сборка

- Соберите оптимизированный бандл:
  ```bash
  npm run build
  ```
  Артефакты окажутся в каталоге `dist`.
- Проверьте собранную версию локально:
  ```bash
  npm run preview
  ```

## Устранение неполадок

- Если dev-сервер не стартует, убедитесь, что порт `5173` свободен, либо запустите `npm run dev -- --host --port=<другой_порт>`.
- После изменения зависимостей выполните `rm -rf node_modules package-lock.json && npm install`, чтобы переустановить пакеты.
- Для дополнительной диагностики откройте консоль разработчика в браузере и проверьте раздел **Network**.

## Структура

```
index.html         # HTML-шаблон, который использует Vite
public/            # Дополнительные статические ассеты (копируются как есть)
src/
  main.jsx         # Инициализация React + HashRouter
  App.jsx          # Маршрутизация между модулями
  styles.css       # Глобальные стили в стилистике MegaTrade.GG
  data/mockData.js # Фиктивные данные для демо-сценариев
  components/
    TopNav.jsx
  modules/
    Dashboard.jsx
    AuctionModule.jsx
    QuestModule.jsx
    ProfileCustomizationModule.jsx
    ClanModule.jsx
```

Каждый модуль отражает соответствующий сценарий из дизайна MegaTrade.GG и адаптирован под мобильные экраны (Bootstrap grid + кастомные медиа-запросы).

## Лицензия

MIT
