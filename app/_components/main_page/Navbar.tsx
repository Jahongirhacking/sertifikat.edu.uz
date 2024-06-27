import INavbar, { IAnchor } from "@/app/_types/main_page/INavbar";


const Navbar = ({ Logo, anchors, children }: INavbar) => {
    return (
        <nav className="nav main-page__nav">
            <Logo />
            <ul className="anchors main-page__anchors">
                {anchors.map((anchor: IAnchor, index) => (
                    <li key={index}>
                        <a href={`#${anchor.link}`}>{anchor.text}</a>
                    </li>
                ))}
            </ul>
            <ul className="extra main-page__extra">
                {children}
            </ul>
        </nav>
    )
}

export default Navbar;