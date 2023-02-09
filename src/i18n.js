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
                    // A 
                    Account: 'Account',
                    Address: 'Address',

                    // B
                    Back: 'Back',
                    // C
                    Cancel: 'Cancel',
                    
                    // D
                    Done: 'Done',
                    // E
                    Email: 'Email',

                    // F
                    Find: 'Find Pet',
                    friends: 'Our friends',
                    friendsError: 'We have not any friends on this topic',

                    // G
                    
                    // H
                    homeTitle: 'Take good care of your small pets',
                    // I
                    
                    // J
                    
                    // K
                    
                    // L
                    Login: 'Login',
                    LogOut: 'Log Out',
                    // M
                    
                    // N
                    Next: 'Next',
                    News: 'News',
                    
                    // O
                    
                    // P
                    Phone: 'Phone',

                    // Q
                    
                    // R
                    Registration: 'Registration',
                    read: 'Read more',
                    
                    // S
                    SearchNews: 'Search news',

                    // T
                    Time: 'Time',

                    // U
                    
                    // V
                    
                    // W
                    
                    // X
                    
                    // Y
                    
                    // Z

                }
            },
            ua: {
                translation: {
                    // A 
                    Address: 'Адреса',
                    Account: 'Акаунт',

                    // B
                    Back: 'Повернутись',
                    // C
                    Cancel: 'Скасувати',
                    
                    // D
                    Done: 'Готово',
                    // E
                    Email: 'Електронна адреса',
                    
                    // F
                    Find: 'Знайти улюбленця',
                    friendsError: 'Нажаль, наразі друзів нема',
                    friends: 'Наші друзі',

                    // G
                    
                    // H
                    homeTitle: 'Дбайте про своїх маленьких домашніх улюбленців',
                    
                    // I
                    
                    // J
                    
                    // K
                    
                    // L
                    Login: 'Вхід',
                    LogOut: 'Вихід',
                    // M
                    
                    // N
                    Next: 'Далі',
                    News: 'Новини',
                    
                    // O
                    
                    // P
                    Phone: 'Телефон',
                    
                    // Q
                    
                    // R
                    Registration: 'Реєстрація',
                    read: 'Докладніше',

                    // S
                    SearchNews: 'Пошук новин',

                    // T
                    Time: 'Робочі години',
                    
                    // U
                    
                    // V
                    
                    // W
                    
                    // X
                    
                    // Y
                    
                    // Z
                    
                    
                    
                    

                    
                    
                }

            }
        }
})