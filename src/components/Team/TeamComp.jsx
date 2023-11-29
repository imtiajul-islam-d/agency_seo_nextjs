import NewsLetter from "../Shared/NewsLetter";
import PageHeader from "../Shared/PageHeader";
import TeamMembers from "./TeamMembers";

const TeamComp = () => {
  return (
    <section>
      <PageHeader data={{ title: "Team", breadcrumb: "team" }} />
      <TeamMembers />
      <NewsLetter />
    </section>
  );
};

export default TeamComp;
