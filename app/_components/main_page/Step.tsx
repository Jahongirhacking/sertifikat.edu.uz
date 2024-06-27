import IStep from "@/app/_types/main_page/IStep"

const Step = ({ order, title, description }: IStep) => {
    return (
        <div className="step">
            <span className="order">{order}</span>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
        </div>
    )
}

export default Step