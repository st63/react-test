# Тестовое задание для вакансии Frontend Developer (React.js)

Реализовать WEB-приложение, используя REACT/REDUX/REACT-ROUTER, которое имеет следующие страницы:
•  / - главная страница, на ней отображается список всех добавленных записей (каждый элемент списка – ссылка на соответствующую запись) + ссылка на страницу добавления записи. Название: «Главная»
•  /add-post - страница добавления записи. Название: «Добавить запись»
•  /post/:id - страница просмотра записи. Название – заголовок записи.
Каждый элемент списка на главное странице содержит, заголовок записи, дата записи, в удобном для понимания формате, имя автора записи в формате: автор: имя_автора
Страница добавления записи содержит форму, в которую вводятся данные записи. В форме три поля:
1.  Текстовое поле – заголовок записи
2.  Поле WYSIWYG – контент записи (должна быть возможность вставлять в текст картинки)
3.  Текстовое поле – имя автора
Все поля являются обязательными. Данные записи можно сохранять в localstorage, бд делать не обязательно
Страница просмотра записи содержит заголовок записи внутри тега h1, тег title тоже должен содержать заголовок записи; контент записи; имя автора; дата записи; ссылка на главную страницу.
Общие требования к приложению:
•  Тег title должен меняться в зависимости от названия страницы
•  Можно использовать любую CSS-библиотеку для стилизации элементов
•  Код оформить на GitHub 
•  Возможность вставки небольших изображение в контент записи

Что будет плюсом:
•  Использование backend-фреймворка для сохранения записей по ajax
•  Валидация вводимых пользователем данных;
1.  Проверка на уникальность заголовков записи
2.  Аватозаполнение имени автора из списка уже известных авторов
•  Использование backend-фреймворка для регистрации/авторизации пользователя, в этом случае вводить имя автора не нужно

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
