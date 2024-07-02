"use client";

import Applications from "@/app/_components/cabinet/Applications";
import Certificates from "@/app/_components/cabinet/Certificates";
import PersonalInfo from "@/app/_components/cabinet/PersonalInfo";
import { Button, Col, Divider, Row, Tabs } from "antd"
import ITabItem from "@/app/_types/cabinet/ITabItem";
import { CarryOutOutlined, FileDoneOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";

const Cabinet = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabItems: ITabItem[] = [
        {
            key: '0',
            label: <span className="menu-text">
                Shaxsiy ma’lumotlar
            </span>,
            icon: <UserOutlined />,
            children: <PersonalInfo />,
        },
        {
            key: '1',
            label: <span className="menu-text">
                Arizalarim
            </span>,
            icon: <CarryOutOutlined />,
            children: <Applications />,
        },
        {
            key: '2',
            label: <span className="menu-text">
                Sertifikatlarim
            </span>,
            icon: <FileDoneOutlined />,
            children: <Certificates />,
        },
    ]

    return (
        <main className="main">
            <h2>Shaxsiy kabinet</h2>
            <Row>
                <Col span={4} className="menu-items">
                    {
                        tabItems.map((item) => (
                            <Button onClick={() => setActiveTab(Number(item.key))} key={item.key} >
                                {item.icon}
                                {item.label}
                            </Button>)
                        )
                    }
                    <Divider />
                    <Link href="/">
                        <Button danger>
                            <LogoutOutlined />
                            <span className="menu-text">Chiqish</span>
                        </Button>
                    </Link >
                </Col>
                <Col span={19}>
                    {tabItems[activeTab].children}
                </Col>
            </Row>
        </main>
    )
}

export default Cabinet