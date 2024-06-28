import { PlusOutlined } from "@ant-design/icons"
import { Button, Card, Divider, Flex, Tag } from "antd"
import Link from "next/link"
const defaultPath = "./cabinet/application/123456";

const Applications = () => {
    return (
        <div className="applications tab-content">
            <Flex justify="space-between" className="content-head">
                <h3>Arizalarim</h3>
                <Button type="primary" icon={<PlusOutlined />}>Ariza yuborish</Button>
            </Flex>
            <Divider className="content-divider" />
            <div className="content-body">
                <Card hoverable>
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
                    <Divider />
                    <Flex justify="space-between" align="flex-start">
                        <div className="categories">
                            <strong>Umumiy o’rta ta’lim muassasasi (Maktab)</strong>
                            <span>Ingliz tili | Cambridge Assessment English Linguaskill | A2</span>
                        </div>
                        <Tag color="success">Tasdiqlandi</Tag>
                    </Flex>
                    <Divider />
                    <Flex justify="flex-end" gap={7}>
                        <Link href={defaultPath}>
                            <Button type="primary">Batafsil</Button>
                        </Link>
                    </Flex>
                </Card>

                <Card hoverable>
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
                    <Divider />
                    <Flex justify="space-between" align="flex-start">
                        <div className="categories">
                            <strong>Umumiy o’rta ta’lim muassasasi (Maktab)</strong>
                            <span>Ingliz tili | Cambridge Assessment English Linguaskill | A2</span>
                        </div>
                        <Tag color="error">Rad etildi</Tag>
                    </Flex>
                    <Divider />
                    <Flex justify="flex-end" gap={7}>
                        <Button>Tahrirlash</Button>
                        <Link href={defaultPath}>
                            <Button type="primary">Batafsil</Button>
                        </Link>
                    </Flex>
                </Card>

                <Card hoverable>
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
                    <Divider />
                    <Flex justify="space-between" align="flex-start">
                        <div className="categories">
                            <strong>Umumiy o’rta ta’lim muassasasi (Maktab)</strong>
                            <span>Ingliz tili | Cambridge Assessment English Linguaskill | A2</span>
                        </div>
                        <Tag color="processing">Ariza yuborildi</Tag>
                    </Flex>
                    <Divider />
                    <Flex justify="flex-end" gap={7}>
                        <Button>Tahrirlash</Button>
                        <Link href={defaultPath}>
                            <Button type="primary">Batafsil</Button>
                        </Link>
                    </Flex>
                </Card>

                <Card hoverable>
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
                    <Divider />
                    <Flex justify="space-between" align="flex-start">
                        <div className="categories">
                            <strong>Umumiy o’rta ta’lim muassasasi (Maktab)</strong>
                            <span>Ingliz tili | Cambridge Assessment English Linguaskill | A2</span>
                        </div>
                        <Tag color="cyan">Ko’rib chiqilmoqda</Tag>
                    </Flex>
                    <Divider />
                    <Flex justify="flex-end" gap={7}>
                        <Button>Tahrirlash</Button>
                        <Link href={defaultPath}>
                            <Button type="primary">Batafsil</Button>
                        </Link>
                    </Flex>
                </Card>
            </div>
        </div>
    )
}

const ApplicationCard = () => {
    return (
        <Card hoverable>
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
            <Divider />
            <Flex justify="space-between" align="flex-start">
                <div className="categories">
                    <strong>Umumiy o’rta ta’lim muassasasi (Maktab)</strong>
                    <span>Ingliz tili | Cambridge Assessment English Linguaskill | A2</span>
                </div>
                <Tag color="success">Tasdiqlandi</Tag>
            </Flex>
            <Divider />
            <Flex justify="flex-end" gap={7}>
                <Button type="primary">Batafsil</Button>
            </Flex>
        </Card>
    )
}

export default Applications
export { ApplicationCard };