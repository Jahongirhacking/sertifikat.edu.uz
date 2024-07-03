import { PersonalInfoCard } from "@/app/_components/cabinet/PersonalInfo"
import { Card, Col, Divider, Flex, Row, Steps } from "antd"
import Info from "@/app/_components/Info";
import { certificateInfo, professionInfo } from "@/app/_utils/staticVariables";
import "@/app/_styles/application.scss";

const Page = () => {
    return (
        <div className="application-detail tab-content">
            <h2>Ustama uchun ariza</h2>
            <main className="main">
                <Row>
                    <Col span={17} className="info">
                        <Card>
                            <div className="content-head">
                                <Flex justify="space-between" className="card__head" wrap>
                                    <h4 className="application-title">Ustama uchun ariza</h4>
                                    <Flex className="application-info" gap={24} wrap>
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
                                    <PersonalInfoCard editable={false} />
                                </section>

                                <section className="profession-info">
                                    <h3>Mehnat yoki ta’lim ma’lumotlar</h3>
                                    <Divider />
                                    <Info items={professionInfo} />
                                </section>

                                <section className="language-certificate-info">
                                    <h3>Chet tili sertifikati</h3>
                                    <Divider />
                                    <Info items={certificateInfo} />
                                </section>
                            </div>

                        </Card>
                    </Col>
                    <Col span={6} className="steps">
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