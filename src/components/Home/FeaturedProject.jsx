async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}

const FeaturedProject = async () => {
  const data = await getData();
  return (
    <div>
      <div>This is featured product</div>
    </div>
  );
};

export default FeaturedProject;
