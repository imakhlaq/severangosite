"use client";

import { useState } from "react";
import { imgSlide } from "@/utils/slideImages";
import { Button } from "@/components/ui/button";
import Donation from "@/app/_components/donation";

type Props = {};
const ImageSlider = (props: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  //driving state
  const currentImg = imgSlide[currentImageIndex];
  const url = currentImg.url;

  return (
    <section className="">
      <div
        className={`bg-no-repeat bg-cover bg-center h-[45vh] md:h-[55vh] lg:h-[90vh] xl:h-[120vh] px-12 md:px-28 lg:px-28 xl:px-48
        `}
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <p className="text-whiteText font-bold text-3xl py-3 pt-36 w-[65%] md:text-5xl md:pt-56 md:w-[80%] lg:text-7xl lg:pt-96 lg:w-[60%] xl:w-[58%] xl:pt-[28rem] xl:text-8xl">
          {currentImg.title}
        </p>
        <p className="hidden lg:block text-whiteText py-4 w-[80%] text-2xl xl:w-[50%]">
          {currentImg.description}
        </p>

        <div className="flex gap-3">
          <Donation
            addClasses={[
              "text-whiteText uppercase font-semibold px-6 py-2 mt-4 md:px-9 md:py-2 lg:px-12 lg:py-4 xl:px-16 xl:py-4 md:text-xl lg:text-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
            ]}
          ></Donation>

          <Button className="bg-white/40 btn-primary">Contact</Button>
        </div>
      </div>
    </section>
  );
};
export default ImageSlider;
