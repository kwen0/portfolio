import styled from 'styled-components';
import me from '../assets/me.png';

function About() {
    return (
        <StyledAbout>
            <AboutImg src={me}>
            </AboutImg>
            <AboutBlurb>
                <div>Hi there!</div>
                <div>I am a former healthcare professional turned software engineer 👩🏻‍💻</div>
                <div>In my previous role, I loved meeting and caring for people from all walks of life, but found that I was constantly craving a bigger challenge. </div>
                <div>
                    When I was in college, I took a few computer science electives for fun, and I remembered how much I appreciated the scalability and endless possibilities that coding offers.
                    I took a leap of faith to switch career paths and decided to teach myself programming.
                    I discovered that I love learning and problem-solving, and I love how programming brings out my creative side.
                </div>
                <div>Besides coding, I also enjoy
                    doing yoga 🙆🏻‍♀️
                    lifting weights at the gym 🏋🏻‍♀️
                    meditating 🧘🏻‍♀️
                    journaling ✍🏻
                    and playing video games 🎮 </div>
            </AboutBlurb>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    font-size: 12px;
    width: 100vw;
    font-family: 'Nunito', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const AboutImg = styled.img`
    border-radius: 50%;
    height: 35vh;
    @media only screen and (max-width: 600px) {
        height: 25vh;
        padding: 1.5em;
    }
`;

const AboutBlurb = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1em;
    font-size: 14px;
    width: 28vw;
    height: 80vh;
    font-family: 'Nunito', sans-serif;
    padding: 0em 2em;
    @media only screen and (max-width: 600px) {
        width: 75vw;
        align-items: center;
        text-align: center;
        padding: 0em 0em;
        height: auto;
    }
`;

export default About;