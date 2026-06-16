import { hydrate } from 'preact-iso';
import { Route, Router, Switch } from "wouter-preact";
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/404.js';
import './style.css';
import './font.css';

import { Buffer } from 'buffer';
if (!(window as any).Buffer) {
    (window as any).Buffer = Buffer;
}

function Portfolio() {
    return (
        <>
            <Home />
            <div style={{ textAlign: "center", color: "var(--secondary)", marginBlock: "50px" }}>
                Built with Preact. I like it better than base React
            </div>
        </>
    );
}

const projectRoute = /^\/projects\/(minesweeper)\/?$/;
const randomRoute = /^\/random\/(csgoanddesubticking|essentialprograms|preservation|test)\/?$/;

export function App() {
    return (
        <main>
            <Router base="/portfolio">
                <Switch>
                    <Route path="/" component={Portfolio} />
                    <Route path="/about" component={Portfolio} />
                    <Route path="/projects" component={Portfolio} />
                    <Route path={projectRoute} component={Portfolio} />
                    <Route path="/random" component={Portfolio} />
                    <Route path={randomRoute} component={Portfolio} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </main>
    );
}

if (typeof window !== 'undefined') {
    if (window.location.hash.startsWith('#/')) {
        window.history.replaceState(
            null,
            '',
            `/portfolio${window.location.hash.slice(1)}${window.location.search}`,
        );
    }

    hydrate(<App />, document.getElementById('app'));
}
