import ComponentTitle from "../Shared/ComponentTitle";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/StatList");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}

const WorkList = async () => {
  const data = await getData();
  return (
    <section className="py-16 mx-auto max_w padding">
      <ComponentTitle
        title="Work List"
        heading="We provide the Perfect Solution to your business growth"
      />
    </section>
  );
};

export default WorkList;
