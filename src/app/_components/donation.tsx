"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { donation } from "@/utils/donationInfos";
import { cn } from "@/lib/utils";
import { FaCopy } from "react-icons/fa";

type Props = {
  addClasses?: string[];
};

const Donation = (props: Props) => {
  return (
    <Drawer>
      <DrawerTrigger
        className={cn(
          `bg-greenColor text-whiteText rounded-md hover:bg-cyan-200 hover:text-greenColor cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 uppercase`,
          props.addClasses,
        )}
      >
        Donate
      </DrawerTrigger>
      <DrawerContent className=" h-[45%] bg-[#09090B]">
        <DrawerHeader
          className="flex justify-around items-center gap-5 md:gap-10"
          color="DEDEDE"
        >
          <Tabs
            defaultValue="QRCode"
            className="bg-[#09090B] px-2 md:px-28 py-4 rounded-3xl relative"
          >
            <TabsList className="pb-10 flex gap-5">
              <TabsTrigger value="QRCode" className="text-2xl  text-whiteText">
                QR Code
              </TabsTrigger>
              <TabsTrigger value="UPI" className="text-2xl  text-whiteText">
                UPI
              </TabsTrigger>
              <TabsTrigger
                value="bankInfo"
                className="text-2xl  text-whiteText"
              >
                Bank Info
              </TabsTrigger>
            </TabsList>
            <TabsContent value="QRCode">
              <div className="relative w-[15rem] h-[15rem] md:w-[22rem] md:h-[22rem] mx-auto pt-4">
                <Image src={donation.qrurl} alt="QRCode" fill />
              </div>
            </TabsContent>
            <TabsContent value="UPI">
              <div className="bg-blueBgColor flex justify-center items-center gap-10  py-4 text-whiteText text-lg rounded md:text-2xl">
                <p>{donation.upiId}</p>
                <span
                  onClick={async () => {
                    await navigator.clipboard.writeText(donation.upiId);
                  }}
                >
                  <FaCopy />
                </span>
              </div>
            </TabsContent>
            <TabsContent value="bankInfo">
              <div className="text-whiteText text-lg flex items-center justify-center flex-col md:text-2xl">
                <p>Name: {donation.bankInfo.name}</p>
                <p>Account No: {donation.bankInfo.accountNo}</p>
                <p>IFSC Code: {donation.bankInfo.IFSCCode}</p>
              </div>
            </TabsContent>
          </Tabs>
        </DrawerHeader>
        <DrawerFooter className="-mt-7">
          <DrawerClose className="">
            <Button
              variant="ghost"
              className="btn-primary bg-greenColor font-medium"
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default Donation;
