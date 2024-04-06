Книга контактів

- Створіть репозиторій з назвою goit-react-hw-08
- При здачі домашньої роботи надайте два посилання: одне на вихідні файли та інше на робочу сторінку завдання на Vercel.
- Проект повинен бути створений за допомогою Vite.
- Під час запуску коду завдання в консолі не повинно бути помилок або попереджень.
- Для кожного компонента у папці src/components є окрема папка, яка містить JSX файл самого React компонента та файл його стилів. Назва папки, файла компонента (з розширенням .jsx) та файла стилів (перед .module.css) однакова і відповідає назвам, вказаним у завданнях (якщо вони були).
- Для кожної сторінки у папці src/pages є окрема папка, яка містить JSX файл самого React компонента та файл його стилів. Назва папки, файла компонента (з розширенням .jsx) та файла стилів (перед .module.css) однакова і відповідає назвам, вказаним у завданнях (якщо вони були).
- Для експорту компонентів використовується експорт за замовчуванням (export default).
  JS-код має бути чистим і зрозумілим, використовуйте Prettier.
- Використана бібліотека Redux Toolkit
- Стилізація повинна бути виконана за допомогою CSS-модулів.

Додайте у застосунок «Книга контактів» із домашнього завдання попереднього модуля можливість реєстрації та логіна, а також роботу з приватною колекцією контактів. Використовуйте застосунок "Планувальник завдань" з матеріалів, як приклад.
https://goitlmsstorage.b-cdn.net/523237bf-0d31-40cf-8ade-260995bbdabb2024-01-21%2018-23-38.mp4

Бекенд
Для цього завдання є готовий бекенд з документацією (https://connections-api.herokuapp.com/docs/). Використовуй його замість твого бекенда створеного через сервіс mockapi.io.

https://connections-api.herokuapp.com

Він підтримує всі необхідні операції з колекцією контактів, а також реєстрацію, логін та оновлення користувача за допомогою JWT.

Структура папок Redux
У Redux буде три слайси. Вже реалізовані вами contacts та filters, а також новий — auth, який буде відповідати за стан користувача. Під кожен слайс створіть окрему папку і файли під такі сутності як операції, селектори та логіку слайсу.
У вас має вийти наступна структура:

- redux
- - auth
- - - operations.js
- - - selectors.js
- - - slice.js
- - contacts
- - - operations.js
- - - selectors.js
- - - selectors.js
- - filters
- - - selectors.js
- - - slice.js
- - store.js

Перенесіть код з файлів contactsSlice.js, contactsOps.js, filtersSlice.js у нові відповідні файли.

Слайс auth
Додайте у Redux новий стан auth наступної структури:
{
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
}

Операції слайсу auth
Додайте у файл redux/auth/operations.js операції, оголошені за допомогою createAsyncThunk, для роботи з користувачем:

- register - для реєстрації нового користувача. Базовий тип екшену "auth/register". Використовується у компоненті RegistrationForm на сторінці реєстрації.
- login - для логіну існуючого користувача. Базовий тип екшену "auth/login". Використовується у компоненті LoginForm на сторінці логіну.
- logout - для виходу з додатка. Базовий тип екшену "auth/logout". Використовується у компоненті UserMenu у шапці додатку.
- refreshUser - оновлення користувача за токеном. Базовий тип екшену "auth/refresh". Використовується у компоненті App під час його монтування.

Токен авторизованого користувача потрібно зберігати в локальному сховищі за допомогою бібліотеки persist (https://github.com/rt2zz/redux-persist#readme).

Маршрутизація
Додайте маршрутизацію з бібліотекою React Router. Компоненти сторінок додайте у папку src/pages. Для обгортки компонентів публічних і приватних сторінок використовуйте компоненти PrivateRoute та RestrictedRoute.
У застосунку мають бути наступні маршрути:

- / - маршрут домашньої сторінки додатка, де можна розмістити інформацію про додаток чи його розробника. Рендерить компонент Home.
- /register - публічний маршрут для реєстрації нового користувача, на якому рендериться компонент сторінки Registration з формою RegistrationForm.
- /login - публічний маршрут для логіна існуючого користувача, на якому рендериться компонент сторінки Login з формою LoginForm.
- /contacts - приватний маршрут для роботи зі списком контактів користувача, на якому рендериться компонент сторінки Contacts.

Створіть компонент Layout, який буде рендерити компонент AppBar і огортати усі маршрути, щоб бути доступним на кожному із них.
Компонент AppBar має рендерити компонент навігації Navigation та AuthNav. Водночас авторизований користувач замість AuthNav має бачити UserMenu.
Обов'язково очищайте колекцію контактів у стані при логауті користувача.

Форми
Для форм входу (LoginForm) та реєстрації (RegistrationForm) краще використовувати бібліотеку Formik (https://formik.org/).

Додатково
Це фінальна версія застосунку, тому підходьте до завдання відповідально. Ось список ідей необов'язкових доповнень, які можуть бути в застосунку:

- При введенні у текстове поле пошуку контактів фільтрація виконується не лише за ім'ям, але й за номером телефону.
- При видаленні контакту необхідно підтверджувати операцію через модальне вікно.
- При успішних операціях додавання та видалення контакту користувачу відображається повідомлення за допомогою React Hot Toast (https://react-hot-toast.com/).
- Контакти можна редагувати, бекенд підтримує PATCH-запит для оновлення контакту.
- Для стилізації можна використовувати бібліотеку компонентів, наприклад Material UI (https://mui.com/material-ui/).


FeedBack

Завдання вирішено правильно (компонент Main file)
Правильне впровадження Provider для з'єднання Redux-сховища з React.
Належне використання PersistGate для обробки повторного завантаження стану Redux-сховища.
Ефективна інтеграція BrowserRouter для маршрутизації.

Завдання вирішено правильно (компонент Store file)
Структура authPersistConfig відповідає вимогам.
Метод configureStore належним чином налаштований з необхідними редюсерами.
Конфігурація проміжного програмного забезпечення включена для обробки перевірок серіалізації для дій redux-persist.

Завдання вирішено правильно (компонент Contacts operations file)
Впровадження createAsyncThunk для асинхронних дій, що демонструє глибоке розуміння можливостей Redux Toolkit.
Чітке розділення відповідальностей шляхом визначення окремих дій для різних операцій з контактами.
Ефективна обробка помилок в асинхронних діях для управління та пом'якшення потенційних помилок при викликах API.

Завдання вирішено правильно (компонент Contacts slice file)
Правильне використання createSlice з Redux Toolkit для управління станом.
Належне вирішення асинхронних дій за допомогою extraReducers.
Ефективне управління станом із чітким розділенням обов'язків (завантаження, помилки, стан редагування).
Продумана реалізація очищення контактів під час виходу користувача з системи для підвищення зручності користувача та безпеки.

Завдання вирішено правильно (компонент Contacts selectors file)
Правильне застосування мемоїзації за допомогою createSelector з Redux Toolkit.
Відповідні вхідні дані (selectContacts, selectFilter) надані для selectFilteredContacts.
Уважне поводження з нецифровими символами в номерах контактів під час фільтрування.
Реалізація пошуку без врахування регістру для кращого користувацького досвіду.

Завдання вирішено правильно (компонент Filters slice file)
Реалізація createSlice для керування станом фільтрів зроблена правильно, що демонструє ваше розуміння Redux Toolkit.
Редуктор changeFilter належним чином налаштований для управління змінами стану, що демонструє вашу здатність працювати з редукторами Redux.

Завдання вирішено правильно (компонент Filters selectors file)
Селектор правильно експортовано, що є істотним для його доступності для використання в усьому додатку.

Завдання вирішено правильно (компонент Auth operations file)
Правильне впровадження createAsyncThunk для всіх операцій.
Належне використання axios для HTTP-запитів, включаючи налаштування базової URL.
Успішне створення та використання допоміжних функцій setAuthHeader та clearAuthHeader.
Обдумане додавання умови у операцію refreshUser для перевірки наявності токену.

Завдання вирішено правильно (компонент Auth slice file)
Правильно структуровано початковий стан відповідно до вимог.
Впроваджено extraReducers для ефективної обробки асинхронних дій.
Коректно встановлено назву сегменту (slice) як 'auth'.

Завдання вирішено правильно (компонент Auth selectors file)
Реалізація селектору selectIsLoggedIn є правильною і відповідає кращим практикам Redux.
Точне визначення та експорт селектору selectUser.
Належна реалізація та експорт селектору selectIsRefreshing.

Завдання вирішено правильно (компонент Login page)
Правильне впровадження та імпорт компоненту LoginForm.
Динамічне встановлення заголовку сторінки з використанням DocumentTitle.
Належне використання Link для навігації односторінкової аплікації (SPA).
Чиста та логічна організація імпортів.

Завдання вирішено правильно (компонент Registration page)
Правильний імпорт та використання компонента RegistrationForm.
Динамічне встановлення заголовку сторінки за допомогою DocumentTitle.
Включення навігаційного посилання для користувачів, які вже мають акаунт.
Хороша структура коду та його читабельність.

Завдання вирішено правильно (компонент Contacts page)
Правильне використання хуків useDispatch та useEffect для отримання контактів після монтування компонента.
Додання компонентів ContactForm, ContactList і SearchBox відповідно до вимог.
Ефективне управління станом за допомогою useSelector для обробки станів завантаження та помилок.
Доповнення компонентами Loader і ErrorMessage для поліпшення взаємодії з користувачем шляхом індикації станів завантаження та помилок.

Завдання вирішено правильно (компонент LoginForm component)
Правильне використання useDispatch для взаємодії з Redux store.
Ефективна обробка подання форми за допомогою handleSubmit, що відправляє дію logIn.
Інтеграція Formik для оптимізованого управління формами.
Реалізація Yup для лаконічної та потужної валідації схем.

Завдання вирішено правильно (компонент RegistrationForm component)
Використання Formik для керування формами є ефективно виконаним, забезпечуючи структурований і ефективний спосіб керування станом форми та її валідацією.
Інтеграція Yup для валідації схеми гарантує, що дані форми відповідають визначеним правилам, підвищуючи надійність форми та досвід користувача.
Правильне використання useDispatch з react-redux, що дозволяє відправляти дії у Redux-сховище.
Функція handleSubmit ефективно використовує метод відправки для виклику операції register, відповідно до вимог завдання.
Використання react-hot-toast для зворотного зв'язку процесу реєстрації підвищує досвід користувача шляхом надання негайної та ясної відповіді на результат дії.

Завдання вирішено правильно (компонент UserMenu component)
Правильне використання useSelector для доступу до стану Redux-сховища.
Належне застосування useDispatch для ініціювання дій у компоненті.
Успішне перенаправлення імені користувача на основі стану Redux-сховища.
Ефективне використання кнопки виходу для ініціювання операції logOut.

Завдання вирішено правильно (компонент AuthNav component)
Успішний імпорт та використання NavLink з react-router-dom.
Правильна реалізація навігаційних посилань до /register та /login.
Ефективне використання clsx для умовного застосування класів.
Модульний підхід до стилізації з використанням CSS-модулів.

Завдання вирішено правильно (компонент Navigation component)
Правильне використання NavLink для навігації всередині додатку.
Належна реалізація useSelector для доступу до стану Redux.
Точне умовне рендеренг засноване на стані isLoggedIn.
Розширена техніка стилізації за допомогою clsx для динамічних імен класів.

Завдання вирішено правильно (компонент AppBar component)
Належне використання хука useSelector Redux для доступу до стану додатку.
Реалізація розділення коду за допомогою Suspense та lazy для оптимізації продуктивності.
Чиста та зрозуміла логіка умовного рендерингу.
Покращення досвіду користувачів за допомогою завантажувача під час завантаження компоненту.

Завдання вирішено правильно (компонент PrivateRoute component)
Правильне використання useSelector для доступу до стану Redux.
Належне імпортування та потенційне використання компоненту Navigate з react-router-dom.додатку.

Завдання вирішено правильно (компонент RestrictedRoute component)
Правильне використання Navigate для перенаправлення залежно від статусу аутентифікації.
Ефективна інтеграція з Redux за допомогою useSelector для доступу до isLoggedIn.
Лаконічна та зрозуміла умовна логіка рендерингу для вибору між показом Navigate або наданого Component.
Належне оброблення пропсів за замовчуванням із redirectTo = '/'.

Завдання вирішено правильно (компонент Layout component)
Правильний імпорт та використання компонента AppBar.
Успішне використання пропу children для динамічного відображення контенту.

Завдання вирішено правильно (компонент App component)
Метод useDispatch() правильно використовується для відправлення дій.
Метод useSelector() правильно використовується для доступу до стану isRefreshing у Redux store.
useEffect hook коректно реалізований з dispatch як залежністю, що забезпечує виклик refreshUser при монтажі компонента.
Умовне рендерінг на основі стану isRefreshing реалізований, відображає лоадер, коли стан true.
Компонент Routes правильно розміщений всередині компонента Layout.
