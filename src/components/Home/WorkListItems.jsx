async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/WorkList");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}
import { RiMessengerLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
const WorkListItems = async () => {
  const data = await getData();
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 mt-5 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((item) => (
          <div
            className="py-[3.125rem] group rounded-lg hover:bg-primary-50 transition hover:shadow-sm cursor-pointer px-[1.875rem]"
            key={item?.id}
          >
            <div className="max-w-[18.688rem]">
              <span className="text-[2.063rem] p-[1.375rem] bg-primary-50 transition group-hover:bg-neutral-50 inline-block rounded-3xl">
                <RiMessengerLine />
              </span>
              <h3 className="mt-2 mb-2 text-2xl font-semibold leading-9 font-font_poppins">
                {item?.title}
              </h3>
              <p className="text-[1.125rem] leading-6 font-font_avenir">
                {item?.des}
              </p>
              <button className="py-[0.938rem] hover:bg-primary-50 transition px-5 flex items-center space-x-5 mt-5 rounded-xl">
                Learn More{" "}
                <span className="ml-2 ">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkListItems;
