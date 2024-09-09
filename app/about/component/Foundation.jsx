import React from "react";
import Image from "next/image";
import {design1, design2 } from "@/public/images";
import Button from "@/app/component/element/Button";

const AboutFoundation = () => {
  return (
    <section id="donate-button" className="py-16 relative bg-white lg:ml-20 lg:mr-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-52 md:gap-28 items-center">
        <div className="grid justify-center gap-11 items-center px-4 md:mx-24 lg:mx-0 text-center lg:text-left">
          <h3 className="text-secondary font-black text-3xl ">
            About Our Foundation
          </h3>
          <h2 className="text-4xl md:text-5xl xl:text-6xl  font-black">
            We Are On A Mission To Help Children
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          p Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputat
          <Button
            className="bg-secondary mx-auto lg:mx-0   w-fit"
          
          >
            Donate
          </Button>
        </div>
        <div className="relative mx-7 md:mx-[104px] lg:mx-0 ">
          <div className=" absolute right-0">
            <Image
              src={design1}
              alt="Foundation Image 1"
              className="w-52 md:w-[300px] lg:w-52 xl:w-[300px]"
            />
          </div>
          <div className="w-48 h-64 md:h-[400px]  md:w-[285px] lg:w-48 lg:h-64  bg-light-green absolute top-28 md:top-40 right-36 md:right-[213px] lg:top-28 lg:right-36 xl:h-[400px]  xl:w-[285px] xl:top-40 xl:right-[213px] "></div>
          <div className="w-52 h-[384px] md:h-[580px] lg:h-[399px] xl:h-[580px] "></div>
          <div className=" absolute right-40 bottom-0 md:right-[236px] lg:right-[156px] xl:right-[236px]">
            <Image
              src={design2}
              alt="Foundation Image 2"
              className="w-52  md:w-[300px] lg:w-52 xl:w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFoundation;