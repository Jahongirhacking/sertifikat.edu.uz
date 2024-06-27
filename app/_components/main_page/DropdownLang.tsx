"use client";

import { DownOutlined } from "@ant-design/icons"
import { Button, Dropdown, MenuProps, Space } from "antd"
import { useState } from "react";

interface IDropdownLangProp {
    langs: string[];
}

const DropdownLang = ({ langs }: IDropdownLangProp) => {
    const [active, setActive] = useState<number>(0);

    const handleMenuClick = (e: any) => {
        setActive(e.key);
    };

    const items: MenuProps['items'] = langs.map((lang: string, index: number) => ({
        label: lang,
        key: index,
    }))

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <Dropdown menu={menuProps}>
            <Button>
                <Space>
                    {langs[active]}
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    )
}

export default DropdownLang