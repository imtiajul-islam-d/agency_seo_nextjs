import NewsLetter from "../Shared/NewsLetter";
import PageHeader from "../Shared/PageHeader";
import Projects from "./Projects";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllProject");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}

const AllProjects = async () => {
  const data = await getData();
  return (
    <section>
      <PageHeader data={{ title: "All Project", breadcrumb: "projects" }} />
      <Projects />
      <NewsLetter />
    </section>
  );
};

export default AllProjects;
