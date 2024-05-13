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

type Props = {
  addClasses?: string[];
};

const Donation = (props: Props) => {
  return (
    <Drawer>
      <DrawerTrigger
        className={cn(
          `bg-greenColor text-whiteText px-9 py-3 rounded-md hover:bg-cyan-200 hover:text-greenColor cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 uppercase ${props.addClasses}`,
          {},
        )}
      >
        Donate
      </DrawerTrigger>
      <DrawerContent className=" h-[45%]">
        <DrawerHeader
          className="flex justify-around items-center gap-5 md:gap-10 pt-10 "
          color="DEDEDE"
        >
          <Tabs
            defaultValue="QRCode"
            className="bg-whiteText px-16 md:px-32 py-6 rounded-3xl relative"
          >
            <TabsList className="pb-10">
              <TabsTrigger
                value="QRCode"
                className="text-2xl text-textColorBlack"
              >
                QR Code
              </TabsTrigger>
              <TabsTrigger value="UPI" className="text-2xl text-textColorBlack">
                UPI
              </TabsTrigger>
              <TabsTrigger
                value="bankInfo"
                className="text-2xl text-textColorBlack"
              >
                Bank Info
              </TabsTrigger>
            </TabsList>
            <TabsContent value="QRCode">
              <div className="relative w-[15rem] h-[15rem] mx-auto pt-4">
                <Image src={donation.qrurl} alt="QRCode" fill />
              </div>
            </TabsContent>
            <TabsContent value="UPI">Change your password here.</TabsContent>
            <TabsContent value="bankInfo">
              Change your password here.
            </TabsContent>
          </Tabs>
        </DrawerHeader>
        <DrawerFooter className="pb-4">
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
