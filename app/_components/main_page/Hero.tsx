import { ReactElement } from "react"

interface IHeroProps {
    children?: ReactElement | ReactElement[];
}

const Hero = ({ children }: IHeroProps) => {
    return (
        <section className="hero main-page__hero">
            {children}
        </section>
    )
}

export default Hero