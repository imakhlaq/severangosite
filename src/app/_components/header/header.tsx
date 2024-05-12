import logo from "./../../../../public/photos/logo.jpg";
import Image from "next/image";
import Navbar from "@/app/_components/header/navbar";

type Props = {};
const Header = (props: Props) => {
  return (
    <header className="">
      <div className="flex items-center justify-center gap-2 px-2 py-5">
        <div className="relative max-w-20">
          <Image className="mix-blend-multiply" src={logo} alt={"logo"} />
        </div>
        <h1 className="text-center text-2xl md:text-3xl font-medium">
          Savera Gramin Foundation
        </h1>
      </div>
      <Navbar />
    </header>
  );
};
export default Header;
