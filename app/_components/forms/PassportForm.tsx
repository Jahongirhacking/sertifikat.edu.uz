import { LeftOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Radio, RadioChangeEvent, Space } from "antd";
import Link from "next/link";

type SignUpPassportFieldType = {
    phone?: string;
    jshshir?: string;
    passport?: string;
};

const PassportForm = ({
    activeTab,
    setActiveTab,
    showModalSMS,
    showModalForeigner
}: {
    activeTab: string,
    setActiveTab: (value: string) => void,
    showModalSMS: () => void,
    showModalForeigner: () => void
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
                <Input placeholder="Pasport seriyani kiriting" />
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

                    <Button
                        onClick={showModalForeigner}
                        type="link"
                        style={{ color: "#1677FF" }}
                    >
                        Chet el fuqarolari uchun ro‘yxatdan o‘tish
                    </Button>
                </Space>
            </Form.Item>
        </>
    )
}

export default PassportForm;