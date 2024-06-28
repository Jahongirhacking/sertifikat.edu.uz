import Image from 'next/image'
import LogoImageDarkTheme from "@/app/_assets/images/main/vazirlik-logo-white.png";
import LogoImageLightTheme from "@/app/_assets/images/main/vazirlik-logo-blue.png";
import style from "./Logo.module.scss";
import Link from 'next/link';

const Logo = ({ theme }: { theme?: "light" | "dark" }) => {
    return (
        <div className={style.logo}>
            <Link href='./'>
                <Image
                    src={theme === "light" ? LogoImageLightTheme : LogoImageDarkTheme}
                    alt='Vazirlik logotip rasmi'
                />
                <span>sertifikat.edu.uz</span>
            </Link>
        </div>
    )
}

export default Logo