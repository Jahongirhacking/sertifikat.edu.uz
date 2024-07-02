import { PlusOutlined, RetweetOutlined } from "@ant-design/icons"
import { Button, Card, Col, Divider, Flex, Row, Tag } from "antd"
import "./Certificates.scss";

const Certificates = () => {
    return (
        <div className="certificates tab-content">
            <Flex justify="space-between" className="content-head" wrap gap={10}>
                <h3>Sertifikatlarim</h3>
                <Flex gap={12} wrap>
                    <Button icon={<RetweetOutlined />}>Milliy sertifikat (CEFR)</Button>
                    <Button type="primary" icon={<PlusOutlined />}>Sertifikat qo’shish</Button>
                </Flex>
            </Flex>

            <Divider className="certificates-divider" />

            <div className="content-body">
                <Card hoverable>
                    <Flex justify="space-between" className="card__head">
                        <h4 className="certificates-title">CEFR sertifikati</h4>
                        <Flex className="certificates-info" gap={8} align="center">
                            <span>Holati: </span>
                            <Tag color="success">Faol</Tag>
                        </Flex>
                    </Flex>
                    <Divider />
                    <div className="certificates-information">
                        <Row className="certificates-row">
                            <Col span={10} className="left-text"><span>Chet tili:</span></Col>
                            <Col span={14} className="right-text">Ingliz tili</Col>
                        </Row>
                        <Row className="certificates-row">
                            <Col span={10} className="left-text"><span>Sertifikat turi:</span></Col>
                            <Col span={14} className="right-text">Cambridge Assessment English Linguaskill</Col>
                        </Row>
                        <Row className="certificates-row">
                            <Col span={10} className="left-text"><span>Darajasi:</span></Col>
                            <Col span={14} className="right-text">A2</Col>
                        </Row>
                        <Row className="certificates-row">
                            <Col span={10} className="left-text"><span>Seriya raqami:</span></Col>
                            <Col span={14} className="right-text">22DTM1003471ES</Col>
                        </Row>
                        <Row className="certificates-row">
                            <Col span={10} className="left-text"><span>Amal qilish muddati:</span></Col>
                            <Col span={14} className="right-text">2022-12-27 dan 2025-12-26 gacha</Col>
                        </Row>
                        <Row className="certificates-row">
                            <Col span={10} className="left-text"><span>Hujjat nusxasi:</span></Col>
                            <Col span={14} className="right-text">
                                <a href="#">Yuklab olish</a>
                            </Col>
                        </Row>
                    </div>
                </Card>

                <Card hoverable>
                    <Flex justify="space-between" className="card__head">
                        <h4 className="certificates-title">CEFR sertifikati</h4>
                        <Flex className="certificates-info" gap={8} align="center">
                            <span>Holati: </span>
                            <Tag color="error">Faol emas</Tag>
                        </Flex>
                    </Flex>
                    <Divider />
                    <div className="certificates-information">
                        <Row className="certificates-row">
                            <Col span={10} className="left-text"><span>Chet tili:</span></Col>
                            <Col span={14} className="right-text">Ingliz tili</Col>
                        </Row>
                        <Row className="certificates-row">
                            <Col span={10} className="left-text"><span>Sertifikat turi:</span></Col>
                            <Col span={14} className="right-text">Cambridge Assessment English Linguaskill</Col>
                        </Row>
                        <Row className="certificates-row">
                            <Col span={10} className="left-text"><span>Darajasi:</span></Col>
                            <Col span={14} className="right-text">A2</Col>
                        </Row>
                        <Row className="certificates-row">
                            <Col span={10} className="left-text"><span>Seriya raqami:</span></Col>
                            <Col span={14} className="right-text">22DTM1003471ES</Col>
                        </Row>
                        <Row className="certificates-row">
                            <Col span={10} className="left-text"><span>Amal qilish muddati:</span></Col>
                            <Col span={14} className="right-text">2022-12-27 dan 2025-12-26 gacha</Col>
                        </Row>
                        <Row className="certificates-row">
                            <Col span={10} className="left-text"><span>Hujjat nusxasi:</span></Col>
                            <Col span={14} className="right-text">
                                <a href="#">Yuklab olish</a>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </div>
        </div >

    )
}

const CertificateInfoCard = () => {
    return (
        <div className="certificates-information">
            <Row className="certificates-row">
                <Col span={10} className="left-text"><span>Chet tili:</span></Col>
                <Col span={14} className="right-text">Ingliz tili</Col>
            </Row>
            <Row className="certificates-row">
                <Col span={10} className="left-text"><span>Sertifikat turi:</span></Col>
                <Col span={14} className="right-text">Cambridge Assessment English Linguaskill</Col>
            </Row>
            <Row className="certificates-row">
                <Col span={10} className="left-text"><span>Darajasi:</span></Col>
                <Col span={14} className="right-text">A2</Col>
            </Row>
            <Row className="certificates-row">
                <Col span={10} className="left-text"><span>Seriya raqami:</span></Col>
                <Col span={14} className="right-text">22DTM1003471ES</Col>
            </Row>
            <Row className="certificates-row">
                <Col span={10} className="left-text"><span>Amal qilish muddati:</span></Col>
                <Col span={14} className="right-text">2022-12-27 dan 2025-12-26 gacha</Col>
            </Row>
            <Row className="certificates-row">
                <Col span={10} className="left-text"><span>Hujjat nusxasi:</span></Col>
                <Col span={14} className="right-text">
                    <a href="#">Yuklab olish</a>
                </Col>
            </Row>
        </div>
    )
}

export default Certificates;
export { CertificateInfoCard };