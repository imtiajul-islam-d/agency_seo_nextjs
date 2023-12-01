async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/StatList");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}
import { FaPeopleGroup } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { FaRegSmile } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
const StatListItems = async () => {
  const data = await getData();
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 gap-2 mt-14 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
        <div className="flex items-center justify-center py-20 transition shadow-md hover:shadow-sm">
          <div className="flex flex-col items-center justify-center px-5 ">
            <span className="text-[2.063rem] p-[1.375rem] bg-primary-50 transition group-hover:bg-neutral-50 inline-block rounded-xl">
              <FaPeopleGroup />
            </span>
            <h3 className="mt-3 text-2xl font-semibold leading-9 font-font_poppins">
              {data?.followers}
            </h3>
            <p className="text-[1.125rem] font-font_avenir">Followers</p>
          </div>
        </div>
        <div className="flex items-center justify-center py-20 transition shadow-md hover:shadow-sm">
          <div className="flex flex-col items-center justify-center px-5">
            <span className="text-[2.063rem] p-[1.375rem] bg-primary-50 transition group-hover:bg-neutral-50 inline-block rounded-xl">
              <SlLike />
            </span>
            <h3 className="mt-3 text-2xl font-semibold leading-9 font-font_poppins">
              {data?.solved}
            </h3>
            <p className="text-[1.125rem] font-font_avenir">Solved Problems</p>
          </div>
        </div>
        <div className="flex items-center justify-center py-20 transition shadow-md hover:shadow-sm">
          <div className="flex flex-col items-center justify-center px-5 ">
            <span className="text-[2.063rem] p-[1.375rem] bg-primary-50 transition group-hover:bg-neutral-50 inline-block rounded-xl">
              <FaRegSmile />
            </span>
            <h3 className="mt-3 text-2xl font-semibold leading-9 font-font_poppins">
              {data?.customers}
            </h3>
            <p className="text-[1.125rem] font-font_avenir">Happy Customers</p>
          </div>
        </div>
        <div className="flex items-center justify-center py-20 transition shadow-md hover:shadow-sm">
          <div className="flex flex-col items-center justify-center px-5 ">
            <span className="text-[2.063rem] p-[1.375rem] bg-primary-50 transition group-hover:bg-neutral-50 inline-block rounded-xl">
              <GrProjects />
            </span>
            <h3 className="mt-3 text-2xl font-semibold leading-9 font-font_poppins">
              {data?.projects}
            </h3>
            <p className="text-[1.125rem] font-font_avenir">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatListItems;
