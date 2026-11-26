function CVPreview({ contactInfo }) {
    return (
        <>
            <h2>Live Preview</h2>
            <div>
                <h1>{contactInfo.fullName || "John Doe"}</h1>
                <p>{contactInfo.professionalTitle}</p>
                <p>{contactInfo.email} | {contactInfo.phoneNumber} | {contactInfo.location} | {contactInfo.website}</p>
            </div>
        </>
    )
}

export { CVPreview }