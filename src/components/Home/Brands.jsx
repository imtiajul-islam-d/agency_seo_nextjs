import Image from "next/image";
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
    <div className="w-full py-8 pb-20 bg-primary-50">
      <div className="flex items-center justify-around py-4 h-1/2 bg-neutral-50">
        {data?.map((item) => (
          <Image
            key={item?.id}
            alt={item["name"]}
            src={item?.image}
            width={1000}
            height={750}
            priority
            className="w-36"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
