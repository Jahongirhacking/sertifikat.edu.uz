import { Divider, Radio, Typography } from "antd"
import { useState } from "react"
import TeacherForm from "./TeacherForm";
import StudentForm from "./StudentForm";

const EducationInfoForm = () => {
    const [applicationType, setApplicationType] = useState<"teacher" | "student">("teacher");
    return (
        <>
            <Typography.Title level={2}>
                Mehnat yoki ta’lim ma’lumotlar
            </Typography.Title>
            <Divider />
            <label>
                <span style={{ fontWeight: 600 }}>Sertifikat qo’shishdan maqsadingizni tanlang:</span>
                <Radio.Group
                    defaultValue={applicationType}
                    onChange={(e) => setApplicationType(e.target.value)}
                    style={{ margin: "20px auto", display: "block" }}
                >
                    <Radio.Button value="teacher">Ustama (Xodim, O’qituvchi)</Radio.Button>
                    <Radio.Button value="student">Imtiyoz (O’quvchi, Qabul)</Radio.Button>
                </Radio.Group>
            </label>
            {
                applicationType === "teacher"
                    ? <TeacherForm />
                    : <StudentForm />
            }
        </>
    )
}

export default EducationInfoForm