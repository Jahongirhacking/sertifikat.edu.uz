import { DatePicker, Divider, Flex, Form, Input, Radio, Typography } from "antd"

type PersonType = {
    citizenship?: string;
    nationality?: string;
    region?: string;
    district?: string;
    address?: string;
    surname?: string;
    name?: string;
    thirdName?: string;
    birthDate?: Date;
    gender?: "male" | "female";
};

const PersonalInfoForm = () => {
    return (
        <>
            <Typography.Title level={2}>
                Shaxsiy ma’lumotlar
            </Typography.Title>
            <Divider />
            <Form
                name="personal-info"
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item<PersonType>
                    label="Fuqaroligi:"
                    name="citizenship"
                    rules={[{ required: true, message: 'Fuqarolingizni kiriting!' }]}
                >
                    <Input placeholder="O'ZBEKISTON" />
                </Form.Item>

                <Form.Item<PersonType>
                    label="Millati:"
                    name="nationality"
                    rules={[{ required: true, message: 'Millatingizni kiriting!' }]}
                >
                    <Input placeholder="O'ZBEK" />
                </Form.Item>

                <Divider />

                <Form.Item<PersonType>
                    label="Doimiy yashash manzili (Viloyati):"
                    name="region"
                    rules={[{ required: true, message: 'Viloyatingizni kiriting!' }]}
                >
                    <Input placeholder="Buxoro viloyati" />
                </Form.Item>

                <Form.Item<PersonType>
                    label="Doimiy yashash manzili (Tuman):"
                    name="district"
                    rules={[{ required: true, message: 'Tumaningizni kiriting!' }]}
                >
                    <Input placeholder="Vobkent tumani" />
                </Form.Item>

                <Form.Item<PersonType>
                    label="Doimiy yashash manzili:"
                    name="address"
                    rules={[{ required: true, message: 'Manzilingizni kiriting!' }]}
                >
                    <Input placeholder="ЎЗБЕКИСТОН, БУХОРО ВИЛОЯТИ, БОЗОРЖОЙИ МФЙ, ОТАЛИК," />
                </Form.Item>

                <Divider />

                <Form.Item<PersonType>
                    label="Familiya:"
                    name="surname"
                    rules={[{ required: true, message: 'Familiyangizni kiriting!' }]}
                >
                    <Input placeholder="Askarov" />
                </Form.Item>

                <Form.Item<PersonType>
                    label="Ism:"
                    name="name"
                    rules={[{ required: true, message: 'Ismingizni kiriting!' }]}
                >
                    <Input placeholder="Abror" />
                </Form.Item>

                <Form.Item<PersonType>
                    label="Otasining ismi:"
                    name="thirdName"
                    rules={[{ required: true, message: 'Otangizning ismini kiriting!' }]}
                >
                    <Input placeholder="Akmal o’g’li" />
                </Form.Item>

                <Divider />

                <Form.Item<PersonType>
                    label="Tug’ilgan sanasi:"
                    name="birthDate"
                    rules={[{ required: true, message: 'Otangizning ismini kiriting!' }]}
                >
                    <DatePicker placeholder="Tug’ilgan sanani kiriting" />
                </Form.Item>

                <Form.Item<PersonType>
                    label="Tug’ilgan sanasi:"
                    name="gender"
                    rules={[{ required: true, message: 'Otangizning ismini kiriting!' }]}
                >
                    <Radio.Group defaultValue={"male"}>
                        <Radio value={"male"}>Erkak</Radio>
                        <Radio value={"female"}>Ayol</Radio>
                    </Radio.Group>
                </Form.Item>

            </Form>
        </>
    )
}

export default PersonalInfoForm