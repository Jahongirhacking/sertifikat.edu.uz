import ICertificateTable, { IColumn, ILanguageTable, IScienceTable } from "@/app/_types/main_page/ICertificateTable"
import { Button, Dropdown, Flex, Radio, Space, Table, Tabs } from "antd"
import type { MenuProps, TabsProps } from 'antd';
import Image from "next/image"
import * as CardIcons from "@/app/_assets/images/main/card_icons/index"
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const CertificateTable = <T extends object>({ professions, specialties, info, options, data, columns, dataType }: ICertificateTable<T>) => {
    const [professionActive, setProfessionActive] = useState(0);
    const [specialityActive, setSpecialityActive] = useState(0);

    const CustomTable = <Table className={dataType} dataSource={data} columns={columns} />
    const items: TabsProps['items'] = options.map((option, index) => ({
        key: `${index}`,
        label: option.label,
        children: CustomTable
    }))

    const professionMenuProps: MenuProps = {
        items: professions.map((profession, index) => ({
            key: index,
            label: profession.label
        })),
        onClick: (e: any) => setProfessionActive(e.key)
    }

    const specialtyMenuProps: MenuProps = {
        items: specialties.map((profession, index) => ({
            key: index,
            label: profession.label
        })),
        onClick: (e: any) => setSpecialityActive(e.key)
    }

    return (
        <div className="table-container">
            <div className="about-individual">
                <Flex wrap gap={12}>
                    <label className="radio-label">
                        <span className="label-text">
                            Imtiyoz oluvchi:
                        </span>
                        <Radio.Group
                            options={professions}
                            defaultValue={professions[0].value}
                            optionType="button"
                            buttonStyle="solid"
                        />
                        <Dropdown menu={professionMenuProps}>
                            <Button>
                                <Space>
                                    {professions[professionActive].label}
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </label>
                    <label className="radio-label">
                        <span className="label-text">
                            Mutaxassisligi:
                        </span>
                        <Radio.Group
                            options={specialties}
                            defaultValue={specialties[0].value}
                            optionType="button"
                            buttonStyle="solid"
                        />

                        <Dropdown menu={specialtyMenuProps}>
                            <Button>
                                <Space>
                                    {specialties[specialityActive].label}
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </label>
                </Flex>
                <div className="info-container">
                    <Image
                        src={CardIcons.image5}
                        alt="Ma'lumotlar ikonkasi"
                    />
                    <p>
                        {info}
                    </p>
                </div>
            </div>
            <Tabs type="card" items={items} />
        </div>
    )
}

export default CertificateTable