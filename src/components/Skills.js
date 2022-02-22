import styled from 'styled-components'

function Skills() {
    return (
        <StyledSkills>
            <Skill><img src="https://cdn.svgporn.com/logos/javascript.svg" alt="Javascript" />Javascript</Skill>
            <Skill><img src="https://cdn.svgporn.com/logos/react.svg" alt="React" />React</Skill>
            <Skill><img src="https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png" alt="Redux" />Redux</Skill>
            <Skill><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/260px-HTML5_logo_and_wordmark.svg.png" alt="HTML" />HTML5</Skill>
            <Skill><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png" alt="CSS" />CSS3</Skill>
            <Skill><img src="https://cdn.svgporn.com/logos/webpack.svg" alt="Webpack" />Webpack</Skill>
            <Skill><img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" />Git</Skill>
            <Skill><img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/940/square_480/jestlogo.png" alt="Jest" />Jest</Skill>
            <Skill><img src="https://cdn.svgporn.com/logos/firebase.svg" alt="Firebase" />Firebase</Skill>
        </StyledSkills>
    )
}

const StyledSkills = styled.div`
    font-size: 12px;
    width: 100vw;
    height: 80vh;
    font-family: 'Nunito', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    gap: 1em;
    img {
        height: 50px;
    }
    @media only screen and (max-width: 600px) {
        flex-wrap: wrap;
        align-content: center;
        width: 100vw;
    }
`;

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    gap: 0.5em;

`
export default Skills;