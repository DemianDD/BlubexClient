import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='bg-black'>
      <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language} className='bg-black'>
        <option value="en">English</option>
        <option value="uk">Українська</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
