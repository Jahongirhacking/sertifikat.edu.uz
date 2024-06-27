import ICertificateLists from "@/app/_types/main_page/ICertificateLists"

const CertificateLists = ({ title, description, children }: ICertificateLists) => {
    return (
        <div className="certificate-list">
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            {children}
        </div>
    )
}

export default CertificateLists