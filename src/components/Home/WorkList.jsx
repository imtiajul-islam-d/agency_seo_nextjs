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
    <div>
      <div>This is worklist component</div>
    </div>
  );
};

export default WorkList;
