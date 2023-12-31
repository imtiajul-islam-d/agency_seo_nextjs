import Button from "../Shared/Button";
import Brands from "./Brands";
import HeroImage from "./HeroImage";
import Hero_slider from "./Hero_slider";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/HeroList");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}
const Hero = async () => {
  const data = await getData();
  const banner_content = [
    {
      id: 0,
      image: data?.image1,
    },
    {
      id: 1,
      image: data?.image2,
    },
    {
      id: 2,
      image: data?.image3,
    },
    {
      id: 3,
      image: data?.image4,
    },
  ];
  return (
    <section className=" bg-primary-50">
      <section className="flex flex-col justify-between">
        <div className="justify-between w-full mx-auto pt-28 padding md:flex max_w ">
          <div className="flex items-center w-full slideInLeft md:w-1/2 md:mr-5">
            <div className="max-w-[34.375rem] mb-8 md:mb-0">
              <h1 className="h1 ">{data?.title}</h1>
              <h3 className="mt-4 pb-7 pb:mb-0 h3 font-font_avenir">
                {data?.description}
              </h3>
              <Button
                textColor="text-neutral-50"
                title="Get Started"
                color="bg-primary-500"
                h_textColor="hover:text-primary-500"
                h_color="hover:bg-neutral-50"
                padding="px-8 py-5"
              />
            </div>
          </div>
          {/* slide for mobile device only */}
          <div className="md:hidden slideInRight">
            <Hero_slider banner_content={banner_content} />
          </div>
          <div className="items-center hidden slideInRight md:flex md:w-1/2">
            <HeroImage banner_content={banner_content} />
          </div>
        </div>
      </section>
      <Brands />
    </section>
  );
};

export default Hero;
