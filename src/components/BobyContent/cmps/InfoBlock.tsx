import React, { useEffect, useState } from 'react'

const infoNavTitle = [
    {
        title: 'Network connectivity',
        content: ["Direct peering through Microsoft Azure Peering Services (MAPS) for Voice", "Network statistics and reporting on Docs", "Ability to offer end-to-end QoS to customers", "High confidence in SLA to customer"]
    }, {
        title: 'Provisioning & onboarding',
        content: ['Provisioning APIs for setting up trunk to Microsoft Teams', 'Upload (using API) phone numbers and/or direct inward dialing (DID) numbers to the Teams Admin Center', 'Display and assign phone numbers and/or DID numbers to tenants in the Teams Admin Center', 'Numbers show up in the Teams Admin Center, similar to Calling Plans']
    }, {
        title: 'Management',
        content: ['Seamless customer-authorized access (by region) to operator for management of voice tenant', 'Operator management portal for customer tenants', 'No need to get additional special permissions such as delegated admin to manage calling', 'Proactive management capabilities through data analysis and anomaly detection']
    }, {
        title: 'Teams admin portal',
        content: ['Operator presence in Teams Admin Center, by region and service', 'Management and assignment experience for operator numbers embedded in the portal', 'Enhanced number acquisition experience through operators', 'Reduced time to enable customers for Teams Phone']
    }, {
        title: 'Streamlined support',
        content: ['Joint back-to-back support model. Support-to-support and engineering-to-engineering', 'Proactive diagnostics and alerts for trunk setup and health', 'Regular communications for service interface changes and product updates', 'Regular communications about network SLA and call quality']
    }]

const InfoBlock = () => {

    const [number, setNumber] = useState(0)
    const [Animation, setAnimation] = useState('appear;')
    const [content, setContent] = useState(infoNavTitle[number].content)

    useEffect(() => {
        setContent(infoNavTitle[number].content)
        setAnimation('');
        const timeoutId = setTimeout(() => {
            setAnimation('appear');
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [number])

    return (
        <section className='info-container'>
            <div className='info-nav'>
                {
                    infoNavTitle.map(({ title }, i) => {
                        const isActive = number === i;
                        const className = `info-title${isActive ? '__active' : ''}`;

                        return (
                            <div className={className} key={`${title}_${i}`} onClick={() => setNumber(i)}>
                                <span>{title}</span>
                            </div>
                        )
                    })
                }
            </div>

            <div className={`info-content-wrapper info-content-wrapper__${number}`}>
                <ul className='info-content' style={{ animationName: Animation }}>
                    {
                        content.map((content, i) => (
                            <li key={content}>{content}</li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default InfoBlock