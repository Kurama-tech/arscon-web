import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Contactus } from "@/components/Contactus";

import { benefitOne, benefitTwo } from "@/components/data";
import Head from "next/head";
export default function Home() {
  return (
    <Container>
      <Head>
        <title>Arscon - AI-Powered Business Directory</title>
        <meta name="title" content="Arscon - AI-Powered Business Directory" />
        <meta name="description" content="Discover, connect, and manage business interactions effortlessly with Arscon. Harness the power of AI for personalized recommendations, intelligent search, and seamless integration." />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arscon.co.in/" />
        <meta property="og:title" content="Arscon - AI-Powered Business Directory" />
        <meta property="og:description" content="Discover, connect, and manage business interactions effortlessly with Arscon. Harness the power of AI for personalized recommendations, intelligent search, and seamless integration." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.arscon.co.in/" />
        <meta property="twitter:title" content="Arscon - AI-Powered Business Directory" />
        <meta property="twitter:description" content="Discover, connect, and manage business interactions effortlessly with Arscon. Harness the power of AI for personalized recommendations, intelligent search, and seamless integration." />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Arscon, business directory, AI-powered directory, business discovery, intelligent search, personalized recommendations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="home"><Hero /></div>
      <div id="features">
        <SectionTitle
          preTitle="Arscon Benefits"
          title=" Why should you use Arscon Connect">
          Arscon is a cutting-edge business directory app that uses AI to revolutionize business discovery and management. It offers personalized recommendations, intelligent search, and seamless integration for an unparalleled user experience.
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </div>


      {/*<SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

       <Video videoId="fZ0D0cnR88E" /> */}

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Discover how Arscon Connect has transformed business operations for our users. Our AI-powered directory app enhances visibility, boosts customer engagement, and provides valuable insights. Read on to see the impact on their professional lives.
      </SectionTitle>

      <Testimonials />


      <div id="contact">

        <SectionTitle
          preTitle="Contact us"
          title="Reach out to us at any time"

        />


        <Contactus /></div>
      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq /> */}
      <Cta />
    </Container>
  );
}
