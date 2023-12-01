import ComponentTitle from "../Shared/ComponentTitle";
import StatListItems from "./StatListItems";
import WorkListItems from "./WorkListItems";

const WorkList = async () => {
  return (
    <section className="py-16 mx-auto max_w padding">
      <ComponentTitle
        title="Work List"
        heading="We provide the Perfect Solution to your business growth"
      />
      {/* worklist items */}
      <WorkListItems />
      {/* statlist items */}
      <StatListItems />
    </section>
  );
};

export default WorkList;
