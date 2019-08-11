# Общие фронтовые модули Abak-press

Модули могут использоваться между всеми проектами и гемами (единственное условие - подключенный вебпак). В модлях нет готовых сборок, все они собираются проектным вебпаком.

- [Использование](#Использование)
- [Разработак](#Разработак)
- [Публикация](#Публикация)
- [Список модулей](modules-list/README.md)

## Использование

Устанавливаем npm пакет:
```
dip yarn add apress-utils-front //в проекте
npm i apress-utils-front //в геме
```

**Подключить модуль можно двумя способами:**
1. В существующий скрипт импортировать нужный модуль и использовать классы/функции/объекты предоставляемые модулем:
```
import { demoModule } from 'apress-utils-front/modules/demo-module';
demoModule();
```
2. Подключить модуль в пакедж как же как обычные проектные модули:
*применимо для модулей вида app.modules.moduleName = (() => {})()*
```
import 'apress-utils-front/modules/demo-module'
```

## Разработак

Клонируем репозиторий в папку gems

#### В проекте
1. В файле `package.local.json` меняем версию `apress-utils-front` на `file:/localgems/apress-utils-front`
```
"apress-utils-front": "file:/localgems/apress-utils-front"
```
2. В корне проекта выполняем команду
```
dip package.json:compile && dip yarn install && dip yarn run linklocal
```

#### В геме

*Должен быть установлен пакет `linklocal` и в файле `package.json` в секции `scripts` прописано `"linklocal": "linklocal"`*

1. В файле `package.json` меняем версию `apress-utils-front` на `file:../../apress-utils-front`
```
"apress-utils-front": "file:../../apress-utils-front"
```
2. В папке frontend запускаем
```
npm i && npm run linklocal
```



***Важно! При создании нового модуля нужно добавить файл `README.md` с описанием модуля и примерами использования.Так же нужно добавить ссылку на модуль в `modules-list/README.md`***

## Публикация

Подключаемся к приватному registry ```sudo npm adduser --registry https://registry.railsc.ru```

1. Вносим изменения
2. Обновляем версию в ```package.json``` (используем [эти правила](https://github.com/abak-press/apress-ui#%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5))
3. Отправляем ПР, ждем мержа
4. Когда все смержено публикуем новую версию пакета ```sudo npm publish```
5. Обновляем версию модуля в проекте/геме
6. Запускаем:
```
dip yarn add apress-utils-front //в проекте
npm i apress-utils-front //в геме
```
