import { regions } from "@/app/_utils/staticVariables";
import { Col, Divider, Flex, Form, Input, Radio, Row, Select, Space, Typography } from "antd";
import { useState } from "react";

type StudentType = {
    studyPlace?: string;
    region?: string;
    district?: string;
    institutionName?: string;
    class?: string;
}

const StudentForm = () => {
    const [regionKey, setRegionKey] = useState(-1);

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
                        <Form.Item<StudentType>
                            label="Ta'lim muassasa joylashgan tuman:"
                            name="district"
                            rules={[{ required: true, message: 'Ta`lim muassasa joylashgan tumanni tanlang!' }]}
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
                        <Form.Item<StudentType>
                            label="Ta’lim muassasa nomi:"
                            name="institutionName"
                            rules={[{ required: true, message: 'Ta’lim muassasa nomi!' }]}
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
                        <Form.Item<StudentType>
                            label="Sinfi:"
                            name="class"
                            rules={[{ required: true, message: 'Sinfni yozing' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Sinfi"
                                optionFilterProp="label"
                                options={[]}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Space>
        </Form>
    )
}

export default StudentForm