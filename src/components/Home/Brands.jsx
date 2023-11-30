import Image from "next/image";
import Brands_item from "./Brands_item";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}
const Brands = async () => {
  const data = await getData();
  return (
    <div className="w-full py-8 pb-20 bg-primary-50 min-h-[20svh]">
      <div className="bg-neutral-50 md:h-28">
        <div className="flex items-center h-full mx-auto padding max_w">
          <Brands_item data={data} />
        </div>
      </div>
    </div>
  );
};

export default Brands;
{
  /* <Image
              alt={item["name"]}
              src={item?.image}
              width={1000}
              height={750}
              priority
              className="w-36"
            /> */
}
