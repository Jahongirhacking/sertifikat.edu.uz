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
        url: '/vazirlik-logo-blue.png',
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
