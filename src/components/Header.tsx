import { useLocation } from 'preact-iso';
import { useTheme } from '../hooks/useTheme';
import './header.css';

export function Header() {
    const { url } = useLocation();
    const { theme, toggle } = useTheme();

    return (
        <header class="main-header">
            <nav>

                <button
                    onClick={toggle}

                >
                    theme: {theme}
                </button>


            </nav>
        </header>
    );
}
