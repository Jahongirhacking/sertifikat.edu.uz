"use client";

import { languages, sciences } from "@/app/_utils/staticVariables";
import { InboxOutlined } from "@ant-design/icons";
import { DatePicker, Divider, Upload, Flex, Form, Input, Radio, Select, Typography, UploadProps, message, Segmented, Col, Row } from "antd"
import { useState } from "react";

const { Dragger } = Upload;


const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://file.io/',
    beforeUpload(file) {
        const isPdfOrDoc = file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        if (!isPdfOrDoc) {
            message.error('Siz faqat PDF yoki DOC fayl yuklay olasiz!');
        }
        return isPdfOrDoc || Upload.LIST_IGNORE;
    },
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} fayl muvaffaqiyatli yuklandi.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} faylni yuklashda xatolik.`);
        }
    },
    onDrop(e) {
        console.log('Tushgan fayllar', e.dataTransfer.files);
    },
};


type CertificateType = {
    name?: string;
    type?: string;
    level?: string;
    id?: string;
    startDate?: Date;
    endDate?: Date;
    file?: File;
}

const CertificateInfoForm = () => {
    const [certificateType, setCertificateType] = useState<"language" | "science">("language");
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <>
            <Flex justify="space-between" align="center" wrap gap={15}>
                <Typography.Title level={2} style={{ margin: "auto 0" }}>
                    {
                        certificateType === "language"
                            ? "Chet tili sertifikati"
                            : "Fan sertifikati"
                    }
                </Typography.Title>
                <Segmented
                    defaultValue={certificateType}
                    options={[{
                        label: "Chet tili sertifikat",
                        value: "language",
                    }, {
                        label: "Fan sertifikat",
                        value: "science"
                    }]}
                    onChange={(value: "language" | "science") => setCertificateType(value)}
                />
            </Flex>
            <Divider />
            <Form
                name="certificate-info"
                autoComplete="off"
            >
                <Row>
                    <Col span={11}>
                        <Form.Item<CertificateType>
                            label={`${certificateType === "language" ? "Til" : "Fan"} nomi`}
                            name="name"
                            rules={[{ required: true, message: 'Nom kiriting!' }]}
                        >
                            <Select
                                showSearch
                                placeholder={`${certificateType === "language" ? "Til" : "Fan"} nomini kiriting`}
                                optionFilterProp="label"
                                onChange={(value) => setActiveIndex(value)}
                                options={certificateType === "language"
                                    ? languages.map((language, index) => ({
                                        value: index,
                                        label: language.label
                                    }))
                                    : sciences.map((science, index) => ({
                                        value: index,
                                        label: science.label
                                    }))
                                }
                            />
                        </Form.Item>
                    </Col>

                    <Col span={11}>
                        <Form.Item<CertificateType>
                            label="Sertifikat turi"
                            name="type"
                            rules={[{ required: true, message: 'Sertifikat turini tanlang!' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Sertifikat turini tanlang"
                                optionFilterProp="label"
                                disabled={activeIndex < 0}
                                options={activeIndex < 0
                                    ? []
                                    : certificateType === "language"
                                        ? languages[activeIndex].certificates
                                            .map(certificate => ({ label: certificate.toUpperCase(), value: certificate }))
                                        : sciences[activeIndex].certificates
                                            .map(science => ({ label: science.toUpperCase(), value: science }))
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={11}>
                        <Form.Item<CertificateType>
                            label="Daraja"
                            name="level"
                            rules={[{ required: true, message: 'Sertifikat darajasini tanlang!' }]}
                        >
                            <Select
                                showSearch
                                placeholder={`${certificateType === "language" ? "Til" : "Fan"} darajasini tanlang`}
                                optionFilterProp="label"
                                options={["A1", "A2", "B1", "B2", "C1", "C2"]
                                    .map(level => ({ label: level, value: level }))}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={11}>
                        <Form.Item<CertificateType>
                            label="Seriya va raqam"
                            name="id"
                            rules={[{ required: true, message: 'Seriya va raqam kiriting!' }]}
                        >
                            <Input placeholder="_ _ _ _ _ _ _ _ _ _ _" />

                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={11}>
                        <Form.Item<CertificateType>
                            label="Hujjat berilgan sana"
                            name="startDate"
                            rules={[{ required: true, message: 'Sanani kiriting!' }]}
                        >
                            <DatePicker placeholder="kk.oo.yyyy" />
                        </Form.Item>
                    </Col>

                    <Col span={11}>
                        <Form.Item<CertificateType>
                            label="Amal qilish muddati"
                            name="endDate"
                            rules={[{ required: true, message: 'Sanani kiriting!' }]}
                        >
                            <DatePicker placeholder="kk.oo.yyyy" />
                        </Form.Item>
                    </Col>
                </Row>

                <Divider />

                <Form.Item<CertificateType>
                    name="file"
                    rules={[{ required: true, message: 'Fayl yuklang!' }]}
                >
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">{certificateType === "language" ? "Chet tili" : "Fan"} sertifikatini yuklang</p>
                        <p className="ant-upload-hint">
                            pdf, doc, maximal 10mb
                        </p>
                    </Dragger>
                </Form.Item>
            </Form>

        </>
    )
}

export default CertificateInfoForm