import cources from "@/utils/cources";
import Link from "next/link";

const CourceCard = () => {
  return (
    <div>
      <p className=" rounded-xl text-greenColor text-center text-4xl mt-16">
        SCHOLARSHIP COURSE
      </p>
      {
        //global container
      }
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-slate-50 md:gap-10 lg:gap-28">
        {cources.map((obj, i) => (
          <Card data={obj} key={i} />
        ))}
      </div>
    </div>
  );
};
export default CourceCard;

type Params = {
  data: {
    name: string;
    subjects: string[];
    duration: string;
  };
};

function Card({ data }: Params) {
  return (
    // {/* first row */}
    <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
      {/* first row outer Div */}
      <div className=" bg-slate-700 rounded-xl text-white ">
        {/* first row inner div */}
        <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
          <h2 className="text-center text-4xl uppercase font-bold">
            {data.name}
          </h2>
          <div className="mt-10 font-serif font-extrabold text-4xl">
            {data.duration}
          </div>

          <a
            href="www.google.com"
            className="flex justify-center mt-8 bg-slate-800 px-5 py-3 border border-cyan-700 rounded-lg hover:bg-greenColor hover:border-purple-700"
          >
            <Link href={"/about"}>Contact Us</Link>
          </a>
        </div>
        <div className="border-t border-slate-700"></div>
        <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
          <ul className="flex justify-center flex-col list-disc">
            {data.subjects.map((sub, i) => (
              <li key={i}>{sub}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
