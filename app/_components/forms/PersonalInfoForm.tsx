import { countries, nationalities, regions } from "@/app/_utils/staticVariables";
import { Col, DatePicker, Divider, Form, Input, Radio, Row, Select, Typography } from "antd"
import { useEffect, useState } from "react";

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
    const [regionKey, setRegionKey] = useState(-1);

    useEffect(() => {
        console.log(regionKey, "region")
    }, [regionKey])

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
                <Row>
                    <Col span={11}>
                        <Form.Item<PersonType>
                            label="Fuqaroligi:"
                            name="citizenship"
                            rules={[{ required: true, message: 'Fuqarolingizni kiriting!' }]}
                        >
                            <Select
                                showSearch
                                placeholder="O'ZBEKISTON"
                                optionFilterProp="label"
                                options={countries.map((country) => ({
                                    label: country.toUpperCase(),
                                    value: country
                                }))}
                            />
                        </Form.Item></Col>
                    <Col span={11}>
                        <Form.Item<PersonType>
                            label="Millati:"
                            name="nationality"
                            rules={[{ required: true, message: 'Millatingizni kiriting!' }]}
                        >
                            <Select
                                showSearch
                                placeholder="O'ZBEK"
                                optionFilterProp="label"
                                options={nationalities.map((nationality) => ({
                                    label: nationality.toUpperCase(),
                                    value: nationality
                                }))}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Divider />


                <Row>
                    <Col span={11}>
                        <Form.Item<PersonType>
                            label="Doimiy yashash manzili (Viloyati):"
                            name="region"
                            rules={[{ required: true, message: 'Viloyatingizni kiriting!' }]}
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

                        <Form.Item<PersonType>
                            label="Doimiy yashash manzili (Tuman):"
                            name="district"
                            rules={[{ required: true, message: 'Tumaningizni kiriting!' }]}
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

                <Form.Item<PersonType>
                    label="Doimiy yashash manzili:"
                    name="address"
                    rules={[{ required: true, message: 'Manzilingizni kiriting!' }]}
                >
                    <Input placeholder="ЎЗБЕКИСТОН, БУХОРО ВИЛОЯТИ, БОЗОРЖОЙИ МФЙ, ОТАЛИК," />
                </Form.Item>

                <Divider />

                <Row>
                    <Col span={11}>
                        <Form.Item<PersonType>
                            label="Familiya:"
                            name="surname"
                            rules={[{ required: true, message: 'Familiyangizni kiriting!' }]}
                        >
                            <Input placeholder="Askarov" />
                        </Form.Item>
                    </Col>

                    <Col span={11}>
                        <Form.Item<PersonType>
                            label="Ism:"
                            name="name"
                            rules={[{ required: true, message: 'Ismingizni kiriting!' }]}
                        >
                            <Input placeholder="Abror" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={11}>
                        <Form.Item<PersonType>
                            label="Otasining ismi:"
                            name="thirdName"
                            rules={[{ required: true, message: 'Otangizning ismini kiriting!' }]}
                        >
                            <Input placeholder="Akmal o’g’li" />
                        </Form.Item>
                    </Col>

                    <Col span={11}>
                        <Form.Item<PersonType>
                            label="Tug’ilgan sanasi:"
                            name="birthDate"
                            rules={[{ required: true, message: 'Otangizning ismini kiriting!' }]}
                        >
                            <DatePicker placeholder="Tug’ilgan sanani kiriting" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item<PersonType>
                    label="Jinsi:"
                    name="gender"
                    rules={[{ required: true, message: 'Jinsingizni kiriting!' }]}
                >
                    <Radio.Group
                        className="gender-radio"
                        defaultValue={"male"}
                    >
                        <Radio value={"male"}>Erkak</Radio>
                        <Radio value={"female"}>Ayol</Radio>
                    </Radio.Group>
                </Form.Item>

            </Form>
        </>
    )
}

export default PersonalInfoForm