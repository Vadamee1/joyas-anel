import { DM_Serif_Text, Inter, Montserrat_Alternates } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const titleFont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const homeTitleFont = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
});
