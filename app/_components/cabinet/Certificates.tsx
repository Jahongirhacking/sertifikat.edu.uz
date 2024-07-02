import { PlusOutlined, RetweetOutlined } from "@ant-design/icons"
import { Button, Card, Col, Divider, Flex, Row, Tag } from "antd"
import "./Certificates.scss";
import Info from "../Info";
import { certificateInfo } from "@/app/_utils/staticVariables";

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
                        <Info items={certificateInfo} />
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
                        <Info items={certificateInfo} />
                    </div>
                </Card>
            </div>
        </div >

    )
}

export default Certificates;