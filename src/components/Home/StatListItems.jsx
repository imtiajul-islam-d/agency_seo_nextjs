async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/StatList");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}
const StatListItems = async () => {
  const data = await getData();
  return <div>Stat list</div>;
};

export default StatListItems;
