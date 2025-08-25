import { Router, Route } from "wouter-preact";
import { useHashLocation } from "wouter-preact/use-hash-location";
import './style.css';
import pfp from '../../assets/images/me.jpg'
import ContentHome from "./content/contentHome";
import { FadeRoute } from "../../animations/FadeRoute";

function MiddleAbout() { return <div>About</div>; }
function MiddleProjects() { return <div>Projects</div>; }

export function Home() {
    return (
        <div class="home-entire">
            <aside class="left-tabs">
                <a href="#/">Home</a>
                <a href="#/about">About</a>
                <a href="#/projects">Projects</a>
            </aside>

            <main class="middle-main">
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
                <Router hook={useHashLocation}>
                    <Route path="/" component={() => <FadeRoute component={ContentHome} />} />
                    <Route path="/about" component={() => <FadeRoute component={MiddleAbout} />} />
                    <Route path="/projects" component={() => <FadeRoute component={MiddleProjects} />} />
                </Router>
            </main>

            <aside class="right-extra">
                right
            </aside>
        </div>
    );
}
