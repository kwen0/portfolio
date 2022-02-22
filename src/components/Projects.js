import styled from 'styled-components'
import myreads from '../assets/myreads.png';
import myreads2 from '../assets/myreads2.png';
import dainty from '../assets/dainty.png';
import dainty2 from '../assets/dainty2.png';
import weatherflow from '../assets/weatherflow.png';
import taskbook from '../assets/taskbook.png';

function Projects() {
    return (
        <StyledProjects>
            <Proj>
                <div className="figure">
                    <img className="image-main" src={myreads2} />
                    <img className="image-hover" src={myreads} />
                </div>
                <Info>
                    <InfoContainer>
                        <ProjTitle>
                            Myreads
                        </ProjTitle>
                        <ProjDesc>
                            A Goodreads clone that allows users to search for books
                        </ProjDesc>
                        <TechStack>React, Styled Components, Firebase, HTML5, CSS3, Google Books API</TechStack>
                    </InfoContainer>
                    <Links>
                        <a href='https://github.com/kwen0/myreads'>Repository</a>
                    </Links>
                </Info>
            </Proj>
            <Proj>
                <div className="figure">
                    <img className="image-main" src={dainty} />
                    <img className="image-hover" src={dainty2} />
                </div>
                <Info>
                    <InfoContainer>
                        <ProjTitle>
                            Dainty
                        </ProjTitle>
                        <ProjDesc>
                            A single-page e-commerce application with shopping cart capabilities
                        </ProjDesc>
                        <TechStack>React, HTML5, CSS3</TechStack>
                    </InfoContainer>
                    <Links>
                        <a href='https://kwen0.github.io/shopping-cart'>Live demo</a>
                        |
                        <a href='https://github.com/kwen0/shopping-cart'>Repository</a>
                    </Links>
                </Info>
            </Proj>
            <Proj>
                <div className="figure">
                    <img className="image-main" src={weatherflow} />
                </div>
                <Info>
                    <InfoContainer>
                        <ProjTitle>
                            WeatherFlow
                        </ProjTitle>
                        <ProjDesc>
                            A weather application that enables users to search weather forecasts by city
                        </ProjDesc>
                        <TechStack>JavaScript, HTML5, CSS3, OpenWeather API, Unsplash API</TechStack>
                    </InfoContainer>
                    <Links>
                        <a href='https://kwen0.github.io/weather-app'>Live demo</a>
                        |
                        <a href='https://github.com/kwen0/weather-app'>Repository</a>
                    </Links>
                </Info>
            </Proj>
            <Proj>
                <div className="figure">
                    <img className="image-main" src={taskbook} />
                </div>
                <Info>
                    <InfoContainer>
                        <ProjTitle>
                            Taskbook
                        </ProjTitle>
                        <ProjDesc>
                            A project manager app where users can manage to-do items for each project
                        </ProjDesc>
                        <TechStack>JavaScript, HTML5, CSS3, Webpack</TechStack>
                    </InfoContainer>
                    <Links>
                        <a href='https://kwen0.github.io/todo-list'>Live demo</a>
                        |
                        <a href='https://github.com/kwen0/todo-list'>Repository</a>
                    </Links>
                </Info>
            </Proj>

        </StyledProjects>
    )
}

const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    overflow: scroll;
    gap: 1em;
    padding: 2em 0em;
    @media only screen and (max-width: 600px) {
        padding: 1.5em 0em;
        gap: 1.5em;
    }
`
const Proj = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    gap: 2em;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        width: 100vw;
        gap: 0em;
    }
`
const ProjTitle = styled.h1`
    font-family: 'Contrail One', cursive;
    font-size: 18px;
    padding: 0px;
    margin-top: 0px;
    @media only screen and (max-width: 600px) {
        margin-bottom: 0px;
    }
`
const Links = styled.div`
    font-size: 14px;
    display: flex;
    gap: 0.5em;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media only screen and (max-width: 600px) {
        gap: 2px;
    }
`
const ProjDesc = styled.div`
    font-size: 14px;
`
const TechStack = styled.div`
    font-size: 14px;
    font-style: italic;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 25vw;
    @media only screen and (max-width: 600px) {
        width: 80vw;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`
export default Projects;