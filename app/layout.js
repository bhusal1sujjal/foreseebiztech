import { IBM_Plex_Sans, Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";

const iBM_Plex_Sans = IBM_Plex_Sans({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrument_Sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Foresee Biztech & Career Consultancy P.Ltd",
  description: "Trusted Career Consulting Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${iBM_Plex_Sans.className} ${inter.className} ${instrument_Sans.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme`}>
        {children}
      </body>
    </html>
  );
}
