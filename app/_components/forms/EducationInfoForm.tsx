import { Divider, Segmented, Typography } from "antd"
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
                <Segmented
                    defaultValue={applicationType}
                    options={[{
                        label: "Ustama (Xodim, O’qituvchi)",
                        value: "teacher",
                    }, {
                        label: "Imtiyoz (O’quvchi, Qabul)",
                        value: "student"
                    }]}
                    onChange={(value: "teacher" | "student") => setApplicationType(value)}
                    style={{ margin: "25px auto", display: "block" }}
                />
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