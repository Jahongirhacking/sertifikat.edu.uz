import ICertificateTable, { IColumn, ILanguageTable, IScienceTable } from "@/app/_types/main_page/ICertificateTable"
import { Flex, Radio, Table, Tabs } from "antd"
import type { TabsProps } from 'antd';
import Image from "next/image"
import * as CardIcons from "@/app/_assets/images/main/card_icons/index"

const CertificateTable = <T extends object>({ professions, specialties, info, options, data, columns, dataType }: ICertificateTable<T>) => {
    const CustomTable = <Table className={dataType} dataSource={data} columns={columns} />
    const items: TabsProps['items'] = options.map((option, index) => ({
        key: `${index}`,
        label: option.label,
        children: CustomTable
    }))

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