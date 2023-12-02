import ComponentTitle from "../Shared/ComponentTitle";
import TestimonialItem from "./TestimonialItem";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}
const Testimonials = async () => {
  const data = await getData();

  return (
    <section className="mt-16">
      <div className="mx-auto max_w padding">
        <div className="my-10">
          <ComponentTitle
            title="Testimonial List"
            heading="Better Agency/SEO Solution At Your Fingertips"
          />
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
          {data?.map((item) => (
            <TestimonialItem key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
