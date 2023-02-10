import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import common_en from './translations/en/Common.json'
import common_ua from './translations/ua/Common.json'
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                common: common_en
                // translation: {
                //     // // A 
                //     // Account: 'Account',
                //     // Address: 'Address',
                //     // AddPet: 'Add Pet',
                //     // AddPC: 'Add photo and some comments',
                    

                //     // // B
                //     // Back: 'Back',
                //     // Breed: 'Breed',
                //     // // C
                //     // Cancel: 'Cancel',
                //     // Comments: 'Comments',

                //     // // D
                //     // Done: 'Done',
                //     // DateOfBirth: 'Date of birth',
                //     // // E
                //     // EditPet: 'Edit Pet',
                //     // Email: 'Email',

                //     // // F
                //     // Find: 'Find Pet',
                //     // friends: 'Our friends',
                //     // friendsError: 'We have not any friends on this topic',

                //     // // G
                    
                //     // // H
                //     // homeTitle: 'Take good care of your small pets',
                //     // // I
                    
                //     // // J
                    
                //     // // K
                    
                //     // // L
                //     // Login: 'Login',
                //     // LogOut: 'Log Out',
                //     // loginFooter: "Don't have an account? <1>Register</1>",
                //     // // M
                    
                //     // // N
                //     // Next: 'Next',
                //     // News: 'News',
                    
                //     // // O
                    
                //     // // P
                //     // Phone: 'Phone',
                //     // PetName: 'Name pet',
                //     // // Q
                    
                //     // // R
                //     // Registration: 'Registration',
                //     // read: 'Read more',
                    
                //     // // S
                //     // SearchNews: 'Search news',

                //     // // T
                //     // Time: 'Time',
                //     // TypePetName: 'Type pet name',
                //     // TypeBreed: 'Type Breed',
                //     // TypeDoB: 'Type date of birth DD.MM.YYYY',
                //     // TypeComment: 'TypeComment',

                //     // // U
                    
                //     // // V
                    
                //     // // W
                    
                //     // // X
                    
                //     // // Y
                    
                //     // // Z

                // }
            },
            ua: {
                common: common_ua
                // translation: {
                //     // // A 
                //     // Account: 'Акаунт',
                //     // Address: 'Адреса',
                //     // AddPet: 'Додайте улюбленця',
                //     // AddPC: 'Додайте фото та коментарі',

                //     // // B
                //     // Back: 'Повернутись',
                //     // Breed: 'Порода',
                //     // // C
                //     // Cancel: 'Скасувати',
                //     // Comments: 'Коментарі',
                //     // // D
                //     // Done: 'Готово',
                //     // DateOfBirth: 'Дата народження',

                //     // // E
                //     // EditPet: 'Додати улюбленця',
                //     // Email: 'Електронна адреса',
                    
                //     // // F
                //     // Find: 'Знайти улюбленця',
                //     // friendsError: 'Нажаль, наразі друзів нема',
                //     // friends: 'Наші друзі',

                //     // // G
                    
                //     // // H
                //     // homeTitle: 'Дбайте про своїх маленьких домашніх улюбленців',
                    
                //     // // I
                    
                //     // // J
                    
                //     // // K
                    
                //     // // L
                //     // Login: 'Вхід',
                //     // LogOut: 'Вихід',
                //     // loginFooter: 'Немає облікового запису? <1>Зареєструватися</1>',
                //     // // M
                    
                //     // // N
                //     // Next: 'Далі',
                //     // News: 'Новини',
                    
                //     // // O
                    
                //     // // P
                //     // Phone: 'Телефон',
                //     // petName: 'імʼя улюбленця',
                //     // PetName: 'Імʼя улюбленця',

                //     // // Q
                    
                //     // // R
                //     // Registration: 'Реєстрація',
                //     // read: 'Докладніше',

                //     // // S
                //     // SearchNews: 'Пошук новин',

                //     // // T
                //     // Time: 'Робочі години',
                //     // Type: 'Введіть', 
                //     // TypePetName: 'Введіть імʼя улюбленця',
                //     // TypeBreed: 'Введіть породу',
                //     // TypeDoB: 'Введіть дату народження DD.MM.YYYY',
                //     // TypeComment: 'Введіть коментар',
                //     // // U
                    
                //     // // V
                    
                //     // // W
                    
                //     // // X
                    
                //     // // Y
                    
                //     // // Z
                    
                // }

            }
        }
    })    
