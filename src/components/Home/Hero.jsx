import Brands from "./Brands";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/HeroList");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}
const Hero = async () => {
  const data = await getData();
  return (
    <div>
      <div>Hero contents</div>
      <Brands />
    </div>
  );
};

export default Hero;
