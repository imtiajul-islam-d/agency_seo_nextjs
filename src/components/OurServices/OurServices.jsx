import NewsLetter from "../Shared/NewsLetter";
import PageHeader from "../Shared/PageHeader";
import Services from "./Services";

const OurServices = () => {
  return (
    <section>
      <PageHeader data={{ title: "Our Services", breadcrumb: "services" }} />
      <Services />
      <NewsLetter />
    </section>
  );
};

export default OurServices;
