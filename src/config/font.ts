import { DM_Serif_Text, Inter, Roboto_Slab } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const titleFont = Roboto_Slab({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const homeTitleFont = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
});
