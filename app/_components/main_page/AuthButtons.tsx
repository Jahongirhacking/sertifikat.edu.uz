"use client";

import { Button, Form, Input, Modal, Space, Tabs, TabsProps, Typography } from "antd";
import "./AuthButtons.scss";
import { useState } from "react";
import SignInForm from "../forms/SignInForm";
import SignUpForm from "../forms/SignUpForm";
import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";

type SMSFieldType = {
    code?: string;
};

const AuthButtons = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalSMS, setShowModalSMS] = useState(false);
    const [activeTab, setActiveTab] = useState<"signIn" | "signUp">("signIn")

    const handleModalSMS = () => {
        setShowModal(false);
        setShowModalSMS(true);
    }

    const items: TabsProps['items'] = [
        {
            key: 'signIn',
            label: <Typography.Title level={2}>Kirish</Typography.Title>,
            children: <SignInForm />,
        },
        {
            key: 'signUp',
            label: <Typography.Title level={2}>Ro‘yxatdan o‘tish</Typography.Title>,
            children: <SignUpForm
                showModalSMS={() => handleModalSMS()}
            />,
        },
    ];

    return (
        <div className="auth-btns hero__auth-btns">
            <Button
                className="btn login-btn"
                onClick={() => {
                    setActiveTab("signIn");
                    setShowModal(true)
                }}
            >Tizimga kirish</Button>
            <Button
                className="btn signup-btn"
                onClick={() => {
                    setActiveTab("signUp");
                    setShowModal(true)
                }}
            >Ro‘yxatdan o‘tish</Button>

            <Modal
                open={showModal}
                onCancel={() => setShowModal(false)}
                footer={null}
                className="signIn-signUp-modal"
            >
                <Tabs
                    activeKey={activeTab}
                    items={items}
                    onChange={(key: string) => setActiveTab(key as "signIn" | "signUp")}
                />
            </Modal>

            <Modal
                title={"SMS kodni tasdiqlash"}
                open={showModalSMS}
                onCancel={() => { setShowModalSMS(false) }}
                footer={null}
            >
                <p style={{ paddingBottom: "15px" }}>
                    SMS kodni <b>+998903718891</b> raqamiga yubordik. Telefon raqamingizni tasdiqlash uchun quyidagi maydonga kodni kiriting.
                </p>

                <Form
                    name="sms-code"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item<SMSFieldType>
                        label="SMS kod:"
                        name="code"
                        rules={[{ required: true, message: 'Iltimos SMS kod kiriting!' }]}
                    >
                        <Input placeholder="SMS kodni kiriting" />
                    </Form.Item>

                    <Link href="#" style={{ display: "inline-block", paddingBottom: "15px", color: "#1677FF" }}>
                        SMS kodni qayta yuborish
                    </Link>

                    <Space direction="vertical" >
                        <Link href="/cabinet">
                            <Button
                                onClick={() => {
                                    setShowModalSMS(true);
                                    setShowModal(false);
                                }}
                                type="primary"
                                htmlType="submit"
                            >
                                Tasdiqlash
                            </Button>
                        </Link>
                        <Button disabled>
                            <LeftOutlined />
                            <span>Orqaga qaytish</span>
                        </Button>
                    </Space>
                </Form>
            </Modal>
        </div>
    )
}

export default AuthButtons