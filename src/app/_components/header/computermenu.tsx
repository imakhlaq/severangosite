"use client";
import Donation from "@/app/_components/donation";
import Link from "next/link";

type Props = {};
const ComputerMenu = (props: Props) => {
  return (
    <>
      <nav className="hidden lg:block">
        <ol className="flex justify-around items-center w-full gap-10 text-md font-medium">
          <li className="cursor-pointer flex flex-col group">
            <Link href={"/courses"}>Courses</Link>
            <span className="border hidden group-hover:block border-greenColor"></span>
          </li>
          <li className="cursor-pointer flex flex-col group">
            <Link href={"/about"}>Contact</Link>
            <span className="border hidden group-hover:block border-greenColor"></span>
          </li>
          <li className="cursor-pointer flex flex-col group">
            <Link href={"/about"}>About</Link>

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
export default ComputerMenu;
