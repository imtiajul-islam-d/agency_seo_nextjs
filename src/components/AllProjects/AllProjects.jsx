import ComponentTitle from "../Shared/ComponentTitle";
import NewsLetter from "../Shared/NewsLetter";
import PageHeader from "../Shared/PageHeader";
import Projects from "./Projects";

const AllProjects = () => {
  return (
    <section>
      <PageHeader title="All Projects" breadcrumb="/projects" />
      <Projects />
      <NewsLetter />
    </section>
  );
};

export default AllProjects;
