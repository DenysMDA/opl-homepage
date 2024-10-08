import './slider.scss'

const sliderContent = [
    "Operator APIs - Complaint, Secure, Standardized REST APIs, that allow partners to integrate with our PSTN eco-system, and service Teams, Azure Communication Services customer telephony needs.",
    "Operator Portal - Portal for Operators to ease onboarding, day-to-day administrative actions, and friendly UX to manually fulfill Customer requests.",
    "Support - In addition to Operators, we also have Admin APIs and portal, available to Microsoft Service Desk (TNS team), and our On-call engineers (OCE)."
]

const Slider = () => {
  return (
    <section className='slider-container' aria-labelledby="slider-title">
        <div className='slider-content'>
            <h1 className='slider-title' id="slider-title">Welcome to Operator Connect</h1>
            <p className='sleder-description'>Operator Connect allows organizations to connect Microsoft Teams to the Public Switched Telephone Network (PSTN) for voice, emergency, and messaging services</p>
            <ul className='slider-list' role="list" aria-label="Operator Connect Features">
                {
                    sliderContent.map((text, idx) => (
                        <li key={`${text}_${idx}`}>{text}</li>
                    ))
                }
            </ul>
            <div className='slider-link'>
                <a href="https://localhost:44365/" aria-label="Sign in to Operator Connect">Sign in</a>
            </div>
        </div>
    </section>
  )
}

export default Slider