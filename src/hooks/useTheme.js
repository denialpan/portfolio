import { useEffect, useState } from 'preact/hooks';

const LS_KEY = 'theme-preference';

export function useTheme() {
    const getInitial = () => {
        // 0) If head-boot already set data-theme, trust it (prevents hydration flip)
        if (typeof document !== 'undefined') {
            const fromAttr = document.documentElement.getAttribute('data-theme');
            if (fromAttr === 'light' || fromAttr === 'dark') return fromAttr;
        }
        // 1) Otherwise, check localStorage
        try {
            const ls = localStorage.getItem(LS_KEY);
            if (ls === 'light' || ls === 'dark') return ls;
        } catch { }

        // 2) Fallback to OS preference
        const prefersDark = typeof window !== 'undefined'
            && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getInitial);

    useEffect(() => {
        if (typeof document === 'undefined') return;
        document.documentElement.setAttribute('data-theme', theme);
        // Helps native widgets pick the right palette
        document.documentElement.style.colorScheme = theme;
        try { localStorage.setItem(LS_KEY, theme); } catch { }
    }, [theme]);

    const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

    return { theme, setTheme, toggle };
}