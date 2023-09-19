import { useNavigate } from "react-router-dom";
import TypingAnimation from "./animations/TypingAnimation";
import { useTranslation } from 'react-i18next';

const Starter = () => {
  const { t } = useTranslation();
  const router = useNavigate();
  const handleclick = () => {
    router("/plan");
  };
  return (
    <div className="flex justify-center items-center w-full p-[50px] gap-5 lg:flex-row flex-col">
      <div className="flex flex-col items-center relative w-full">
        <div className="xl:w-[655px] lg:w-[525px] sm:w-full 2xl:w-[750px] xl:h-[300px] lg:h-[350px] md:h-[450px] h-[150px]">
          <TypingAnimation text={t('greetings')} />
        </div>
        <div className="w-full mt-5 flex justify-center">
          <button className="bg-gradient-to-r from-indigo-600 to-[#da7163] p-4 rounded-2xl xl:w-1/3 lg:w-1/2 w-full flex justify-center items-center" onClick={handleclick}>
            <img src="icons/shine.svg" className="mr-1" />
            {t('Get started')}
          </button>
        </div>
      </div>
      <div>
        <img 
          src="/icons/phone.png"
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default Starter;
