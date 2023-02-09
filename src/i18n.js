import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    read: 'Read more',
                    Account: 'Account',
                    News: 'News',
                    Find: 'Find Pet',
                    friends: 'Our friends',
                    homeTitle: 'Take good care of your small pets',
                    Login: 'Login',
                    Registration: 'Registration',
                    SearchNews: 'Search news',
                    friendsError: 'We have not any friends on this topic',
                    Time: 'Time',
                    Address: 'Address',
                    Email: 'Email',
                    Phone: 'Phone',

                }
            },
            ua: {
                translation: {
                    read: 'Докладніше',
                    Account: 'Акаунт',
                    News: 'Новини',
                    Find: 'Знайти улюбленця',
                    friends: 'Наші друзі',
                    homeTitle: 'Дбайте про своїх маленьких домашніх улюбленців',
                    Login: 'Вхід',
                    Registration: 'Реєстрація',
                    SearchNews: 'Пошук новин',
                    friendsError: 'Нажаль, наразі друзів нема',
                    Time: 'Робочі години',
                    Address: 'Адреса',
                    Email: 'Електронна адреса',
                    Phone: 'Телефон',

                }

            }
        }
})