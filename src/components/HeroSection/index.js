import React, { useState } from 'react';
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';
import Video from '../../videos/video.mp4';


const HeroSection = () => {

    const [hover, sethover] = useState(false)

    const onHover = () => {
        sethover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>The Intelligence Amplification Company</HeroH1>
                <HeroP>Try IdeaFlow
                </HeroP>
                <HeroBtnWrapper >
                    <Button onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        to="signup"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
