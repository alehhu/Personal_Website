import { Montserrat, Source_Code_Pro, Open_Sans } from "next/font/google";
import './global.css'

const montserrat = Montserrat({ subsets: ["latin"] });
const source_code_pro = Source_Code_Pro({subsets: ["latin"]});

export const metadata = {
  title: "Ale's portfolio",
  description: "Portfolio website to showcase my personal projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
