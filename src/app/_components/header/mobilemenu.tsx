import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMenu } from "react-icons/io5";

type Props = {};
const Mobilemenu = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" px-4 py-2 border-none outline-none">
        <IoMenu className="h-10 w-10"></IoMenu>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[100vw] flex flex-col items-center text-whiteText bg-gradient-to-r from-stone-400 to-stone-500 border-none outline-none">
        <DropdownMenuSeparator />
        <DropdownMenuItem className=" hover:text-greenColor font-medium text-md cursor-pointer">
          Events
        </DropdownMenuItem>
        <DropdownMenuItem className=" hover:text-greenColor font-medium text-md cursor-pointer">
          Donate
        </DropdownMenuItem>
        <DropdownMenuItem className=" hover:text-greenColor font-medium text-md cursor-pointer">
          Contact
        </DropdownMenuItem>
        <DropdownMenuItem className=" hover:text-greenColor font-medium text-md cursor-pointer">
          About
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Mobilemenu;
