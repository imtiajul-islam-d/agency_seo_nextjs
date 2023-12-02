import NewsLetter from "../Shared/NewsLetter";
import PageHeader from "../Shared/PageHeader";
import Services from "./Services";

const OurServices = async () => {
  return (
    <section>
      <PageHeader title="Our Services" breadcrumb="services" />
      <Services />
      <NewsLetter />
    </section>
  );
};

export default OurServices;
