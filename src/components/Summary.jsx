function Summary({ summary, setSummary }) {
    return (
        <>
            <h2>Summary</h2>

            <label htmlFor="summary">PROFESSIONAL SUMMARY</label>
            <textarea id="summary" placeholder="Software Engineer skilled in building React Based Components, web applications..." value={summary} onChange={(event) => setSummary(event.target.value)}></textarea>
        </>
    )
}

export { Summary }