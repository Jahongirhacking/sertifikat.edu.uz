"use client";

import { CertificateInfoForm, EducationInfoForm, PersonalInfoForm } from "@/app/_components/forms/";
import { CloseOutlined, LeftOutlined } from "@ant-design/icons"
import { Button, Card, Flex, Steps, Typography, Modal } from "antd"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "@/app/_styles/application.scss";
import DoneImage from "@/app/_assets/images/done.png"

const CreateNewApplication = () => {
    const [step, setStep] = useState(0);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="application-create">
            <Flex justify="space-between">
                <Typography.Title level={1}>
                    Ariza topshirish
                </Typography.Title>
                <Link href="/cabinet">
                    <Button><CloseOutlined /></Button>
                </Link>
            </Flex>
            <Steps
                current={step}
                items={[
                    {
                        title: 'Shaxsiy ma’lumot',
                        description: "Pasport yoki ID karta",
                    },
                    {
                        title: 'Ta’lim, mehnat ma’lumot',
                        description: "Ariza maqsadi",
                    },
                    {
                        title: 'Sertifikat ma’lumotlari',
                        description: "Til yoki fan sertifikati",
                    },
                ]}
            />
            <Card hoverable>
                {
                    step === 0
                        ? <PersonalInfoForm />
                        : step === 1
                            ? <EducationInfoForm />
                            : <CertificateInfoForm />
                }
            </Card>
            <Flex justify="space-between">
                <Button disabled={step === 0} onClick={() => setStep((prev) => prev - 1)}>
                    <LeftOutlined />
                    <span>Orqaga qaytish</span>
                </Button>
                <Button
                    className="continue-btn"
                    type="primary"
                    onClick={() => {
                        if (step === 2) {
                            setShowModal(true);
                        } else {
                            setStep((prev) => prev + 1)
                        }
                    }}
                >
                    Davom etish
                </Button>
            </Flex>
            {/* Finish Modal */}
            <Modal
                open={showModal}
                footer={null}
                closeIcon={null}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px"
                }}>
                    <Image
                        width={158}
                        src={DoneImage}
                        alt="Muvaffaqiyatli Rasm"
                    />
                    <h2>Tabriklaymiz!</h2>
                    <p>Siz muvaffaqiyatli ariza yubordingiz.</p>
                    <Link href="/cabinet">
                        <Button className="continue-btn" type="primary">Arizalarim</Button>
                    </Link>
                </div>
            </Modal>
        </div>
    )
}

export default CreateNewApplication