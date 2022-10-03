import React from "react";
import "./Prod.css";
import perfume from "../../images/image-product-desktop.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Prod = () => {
  return (
    <div className="  bg-pink-100 min-h-screen md:pt-[80px] sm:pt-10">
      <div className="flex flex-col lg:flex-row md:w-4/5 w-1/2 md:flex-row mx-auto sm:w-5/6 sm:pb-5  ">
        <div className="basis-1/2  ">
          <img
            className="object-cover  w-full 
         rounded-l-lg sm:rounded-t-lg  sm:h-[60%]  md:max-h-[600px]  md:min-h-full "
            src={perfume}
            alt="perfume"
          />
        </div>

        <div className=" bg-pink-200 basis-1/2 font-Montserrat  p-9 rounded-r-lg md:max-h-[600px] sm:max-h-[420px]  md:mr-[60px] ">
          <h5 className="tracking-widest text-base text-gray-500 font-semibold  ">
            {" "}
            PERFUME
          </h5>
          <h1 className="font-bold  font-serif leading-8 py-4 md:text-4xl lg:text-5xl sm:text-[35px] ">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="font-semibold text-l text-gray-500 md:w-[230px] pt-1 sm:text-w-[10px] sm:pt-0">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <h1 className="font-bold text-4xl whitespace-pre pt-3 text-[#05806b] font-serif">
            $149.99{" "}
            <span className="line-through text-sm text-gray-600">$169.99</span>
          </h1>
          <button className="text-gray-300 text-sm font-medium rounded-md flex p-3 w-[255px] pl-[64px] mt-5 h-[45px] whitespace-pre hover:bg-purple-700 lg:bg-green-700 sm:bg-pink-600 md:bg-blue-700 transition-ease-in-out duration-300">
            <AiOutlineShoppingCart className="mt-1" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prod;
