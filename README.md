# Задание

## Деплой: https://habr-text-2.vercel.app/

## Как развернуть локально:

```
- git clone git@github.com:Tabarzin/habr-text-2.git
- cd habr-text-2
- npm install
- npm run dev

```

### Создайте одностраничное приложение, которое позволяет:

- Загружать список отзывов для одной компании через redux-saga.
- Фильтровать отзывы:
  - По платформе (Google, Яндекс, 2ГИС.
  - По диапазону оценок (рейтинг от и до).
- Сортировать отзывы:
  - По времени (новые/старые).
  - По оценке (по возрастанию/убыванию).
- Отображать отфильтрованный и отсортированный список в табличной форме.

#### Функциональность

Отображение таблицы отзывов с колонками:

- Платформа.
- Рейтинг.
- Время добавления.
- Текст отзыва.
- Встроенные фильтры и сортировки, которые применяются без перезагрузки страницы.
