import NewsLetter from "../Shared/NewsLetter";
import PageHeader from "../Shared/PageHeader";
import Services from "./Services";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}

const OurServices = async () => {
  const data = await getData();
  return (
    <section>
      <PageHeader data={{ title: "Our Services", breadcrumb: "services" }} />
      <Services />
      <NewsLetter />
    </section>
  );
};

export default OurServices;
