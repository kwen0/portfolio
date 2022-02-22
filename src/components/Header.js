import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

function Header() {
    return (
        <StyledHeader>
            <Title>Karen Wen</Title>
            <Navigation>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
                <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
                <a href="https://github.com/kwen0"><BsGithub /></a>
                <a href="https://linkedin.com/in/kwen0"><BsLinkedin /></a>
                <a href="mailto:karen.wen3@gmail.com"><GrMail /></a>
            </Navigation>
        </StyledHeader >
    )
}

const StyledHeader = styled.div`
    font-family: 'Nunito', sans-serif;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
`;

const Title = styled.h1`
    font-family: 'Molle';
    font-size: 40px;
    margin: 0px;
    padding-bottom: 0.2em;
`;

const Navigation = styled.div`
    display: flex;
    gap: 2em;
    font-size: 18px;
    font-weight: bold;
    @media only screen and (max-width: 600px) {
        gap: 1.5em;
        font-size: 16px;
    }
`;

export default Header;