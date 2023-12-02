import NewsLetter from "../Shared/NewsLetter";
import PageHeader from "../Shared/PageHeader";
import TeamMembers from "./TeamMembers";

const TeamComp = async () => {
  return (
    <section className="">
      <PageHeader title="Team" breadcrumb="team" />
      <TeamMembers />
      <NewsLetter />
    </section>
  );
};

export default TeamComp;
