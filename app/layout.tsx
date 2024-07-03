import type { Metadata } from "next";
import "@/app/_styles/main.scss";

export const metadata: Metadata = {
  title: "Asosiy Sahifa - Sertifikat.edu.uz",
  description: "Tan olingan xorijiy tillar hamda umumta’lim fаnlаri bo‘yicha xalqaro sertifikatlar bazasi",
  openGraph: {
    url: "sertifikat-edu.netlify.app",
    title: "Asosiy Sahifa - Sertifikat.edu.uz",
    images: [
      {
        url: 'https://static9.tgstat.ru/channels/_0/44/4470350d7805a727e882371013d98dfa.jpg',
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <head>
        <link rel="icon" href="./vazirlik-logo-white.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
