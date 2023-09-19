import React, {useEffect, useState } from "react";
import Title from "./texts/Title";
import { plans } from "../data/data";
import { useNavigate } from "react-router-dom";
import DefaultSpinner from "./loading/DefaultSpinner";

const CatalogList = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    const loadImage = () => {
      setTimeout(() => {
        setImageLoaded(true);
      }, 1000);
    };

    loadImage();
  }, []);
  return (
    <div className="flex justify-center items-center w-full flex-col xs:mt-[25px] mt-0">
      <Title title="Select your plan..." />
      <div className="grid xl:grid-cols-3 grid-cols-2 gap-5 gap-x-5">
        {plans.map((p) => {
          return (
              <div
                className="relative flex flex-col items-center w-[165px] sm:w-[275px] md:w-[325px] text-center bg-[#111111] bg-opacity-90 rounded-[25px] p-[15px] cursor-pointer hover:shadow-lg hover:shadow-[#1976d236] transition-[0.2s] hover:bg-opacity-50"
                key={p.id}
                onClick={() => navigate(`/plan/${p.id}`)}
              >
                
                <div>
                  <div className="text-sm sm:text-lg font-[300] m-1 sm:m-5">
                    {p.name}
                  </div>
                  <img
                    src={p.image_url}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{ display: imageLoaded ? "block" : "none" }}
                    className="flex-1 w-[250px]"
                  />
                  {!imageLoaded && !imageError && (
                    <div className=" inset-0 flex items-center justify-center">
                      <DefaultSpinner/>
                    </div>
                  )}
                </div>
                <div className="hidden sm:flex text-xs font-[100] text-[#ccc] mt-2 mb-1 flex-grow">
                  {p.desc}
                </div>
                <div className="flex items-center mt-1">
                    <img src="icons/view.svg" />
                    <span className="sm:text-sm text-xs text-[#4e4e4e] ml-0.5">{p.viewes}</span>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatalogList;
