import { Col, Divider, Flex, Form, Input, Radio, Row, Space, Typography } from "antd";

type StudentType = {
    studyPlace?: string;
    region?: string;
    district?: string;
    institutionName?: string;
    class?: string;
}

const StudentForm = () => {
    return (
        <Form
            name="student-info"
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item<StudentType>
                label="O’qish joyingizni tanlang:"
                name="studyPlace"
                rules={[{ required: true, message: 'O’qish joyingizni tanlang!' }]}
            >
                <Radio.Group className="place">
                    <Radio value="school">Umumiy o’rta ta’lim muassasasi (Maktab)</Radio>
                    <Radio value="college">O’rta maxsus ta’lim muassasasi (Akademik litsey) </Radio>
                    <Radio value="lyceum">Professional ta’lim muassasasi (Kasb-hunar maktabi, Kollej, Texnikum)</Radio>
                    <Radio value="universitet">Oliy ta’lim muassasasi</Radio>
                    <Radio value="ministry">Abituriyent</Radio>
                </Radio.Group>
            </Form.Item>

            <Divider />

            <Space direction="vertical">
                <Typography.Title level={5}>
                    Ta’lim ma’lumotlari
                </Typography.Title>

                <Row>
                    <Col span={11}>
                        <Form.Item<StudentType>
                            label="Ta’lim muassasa joylashgan viloyati:"
                            name="region"
                            rules={[{ required: true, message: 'Ta`lim muassasa joylashgan viloyatini tanlang!' }]}
                        >
                            <Input placeholder="Buxoro" />
                        </Form.Item>
                    </Col>

                    <Col span={11}>
                        <Form.Item<StudentType>
                            label="Ta'lim muassasa joylashgan tuman:"
                            name="district"
                            rules={[{ required: true, message: 'Ta`lim muassasa joylashgan tumanni tanlang!' }]}
                        >
                            <Input placeholder="Vobkent" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={11}>
                        <Form.Item<StudentType>
                            label="Ta’lim muassasa nomi:"
                            name="institutionName"
                            rules={[{ required: true, message: 'Ta’lim muassasa nomi!' }]}
                        >
                            <Input placeholder="Raqamli talim" />
                        </Form.Item>
                    </Col>

                    <Col span={11}>
                        <Form.Item<StudentType>
                            label="Sinfi:"
                            name="class"
                            rules={[{ required: true, message: 'Sinfni yozing' }]}
                        >
                            <Input placeholder="Sinfi" />
                        </Form.Item>
                    </Col>
                </Row>
            </Space>
        </Form>
    )
}

export default StudentForm