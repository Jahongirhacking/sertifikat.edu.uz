"use client";

import { Button, Form, Input, Modal, Space, Tabs, TabsProps, Typography } from "antd";
import "./AuthButtons.scss";
import { useState } from "react";
import SignInForm from "../forms/SignInForm";
import SignUpForm from "../forms/SignUpForm";
import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";
import ForeignerForm from "../forms/ForeignerForm";
import SuccessModal from "../SuccessModal";

type SMSFieldType = {
    code?: string;
};

const AuthButtons = () => {
    const [isOpenModalSign, setIsOpenModalSign] = useState(false);
    const [isOpenModalSMS, setIsOpenModalSMS] = useState(false);
    const [isOpenModalForeigner, setIsOpenModalForeigner] = useState(false);
    const [isOpenModalSuccess, setIsOpenModalSuccess] = useState(false);
    const [activeTab, setActiveTab] = useState<"signIn" | "signUp">("signIn")

    const handleModal = (value?: "sign" | "sms" | "foreigner" | "success") => {
        setIsOpenModalSign(value === "sign");
        setIsOpenModalForeigner(value === "foreigner");
        setIsOpenModalSMS(value === "sms");
        setIsOpenModalSuccess(value === "success");
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
                showModalSMS={() => handleModal("sms")}
                showModalForeigner={() => handleModal("foreigner")}
            />,
        },
    ];

    return (
        <div className="auth-btns hero__auth-btns">
            <Button
                className="btn login-btn"
                onClick={() => {
                    setActiveTab("signIn");
                    setIsOpenModalSign(true)
                }}
            >Tizimga kirish</Button>
            <Button
                className="btn signup-btn"
                onClick={() => {
                    setActiveTab("signUp");
                    setIsOpenModalSign(true)
                }}
            >Ro‘yxatdan o‘tish</Button>

            <Modal
                open={isOpenModalSign}
                onCancel={() => setIsOpenModalSign(false)}
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
                title={<Typography.Title level={3}>Chet el fuqarolari uchun ro‘yxatdan o‘tish</Typography.Title>}
                open={isOpenModalForeigner}
                onCancel={() => setIsOpenModalForeigner(false)}
                footer={null}
                className="foreigner-modal"
            >
                <ForeignerForm showModalSMS={() => handleModal("sms")} />
            </Modal>


            {/* Finish Modal */}
            <SuccessModal
                isOpenModal={isOpenModalSuccess}
                successText="Siz muvaffaqiyatli ro‘yxatdan o‘tdingiz!"
                btn={<>
                    <Link href="/cabinet">
                        <Button className="continue-btn" type="primary">Davom ettirish</Button>
                    </Link>
                    <Button disabled>
                        Bosh sahifaga o‘tish
                    </Button>
                </>
                }
            />

            <Modal
                title={"SMS kodni tasdiqlash"}
                open={isOpenModalSMS}
                onCancel={() => { setIsOpenModalSMS(false) }}
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
                        <Button
                            onClick={() => handleModal("success")}
                            type="primary"
                            htmlType="submit"
                        >
                            Tasdiqlash
                        </Button>
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