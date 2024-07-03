import DoneImage from "@/app/_assets/images/done.png";
import { Modal } from "antd";
import Image from "next/image";
import { ReactElement } from "react";

const SuccessModal = ({
    isOpenModal,
    successText,
    btn
}: {
    isOpenModal: boolean,
    successText: string,
    btn: ReactElement
}) => {
    return (
        <Modal
            open={isOpenModal}
            footer={null}
            closeIcon={null}
            className="success-modal"
        >
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px"
            }}>
                <Image
                    width={158}
                    src={DoneImage}
                    alt="Muvaffaqiyatli Rasm"
                />
                <h2>Tabriklaymiz!</h2>
                <p>{successText}</p>
                {btn}
            </div>
        </Modal>
    )
}

export default SuccessModal