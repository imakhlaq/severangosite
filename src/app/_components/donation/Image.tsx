import React from "react";
import Image from "next/image";
import hero from "@/../public/class/allstudentandteachers.jpg";

type Props = {};

const HeroDonation = (props: Props) => {
  return (
    <section className="">
      <div className="relative w-[40rem] h-[30rem] mx-auto mt-6 lg:w-[60rem] lg:h-[50rem]">
        <Image
          src={hero}
          alt="Students and teachers"
          className="mix-blend-multiply rounded-md"
          fill
        />
      </div>
      <div>
        <h3 className="font-bold text-4xl mt-6 text-center text-textColorBlack">
          SUPPORT THE CAUSE
        </h3>
        <div className="flex text-center mt-10"></div>
        <div className="text-center bg-slate-500 py-4 rounded-md">
          <p className="text-2xl text-textColorBlack font-bold">
            UPI: <span>imakhlaqxd@upi</span>
          </p>
        </div>
        <div>
          <p>QR Code</p>
        </div>
      </div>
    </section>
  );
};

export default HeroDonation;
