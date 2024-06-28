import { Button } from "antd"
import Link from "next/link"

const AuthButtons = () => {
    return (
        <div className="auth-btns hero__auth-btns">
            <Link href={"./cabinet"}>
                <Button className="btn login-btn">Tizimga kirish</Button>
            </Link>
            <Link href={"./cabinet"}>
                <Button className="btn signup-btn">Ro‘yxatdan o‘tish</Button>
            </Link>
        </div>
    )
}

export default AuthButtons