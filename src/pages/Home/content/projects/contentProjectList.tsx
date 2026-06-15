import minedemo from '../../../../assets/video/minedemov2.mp4';
import dankeyboard from '../../../../assets/images/dankeyboard.png';
import danverter from '../../../../assets/images/danverter.png';
import danverter1 from '../../../../assets/images/danverter1.png';
import s4shadowplay from '../../../../assets/images/s4-shadowplay.png'
import db1 from '../../../../assets/images/db1.png'
import db2 from '../../../../assets/images/db2.png'
import { setMeta } from '../../../../utils/setmeta';
import { cloneElement } from 'preact';
import { useState } from 'preact/hooks';
import { GitHubCalendar, type Activity } from 'react-github-calendar';
import { Link } from 'wouter-preact';

function contributionLabel(activity: Activity) {
    const contributions = activity.count === 1
        ? '1 contribution'
        : `${activity.count} contributions`;
    return `${contributions} on ${activity.date}`;
}

export default function ProjectList() {

    setMeta("projects", "projects page of things i've worked on");

    const [tooltip, setTooltip] = useState<{
        text: string;
        x: number;
        y: number;
    } | null>(null);

    return (

        <div class="description-all">

            <div class="custom-header">
                contribution history
            </div>

            <div
                class="contribution-calendar custom-divider-bottom"
                onClick={() => window.open("https://github.com/denialpan", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}
            >

                {tooltip && (
                    <div
                        class="contribution-tooltip"
                        role="tooltip"
                        style={{ left: tooltip.x, top: tooltip.y }}
                    >
                        {tooltip.text}
                    </div>
                )}
                <GitHubCalendar
                    username="denialpan"
                    blockMargin={3}
                    blockRadius={2}
                    blockSize={11}
                    errorMessage="Unable to load GitHub contribution data."
                    fontSize={12}
                    renderBlock={(block, activity) => cloneElement(block, {
                        'aria-label': contributionLabel(activity),
                        onBlur: () => setTooltip(null),
                        onFocus: event => {
                            const bounds = event.currentTarget.getBoundingClientRect();
                            setTooltip({
                                text: contributionLabel(activity),
                                x: bounds.left + bounds.width / 2,
                                y: bounds.top - 8,
                            });
                        },
                        onMouseEnter: event => setTooltip({
                            text: contributionLabel(activity),
                            x: event.clientX,
                            y: event.clientY - 12,
                        }),
                        onMouseLeave: () => setTooltip(null),
                        onMouseMove: event => setTooltip({
                            text: contributionLabel(activity),
                            x: event.clientX,
                            y: event.clientY - 12,
                        }),
                        tabIndex: 0,
                    })}
                    theme={{
                        light: [
                            'var(--tertiary)',
                            'color-mix(in srgb, var(--accent) 25%, var(--bg))',
                            'color-mix(in srgb, var(--accent) 50%, var(--bg))',
                            'color-mix(in srgb, var(--accent) 75%, var(--bg))',
                            'var(--accent)',
                        ],
                        dark: [
                            'var(--tertiary)',
                            'color-mix(in srgb, var(--accent) 25%, var(--bg))',
                            'color-mix(in srgb, var(--accent) 50%, var(--bg))',
                            'color-mix(in srgb, var(--accent) 75%, var(--bg))',
                            'var(--accent)',
                        ],
                    }}
                />
            </div>


            <div class="custom-header">
                dankeyboard
            </div>
            <div onClick={() => window.open("https://github.com/denialpan/dankeyboard", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}>
                <img src={dankeyboard} alt="dankeyboard" width={720} />

                <div class="custom-caption custom-divider-bottom">
                    keyboard and mouse tracking with a custom heatmap graph of keyboard, mouse, and monitor
                    <ul>
                        <li>
                            C#
                        </li>
                        <li>
                            WPF
                        </li>
                    </ul>
                </div>
            </div>



            <Link
                class="custom-header project-link"
                href="/projects/minesweeper"
            >
                dansweeper
            </Link>
            <video
                autoplay
                loop
                muted
                playsinline
                width="720"
                preload="metadata"
                poster="/thumb.jpg"
                class='latest-video'
            >
                <source src={minedemo} type="video/webm" />
            </video>

            <div class="custom-caption custom-divider-bottom">
                minesweeper from scratch with multiple planned solving and generation algorithms
                <ul>
                    <li>
                        C++
                    </li>
                    <li>
                        Raylib - extremely lightweight graphics engine
                    </li>
                </ul>
            </div>

            <div class="custom-header" onClick={() => window.open("https://github.com/denialpan/DoABarrelWall", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}>
                DoABarrelWall
            </div>

            <div style={{
                display: "flex", gap: "10px", overflowX: "auto"
            }}>
                <img src={db1} height={400} alt="iphone1" />
                <img src={db2} height={400} alt="iphone2" />
                <video
                    autoplay
                    loop
                    muted
                    playsinline
                    height={400}
                    preload="metadata"
                    poster="/thumb.jpg"
                >
                    <source src="https://packaged-media.redd.it/gzyw9y8z4mh61/pb/m2-res_480p.mp4?m=DASHPlaylist.mpd&v=1&e=1756623600&s=da825623bc15ce0726d1ddf36eb4392389a046ec" type="video/webm" />
                </video>
            </div>


            <div class="custom-caption custom-divider-bottom">
                an iOS 13 - 15 tweak adding wallpaper functionality that took Apple up until iOS 16 to implement
                <ul>
                    <li>
                        Objective-C
                    </li>
                    <li>
                        Theos
                    </li>
                    <li>
                        Thank you Alexandra for having a device still on iOS 13
                    </li>
                </ul>
            </div>

            <div class="custom-header" onClick={() => window.open("https://github.com/denialpan/s4-shadowplay", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}>
                s4-shadowplay
            </div>

            <img src={s4shadowplay} alt="s4-shadowplay" width={800} />

            <div class="custom-caption custom-divider-bottom">
                a personal Google Drive alternative file storage supporting multiple users
                <ul>
                    <li>
                        React/Next.JS
                    </li>
                    <li>
                        SQLite3
                    </li>
                    <li>
                        AWS S3
                    </li>
                    <li>
                        Tailwind CSS
                    </li>
                </ul>
            </div>

            <div class="custom-header" onClick={() => window.open("https://github.com/denialpan/danverter", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}>
                danverter
            </div>

            <div style={{
                display: "flex", gap: "10px", overflowX: "auto"
            }}>
                <img src={danverter} width={420} alt="danverter1" />
                <img src={danverter1} width={420} alt="danverter2" />

            </div>


            <div class="custom-caption custom-divider-bottom">
                small GUI paired with ffmpeg with the intent to convert "shadowplays" to 8mb clips
                <ul>
                    <li>
                        C#
                    </li>
                    <li>
                        WinForms
                    </li>
                </ul>
            </div>

            <div class="custom-header">
                Archive
            </div>

            <div class="custom-caption custom-divider-bottom">
                Very small projects or things that I no longer maintain, but still learned a lot from and still want to show:

                <ul>
                    <li>
                        <a href="https://github.com/denialpan/danverter-music-bot" target="_blank" rel="noreferrer"> small python music bot for my friends </a>

                    </li>
                    <li>
                        <a href="https://denialpan.github.io/portfolio-old-1/" target="_blank" rel="noreferrer"> first old portfolio from maybe 2021 - 2022 i think</a>
                    </li>
                </ul>

            </div>

        </div>

    )

}
