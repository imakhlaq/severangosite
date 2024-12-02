import { info } from "@/utils/info";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";

type Props = {};
export default function Footer({}: Props) {
  return (
    <footer className="bg-[#4C4D4C] px-10 py-20 mt-20 text-whiteText text-lg md:text-xl text-center flex flex-col md:flex-row justify-around items-center gap-10">
      <div className="flex flex-col gap-10">
        <div>
          <p>Savera Gramin Foundation</p>
          <p className="md:max-w-md">
            {info.address}
          </p>
        </div>
        <div>
          <p>Contact Us: {info.phoneNo} </p>
          <p>E-mail: {info.email}</p>
        </div>
      </div>

      <div className="flex gap-10 text-center">
        <a href={info.fbUrl} target="_blank">
          <span>
            <FaFacebook className="h-6 w-6 hover:text-greenColor" />
          </span>
        </a>
        <a href={info.twitterUrl} target="_blank">
          <span>
            <FaTwitter className="h-6 w-6 hover:text-greenColor" />
          </span>
        </a>

        <a href={info.instaUrl} target="_blank">
          <span>
            <FaInstagram className="h-6 w-6 hover:text-greenColor" />
          </span>
        </a>

        <a href={info.address} target="_blank">
          <span>
            <FaMapMarkerAlt className="h-6 w-6 hover:text-greenColor" />
          </span>
        </a>
      </div>
    </footer>
  );
}
