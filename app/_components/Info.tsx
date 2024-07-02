import { Col, Row } from 'antd'
import React, { ReactElement } from 'react'
import IInfo from '../_types/cabinet/IInfo'

interface InfoProps {
    items: IInfo[]
}

const Info = ({ items }: InfoProps) => {
    return (
        <>
            {items.map((item, index) => (
                <Row key={index} className="certificates-row">
                    <Col span={10} className="left-text"><span>{item.left}</span></Col>
                    <Col span={14} className="right-text">{
                        item.right?.href
                            ? <a href={item.right.href}>{item.right.text}</a>
                            : <span>{item.right.text}</span>
                    }</Col>
                </Row>
            ))}
        </>
    )
}

export default Info