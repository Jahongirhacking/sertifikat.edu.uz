import OneIdLogo from "@/app/_assets/images/one-id.png";
import { Button, Checkbox, Divider, Flex, Form, FormProps, Input, Space } from "antd";
import Link from "next/link";
import Image from "next/image";

type SignInFieldType = {
    phone?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<SignInFieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<SignInFieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const SignInForm = () => {
    return (
        <Form
            name="sign-in"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<SignInFieldType>
                label="Telefon raqam:"
                name="phone"
                rules={[{ required: true, message: 'Iltimos telefon raqamingizni kiriting!' }]}
            >
                <Input placeholder="+998" />
            </Form.Item>

            <Form.Item<SignInFieldType>
                label="Parol:"
                name="password"
                rules={[{ required: true, message: 'Iltimos parol kiriting!' }]}
            >
                <Input.Password placeholder="Parol" />
            </Form.Item>

            <Flex justify="space-between" gap={15} align="center">
                <Form.Item<SignInFieldType>
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox>Saqlab qolish</Checkbox>
                </Form.Item>
                <Link href="#">
                    Parolni tiklash
                </Link>
            </Flex>


            <Form.Item>
                <Space direction="vertical" >
                    <Link href="/cabinet">
                        <Button type="primary" htmlType="submit">
                            Kirish
                        </Button>
                    </Link>

                    <Divider>Boshqa yo`l bilan kiring</Divider>

                    <Link href="#">
                        <Button>
                            <Image
                                src={OneIdLogo}
                                alt="One Id logotip"
                            />
                        </Button>
                    </Link>
                </Space>
            </Form.Item>
        </Form>
    )
}

export default SignInForm;