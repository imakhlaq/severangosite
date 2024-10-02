import React from "react";
import Image from "next/image";
import hero from "@/../public/class/allstudentandteachers.jpg";
import qr from "@/../public/qr/QR.jpg";

type Props = {};

const HeroDonation = (props: Props) => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 md:gap-0 md:py-14 md:mt-10 justify-around">
      <div className="md:max-w-96 lg:max-w-[40rem]">
        <Image src={hero} width={800} height={100} alt="Student Pics"></Image>
      </div>
      <div className="py-3 lg:py-0 lg:flex-initial lg:max-w-[20rem] lg:-ml-24 xl:-ml-72">
        <p className="text-center text-2xl font-bold mb-3 text-greenColor">
          Support Our Cause
        </p>
        <Image src={qr} width={300} height={400} alt="Student Pics"></Image>
        <p className="text-center text-2xl font-bold text-greenColor mt-3 mb-10">
          Scan QR Code
        </p>
      </div>
    </section>
  );
};

export default HeroDonation;
