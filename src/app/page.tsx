import Header from "@/app/_components/header/header";
import ImageSlider from "@/app/_components/heroImage/ImageSlider";
import Info from "@/app/_components/info/info";
import Programs from "@/app/_components/programs/programs";

export default function Home() {
  return (
    <main className="">
      <Header />
      <ImageSlider />
      <Info />
      <Programs />
    </main>
  );
}
