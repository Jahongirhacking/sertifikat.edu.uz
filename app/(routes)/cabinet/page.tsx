import Applications from "@/app/_components/cabinet/Applications";
import Certificates from "@/app/_components/cabinet/Certificates";
import PersonalInfo from "@/app/_components/cabinet/PersonalInfo";
import { Tabs } from "antd"
import ITabItem from "@/app/_types/cabinet/ITabItem";

const Cabinet = () => {
    const tabItems: ITabItem[] = [
        {
            key: '1',
            label: "Shaxsiy ma’lumotlar",
            children: <PersonalInfo />
        },
        {
            key: '2',
            label: "Arizalarim",
            children: <Applications />
        },
        {
            key: '3',
            label: "Sertifikatlarim",
            children: <Certificates />
        },
    ]

    return (
        <main className="main">
            <h2>Shaxsiy kabinet</h2>
            <Tabs
                tabPosition="left"
                items={tabItems}
            />
        </main>
    )
}

export default Cabinet