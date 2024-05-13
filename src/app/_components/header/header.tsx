import logo from "./../../../../public/photos/logo.jpg";
import Image from "next/image";
import Navbar from "@/app/_components/header/navbar";
import InfoBar from "@/app/_components/header/infoBar";
import Computermenu from "@/app/_components/header/computermenu";

type Props = {};
const Header = (props: Props) => {
  return (
    <header className="">
      <InfoBar />
      <div className="flex items-center justify-around gap-2 px-2 py-3">
        <div className="flex items-center justify-center gap-2">
          <div className="relative max-w-20">
            <Image className="mix-blend-multiply" src={logo} alt={"logo"} />
          </div>
          <h1 className="text-center text-2xl md:text-3xl font-medium lg:text-2xl">
            Savera Gramin Foundation
          </h1>
        </div>
        <Computermenu />
      </div>
      <Navbar />
    </header>
  );
};
export default Header;
