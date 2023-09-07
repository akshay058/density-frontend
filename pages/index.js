import Introduction from "@/Components/intoduction";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Introduction />
    </>
  );
}
