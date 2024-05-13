import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { info } from "@/utils/info";
import { MdEmail } from "react-icons/md";

type Props = {};
const InfoBar = (props: Props) => {
  const phoneNo = `tel:${info.phoneNo}`;
  return (
    <div className="hidden md:flex md:flex-col lg:flex-row px-3 py-4 justify-between items-center bg-greenColor text-whiteText gap-3 lg:justify-evenly">
      <div className="flex gap-10">
        <a href={info.fbUrl} target="_blank">
          <span>
            <FaFacebook />
          </span>
        </a>
        <a href={info.twitterUrl}>
          <span>
            <FaTwitter />
          </span>
        </a>

        <a href={info.instaUrl}>
          <span>
            <FaInstagram />
          </span>
        </a>

        <a href={info.address}>
          <span>
            <FaMapMarkerAlt />
          </span>
        </a>
      </div>

      <div className="flex gap-5">
        <address className="flex justify-center items-center gap-1">
          <FaHome /> {` ${info.address}`}
        </address>

        <a href={`${phoneNo}`}>
          <span className="flex justify-center items-center gap-1">
            <IoMdCall />
            {` ${info.phoneNo}`}
          </span>
        </a>

        <a href={`mailto:${info.email}`}>
          <span className="flex justify-center items-center gap-1">
            <MdEmail />
            {` ${info.email}`}
          </span>
        </a>
      </div>
    </div>
  );
};
export default InfoBar;
