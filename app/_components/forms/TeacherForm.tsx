import { regions } from "@/app/_utils/staticVariables";
import { Col, Divider, Flex, Form, Input, Radio, Row, Select, Space, Typography } from "antd"
import { useState } from "react";

type TeacherType = {
    jobPlace?: string;
    region?: string;
    district?: string;
    jobName?: string;
    position?: string;
}

const TeacherForm = () => {
    const [regionKey, setRegionKey] = useState(-1);

    return (
        <Form
            name="teacher-info"
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item<TeacherType>
                label="Ish joyingizni tanlang:"
                name="jobPlace"
                rules={[{ required: true, message: 'Ish joyingizni tanlang!' }]}
            >
                <Radio.Group className="place">
                    <Radio value="school">Umumiy o’rta ta’lim muassasasi (Maktab)</Radio>
                    <Radio value="college">O’rta maxsus ta’lim muassasasi (Akademik litsey) </Radio>
                    <Radio value="lyceum">Professional ta’lim muassasasi (Kasb-hunar maktabi, Kollej, Texnikum)</Radio>
                    <Radio value="universitet">Oliy ta’lim muassasasi</Radio>
                    <Radio value="ministry">Vazirlik ishchi xodimlari</Radio>
                </Radio.Group>
            </Form.Item>

            <Divider />

            <Space direction="vertical" style={{ width: "100%" }}>
                <Typography.Title level={5}>
                    Ish joyi ma’lumotlari
                </Typography.Title>
                <Row>
                    <Col span={11}>
                        <Form.Item<TeacherType>
                            label="Ish joyi joylashgan viloyati:"
                            name="region"
                            rules={[{ required: true, message: 'Ish joyi joylashgan viloyatini tanlang!' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Buxoro viloyati"
                                optionFilterProp="label"
                                onChange={(value) => setRegionKey(value)}
                                options={regions.map((region, index) => ({
                                    label: region.name,
                                    value: index
                                }))}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={11}>
                        <Form.Item<TeacherType>
                            label="Ish joyi joylashgan tumani:"
                            name="district"
                            rules={[{ required: true, message: 'Ish joyi joylashgan tumanini tanlang!' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Vobkent tumani"
                                optionFilterProp="label"
                                disabled={regionKey < 0}
                                options={regionKey >= 0
                                    ? regions[regionKey].districts.map((district) => ({
                                        label: district,
                                        value: district
                                    }))
                                    : []
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={11}>
                        <Form.Item<TeacherType>
                            label="Ish joyi nomi:"
                            name="jobName"
                            rules={[{ required: true, message: 'Ish joyi nomini tanlang!' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Raqamli ta’lim"
                                optionFilterProp="label"
                                options={[]}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={11}>
                        <Form.Item<TeacherType>
                            label="Lavozim:"
                            name="position"
                            rules={[{ required: true, message: 'Lavozimni yozing' }]}
                        >
                            <Input placeholder="Lavozimni yozing" />
                        </Form.Item>
                    </Col>
                </Row>
            </Space>

        </Form>
    )
}

export default TeacherForm