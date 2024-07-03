"use client";

import { Form } from "antd";
import { useState } from "react";
import BirthCertificateForm from "./BirthCertificateForm";
import PassportForm from "./PassportForm";

const SignUpForm = ({
    showModalSMS,
    showModalForeigner
}: {
    showModalSMS: () => void,
    showModalForeigner: () => void,
}) => {
    const [activeTab, setActiveTab] = useState("passport");

    return (
        <Form
            name="sign-up"
            autoComplete="off"
        >
            {
                activeTab === "passport"
                    ?
                    <PassportForm
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        showModalSMS={showModalSMS}
                        showModalForeigner={showModalForeigner}
                    />
                    : <BirthCertificateForm
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        showModalSMS={showModalSMS}
                        showModalForeigner={showModalForeigner}
                    />
            }
        </Form>
    )
}

export default SignUpForm