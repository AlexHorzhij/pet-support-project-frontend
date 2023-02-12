import { Button } from '@mui/material';
import { LangWrapper, LangBtn } from './Multilanguage.styled';
import { useTranslation } from 'react-i18next';
// import Switch from '@mui/material/Switch';
// import { useState } from 'react';
// import { useSwitch } from '@mui/base/SwitchUnstyled';

// function BasicSwitch(props) {
//   const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);
//   const { i18n } = useTranslation();
//   const lngs = {
//     en: {
//       nativeName: 'English',
//       shortName: 'EN',
//     },
//     ua: {
//       nativeName: 'Ukrainian',
//       shortName: 'UA',
//     },
//   };

//   const stateClasses = {
//     'Switch-checked': checked,
//     'Switch-disabled': disabled,
//     'Switch-focusVisible': focusVisible,
//   };

//   return (
//     <BasicSwitchRoot className={clsx(stateClasses)}>
//       <BasicSwitchThumb className={clsx(stateClasses)} />
//       <BasicSwitchInput {...getInputProps()} aria-label="Demo switch" />
//     </BasicSwitchRoot>
//   );
// }

export default function MultiLanguage() {
  const { i18n } = useTranslation();
  // const [isLanguage, setisLanguage] = useState();
  // const [checked, setChecked] = useState(true);

  const lngs = {
    en: {
      nativeName: 'English',
      shortName: 'EN',
    },
    ua: {
      nativeName: 'Ukrainian',
      shortName: 'UA',
    },
  };
  // const changeLang = () => {
  //   setisLanguage(Object.keys(lngs).map(lng => i18n.changeLanguage(lng)));

  // const result = Object.keys(lngs).map(lng => i18n.changeLanguage(lng));
  // return result;
  // if (result === result.ua) {
  //   setisLanguage('ua');
  // }
  // setisLanguage('en');
  // };
  // const toggle = () => setisLanguage(isLanguage => !isLanguage);
  // const handleChange = event => {
  //   setChecked(event.target.checked);
  //   return Object.keys(lngs).map(lng => {
  //     i18n.changeLanguage(lng);
  //   });

  // return languages;
  // if (languages.ua) {
  //   setChecked(event.target.checked);
  // }
  // if (languages.en) {
  //   setChecked(event.target.checked);
  // }

  // return ;
  // };
  return (
    <LangWrapper>
      {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="ua"
      /> */}

      {/* <Switch checked={checked} onChange={handleChange} /> */}
      {/* <Switch defaultChecked onChange={handleChange} /> */}
      {/* <Switch onChange={changeLang} defaultChecked /> */}

      {Object.keys(lngs).map(lng => {
        return (
          <LangBtn
            variant={i18n.resolvedLanguage === lng ? 'contained' : 'outlined'}
            size="small"
            type="submit"
            key={lng}
            sx={{
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
            }}
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].shortName}
          </LangBtn>
        );
      })}
    </LangWrapper>
  );
}
