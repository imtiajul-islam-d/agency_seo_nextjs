import NewsLetter from "../Shared/NewsLetter";
import PageHeader from "../Shared/PageHeader";
import Testimonials from "./Testimonials";

const TestimonialList = () => {
  return (
    <section>
      <PageHeader title="Testimonial List" breadcrumb="testimonials" />
      <Testimonials />
      <NewsLetter />
    </section>
  );
};

export default TestimonialList;
