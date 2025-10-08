import { LocationProvider, hydrate, prerender as ssr } from 'preact-iso';
import { Router, Route, Switch } from "wouter-preact";
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/404.js';
import './style.css';
import './font.css';

import { Buffer } from 'buffer';
if (!(window as any).Buffer) {
    (window as any).Buffer = Buffer;
}

export function App() {
    return (
        <LocationProvider>

            <main>

                <Router>
                    <Switch>
                        <Route path="/portfolio/" component={Home} />
                        <Route default component={NotFound} />
                    </Switch>
                </Router>

            </main>

            <div style={{ textAlign: "center", color: "var(--secondary)", marginBlock: "50px" }}> Built with Preact. I like it better than base React</div>

        </LocationProvider>
    );
}

if (typeof window !== 'undefined') {
    hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
    return await ssr(<App {...data} />);
}
