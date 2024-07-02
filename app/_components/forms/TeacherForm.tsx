import { Divider, Flex, Form, Input, Radio, Space, Typography } from "antd"

type TeacherType = {
    jobPlace?: string;
    region?: string;
    district?: string;
    jobName?: string;
    position?: string;
}

const TeacherForm = () => {
    return (
        <Form
            name="personal-info"
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item<TeacherType>
                label="Ish joyingizni tanlang:"
                name="jobPlace"
                rules={[{ required: true, message: 'Ish joyingizni tanlang!' }]}
            >
                <Radio.Group>
                    <Radio value="school">Umumiy o’rta ta’lim muassasasi (Maktab)</Radio>
                    <Radio value="college">O’rta maxsus ta’lim muassasasi (Akademik litsey) </Radio>
                    <Radio value="lyceum">Professional ta’lim muassasasi (Kasb-hunar maktabi, Kollej, Texnikum)</Radio>
                    <Radio value="universitet">Oliy ta’lim muassasasi</Radio>
                    <Radio value="ministry">Vazirlik ishchi xodimlari</Radio>
                </Radio.Group>
            </Form.Item>

            <Divider />

            <Space direction="vertical">
                <Typography.Title level={5}>
                    Ish joyi ma’lumotlari
                </Typography.Title>

                <Flex gap={20}>
                    <Form.Item<TeacherType>
                        label="Ish joyi joylashgan viloyati:"
                        name="region"
                        rules={[{ required: true, message: 'Ish joyi joylashgan viloyatini tanlang!' }]}
                    >
                        <Input placeholder="Buxoro" />
                    </Form.Item>

                    <Form.Item<TeacherType>
                        label="Ish joyi joylashgan tumani:"
                        name="district"
                        rules={[{ required: true, message: 'Ish joyi joylashgan tumanini tanlang!' }]}
                    >
                        <Input placeholder="Vobkent" />
                    </Form.Item>
                </Flex>

                <Flex gap={20}>
                    <Form.Item<TeacherType>
                        label="Ish joyi nomi:"
                        name="jobName"
                        rules={[{ required: true, message: 'Ish joyi nomini tanlang!' }]}
                    >
                        <Input placeholder="Raqamli talim" />
                    </Form.Item>

                    <Form.Item<TeacherType>
                        label="Lavozim:"
                        name="position"
                        rules={[{ required: true, message: 'Lavozimni yozing' }]}
                    >
                        <Input placeholder="Lavozimni yozing" />
                    </Form.Item>
                </Flex>
            </Space>

        </Form>
    )
}

export default TeacherForm