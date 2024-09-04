import Header from "@/components/component/home/header";
import About from "@/components/component/home/about";
import LatestProjects from "@/components/component/projects/projectLates";
import Contact from "@/components/component/home/contact";
import NavBar from "@/components/component/navBar";
import Script from "next/script";

export default function Home() {
  const GTM_ID = "GTM-TR8CKLHN";
  return (
    <>
      <Script id="GTM" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <main className="animate-fade-in-down flex flex-col">
        <Header />
        <About />
        <LatestProjects headingLevel="h4" title="Latest Project" />
        <Contact />
      </main>
      <NavBar />
    </>
  );
}
