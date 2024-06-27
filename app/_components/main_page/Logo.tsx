import Image from 'next/image'
import LogoImage from "@/app/_assets/images/main/vazirlik-logo-white.png";
import style from "./Logo.module.scss";

const Logo = () => {
    return (
        <div className={style.logo}>
            <a href='./'>
                <Image
                    src={LogoImage}
                    alt='Vazirlik logotip rasmi'
                />
                <span>sertifikat.edu.uz</span>
            </a>
        </div>
    )
}

export default Logo