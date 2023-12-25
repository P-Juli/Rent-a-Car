"use client";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CarDetails from "./CarDetails";

interface carProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
interface carCardProps {
  car: carProps;
}

const CarCard = ({ car }: carCardProps) => {
  // vehicleClass: string; // Replaced 'class' with 'vehicleClass'
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px]">Nrs {carRent}/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          // width={50}
          // height={50}
          alt="car image"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="logo"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          {/* ------ */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="logo" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          {/* ------- */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="logo" />
            <p className="text-[14px]">{city_mpg} Km/Ltr</p>
          </div>
        </div>
        <div className="car-card__btn-container">
        <CustomButton
        title='View More'
        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
        textStyles='text-white text-[14px] leading-[17px] font-bold'
        rightIcon='/right-arrow.svg'
        handleClick={()=>setIsOpen(true)}
        ></CustomButton>
        </div>
      </div>
      <CarDetails
      isOpen={isOpen}
      closeModal={()=>setIsOpen(false)}
      car={car}
      />
    </div>
  );
};

export default CarCard;
