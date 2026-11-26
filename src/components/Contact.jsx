function Contact({ contactInfo, setContactInfo }) {

    return (
        <>
            <h2>Contact</h2>

            <label htmlFor="fullname">FULL NAME</label>
            <input type="text" id="fullname" placeholder="e.g. John Doe" value={contactInfo.fullName} onChange={(event) => setContactInfo({ ...contactInfo, fullName: event.target.value })}/>

            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" placeholder="e.g. johndoe@gmail.com" value={contactInfo.email} onChange={(event) => setContactInfo({ ...contactInfo, email: event.target.value })}/>

            <label htmlFor="location">LOCATION</label>
            <input type="text" id="location" placeholder="e.g. City, Country" value={contactInfo.location} onChange={(event) => setContactInfo({ ...contactInfo, location: event.target.value })}/>

            <label htmlFor="professionaltitle">PROFESSIONAL TITLE</label>
            <input type="text" id="professionaltitle" placeholder="e.g. Software Engineer" value={contactInfo.professionalTitle} onChange={(event) => setContactInfo({ ...contactInfo, professionalTitle: event.target.value })}/>

            <label htmlFor="phonenumber">PHONE NUMBER</label>
            <input type="tel" id="phonenumber" placeholder="e.g. +91 99000 31000" value={contactInfo.phoneNumber} onChange={(event) => setContactInfo({ ...contactInfo, phoneNumber: event.target.value })}/>

            <label htmlFor="website">WEBSITE</label>
            <input type="text" id="website" placeholder="e.g. websitename.com" value={contactInfo.website} onChange={(event) => setContactInfo({ ...contactInfo, website: event.target.value })}/>
        </>
    )
}

export { Contact }