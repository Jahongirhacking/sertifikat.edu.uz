import ICard from "@/app/_types/main_page/ICard"
import { Tag } from "antd"
import Image from "next/image"

const Card = ({ img, keywords, title, className, children }: ICard) => {
    return (
        <div className={`card ${className}`}>
            <div className="card__header">
                <Image
                    src={img}
                    alt="Ikonka rasmi"
                />
                <div className="tags">
                    {
                        keywords.map(keyword => <Tag key={keyword}>{keyword}</Tag>)
                    }
                </div>
            </div>
            <div className="card__body">
                <h3 className="title">{title}</h3>
                {children}
            </div>
        </div>
    )
}

export default Card