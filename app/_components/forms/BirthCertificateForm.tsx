import { LeftOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import Link from "next/link";

type SignUpBirthCertificateFieldType = {
    phone?: string;
    birthCertificate?: string;
};

const BirthCertificateForm = ({
    activeTab,
    setActiveTab,
    showModalSMS,
}: {
    activeTab: string,
    setActiveTab: (value: string) => void,
    showModalSMS: () => void,
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
                rules={[{ required: true, message: 'Iltimos Tug’ilganlik guvohnomasi seriya va raqamini kiriting!' }]}
            >
                <Input placeholder="Tug’ilganlik guvohnomasi seriya va raqamini kiriting" />
            </Form.Item>

            <Form.Item>
                <Space direction="vertical" >
                    <Button
                        onClick={() => {
                            showModalSMS();
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

                    <Link href="#" style={{ color: "#1677FF" }}>
                        Chet el fuqarolari uchun ro‘yxatdan o‘tish
                    </Link>
                </Space>
            </Form.Item>
        </>
    )
}

export default BirthCertificateForm;