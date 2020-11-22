# Котопёс - система помощи приютам

Проект сделан в рамках хакатона для помощи Teddy Food, целью проекта является оптимизация ценообразования для сбора пожертвований, чтобы можно было накормить больше кошечек и собачек.

Проект сделан на Django + restframework + фронт на react.js.

Проект временно размещен по адресу http://kotopes.lukojo.com/

## Загрузка или импорт данных

Наполнять данными можно:
1. Через админку http://kotopes.lukojo.com/admin
2. Через апи http://kotopes.lukojo.com/api/v1/payments
3. Прямо на сервере положить csv файл и перейдя по специальной ссылке в апи /api/v1/import_payments_data он распарсится

## Оптимизация и вызов рассчетов

Проект умеет считать средние цены по загруженным данным по всем приютам http://kotopes.lukojo.com/api/v1/history_data
Умеет делать оптимизацию на основе данных о количестве продаж и минимальной стоимости котодня http://kotopes.lukojo.com/api/v1/calculate_newdata?n_sales=100&min_price=100 URL принимает как GET запросы, так и POST.
