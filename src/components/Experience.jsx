function Experience({ experience, setExperience }) {
    return (
        <>
            <h2>Experience</h2>

            <label htmlFor="jobtitle">JOB TITLE</label>
            <input type="text" id="jobtitle" placeholder="Frontend Web Developer" value={experience.jobTitle} onChange={(event) => setExperience({ ...experience, jobTitle: event.target.value })}/>

            <label htmlFor="company">COMPANY</label>
            <input type="text" id="company" placeholder="Solution Ltd" value={experience.company} onChange={(event) => setExperience({ ...experience, company: event.target.value })}/>

            <label htmlFor="location">LOCATION</label>
            <input type="text" id="location" placeholder="Cracow, Poland" value={experience.location} onChange={(event) => setExperience({ ...experience, location: event.target.value })}/>

            <label htmlFor="startdate">START DATE</label>
            <input type="text" id="startdate" placeholder="Jan 2026" value={experience.startDate} onChange={(event) => setExperience({ ...experience, startDate: event.target.value })}/>

            <label htmlFor="enddate">END DATE</label>
            <input type="text" id="enddate" placeholder="Till Now" value={experience.endDate} onChange={(event) => setExperience({ ...experience, endDate: event.target.value })}/>

            <label htmlFor="highlights">HIGHLIGHTS</label>
            <textarea id="highlights" placeholder="Improvised a Feature for effeciency..." value={experience.highlights} onChange={(event) => setExperience({ ...experience, highlights: event.target.value })}></textarea>
        </>
    )
}

export { Experience }