import NewsLetter from "../Shared/NewsLetter";
import PageHeader from "../Shared/PageHeader";
import Testimonials from "./Testimonials";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}

const TestimonialList = async () => {
  const data = await getData();
  return (
    <section>
      <PageHeader
        data={{ title: "Testimonial List", breadcrumb: "testimonials" }}
      />
      <Testimonials />
      <NewsLetter />
    </section>
  );
};

export default TestimonialList;
