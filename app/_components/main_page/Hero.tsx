import Image from "next/image";
import BadgeIcon from "@/app/_assets/images/main/award.png"
import AuthButtons from "./AuthButtons";

interface IHeroProps {
    className: string;
}

const Hero = ({ className }: IHeroProps) => {
    return (
        <section className={className}>
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
            {/* Login and Signup Buttons */}
            <AuthButtons />
        </section>
    )
}

export default Hero