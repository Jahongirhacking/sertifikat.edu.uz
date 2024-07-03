"use client";

import INavbar, { IAnchor } from "@/app/_types/main_page/INavbar";
import "./Navbar.scss";
import Logo from "./Logo";
import { DropdownLang } from "./main_page";
import { Button, Divider, Drawer, Dropdown, Flex, MenuProps } from "antd";
import Link from "next/link";
import { anchors } from "@/app/_utils/staticVariables";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

const Navbar = ({ theme, isSignedIn, className }: INavbar) => {
    const [open, setOpen] = useState(false);
    return (
        <nav className={`nav nav-${theme} ${className}`}>
            <Logo theme={theme} />
            <Anchors />
            <ul className="extra main-page__extra">
                <Buttons isSignedIn={isSignedIn} />

                {/* Mobile Menu */}

                <Button
                    className="drawer-btn"
                    onClick={() => { setOpen((prev) => !prev) }}>
                    <MenuOutlined />
                </Button>

                <Drawer
                    title="Menyudan Tanlash"
                    onClose={() => { setOpen(false) }}
                    open={open}
                    placement="left"
                >
                    <div onClick={() => { setOpen(false) }}>
                        <Anchors />
                    </div>
                    <Divider />
                    <Buttons isSignedIn={isSignedIn} />
                </Drawer>
            </ul>
        </nav>
    )
}


const Anchors = () => {
    return (
        <ul className="anchors main-page__anchors">
            {anchors.map((anchor: IAnchor, index) => (
                <li key={index}>
                    <a href={`#${anchor.link}`}>{anchor.text}</a>
                </li>
            ))}
        </ul>
    )
}

const Buttons = ({ isSignedIn }: { isSignedIn: boolean }) => {
    return (
        <Flex className="buttons" gap={12}>
            <DropdownLang langs={["O‘zbekcha", "Русский", "English", "Deutsch"]} />
            {
                isSignedIn
                    ? <Link href="/cabinet">
                        <Button className="profile-btn">AA</Button>
                    </Link>
                    : <Link href="/cabinet">
                        <Button className="one-id-btn">One ID orqali kirish</Button>
                    </Link>
            }
        </Flex>
    )
}

export default Navbar;