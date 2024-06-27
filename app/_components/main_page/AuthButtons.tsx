import { Button } from "antd"

const AuthButtons = () => {
    return (
        <div className="auth-btns hero__auth-btns">
            <Button className="btn login-btn">Tizimga kirish</Button>
            <Button className="btn signup-btn">Ro‘yxatdan o‘tish</Button>
        </div>
    )
}

export default AuthButtons