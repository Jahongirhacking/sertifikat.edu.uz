import type { Metadata } from "next";
import "@/app/_styles/cabinet.scss";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import { IAnchor } from "@/app/_types/main_page/INavbar";

export const metadata: Metadata = {
    title: "Mening Kabinetim - Sertifikat.edu.uz",
    description: "Tan olingan xorijiy tillar hamda umumta’lim fаnlаri bo‘yicha xalqaro sertifikatlar bazasi",
};

const anchors: IAnchor[] = [
    {
        text: "Ro‘yxatdan o‘tish bosqichlar",
        link: "registration-steps"
    },
    {
        text: "Sertifikatlar ro‘yxati",
        link: "certificates",
    },
    {
        text: "Savol-javob",
        link: "faq",
    },
    {
        text: "Bog‘lanish",
        link: "contact"
    }
]

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
            <body>
                <div className="cabinet">
                    <div className="container cabinet__container">
                        <Navbar
                            theme="light"
                            isSignedIn={true}
                        />
                        {children}
                    </div>
                    <Footer id="contact" className="contact" />
                </div>
            </body>
        </html>
    );
}
