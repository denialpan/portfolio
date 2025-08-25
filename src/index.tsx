import { LocationProvider, hydrate, prerender as ssr } from 'preact-iso';
import { Router, Route } from "wouter-preact"; // or "wouter"
import { Header } from './components/header.js';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import { Ideas } from './pages/Ideas/index.js';
import './style.css';
import './font.css';

export function App() {
    return (
        <LocationProvider>
            <Header />

            <main>

                <Router>
                    <Route path="/" component={Home} />
                    <Route path="ideas" component={Ideas} />
                    {/* <Route default component={NotFound} /> */}
                </Router>
            </main>

        </LocationProvider>
    );
}

if (typeof window !== 'undefined') {
    hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
    return await ssr(<App {...data} />);
}
