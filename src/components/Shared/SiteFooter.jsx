async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/SocialLink");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}

const SiteFooter = async () => {
  const data = await getData();
  return (
    <div>
      <div>Footer</div>
    </div>
  );
};

export default SiteFooter;
