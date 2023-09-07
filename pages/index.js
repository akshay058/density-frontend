import CommentsSlider from "@/Components/commentsSlider";
import EQbeatsIQ from "@/Components/eqBeatsIQ";
import IconsAnimation from "@/Components/iconsAnimation";
import Introduction from "@/Components/intoduction";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Introduction />
      <IconsAnimation />
      <EQbeatsIQ />
      <CommentsSlider />
    </>
  );
}
