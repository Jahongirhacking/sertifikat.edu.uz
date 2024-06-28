import "./Footer.scss";
import Image from "next/image";
import Logo from "./Logo";
import * as SocialIcons from "@/app/_assets/images/main/social_networks"

interface IFooter {
    id: string;
    className: string;
}

const Footer = ({ id, className }: IFooter) => {
    return (
        <footer id={id} className={className}>
            <div className="footer__container">
                <div className="contact-container">
                    <div className="logo-container">
                        <Logo />
                        <p>Portalda eʼlon qilingan materiallardan nusxa koʻchirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi
                            bilan amalga oshirilishi mumkin.</p>
                    </div>
                    <div className="contact-details">
                        <div className="phone">
                            <a href="tel:1006">1006</a>
                            <p>Portalda eʼlon qilingan materiallardan nusxa koʻchirish, tarqatish va boshqa shakllarda</p>
                        </div>
                        <div className="social">
                            <div className="telegram">
                                <a href="https://t.me/pedagog_supportbot">@pedagog_supportbot</a>
                                <p>Portalda eʼlon qilingan materiallardan nusxa koʻchirish, tarqatish va boshqa shakllarda</p>
                            </div>
                            <div className="icons">
                                {["instagram", "facebook", "youtube"].map(key => (
                                    <a href="#" key={key}>
                                        <Image
                                            src={SocialIcons[key as ("instagram" | "facebook" | "youtube")]}
                                            alt={`${key} icon`}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__info">
                    <span>© 2024 pedagog.edu.uz</span>
                    <a href="#">Raqamli ta’lim texnologiyalarini rivojlantirish markazi</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer