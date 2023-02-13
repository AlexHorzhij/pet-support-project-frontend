import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import common_en from './translations/en/Common.json'
import common_ua from './translations/ua/Common.json'
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: false,
        fallbackLng: 'en',
        resources: {
            en: {
                common: common_en
            },
            ua: {
                common: common_ua
            }
        }
    })    
