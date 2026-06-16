import { ComponentChildren } from 'preact';
import { Link } from 'wouter-preact';
import { setMeta } from '../../../../utils/setmeta';

type ProjectArticleProps = {
    title: string;
    description: string;
    date?: string;
    children: ComponentChildren;
};

export default function ProjectArticle({ title, description, date, children }: ProjectArticleProps) {
    setMeta(title, description);

    return (
        <article>
            <div class="custom-header">{title}</div>
            <p class="description-text" style={{ margin: 0 }}>
                {description}
            </p>
            <div class="custom-divider-bottom">
                {date && <small>{date}</small>}
            </div>

            <div class="markdown">
                {children}
            </div>

            <div class="custom-divider-bottom" />
            <Link class="random-footer" href="/projects">
                Back to Projects
            </Link>
        </article>
    );
}

type ProjectCodeBlockProps = {
    caption?: ComponentChildren;
    children: ComponentChildren;
};

export function ProjectCodeBlock({ caption, children }: ProjectCodeBlockProps) {
    return (
        <div class="project-code-container">
            <pre>
                <code>{children}</code>
            </pre>
            {caption && <figcaption>{caption}</figcaption>}
        </div>
    );
}

type ProjectFigureProps = {
    caption?: ComponentChildren;
    children: ComponentChildren;
};

export function ProjectFigure({ caption, children }: ProjectFigureProps) {
    return (
        <figure class="project-figure-container">
            {children}
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
}
