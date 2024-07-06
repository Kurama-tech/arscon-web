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
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Arscon Benefits"
        title=" Why should you use Arscon Connect">
        Arscon is a cutting-edge business directory app designed to
        revolutionize the way you discover, connect with, and manage business
        interactions. Harnessing the power of artificial intelligence,
        BusinessFinder AI offers personalized recommendations, intelligent
        search capabilities, and seamless integration with various services to
        provide an unparalleled user experience.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

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

      <Contactus />
      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq /> */}
      <Cta />
    </Container>
  );
}
