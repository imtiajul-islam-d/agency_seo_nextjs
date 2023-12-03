"use client";

import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
const SiteNav = () => {
  const [dropdown, setDropdown] = useState(false);
  const current = usePathname();

  const nav = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Team",
      link: "/team",
    },
    {
      id: 3,
      title: "Service",
      link: "/services",
    },
    {
      id: 4,
      title: "Project",
      link: "/projects",
    },
    {
      id: 5,
      title: "Testimonials",
      link: "/testimonials",
    },
  ];
  return (
    <header className="absolute top-0 left-0 flex items-center w-full h-24 my-2 font-font_poppins">
      <div className="w-full mx-auto padding max_w ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-secondary-900" href="/">
              <Image
                src={"/images/logo_agency.png"}
                width={100}
                height={750}
                alt="Logo"
                className="w-auto h-16 2xl:h-20"
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX/////bm4MAFj/e3v/bGz/xcX/ZmammrEAAE8AAFgAAFb/cG4zMGjkYmv1aW3yaG0yE1s3FVshC1kTA1nSWmmiRWTXXGoaB1n/xMT/dHTEVGjhYWu1TWbQWWldJl2/UmeqSWVDGltoK15SIV2bQmR4MmAoD1qCN2E5F1pIHVySPmLrZWzVancpLWjwb3QbAFAkImG+qbqtorerJA20AAAEMElEQVR4nO3Z2XbaMBSF4VhJ2grVQEJCBkozNGkzdH7/hysCQwBLsrCPxXbX/i96RRq+pXNsQw4OGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhj7L/p+PK4C10e1xZevetGV7WFh0dZFzo6pJBC9CikED8KKcSPQgrxo5BC/CikED8KKcSPQgrxgxMaI/wfQgmN6Z9dX0+MqBJIaAbnJz2tdU9/vsnkjDhCczvTqXla303FiDjC+6VvYTyXIsIIv6z5bL2HWGLF60CE5nELODvG6yiimVQMNIbQTEtApb/2Y34yH+mzIBFEuD2jc2LEKpr8dHZ9GodeiCEcO4BKn0QAR9pelkJECKF5cQmVnkQBLTEwqBjCe7fwNjymdkSXNxc/EUKYPbuF4RvGGzA4qBjCuxrC5YhWnSKG0HUprRCaXG38kJcIIfTt4Se/cH1Ew4OKITx3C18DwIvyQ5CbCCHMcuf98DkAHLkeEZyDiiF0jql/SF0n6CViCLO8V367T74Xl3cwNKggwvImaj3xHOH2VbSCCCLMzDe99VZvvEDXDvoHFUWYmYfNz/i+T4f+EfUQYYSZGQ8XX9TM/tX3g5rA8qDiCDNjpo9PI61Pn19y/1U0NKJOIpBw/m3wa54P/F+XxgAtcf2LDShhVdUj6tjFLgl9N/rwoHZIGDeipVPsjjD+BDeJnRHG7mBpULsiDD2qhU+xI8LdgaubRjeEu47o+inuR2hevU8tbuAuF5l14mwX9yI0g6H3s5ETGH+bKJ/iXoT92TP2KPoU657ggjg16YWmf2L/2HAaSay3g2/EcXKhHdH571ZRg1p/RAti73ti4RI4+90xg9oUqFTvR1qh6Q9X71hfVBKbjehC+DGpcLGD0UQBYGLh24gWxPAuNh/R5ML+cOsdaxU4xTqPavsVbo5oQfTfNCRGNK1we0QLom8Xm9zo9yN0A72DKrKDaYWlHVwRXacodYLphK4dXBHLuyi0gwmFvhEtiNs3DZmraEqh8Y7okrhximI7mEwYGtGCuL6LgiOaSFgN3CDKAlMIwzu4Ii53UXRE0wgrdvCNOD9FaWD7wpgRLYj2piE8ogmEcSNaEEcTuRt9KuEuQHu5mYoD2xZG7uCKqMWB7Qrjd7DF2hTuNqIdFFY9qiWqPSHEiKoWhSjA1oQYO2hrS4ixg7Z2hDAjqloS4oyoakcIBWxDCHIfXCYvRNpBm7gQa0SVvBBsRJW4EG1ElbQQbkSVsBARKCuE20GboBBwB21yQsgRVYJCvNtEkZQQdESVmBAXKCRE3UGbjBB1B20SQuARVSJC5BFVEkJwoIAQeQdtTYXYO2hrKEQfUdVUCPuotlYjIf6IqmbCrAvARkL8HbQ1EP789aET/a4t/PO+G/2tLWSMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDG4/gGB87JIiPfCQQAAAABJRU5ErkJggg=="
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-4">
            <nav
              aria-label="Global"
              className={`transition-all ${
                dropdown
                  ? "padding py-10 flex items-center justify-center flex-col  top-20 lg:top-0 backdrop-blur-3xl  left-0 absolute z-50 lg:relative bg-[rgba(255,255,255,0.77)] lg:bg-transparent w-full"
                  : "-top-96 lg:top-0 w-full lg:relative left-0 absolute"
              }`}
            >
              <ul className="space-y-5 text-sm text-center lg:items-center lg:flex gap-7 sm:pl-4 lg:space-y-0">
                {nav?.map((item) => (
                  <li key={item?.id}>
                    <Link
                      onClick={() => setDropdown((e) => !e)}
                      className={`text-sm lg:text-base font-medium transition   ${
                        current === item?.link
                          ? "text-primary-500 hover:text-neutral-500"
                          : "text-neutral-500 hover:text-primary-500"
                      }`}
                      href={item?.link}
                    >
                      {item?.title}
                    </Link>
                  </li>
                ))}
                <li className="sm:hidden ">
                  <div className="my-5 space-y-4 sm:flex sm:gap-4">
                    <Button
                      textColor="text-primary-500"
                      title="Login"
                      color="bg-neutral-50"
                      h_textColor="hover:text-neutral-50"
                      h_color="hover:bg-primary-500"
                    />
                    <div className="sm:flex">
                      <Button
                        textColor="text-neutral-50"
                        title="Register"
                        color="bg-primary-500"
                        h_textColor="hover:text-primary-500"
                        h_color="hover:bg-neutral-50"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-4">
                <Button
                  textColor="text-primary-500"
                  title="Login"
                  color="bg-neutral-50"
                  h_textColor="hover:text-neutral-50"
                  h_color="hover:bg-primary-500"
                />
                <div className="hidden sm:flex">
                  <Button
                    textColor="text-neutral-50"
                    title="Register"
                    color="bg-primary-500"
                    h_textColor="hover:text-primary-500"
                    h_color="hover:bg-neutral-50"
                  />
                </div>
              </div>

              <div className="block lg:hidden">
                <button
                  onClick={() => setDropdown((e) => !e)}
                  className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
                >
                  {dropdown ? (
                    <p className="w-5 h-5">X</p>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteNav;
