import ComponentTitle from "../Shared/ComponentTitle";
import ProjectItem from "./ProjectItem";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllProject");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}
const Projects = async () => {
  const data = await getData();

  return (
    <section className="mt-20">
      <div className="mx-auto max_w padding">
        <div className="my-10">
          <ComponentTitle
            title="All Project"
            heading="Better Agency/SEO Solution At Your Fingertips"
          />
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-7">
          {data?.map((item) => (
            <ProjectItem item={item} key={item?.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
