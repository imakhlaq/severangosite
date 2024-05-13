import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const inter = Barlow({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Savera Gramin Foundation",
  description:
    "Savera Gramin Foundation plays a critical part in developing society and improving communities. Savera Foundation has been acknowledged for its commendable contribution to society and all the events which were carried out by the team of Savera Foundation reflected a change and brought smiles on many faces. The NGO also works towards quality healthcare, keeping in mind a positive impact on the environment. It also works towards other causes that go hand-in-hand with healthcare, such as nutrition and taking sincere effort to achieve its ideals. It basically addresses the basic but neglected issues of the poor and values the traditional wisdom of the local people. Savera Foundation has also helped in teaching many students who were facing problems in gaining education. It teaches students free of cost . It continues and will always run to work towards the betterment and upliftment of the needy. Savera Foundation has received considerable media coverage for its activity during its events and campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <body className={`bg-[#FFFFFF] ${inter.className}`}>
        <div id="model"></div>
        {children}
      </body>
    </html>
  );
}
