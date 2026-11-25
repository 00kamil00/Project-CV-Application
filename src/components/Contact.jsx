function Contact() {
    return (
        <>
            <h2>Contact</h2>

            <label htmlFor="fullname">FULL NAME</label>
            <input type="text" id="fullname" placeholder="e.g. John Doe"/>

            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" placeholder="e.g. johndoe@gmail.com"/>

            <label htmlFor="location">LOCATION</label>
            <input type="text" id="location" placeholder="e.g. City, Country"/>

            <label htmlFor="professionaltitle">PROFESSIONAL TITLE</label>
            <input type="text" id="professionaltitle" placeholder="e.g. Software Engineer"/>

            <label htmlFor="phonenumber">PHONE NUMBER</label>
            <input type="tel" id="phonenumber" placeholder="e.g. +91 99000 31000"/>

            <label htmlFor="website">WEBSITE</label>
            <input type="text" id="website" placeholder="e.g. websitename.com"/>
        </>
    )
}

export { Contact }