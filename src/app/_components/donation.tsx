"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  addClasses?: string[];
};

const Donation = (props: Props) => {
  return (
    <Link
      href={"/donate"}
      className={cn(
        `bg-greenColor text-whiteText rounded-md hover:bg-cyan-200 hover:text-greenColor cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 uppercase`,
        props.addClasses,
      )}
    >
      Donate
    </Link>
  );
};
export default Donation;
