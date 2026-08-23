import minedemo from '../../../../assets/video/minedemov2.mp4';
import dankeyboard from '../../../../assets/images/dankeyboard.png';
import danverter from '../../../../assets/images/danverter.png';
import s4shadowplay from '../../../../assets/images/s4-shadowplay.png'
import db1 from '../../../../assets/images/db1.png'
import leesinurf from '../../../../assets/images/leesinURFpreview.png'
import { setMeta } from '../../../../utils/setmeta';
import { cloneElement, type ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';
import { GitHubCalendar, type Activity } from 'react-github-calendar';
import { Link } from 'wouter-preact';

type ProjectCardProps = {
    title: string;
    description: ComponentChildren;
    image: ComponentChildren;
    detailsHref?: string;
    externalHref?: string;
    githubHref?: string;
};

function ProjectCard({
    title,
    description,
    image,
    detailsHref,
    externalHref,
    githubHref,
}: ProjectCardProps) {
    return (
        <article class="project-card">
            <div class="project-card-media">
                {image}
            </div>

            <div class="project-card-content">
                <div class="custom-header">{title}</div>
                <div class="project-card-description">{description}</div>

                {(detailsHref || externalHref || githubHref) && (
                    <div class="project-card-actions">
                        {detailsHref && <Link href={detailsHref}>Details</Link>}
                        {externalHref && (
                            <a href={externalHref} target="_blank" rel="noreferrer">
                                View
                            </a>
                        )}
                        {githubHref && (
                            <a href={githubHref} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}

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

            <div class="project-card-list">
                <ProjectCard
                    title="complex video analysis and audio translation"
                    githubHref="https://github.com/denialpan/leesin-URF-analysis-translation"
                    detailsHref="/projects/leesinurf"
                    image={<img src={leesinurf} alt="lee sin urf workflow" />}
                    description={(
                        <>
                            a custom League of Legends video and audio tool pipeline to analyze sophisticated niche gameplay, and further translate casual Chinese commentary to English

                        </>
                    )}
                />

                <ProjectCard
                    title="dankeyboard"
                    githubHref="https://github.com/denialpan/dankeyboard"
                    image={<img src={dankeyboard} alt="dankeyboard heatmap interface" />}
                    description={(
                        <>
                            keyboard and mouse tracking with a custom heatmap graph of keyboard, mouse, and monitor

                        </>
                    )}
                />

                <ProjectCard
                    title="dansweeper-ml"
                    githubHref="https://github.com/denialpan/dansweeper-ml"
                    image={(
                        <video autoplay loop muted playsinline preload="metadata" poster="/thumb.jpg">
                            <source src={minedemo} type="video/mp4" />
                        </video>
                    )}
                    description={(
                        <>
                            minesweeper from scratch with multiple planned solving and generation algorithms

                        </>
                    )}
                />

                <ProjectCard
                    title="DoABarrelWall"
                    githubHref="https://github.com/denialpan/DoABarrelWall"
                    image={<img src={db1} alt="DoABarrelWall wallpaper tweak preview" />}
                    description={(
                        <>
                            an iOS 13 - 15 tweak adding wallpaper functionality that took Apple up until iOS 16 to implement. Thank you Alexandra for having a device still on iOS 13.

                        </>
                    )}
                />

                <ProjectCard
                    title="s4-shadowplay"
                    githubHref="https://github.com/denialpan/s4-shadowplay"
                    image={<img src={s4shadowplay} alt="s4-shadowplay file storage interface" />}
                    description={(
                        <>
                            a personal Google Drive alternative file storage supporting multiple users

                        </>
                    )}
                />

                <ProjectCard
                    title="danverter"
                    githubHref="https://github.com/denialpan/danverter"
                    image={<img src={danverter} alt="danverter ffmpeg conversion tool" />}
                    description={(
                        <>
                            small GUI paired with ffmpeg with the intent to convert "shadowplays" to 8mb clips

                        </>
                    )}
                />
            </div>

        </div>

    )

}
