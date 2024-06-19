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
            <Donation addClasses={["px-9 py-3"]}></Donation>
          </li>
        </ol>
      </nav>
    </>
  );
};
export default Computermenu;
