import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "Dum Chronicles - Slow Cooked Indian Dining in Pune Since 2004",
  description:"Experience the finest slow cooked royal Indian cuisine at Dum Chronicles, Pune. Led by our head chef with 20 years of expertise. Reserve your table today.",
  keywords:"dum chronicles, indian restaurant pune, mughlai cuisine pune, north indian restaurant fc road, best biryani pune, fine dining pune",
  authors: [{ name: "Dum Chronicles" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg",},
  openGraph: {
    title: "Dum Chronicles - Slow Cooked. Deeply Rooted. Purely Indian.",
    description:"Award-winning slow cooked Indian dining in Pune. Open all 7 days. Lunch 12–3:30 PM | Dinner 7–11:30 PM.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-body bg-bg text-text antialiased">
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  );
}