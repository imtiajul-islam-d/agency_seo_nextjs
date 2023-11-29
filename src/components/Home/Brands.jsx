import Image from "next/image";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("Brand Image calling failed");
  }
  return res.json();
}
const Brands = async () => {
  const data = await getData();
  return (
    <div>
      <div>
        {data?.map((item) => (
          <Image
            key={item?.id}
            alt={item["name"]}
            src={item?.image}
            width={1000}
            height={750}
            priority
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
