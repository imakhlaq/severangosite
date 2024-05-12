import Mobilemenu from "@/app/_components/header/mobilemenu";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <nav>
      {/*<div>Mobile Ui</div>*/}
      <div className="lg:hidden bg-greenColor flex justify-between items-center px-10">
        <p className="text-whiteText text-lg font-bold py-4">MENU</p>
        <Mobilemenu />
      </div>
    </nav>
  );
};
export default Navbar;
