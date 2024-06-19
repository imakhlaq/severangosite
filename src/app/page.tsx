import ImageSlider from "@/app/_components/heroImage/ImageSlider";
import Info from "@/app/_components/info/info";
import Programs from "@/app/_components/programs/programs";
import Footer from "@/app/_components/footer/footer";

export default function Home() {
  return (
    <main className="">
      <ImageSlider />
      <Info />
      <Programs />
      <Footer />
    </main>
  );
}
