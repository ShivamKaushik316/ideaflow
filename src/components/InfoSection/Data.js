import image from '../../images/svg-1.svg'
import image2 from '../../images/svg-2.svg'
import image3 from '../../images/svg-3.svg'
import image4 from './image.png'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Amplify Intelligence',
    headline: 'Unlocking Human-Machine Synergy: The Intelligence Amplification Ecosystem',
    description: `We are pioneering an ecosystem that facilitates seamless collaboration between humans and machines to address some of the world's most pressing challenges. Our initial endeavor involves the development of an innovative notebook designed to enhance and amplify your cognitive abilities, unlocking new realms of intelligence and problem-solving capabilities`,
    buttonLabel: 'Get Started',
    imgStart: false,
    img: image,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Puzzle Pairing',
    headline: 'Connecting people with matching puzzle pieces',
    description:`There are millions of scientists trying to cure the likes of AIDS and Alzheimer’s. Maybe the cure is currently separated in different people’s heads. How can we design the web so that these half-formed solutions can come together?
    ‍




    - Sir Tim Berners-Lee, Creator of the Web
    
    `,
    buttonLabel: 'Learn More',
    imgStart: true,
    img: image4,
    alt: 'ai',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headline: `We're Hiring Key Roles`,
    description: "Help us extend the human mind..",
    buttonLabel: 'Join Our Tribe',
    imgStart: true,
    img: image3,
    alt: 'login',
    dark: false,
    primary: false,
    darkText: true,
};