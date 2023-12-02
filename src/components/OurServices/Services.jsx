import ComponentTitle from "../Shared/ComponentTitle";
import ServiceItem from "./ServiceItem";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}
const Services = async () => {
  const data = await getData();
  return (
    <section className="my-20">
      <div className="mx-auto max_w padding">
        <div className="my-10">
          <ComponentTitle
            title="Our All Services"
            heading="We Provide Best Web Design Services"
          />
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-7">
          {data?.map((item) => (
            <ServiceItem item={item} key={item?.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
