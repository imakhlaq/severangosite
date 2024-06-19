import Image from "next/image";
import education from "./../../../../public/icons/education.png";
import womenEnp from "./../../../../public/icons/womenEmp.png";
import livelihood from "./../../../../public/icons/livehood.png";
import healthcare from "./../../../../public/icons/healthcare.png";
import glassdoor from "./../../../../public/icons/grassroot.png";
import disasterMan from "./../../../../public/icons/disasterResponse.png";

type Props = {};
export default function Programs({}: Props) {
  return (
    <section className="mt-36 mx-auto">
      <h3 className="text-center text-3xl font-extrabold mb-14 md:text-4xl ">
        OUR PROGRAMS
      </h3>

      <div className="grid lg:grid-cols-2 lg:gap-16 space-y-6">
        <div className="flex mx-auto px-5 gap-8">
          <div className="relative h-[6rem] w-[6rem] md:w-[8rem] md:h-[8rem]">
            <Image src={education} alt="book image" fill />
          </div>
          <div>
            <h5 className="uppercase font-extrabold text-2xl underline text-[#F0C675] mb-2 ">
              education
            </h5>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, sequi.
            </p>
          </div>
        </div>
        <div className="flex mx-auto px-5 gap-8">
          <div className="relative h-[6rem] w-[6rem] md:w-[8rem] md:h-[8rem]">
            <Image src={womenEnp} alt="book image" fill />
          </div>
          <div>
            <h5 className="uppercase font-extrabold text-2xl underline text-[#B3D3D2] mb-2 ">
              women empowerment
            </h5>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, sequi.
            </p>
          </div>
        </div>
        <div className="flex mx-auto px-5 gap-8">
          <div className="relative h-[6rem] w-[6rem] md:w-[8rem] md:h-[8rem]">
            <Image src={glassdoor} alt="book image" fill />
          </div>
          <div>
            <h5 className="uppercase font-extrabold text-2xl underline text-[#51C777] mb-2 ">
              empowering grassroots
            </h5>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, sequi.
            </p>
          </div>
        </div>
        <div className="flex mx-auto px-5 gap-8">
          <div className="relative h-[6rem] w-[6rem] md:w-[8rem] md:h-[8rem]">
            <Image src={healthcare} alt="book image" fill />
          </div>
          <div>
            <h5 className="uppercase font-extrabold text-2xl underline text-[#C1ACCC] mb-2 ">
              healthcare
            </h5>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, sequi.
            </p>
          </div>
        </div>
        <div className="flex mx-auto px-5 gap-8">
          <div className="relative h-[6rem] w-[6rem] md:w-[8rem] md:h-[8rem]">
            <Image src={livelihood} alt="book image" fill />
          </div>
          <div>
            <h5 className="uppercase font-extrabold text-2xl underline text-[#DFC0AF] mb-2 ">
              livelihod
            </h5>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, sequi.
            </p>
          </div>
        </div>
        <div className="flex mx-auto px-5 gap-8">
          <div className="relative h-[6rem] w-[6rem] md:w-[8rem] md:h-[8rem]">
            <Image src={disasterMan} alt="book image" fill />
          </div>
          <div>
            <h5 className="uppercase font-extrabold text-2xl underline text-[#FC806F] mb-2 ">
              disaster response
            </h5>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, sequi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
