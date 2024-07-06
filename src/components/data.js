import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "What We Offer ",
  desc: "Arscon Connect app offers numerous benefits that enhance user experience, improve business visibility, and streamline operations.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Improved Business Visibility",
      desc: "Optimize business listings for search engines, improving their visibility and ranking in search results.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Enhanced Marketing and Advertising",
      desc: "Create targeted ad campaigns based on user demographics, behavior, and preferences, leading to higher conversion rates.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Intelligent Search",
      desc: "Our State of the Art AI powered Search provides accurate and relevant search results by understanding user intent and context.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "There's More..",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "User-Friendly Interface",
      desc: "Enjoy a clean, intuitive interface with interactive features for a seamless user experience.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Personalized Recommendations",
      desc: "Get recommendations based on your preferences, search history, and behavior patterns.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Secure and Verified",
      desc: "our algorithms detect and prevent fraudulent activities, ensuring a safe and trustworthy environment.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
