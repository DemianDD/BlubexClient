import { useNavigate } from "react-router-dom";
import TypingAnimation from "./animations/TypingAnimation";

const Starter = () => {
  const router = useNavigate();
  const handleclick = () => {
    router("/plan");
  };
  return (
    <div className="flex justify-center items-center w-full h-screen p-[50px] gap-5">
      <div className="flex flex-col items-center">
        <div className="w-[750px]">
          <TypingAnimation text="Знайомтесь, це Blubex - сервіс, на основі штучного інтелекту, який створить необхідний вам сайт за лічені секунди." />
        </div>
        <div className="w-full mt-5 flex justify-center">
          <button className="bg-gradient-to-r from-indigo-600 to-[#da7163] p-4 rounded-2xl w-1/3 flex justify-center items-center">
            <img src="icons/shine.svg" className="mr-1" />
            Розпочати
          </button>
        </div>
      </div>
      <div>
        <img src="/icons/phone.png"/>
      </div>
    </div>
  );
};

export default Starter;
