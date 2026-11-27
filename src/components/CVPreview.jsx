function CVPreview({ contactInfo, summary, experience }) {
    return (
        <>
            <h2>Live Preview</h2>
            <div>
                <h1>{contactInfo.fullName || "John Doe"}</h1>
                <p>{contactInfo.professionalTitle}</p>
                <p>{contactInfo.email} | {contactInfo.phoneNumber} | {contactInfo.location} | {contactInfo.website}</p>
                <hr />
                <p>{summary}</p>
                <hr />
                <p>{experience.jobTitle}</p>
                <p>{experience.startDate}</p>
                <p>{experience.endDate}</p>
                <p>{experience.company} | {experience.location}</p>
                <p>{experience.highlights}</p>
            </div>
        </>
    )
}

export { CVPreview }