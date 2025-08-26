import { Router, Route, Switch } from "wouter-preact";
import { useHashLocation } from "wouter-preact/use-hash-location";
import './style.css';
import pfp from '../../assets/images/me.jpg'
import ContentHome from "./content/contentHome";
import { FadeRoute } from "../../animations/FadeRoute";
import RightSidebar from "./rightSideBar";
import ContentAbout from "./content/contentAbout";
import { useTheme } from "../../hooks/useTheme";
import darktheme from '../../assets/icons/dark-theme.svg';
import github from '../../assets/icons/github.svg';
import facebook from '../../assets/icons/facebook.svg';
import linkedin from '../../assets/icons/linkedin.svg';


function MiddleAbout() { return <div>About</div>; }
function MiddleProjects() { return <div>Projects</div>; }

export function Home() {

    const { theme, toggle } = useTheme();

    return (
        <div class="home-entire">

            <div class="home-left">
                <div class="personal">
                    Daniel Pan
                    <img src={pfp} alt="this is me" width={200} height={200} class="pfp" />

                </div>
                <div class="stats">
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

                <div class="link-section">
                    <a href="#/">Home</a>
                    <a href="#/about">About</a>
                    <a href="#/projects">Projects</a>

                </div>
                <div class="resume-main">
                    RESUME
                </div>
                <div class="icon-contact">

                    <img src={github} width={32} height={32} />
                    <img src={linkedin} width={32} height={32} />
                    <img src={facebook} width={32} height={32} />
                    <img src={darktheme} width={32} height={32} class="darktheme-icon" onClick={toggle} />

                </div>



            </div>
            <div class="home-right">
                <Router hook={useHashLocation}>
                    <Route path="/" component={() => <FadeRoute component={ContentHome} />} />
                    <Route path="/about" component={() => <FadeRoute component={ContentAbout} />} />
                    <Route path="/projects" component={() => <FadeRoute component={MiddleProjects} />} />
                </Router>
            </div>

            {/* <main class="middle-main">

                <div class="sticky-important-info">
                    <div class="name-header">
                        Hello, I'm Daniel Pan!
                    </div>
                    <div class="pfp-stats">
                        <img src={pfp} alt="this is me" width={100} height={100} class="pfp" />
                        <div class="stats">
                            <div>
                                <b>22 year old graduating from GT</b>
                            </div>
                            <div>
                                React, C++, Python, Java
                            </div>
                            <div>
                                learning to cook more
                            </div>
                        </div>
                    </div>

                    <div class="links-sticky">
                        
                    </div>
                </div>

                
            </main>

            <aside class="right-extra">
                <div class="right-offset">
                    <Router hook={useHashLocation}>
                        <Switch>
                            <Route path="/" component={() => <div></div>} />
                            <Route path="*" component={() => <FadeRoute component={RightSidebar} />} />
                        </Switch>
                    </Router>
                </div>


            </aside> */}
        </div >
    );
}
