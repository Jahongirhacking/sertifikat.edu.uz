import { CertificateInfoCard } from "@/app/_components/cabinet/Certificates"
import { PersonalInfoCard } from "@/app/_components/cabinet/PersonalInfo"
import { Card, Col, Divider, Flex, Row, Steps } from "antd"
import "@/app/_styles/application.scss";

const Page = () => {
    return (
        <div className="application-detail tab-content">
            <h2>Ustama uchun ariza</h2>
            <main className="main">
                <Row>
                    <Col span={17}>
                        <Card>
                            <div className="content-head">
                                <Flex justify="space-between" className="card__head">
                                    <h4 className="application-title">Ustama uchun ariza</h4>
                                    <Flex className="application-info" gap={24}>
                                        <label>
                                            <span>Ariza ID: </span>
                                            <strong>123456</strong>
                                        </label>
                                        <label>
                                            <span>Ariza yuborilgan vaqt: </span>
                                            <strong>12.12.2021, 14:00</strong>
                                        </label>
                                    </Flex>
                                </Flex>
                            </div>
                            <Divider />
                            <div className="content-body">
                                <section>
                                    <h3>Shaxsiy ma’lumotlar</h3>
                                    <PersonalInfoCard />
                                </section>

                                <section className="language-certificate">
                                    <h3>Chet tili sertifikati</h3>
                                    <Divider />
                                    <CertificateInfoCard />
                                </section>
                            </div>

                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Steps
                                direction="vertical"
                                current={1}
                                items={[
                                    {
                                        title: 'Ariza yuborildi',
                                    },
                                    {
                                        title: 'Ariza ko’rib chiqilmoqda',
                                    },
                                    {
                                        title: 'Ariza tasdiqlandi/Ariza rad etildi',
                                    },
                                ]}
                            />
                        </Card>
                    </Col>
                </Row>
            </main>
        </div>
    )
}

export default Page