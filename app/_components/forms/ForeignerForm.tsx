import { LeftOutlined } from "@ant-design/icons"
import { Button, DatePicker, Form, Input, Space } from "antd"

type ForeignerType = {
    phone?: string,
    jshshir?: string,
    birthDate?: Date,
}

const ForeignerForm = ({ showModalSMS }: { showModalSMS: () => void }) => {
    return (
        <Form
            name="sign-in"
            initialValues={{ remember: false }}
            autoComplete="off"
        >
            <Form.Item<ForeignerType>
                label="Telefon raqam:"
                name="phone"
                rules={[{ required: true, message: 'Iltimos telefon raqamingizni kiriting!' }]}
            >
                <Input placeholder="+998" type="tel" />
            </Form.Item>

            <Form.Item<ForeignerType>
                label="JSHSHIR:"
                name="jshshir"
                rules={[{ required: true, message: 'Iltimos JSHSHIR kiriting!' }]}
            >
                <Input placeholder="JSHSHIRni kiriting" />
            </Form.Item>


            <Form.Item<ForeignerType>
                label="Tug'ilgan sanasi:"
                name="birthDate"
                rules={[{ required: true, message: 'Iltimos tug`ilgan sana kiriting!' }]}
            >
                <DatePicker placeholder="Tug'ilgan sanani kiriting" />
            </Form.Item>

            <Form.Item>
                <Space direction="vertical">
                    <Button type="primary" htmlType="submit" onClick={showModalSMS}>
                        Davom ettirish
                    </Button>

                    <Button disabled icon={<LeftOutlined />}>
                        Orqaga qaytish
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    )
}

export default ForeignerForm;