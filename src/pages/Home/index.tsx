import { Router, Route, Switch } from "wouter-preact";
import { useHashLocation } from "wouter-preact/use-hash-location";
import './style.css';
import pfp from '../../assets/images/me.jpg'
import ContentHome from "./content/contentHome";
import ContentAbout from "./content/contentAbout";
import { useTheme } from "../../hooks/useTheme";
import darktheme from '../../assets/icons/dark-theme.svg';
import github from '../../assets/icons/github.svg';
import facebook from '../../assets/icons/facebook.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import { NameChange } from '../../animations/nameChange';
import ContentProjects from "./content/contentProjects";
import ContentRandom from "./content/contentRandom";

export function Home() {

    const { theme, toggle } = useTheme();

    return (
        <div class="home-entire">

            <div class="home-left">

                <NameChange defaultText="Daniel Pan" />
                <img src={pfp} alt="this is me" width={200} height={200} class="pfp" />

                <div class="stats custom-divider-bottom">
                    <div>
                        22 year old graduating from GT

                    </div>
                    <div>
                        React, C++, Python, Java
                    </div>
                    <div>
                        learning to cook more
                    </div>
                </div>

                <div class="desktop-nav">
                    <div class="icon-contact">

                        <img src={github} width={32} height={32} onClick={() => window.open("https://github.com/denialpan/", "_blank", "noopener,noreferrer")} />
                        <img src={linkedin} width={32} height={32} onClick={() => window.open("https://www.linkedin.com/in/danielpan-/", "_blank", "noopener,noreferrer")} />
                        <img src={facebook} width={32} height={32} onClick={() => window.open("https://www.facebook.com/danpan123/", "_blank", "noopener,noreferrer")} />
                        <img src={darktheme} width={32} height={32} class="darktheme-icon" onClick={toggle} />

                    </div>
                    <div class="link-section">
                        <a href="#/">Home</a>
                        <a href="#/about">About</a>
                        <a href="#/projects">Projects</a>
                        <a href="#/random">Random</a>
                    </div>
                    <div class="resume-main">
                        RESUME
                    </div>
                </div>

                <div class="mobile-nav custom-divider-bottom">


                    <div class="icon-contact">

                        <img src={github} width={32} height={32} />
                        <img src={linkedin} width={32} height={32} />
                        <img src={facebook} width={32} height={32} />
                        <img src={darktheme} width={32} height={32} class="darktheme-icon" onClick={toggle} />

                    </div>
                    <div class="link-section ">
                        <a href="#/">Home</a>
                        <a href="#/about">About</a>
                        <a href="#/projects">Projects</a>
                        <a href="#/random">Random</a>
                        <a href="#/projects">Resume</a>
                    </div>
                </div>



            </div>
            <div class="home-right custom-divider-left">
                <Router hook={useHashLocation}>
                    <Switch>
                        <Route path="/">
                            <ContentHome />
                        </Route>
                        <Route path="/about">
                            <ContentAbout />
                        </Route>
                        <Route path="/projects">
                            <ContentProjects />
                        </Route>
                        <Route path="/random">
                            <ContentRandom />
                        </Route>
                        <Route><ContentHome /></Route>
                    </Switch>
                </Router>
            </div>
        </div >
    );
}
