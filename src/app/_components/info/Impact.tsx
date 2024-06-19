import { impact } from "@/utils/imapact";

type Props = {};
const Impact = (props: Props) => {
  return (
    <section className="mt-20">
      <h3 className="text-center text-3xl font-extrabold mb-8 md:text-4xl uppercase">
        Our Impact
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 px-5 lg:px-10 gap-4">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-extrabold text-6xl lg:text-7xl text-greenColor text-center">
            {impact[0].figure}
          </p>
          <p className="text-2xl md:text-3xl text-greenColor text-center">
            {impact[0].info}
          </p>
          <p className="text-center text-md md:text-xl md:px-4 max-w-[20rem]">
            {impact[0].discription}
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="font-extrabold text-6xl lg:text-7xl text-greenColor text-center">
            {impact[1].figure}
          </p>
          <p className="text-2xl md:text-3xl text-greenColor text-center">
            {impact[1].info}
          </p>
          <p className="text-center text-md md:text-xl md:px-4 max-w-[20rem]">
            {impact[1].discription}
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="font-extrabold text-6xl lg:text-7xl text-greenColor text-center">
            {impact[2].figure}
          </p>
          <p className="text-2xl md:text-3xl text-greenColor text-center">
            {impact[2].info}
          </p>
          <p className="text-center text-md md:text-xl md:px-4 max-w-[20rem]">
            {impact[2].discription}
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="font-extrabold text-6xl lg:text-7xl text-greenColor text-center">
            {impact[3].figure}
          </p>
          <p className="text-2xl md:text-3xl text-greenColor text-center">
            {impact[3].info}
          </p>
          <p className="text-center text-md md:text-xl md:px-4 max-w-[20rem]">
            {impact[3].discription}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Impact;
