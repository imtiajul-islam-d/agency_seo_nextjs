// SEO property
export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/testimonials");
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
const Layout = ({ children }) => {
  return <section>{children}</section>;
};

export default Layout;
