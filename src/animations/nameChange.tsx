import { useRef, useState } from "preact/hooks";
import phrasesRaw from "./phrases.json";

const phrases = (phrasesRaw as string[]) ?? [];

function pickRandom<T>(arr: T[], avoid?: T): T {
    if (!arr.length) throw new Error("phrases.json empty");
    if (arr.length === 1) return arr[0];

    let idx = Math.floor(Math.random() * arr.length);
    let choice = arr[idx];

    // avoid repeating the last phrase
    if (avoid !== undefined && choice === avoid) {
        idx = (idx + 1) % arr.length;
        choice = arr[idx];
    }
    return choice;
}

export function NameChange({ defaultText }: { defaultText: string }) {
    const [text, setText] = useState(defaultText);
    const lastRef = useRef<string | null>(null);

    function handleEnter() {
        const next = pickRandom(phrases, lastRef.current ?? undefined);
        lastRef.current = next;
        setText(next);
    }

    function handleLeave() {
        setText(defaultText);
    }

    return (
        <div
            class="personal"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onFocus={handleEnter}
            onBlur={handleLeave}
            onTouchStart={handleEnter}
            tabIndex={0}
            aria-label="random phrase"
        >
            {text}
        </div>
    );
}
