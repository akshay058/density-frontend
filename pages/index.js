import BestEqText from "@/Components/bestEqText";
import CommentsSlider from "@/Components/commentsSlider";
import EQbeatsIQ from "@/Components/eqBeatsIQ";
import Footer from "@/Components/footer";
import IconsAnimation from "@/Components/iconsAnimation";
import Introduction from "@/Components/intoduction";
import RateSkillSlider from "@/Components/rateSkillSlider";
import SelfImproveSlider from "@/Components/selfImproveSlider";
import Vacancies from "@/Components/vacancies";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Introduction />
      <IconsAnimation />
      <EQbeatsIQ />
      <CommentsSlider />
      <SelfImproveSlider />
      <BestEqText />
      <RateSkillSlider />
      <Vacancies />
      <Footer />
    </>
  );
}
