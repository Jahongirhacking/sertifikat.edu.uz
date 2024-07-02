"use client";

import { Button, Divider, Form, FormProps, Input, Radio, RadioChangeEvent, Space } from "antd";
import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";
import { useState } from "react";

type SignUpPassportFieldType = {
    phone?: string;
    jshshir?: string;
    passport?: string;
};

type SignUpBirthCertificateFieldType = {
    phone?: string;
    birthCertificate?: string;
};

const onFinish: FormProps<SignUpPassportFieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<SignUpPassportFieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const BirthCertificateForm = ({
    activeTab,
    setActiveTab,
    setShowModalSMS,
    setShowModal
}: {
    activeTab: string,
    setActiveTab: (value: string) => void,
    setShowModalSMS: (value: boolean) => void,
    setShowModal: (value: boolean) => void
}) => {
    return (
        <>
            <Radio.Group
                defaultValue={activeTab}
                options={[{
                    label: "Voyaga yetgan UZB fuqarosi",
                    value: "passport",
                },
                {
                    label: "Maktab o‘quvchisi",
                    value: "birth-certificate"
                }]}
                onChange={(e: RadioChangeEvent) => {
                    setActiveTab(e.target.value as ("passport" | "birth-certificate"))
                }}
            />

            <Divider />

            <Form.Item<SignUpBirthCertificateFieldType>
                label="Telefon raqam:"
                name="phone"
                rules={[{ required: true, message: 'Iltimos telefon raqamingizni kiriting!' }]}
            >
                <Input placeholder="+998" />
            </Form.Item>

            <Form.Item<SignUpBirthCertificateFieldType>
                label="Tug’ilganlik guvohnomasi seriya va raqami:"
                name="birthCertificate"
                rules={[{ required: true, message: 'Iltimos JSHSHIR raqamingizni kiriting!' }]}
            >
                <Input placeholder="JSHSHIRni kiriting" />
            </Form.Item>

            <Form.Item>
                <Space direction="vertical" >
                    <Button
                        onClick={() => {
                            setShowModalSMS(true);
                            setShowModal(false);
                        }}
                        type="primary"
                        htmlType="submit"
                    >
                        Davom ettirish
                    </Button>
                    <Button disabled>
                        <LeftOutlined />
                        <span>Orqaga qaytish</span>
                    </Button>

                    <Divider>Chet el fuqarolari uchun</Divider>

                    <Link href="#">
                        Chet el fuqarolari uchun ro‘yxatdan o‘tish
                    </Link>
                </Space>
            </Form.Item>
        </>
    )
}

const PassportForm = ({
    activeTab,
    setActiveTab,
    setShowModalSMS,
    setShowModal
}: {
    activeTab: string,
    setActiveTab: (value: string) => void,
    setShowModalSMS: (value: boolean) => void,
    setShowModal: (value: boolean) => void
}) => {
    return (
        <>
            <Radio.Group
                defaultValue={activeTab}
                options={[{
                    label: "Pasport ID karta",
                    value: "passport",
                },
                {
                    label: "Tug’ilganlik guvohnomasi",
                    value: "birth-certificate"
                }]}
                onChange={(e: RadioChangeEvent) => {
                    setActiveTab(e.target.value as ("passport" | "birth-certificate"))
                }}
            />

            <Divider />

            <Form.Item<SignUpPassportFieldType>
                label="Telefon raqam:"
                name="phone"
                rules={[{ required: true, message: 'Iltimos telefon raqamingizni kiriting!' }]}
            >
                <Input placeholder="+998" />
            </Form.Item>

            <Form.Item<SignUpPassportFieldType>
                label="JSHSHIR:"
                name="jshshir"
                rules={[{ required: true, message: 'Iltimos JSHSHIR raqamingizni kiriting!' }]}
            >
                <Input placeholder="JSHSHIRni kiriting" />
            </Form.Item>

            <Form.Item<SignUpPassportFieldType>
                label="Pasport seriya:"
                name="passport"
                rules={[{ required: true, message: 'Iltimos pasport seriyani kiriting!' }]}
            >
                <Input.Password placeholder="Parol" />
            </Form.Item>

            <Form.Item>
                <Space direction="vertical" >
                    <Button
                        onClick={() => {
                            setShowModalSMS(true);
                            setShowModal(false);
                        }}
                        type="primary"
                        htmlType="submit"
                    >
                        Davom ettirish
                    </Button>
                    <Button disabled>
                        <LeftOutlined />
                        <span>Orqaga qaytish</span>
                    </Button>

                    <Divider>Chet el fuqarolari uchun</Divider>

                    <Link href="#">
                        Chet el fuqarolari uchun ro‘yxatdan o‘tish
                    </Link>
                </Space>
            </Form.Item>
        </>
    )
}

const SignUpForm = ({
    setShowModalSMS,
    setShowModal
}: {
    setShowModalSMS: (value: boolean) => void,
    setShowModal: (value: boolean) => void
}) => {
    const [activeTab, setActiveTab] = useState("passport");

    return (
        <Form
            name="sign-up"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {
                activeTab === "passport"
                    ?
                    <PassportForm
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        setShowModalSMS={setShowModalSMS}
                        setShowModal={setShowModal}
                    />
                    : <BirthCertificateForm
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        setShowModalSMS={setShowModalSMS}
                        setShowModal={setShowModal}
                    />
            }
        </Form>
    )
}

export default SignUpForm