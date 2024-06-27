import { ReactElement } from "react"

interface IHeroProps {
    children?: ReactElement | ReactElement[];
    className: string;
}

const Hero = ({ children, className }: IHeroProps) => {
    return (
        <section className={className}>
            {children}
        </section>
    )
}

export default Hero