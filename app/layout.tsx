import type { Metadata } from "next";
import "@/app/_styles/globals.scss";

export const metadata: Metadata = {
  title: "Sertifikat.edu.uz",
  description: "Tan olingan xorijiy tillar hamda umumta’lim fаnlаri bo‘yicha xalqaro sertifikatlar bazasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
