import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "../assets/styles/globals.css";
import SiteNav from "@/components/Shared/SiteNav";
import SiteFooter from "@/components/Shared/SiteFooter";
// SEO property
// metadatabase TODO:
export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/home");
  const JSON = await res.json();
  return {
    title: JSON[0]["title"],
    description: JSON[0]["description"],
    keywords: JSON[0]["keywords"],
    openGraph: {
      images: JSON[0]["image"],
    },
    metadataBase: process.env.BASE_URL,
  };
}
// google font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--poppins-font",
});
// local font
const avenir = localFont({
  src: "../font/AvenirLTStd-Roman.otf",
  variable: "--font-avenir",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${avenir.variable}`}>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
