import ComponentTitle from "../Shared/ComponentTitle";
import TeamItem from "./TeamItem";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}
const TeamMembers = async () => {
  const data = await getData();
  return (
    <section className="my-20">
      <div className="mx-auto max_w padding">
        <div className="my-10">
          <ComponentTitle
            title="Our Team Member"
            heading="Check our awesome team members"
          />
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
          {data?.map((item) => (
            <TeamItem key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
