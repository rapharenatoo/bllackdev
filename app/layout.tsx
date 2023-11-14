import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "./components/header/Header";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { BackToTop } from "./components/back-to-top";
import { Toaster } from "./components/toaster";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

export const metadata = {
  title: {
    default: "Home",
    template: "%s | BDev",
  },
  icons: [
    {
      url: "/favicon.svg",
    },
  ],
};

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query PageInfoQuery {
    page(where: {slug: "home"}) {
      socials {
        url
        iconSvg
      }
    }
  }`;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 24 hours
  );
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { page: pageData } = await getPageData();

  return (
    <html lang='pt-BR' className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />

        <Header />
        {children}
        <ContactForm contactInfo={pageData.socials} />
        <Footer />
      </body>
    </html>
  );
}
