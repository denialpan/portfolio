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
                        23 year old graduating from GT
                    </div>
                    <div>
                        React, C++, Python, Java
                    </div>
                    <div class="shift-gradient-animation" style={{ color: "var(--secondary)" }}>
                        digitally preserving myself
                    </div>
                </div>

                <div class="desktop-nav">
                    <div class="icon-contact">

                        <img src={github} alt="github" width={32} height={32} onClick={() => window.open("https://github.com/denialpan/", "_blank", "noopener,noreferrer")} />
                        <img src={linkedin} alt="linkedin" width={32} height={32} onClick={() => window.open("https://www.linkedin.com/in/danielpan-/", "_blank", "noopener,noreferrer")} />
                        <img src={facebook} alt="facebook" width={32} height={32} onClick={() => window.open("https://www.facebook.com/danpan123/", "_blank", "noopener,noreferrer")} />
                        <img src={darktheme} alt="toggle theme" width={32} height={32} class="darktheme-icon" onClick={toggle} />

                    </div>
                    <div class="link-section">
                        <a href="#/">Home</a>
                        <a href="#/about">About</a>
                        <a href="#/projects">Projects</a>
                        <a href="#/random">Random</a>
                    </div>
                    <div class="resume-main" onClick={() => window.open("https://raw.githubusercontent.com/denialpan/portfolio/191229093f51959252084562ce2b09b74b8ca744/src/assets/Daniel%20Pan%20-%20Resume.pdf", "_blank", "noopener,noreferrer")} >
                        RESUME
                    </div>
                </div>

                <div class="mobile-nav custom-divider-bottom">


                    <div class="icon-contact">

                        <img src={github} alt="github" width={32} height={32} />
                        <img src={linkedin} alt="linkedin" width={32} height={32} />
                        <img src={facebook} alt="facebook" width={32} height={32} />
                        <img src={darktheme} alt="toggle theme" width={32} height={32} class="darktheme-icon" onClick={toggle} />

                    </div>
                    <div class="link-section ">
                        <a href="#/">Home</a>
                        <a href="#/about">About</a>
                        <a href="#/projects">Projects</a>
                        <a href="#/random">Random</a>
                        <a href="https://raw.githubusercontent.com/denialpan/portfolio/552d4cc79944dab6eb1e4bc473422aef20beecfe/src/assets/Daniel%20Pan%20-%20Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
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

                        <Route path="/random/:slug">
                            <ContentRandom />
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
