import Link from "next/link";
import Impact from "@/app/_components/info/Impact";

type Props = {};
const Info = (props: Props) => {
  return (
    <>
      <section className="px-3 py-10 text-center text-lg lg:text-xl mx-auto md:max-w-6xl text-black mt-10 md:mt-16">
        <p>
          Established in 2020, Savera Gramin Foundation is an Indian
          developement organization, impacting the lives of over 10000+ children
          and their families every year. We have more than 40 projects on
          education, healthcare, livelihood, and women enpowerment in over 20
          remote villages and urban slums across 10 states of india.
        </p>
        <p className="mt-16 hidden md:block">
          Savera Gramin Foundation works as a catalyst in the cycle of change,
          complementing and supplementing government efforts to achieve the
          Sustainable Development Goals. We sensitize and partner with
          like-minded institutions and individuals to implement high-impact
          programmes that enable access, enhance quality and help bring long
          term behavioural change at the grassroots.
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
