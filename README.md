# MegaTrade.GG — Feature Prototype

Цей репозиторій містить односторінковий прототип нових фіч MegaTrade.GG, реалізований на React і Bootstrap. Код збирається через [Vite](https://vitejs.dev/), що дозволяє швидко запускати локальний дев-сервер та формувати production-бандл у папці `dist`.

## Швидкий старт

1. Встановіть залежності:
   ```bash
   npm install
   ```
2. Запустіть дев-сервер Vite:
   ```bash
   npm run dev
   ```
3. Відкрийте у браузері адресу, яку виведе Vite (типово `http://localhost:5173`). У прототипі використовується `HashRouter`, тож маршрути мають вигляд `/#/auction`, `/#/quests` тощо.

## Production-збірка

- Побудуйте оптимізований бандл:
  ```bash
  npm run build
  ```
  Артефакти потраплять до каталогу `dist`.
- Перевірте зібрану версію локально:
  ```bash
  npm run preview
  ```

## Усунення неполадок

- Якщо дев-сервер не стартує, переконайтеся, що порт `5173` вільний, або запустіть `npm run dev -- --host --port=<інший_порт>`.
- Після зміни залежностей виконайте `rm -rf node_modules package-lock.json && npm install`, щоб перевстановити пакети.
- Для додаткової діагностики відкрийте консоль розробника в браузері та перевірте розділ **Network**.

## Структура

```
index.html         # HTML-шаблон, який використовує Vite
public/            # Додаткові статичні активи (копіюються як є)
src/
  main.jsx         # Ініціалізація React + HashRouter
  App.jsx          # Маршрутизація між модулями
  styles.css       # Глобальні стилі у стилістиці MegaTrade.GG
  data/mockData.js # Фіктивні дані для демо-сценаріїв
  components/
    TopNav.jsx
  modules/
    Dashboard.jsx
    AuctionModule.jsx
    QuestModule.jsx
    ProfileCustomizationModule.jsx
    ClanModule.jsx
```

Кожен модуль віддзеркалює відповідний сценарій із дизайну MegaTrade.GG та адаптований для мобільних екранів (Bootstrap grid + кастомні медіа-запити).

## Ліцензія

MIT
