"use client";

import { languages, sciences } from "@/app/_utils/staticVariables";
import { InboxOutlined } from "@ant-design/icons";
import { DatePicker, Divider, Upload, Flex, Form, Input, Radio, Select, Typography, UploadProps, message } from "antd"
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

    return (
        <>
            <Flex justify="space-between">
                <Typography.Title level={2}>
                    {
                        certificateType === "language"
                            ? "Chet tili sertifikati"
                            : "Fan sertifikati"
                    }
                </Typography.Title>
                <Radio.Group onChange={(e) => setCertificateType(e.target.value)} defaultValue={certificateType}>
                    <Radio.Button value="language">Chet tili sertifikat</Radio.Button>
                    <Radio.Button value="science">Fan sertifikat</Radio.Button>
                </Radio.Group>
            </Flex>
            <Divider />
            <Form
                name="personal-info"
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item<CertificateType>
                    label={`${certificateType === "language" ? "Til" : "Fan"} nomi`}
                    name="name"
                    rules={[{ required: true, message: 'Nom kiriting!' }]}
                >
                    <Select
                        showSearch
                        placeholder={`${certificateType === "language" ? "Til" : "Fan"} nomini kiriting`}
                        optionFilterProp="label"
                        options={certificateType === "language"
                            ? languages.map((language) => ({
                                value: language.value,
                                label: language.label
                            }))
                            : sciences.map((science) => ({
                                value: science.value,
                                label: science.label
                            }))
                        }
                    />
                </Form.Item>


                <Form.Item<CertificateType>
                    label="Sertifikat turi"
                    name="type"
                    rules={[{ required: true, message: 'Sertifikat turini tanlang!' }]}
                >
                    <Select
                        showSearch
                        placeholder="Sertifikat turini tanlang"
                        optionFilterProp="label"
                        options={certificateType === "language"
                            ? [
                                {
                                    label: "IELTS",
                                    value: "ielts"
                                },
                                {
                                    label: "CEFR",
                                    value: "cefr"
                                },
                            ]
                            : [
                                {
                                    label: "SAT",
                                    value: "sat",
                                },
                                {
                                    label: "ICPC",
                                    value: "icpc"
                                }
                            ]
                        }
                    />
                </Form.Item>

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

                <Form.Item<CertificateType>
                    label="Seriya va raqam"
                    name="id"
                    rules={[{ required: true, message: 'Seriya va raqam kiriting!' }]}
                >
                    <Input placeholder="_ _ _ _ _ _ _ _ _ _ _" />

                </Form.Item>

                <Form.Item<CertificateType>
                    label="Hujjat berilgan sana"
                    name="startDate"
                    rules={[{ required: true, message: 'Sanani kiriting!' }]}
                >
                    <DatePicker placeholder="kk.oo.yyyy" />
                </Form.Item>

                <Form.Item<CertificateType>
                    label="Amal qilish muddati"
                    name="endDate"
                    rules={[{ required: true, message: 'Sanani kiriting!' }]}
                >
                    <DatePicker placeholder="kk.oo.yyyy" />
                </Form.Item>

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