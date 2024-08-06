"use client";
import Image from "next/image";
import { Button } from "react-daisyui";
import HeroImage from "@/assets/images/hero-image.svg";
import Overlay from "@/assets/images/overlay2.svg";

const Hero = () => {
  return (
    <div className="relative bg-dawn-pink px-6 sm:px-8">
      <div
        style={{ backgroundImage: `url('${Overlay.src}')` }}
        className="absolute inset-0 bg-no-repeat bg-fit bg-top md:bg-left md:bg-fit opacity-[0.06] md:opacity-[0.04]"
      ></div>
      <div className="mx-auto max-w-[1360px] min-h-[calc(100vh-[86px])] md:min-h-fit xl:min-h-[calc(100vh-86px)] flex items-center bg-transparent relative">
        <div className="md:flex justify-between w-full pt-2 md:pt-0">
          <div className="self-end md:w-1/2 text-center md:text-start">
            <Image
              className="md:hidden p-4"
              src={HeroImage}
              alt="illustration of a diagnostic lab"
            />
            <h1 className="text-[1.6rem] sm:text-[1.7rem] md:text-[2.2rem] xl:text-5xl md:font-medium font-semibold md:tracking-wide xl:leading-[3.5rem] text-blue-950 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900">
              Welcome to <br /> onlinelabreports.com
            </h1>
            <p className="py-4 sm:text-1.2rem md:text-[1.3rem] font-medium text-[#001b66]">
              Your one-stop portal for secure, convenient, and personalized
              health information.
            </p>
            <p className="mb-6 sm:text-[1.1rem] md:text-[1.15rem] text-slate-800 tracking-wide md:pr-8 lg:pr-12">
              A cloud-based LIS and LIMS, where patients can easily have a
              record of their medical diagnostic history and
              hospitals/clinics/diagnostic centers to manage their patient data
              effortlessly.
            </p>
            <div className="px-4 md:px-0">
              <Button className="w-full md:w-fit px-8 bg-blue-800 border-2 border-blue-800 rounded-full hover:text-black hover:border-black text-dawn-pink hover:bg-dawn-pink">
                Get Started
              </Button>
              <Button className="w-full md:w-fit px-8 mt-5 md:mt-0 md:ml-3 text-black border-2 border-black rounded-full hover:border-black bg-dawn-pink hover:text-dawn-pink hover:bg-black">
                Contact Sales
              </Button>
            </div>
          </div>
          <Image
            className="hidden md:block md:w-2/5"
            src={HeroImage}
            alt="illustration of a diagnostic lab"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
