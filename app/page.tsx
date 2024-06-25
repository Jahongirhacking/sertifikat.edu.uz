import { Button } from "antd";
import { Logo, Navbar, DropdownLang, Hero } from "./_components/main_page";
import { IAnchor } from "./_types/main_page/INavbar";
import Image from "next/image";
import BadgeIcon from "@/app/_assets/images/main/award.png";

export default function MainPage() {
  const anchors: IAnchor[] = [
    {
      text: "Ro‘yxatdan o‘tish bosqichlar",
      link: "#registration-steps"
    },
    {
      text: "Sertifikatlar ro‘yxati",
      link: "#certificates",
    },
    {
      text: "Savol-javob",
      link: "#faq",
    },
    {
      text: "Bog‘lanish",
      link: "#contact"
    }
  ]

  return (
    <div className="main-page">
      <div className="container main-page__container">
        <Navbar
          Logo={Logo}
          anchors={anchors}
        >
          <DropdownLang langs={["O‘zbekcha", "Русский", "English", "Deutsch"]} />
          <Button className="one-id-btn">One ID orqali kirish</Button>
        </Navbar>

        <Hero>
          <h1>O‘zbekiston Respublikasida</h1>
          <h2>Tan olingan
            <Image
              src={BadgeIcon}
              alt="rasmiy tasdiqlangan"
            />
            xorijiy tillar hamda umumta’lim fаnlаri bo‘yicha xalqaro sertifikatlar bazasi
          </h2>
          <p>
            O‘zbekiston Respublikasida tan olingan xorijiy tillar hamda umumta’lim fаnlаri bo‘yicha xalqaro sertifikatlar bazasi
          </p>
          <div className="auth-btns hero__auth-btns">
            <Button className="btn login-btn">Tizimga kirish</Button>
            <Button className="btn signup-btn">Ro‘yxatdan o‘tish</Button>
          </div>
        </Hero>

      </div>
    </div>
  );
}
