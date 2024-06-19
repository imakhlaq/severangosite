import Link from "next/link";
import Impact from "@/app/_components/info/Impact";

type Props = {};
const Info = (props: Props) => {
  return (
    <>
      <section className="px-3 py-10 text-center text-lg lg:text-xl mx-auto md:max-w-6xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          consequuntur, deleniti earum ex harum, hic nihil non officiis
          quibusdam quod rerum, sint tempora temporibus! Architecto asperiores
          commodi eos error est excepturi illum in molestiae quod, repellendus
          saepe sapiente velit?
        </p>
        <p className="mt-16 hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          consequuntur, deleniti earum ex harum, hic nihil non officiis
          quibusdam quod rerum, sint tempora temporibus! Architecto asperiores
          commodi eos error est excepturi illum in molestiae quod, repellendus
          saepe sapiente velit?
        </p>

        <Link
          href={"/about"}
          className="text-xl text-greenColor inline-block mt-5 md:mt-7"
        >
          Read More
        </Link>
      </section>
      <Impact />
    </>
  );
};
export default Info;
