import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/SocialLink");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
}
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
const SiteFooter = async () => {
  const data = await getData();

  return (
    <footer className="py-16 text-white bg-neutral-800 font-font_avenir">
      <div className="grid grid-cols-1 gap-5 mx-auto max_w padding lg:grid-cols-2">
        <div>
          <Link className="block text-secondary-900" href="/">
            <Image
              src={"/images/logo_agency.png"}
              width={100}
              height={750}
              alt="Logo"
              className="w-auto h-16 2xl:h-20"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX/////bm4MAFj/e3v/bGz/xcX/ZmammrEAAE8AAFgAAFb/cG4zMGjkYmv1aW3yaG0yE1s3FVshC1kTA1nSWmmiRWTXXGoaB1n/xMT/dHTEVGjhYWu1TWbQWWldJl2/UmeqSWVDGltoK15SIV2bQmR4MmAoD1qCN2E5F1pIHVySPmLrZWzVancpLWjwb3QbAFAkImG+qbqtorerJA20AAAEMElEQVR4nO3Z2XbaMBSF4VhJ2grVQEJCBkozNGkzdH7/hysCQwBLsrCPxXbX/i96RRq+pXNsQw4OGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhj7L/p+PK4C10e1xZevetGV7WFh0dZFzo6pJBC9CikED8KKcSPQgrxo5BC/CikED8KKcSPQgrxgxMaI/wfQgmN6Z9dX0+MqBJIaAbnJz2tdU9/vsnkjDhCczvTqXla303FiDjC+6VvYTyXIsIIv6z5bL2HWGLF60CE5nELODvG6yiimVQMNIbQTEtApb/2Y34yH+mzIBFEuD2jc2LEKpr8dHZ9GodeiCEcO4BKn0QAR9pelkJECKF5cQmVnkQBLTEwqBjCe7fwNjymdkSXNxc/EUKYPbuF4RvGGzA4qBjCuxrC5YhWnSKG0HUprRCaXG38kJcIIfTt4Se/cH1Ew4OKITx3C18DwIvyQ5CbCCHMcuf98DkAHLkeEZyDiiF0jql/SF0n6CViCLO8V367T74Xl3cwNKggwvImaj3xHOH2VbSCCCLMzDe99VZvvEDXDvoHFUWYmYfNz/i+T4f+EfUQYYSZGQ8XX9TM/tX3g5rA8qDiCDNjpo9PI61Pn19y/1U0NKJOIpBw/m3wa54P/F+XxgAtcf2LDShhVdUj6tjFLgl9N/rwoHZIGDeipVPsjjD+BDeJnRHG7mBpULsiDD2qhU+xI8LdgaubRjeEu47o+inuR2hevU8tbuAuF5l14mwX9yI0g6H3s5ETGH+bKJ/iXoT92TP2KPoU657ggjg16YWmf2L/2HAaSay3g2/EcXKhHdH571ZRg1p/RAti73ti4RI4+90xg9oUqFTvR1qh6Q9X71hfVBKbjehC+DGpcLGD0UQBYGLh24gWxPAuNh/R5ML+cOsdaxU4xTqPavsVbo5oQfTfNCRGNK1we0QLom8Xm9zo9yN0A72DKrKDaYWlHVwRXacodYLphK4dXBHLuyi0gwmFvhEtiNs3DZmraEqh8Y7okrhximI7mEwYGtGCuL6LgiOaSFgN3CDKAlMIwzu4Ii53UXRE0wgrdvCNOD9FaWD7wpgRLYj2piE8ogmEcSNaEEcTuRt9KuEuQHu5mYoD2xZG7uCKqMWB7Qrjd7DF2hTuNqIdFFY9qiWqPSHEiKoWhSjA1oQYO2hrS4ixg7Z2hDAjqloS4oyoakcIBWxDCHIfXCYvRNpBm7gQa0SVvBBsRJW4EG1ElbQQbkSVsBARKCuE20GboBBwB21yQsgRVYJCvNtEkZQQdESVmBAXKCRE3UGbjBB1B20SQuARVSJC5BFVEkJwoIAQeQdtTYXYO2hrKEQfUdVUCPuotlYjIf6IqmbCrAvARkL8HbQ1EP789aET/a4t/PO+G/2tLWSMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDG4/gGB87JIiPfCQQAAAABJRU5ErkJggg=="
            />
          </Link>
          <p className="text-xl font-font_avenir max-w-[21.5rem]">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>
          <div>
            <ul className="flex items-center space-x-6 mt-4 text-white max-w-[21.5rem]">
              {data?.map((item) => (
                <li className="p-2 rounded-full bg-primary-400" key={item?.id}>
                  {item?.name === "facebook" && <FaFacebookF />}
                  {item?.name === "twitter" && <IoLogoTwitter />}
                  {item?.name === "instagram" && <FaSquareInstagram />}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="justify-between space-y-5 lg:space-y-0 lg:flex lg:mt-6">
          <div>
            <ul className="space-y-3 lg:space-y-4">
              <li className="h3 font-font_poppins">Quick Links</li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/services">Service</Link>
              </li>
              <li>
                <Link href="/projects">Project</Link>
              </li>
              <li>
                <Link href="/testimonials">Testimonials</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[16.125rem]">
            <h3 className="h3 font-font_poppins">Address</h3>
            <address className="mt-3">
              Design Agency Head Office. Airport Road United Arab Emirate
            </address>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max_w padding">
        <span>Copyright Design Agency 2023</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
