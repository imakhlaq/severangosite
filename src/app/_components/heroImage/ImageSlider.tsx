"use client";

import { useState } from "react";
import { imgSlide } from "@/utils/slideImages";
import { Button } from "@/components/ui/button";

type Props = {};
const ImageSlider = (props: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  //driving state
  const currentImg = imgSlide[currentImageIndex];
  const url = currentImg.url;

  return (
    <section className="">
      <div
        className={`bg-no-repeat bg-cover bg-center h-[35vh] md:h-[55vh] lg:h-[90vh] xl:h-[120vh] px-16 md:px-28 lg:px-28 xl:px-48
        `}
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <p className="text-whiteText font-bold text-4xl py-3 pt-40 w-[65%] md:text-6xl md:pt-64 md:w-[75%] lg:text-7xl lg:pt-96 lg:w-[60%] xl:w-[58%] xl:pt-[28rem] xl:text-8xl">
          {currentImg.title}
        </p>
        <p className="hidden lg:block text-whiteText py-4 w-[80%] text-2xl xl:w-[50%]">
          {currentImg.description}
        </p>

        <div className="flex gap-3">
          <Button className="bg-greenColor btn-primary">Donate</Button>

          <Button className="bg-white/40 btn-primary">Contact</Button>
        </div>
      </div>
    </section>
  );
};
export default ImageSlider;
