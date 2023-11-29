import NewsLetter from "../Shared/NewsLetter";
import PageHeader from "../Shared/PageHeader";
import TeamMembers from "./TeamMembers";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}

const TeamComp = async () => {
  const data = await getData();
  return (
    <section>
      <PageHeader data={{ title: "Team", breadcrumb: "team" }} />
      <TeamMembers />
      <NewsLetter />
    </section>
  );
};

export default TeamComp;
