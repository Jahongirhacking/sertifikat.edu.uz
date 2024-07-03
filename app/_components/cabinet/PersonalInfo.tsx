"use client";

import { EditOutlined, SaveOutlined } from "@ant-design/icons"
import { Alert, Button, Divider, Flex, Form, Input } from "antd"
import "./PersonalInfo.scss";
import { useState } from "react";

const PersonalInfo = () => {
    const [editable, setEditable] = useState(false);

    return (
        <div className="personal-info tab-content">
            <Alert
                message="Ma’lumot"
                description="Ushbu bo‘limda foydalanuvchining biografik ma'lumoti, doimiy va vaqtinchalik ro‘yxatdan o‘tgan manzili shuningdek pasport ma'lumotlari aks etadi. Mazkur ma'lumotlar Davlat personallashtirish markazi va Ichki ishlar vazirligining axborot tizimlaridan real vaqt rejimida idoralararo elektron hamkorlik qilish yo‘li bilan olinadi."
                type="info"
                showIcon
                closable
            />
            <Flex justify="space-between" className="content-head" wrap gap={15}>
                <h3>Shaxsiy ma’lumotlar</h3>
                <Flex gap={12} wrap>
                    <Button icon={<EditOutlined />}>Ma’lumotlarni yangilash</Button>
                    <Button
                        type="primary"
                        icon={editable ? <SaveOutlined /> : <EditOutlined />}
                        onClick={() => setEditable((prev) => !prev)}
                    >
                        {editable ? "Saqlash" : "Tahrirlash"}
                    </Button>
                </Flex>
            </Flex>
            <Divider className="content-divider" />
            <div className="content-body personal-info__content-body">
                <PersonalInfoCard editable={editable} />
            </div>
        </div>
    )
}

const PersonalInfoCard = ({ editable }: { editable: boolean }) => {
    return (
        <Form
            className="personal-info-form"
            layout="vertical"
            initialValues={{
                name: 'Askarov Abror Akmal o\'g\'li',
                genderAndDob: 'Erkak, 23 yosh (11.06.1998)',
                nationality: 'O\'ZBEKISTON',
                ethnicity: 'O\'zbek',
                region: 'Buxoro, Vobkent',
                address: 'ЎЗБЕКИСТОН, БУХОРО ВИЛОЯТИ, БОЗОРЖОЙ МФЙ, ОТАЛИК,',
                idNumber: '1234567891011121314',
                phone: '+998903718891',
            }}
        >
            <Form.Item label="Ism Familiya Sharif:" name="name">
                <Input readOnly={!editable} value="Askarov Abror Akmal o'g'li" />
            </Form.Item>
            <Form.Item label="Jinsi va tug‘ilgan yili:" name="genderAndDob">
                <Input readOnly={!editable} value="Erkak, 23 yosh (11.06.1998)" />
            </Form.Item>
            <Form.Item label="Fuqaroligi:" name="nationality">
                <Input readOnly={!editable} value="O'ZBEKISTON" />
            </Form.Item>
            <Form.Item label="Millati:" name="ethnicity">
                <Input readOnly={!editable} value="O'zbek" />
            </Form.Item>
            <Form.Item label="Doimiy yashash manzili (viloyat,tuman):" name="region">
                <Input readOnly={!editable} value="Buxoro, Vobkent" />
            </Form.Item>
            <Form.Item label="Doimiy yashash manzili:" name="address">
                <Input readOnly={!editable} value="ЎЗБЕКИСТОН, БУХОРО ВИЛОЯТИ, БОЗОРЖОЙ МФЙ, ОТАЛИК," />
            </Form.Item>
            <Form.Item label="J.SH.SH.I.R:" name="idNumber">
                <Input readOnly={!editable} value="1234567891011121314" />
            </Form.Item>
            <Form.Item label="Telefon raqami:" name="phone">
                <Input readOnly={!editable} type="tel" value="+998903718891" />
            </Form.Item>
        </Form>
    )
}

export default PersonalInfo;
export { PersonalInfoCard };