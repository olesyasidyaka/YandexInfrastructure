# YandexInfrastructure homework

[![Build Status](https://travis-ci.org/olesyasidyaka/YandexInfrastructure.svg?branch=master)](https://travis-ci.org/olesyasidyaka/YandexInfrastructure)
[![bitHound Overall Score](https://www.bithound.io/github/olesyasidyaka/YandexInfrastructure/badges/score.svg)](https://www.bithound.io/github/olesyasidyaka/YandexInfrastructure)

Пример проекта с настроенной инфраструктурой. 

Проект доступен по следующему тестовому URL: https://tranquil-mountain-18485.herokuapp.com/

UptimeRobot:
![image](https://cloud.githubusercontent.com/assets/3005611/17571139/a208a75a-5f57-11e6-984f-639c71fe1f84.png)

В npm test запускается eslint и тесты mocha, которые лежат в test/test.js

Приложение пишет логи
1. приложения - весь вывод в консоль, запросы на сервер
2. системные - изменение состояния приложения, запуск/остановка/краш процессов, переход в спящий режим и выход из него
3. API - release, deploy.
