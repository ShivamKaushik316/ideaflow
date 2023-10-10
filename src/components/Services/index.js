import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServiceElements';
import icon1 from './ceo.png'
import icon2 from './David.png'
import icon3 from './alber.png'
import icon4 from './bat.png'

const ServiceSection = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Leaders</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1}>
                    </ServicesIcon>
                    <ServicesH2>Jacob Cole</ServicesH2>
                    <ServicesP>
                    Past: MIT Media Lab; researcher with Tim Berners-Lee. Venture Partner at Outliers Fund.
                        </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={icon2}>
                    </ServicesIcon>
                    <ServicesH2>David Greenspan</ServicesH2>
                    <ServicesP>
                    Past: Co-Founder of AppJet, created Etherpad (acquired by Google); YC W07. 1st Engineer at Meteor.
                        </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={icon3}>
                    </ServicesIcon>
                    <ServicesH2>Albert Sławiński</ServicesH2>
                    <ServicesP>
                    Full Stack Engineer
                    Past: Software Engineer at Palantir. Oxford Alum.                                            
                        
                        </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon4}>
                    </ServicesIcon>
                    <ServicesH2>Bat Manson</ServicesH2>
                    <ServicesP>
                    Past: Serial Entrepreneur. Engineering Manager at Apple. Director of Engineering at Shone
                        </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServiceSection;
