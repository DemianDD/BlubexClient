import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 h-[400px] pt-5 px-5 md:px-[100px] pb-[50px] justify-center">
        <div className="col-span-3 w-full grid grid-rows-6 justify-center">
          <div className="p-3 font-[300] text-xl">
          <img src="icons/logo.png" className="w-[150px] cursor-pointer"/>
          </div>
          <div className="row-span-3 pl-3 text-sm text-[#ccc]">
            {t('We make a high-quality website for you or for your business very quickly and very cheaply')}
          </div>
          <div className="pl-3 text-sm">
            <LanguageSelector/>
            {t('©2023 Blubex, All rights reserved')}
          </div>
          <div className="pl-3 flex gap-5">
            <img src="/icons/insta.svg" className="w-[25px]" />
            <img src="/icons/tik.svg" className="w-[25px]" />
            <img src="/icons/email.svg" className="w-[25px]" />
            <img src="/icons/phone.svg" className="w-[25px]" />
          </div>
        </div>
        <div className="p-5 flex flex-col items-start gap-y-4 text-[#ccc]">
          <span className="font-[300] text-xl text-white">{t("Service")}</span>
          <span className="text-sm">{t("Store")}</span>
        </div>
        <div className="p-5 flex flex-col items-start gap-y-4 text-[#ccc]">
          <span className="font-[300] text-xl text-white">{t("Company")}</span>
          <span className="text-sm">{t("Privacy Policy")}</span>
          <span className="text-sm">{t("Support")}</span>
          <span className="text-sm">{t("Terms of service")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
