import NewsLetter from "../Shared/NewsLetter";
import PageHeader from "../Shared/PageHeader";
import Projects from "./Projects";

const AllProjects = () => {
  return (
    <section>
      <PageHeader data={{ title: "All Project", breadcrumb: "projects" }} />
      <Projects />
      <NewsLetter />
    </section>
  );
};

export default AllProjects;
