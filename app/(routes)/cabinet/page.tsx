"use client";

import Applications from "@/app/_components/cabinet/Applications";
import Certificates from "@/app/_components/cabinet/Certificates";
import PersonalInfo from "@/app/_components/cabinet/PersonalInfo";
import { Col, Divider, Menu, Row } from "antd"
import ITabItem from "@/app/_types/cabinet/ITabItem";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faBookOpen, faFolder, faUser } from "@fortawesome/free-solid-svg-icons";

const Cabinet = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabItems: ITabItem[] = [
        {
            key: '0',
            label: <span className="menu-text">
                Shaxsiy ma’lumotlar
            </span>,
            icon: <FontAwesomeIcon icon={faUser} />,
            children: <PersonalInfo />,
        },
        {
            key: '1',
            label: <span className="menu-text">
                Arizalarim
            </span>,
            icon: <FontAwesomeIcon icon={faFolder} />,
            children: <Applications />,
        },
        {
            key: '2',
            label: <span className="menu-text">
                Sertifikatlarim
            </span>,
            icon: <FontAwesomeIcon icon={faBookOpen} />,
            children: <Certificates />,
        },
    ]

    return (
        <main className="main">
            <h2>Shaxsiy kabinet</h2>
            <Row>
                <Col span={4} className="menu-items">
                    <Menu
                        onClick={(e) => setActiveTab(Number(e.key))}
                        selectedKeys={[activeTab.toString()]}
                        mode="vertical"
                        items={tabItems.map((item) => ({ ...item, children: null }))}
                    />
                    <Divider />
                    <Menu
                        className="sign-out-btn"
                        mode="vertical"
                        items={[{
                            label: (
                                <Link href="/">
                                    <span className="menu-text">Chiqish</span>
                                </Link >
                            ),
                            key: '3',
                            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        }]}
                    />
                </Col>
                <Col span={19}>
                    {tabItems[activeTab].children}
                </Col>
            </Row>
        </main>
    )
}

export default Cabinet