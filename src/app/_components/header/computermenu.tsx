"use client";
import Donation from "@/app/_components/donation";

type Props = {};
const Computermenu = (props: Props) => {
  return (
    <>
      <nav className="hidden lg:block">
        <ol className="flex justify-around items-center w-full gap-10 text-md font-medium">
          <li className="cursor-pointer flex flex-col group">
            Courses
            <span className="border hidden group-hover:block border-greenColor"></span>
          </li>
          <li className="cursor-pointer flex flex-col group">
            Contact
            <span className="border hidden group-hover:block border-greenColor"></span>
          </li>
          <li className="cursor-pointer flex flex-col group">
            About
            <span className="border hidden group-hover:block border-greenColor"></span>
          </li>

          <li>
            <Donation
              addClasses={[
                "text-whiteText uppercase font-semibold px-6 py-4 mt-4 md:px-9 md:py-6 lg:px-12 lg:py-7 xl:px-16 xl:py-8 md:text-xl lg:text-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
              ]}
            ></Donation>
          </li>
        </ol>
      </nav>
    </>
  );
};
export default Computermenu;
