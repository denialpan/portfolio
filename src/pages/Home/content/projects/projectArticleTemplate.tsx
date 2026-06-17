import { ComponentChildren } from 'preact';
import { Link } from 'wouter-preact';
import { setMeta } from '../../../../utils/setmeta';

type ProjectArticleProps = {
    title: string;
    description: ComponentChildren;
    metaDescription?: string;
    date?: string;
    children: ComponentChildren;
};

export default function ProjectArticle({ title, description, metaDescription, date, children }: ProjectArticleProps) {
    setMeta(title, metaDescription || (typeof description === 'string' ? description : title));

    return (
        <article>
            <div class="custom-header">{title}</div>
            <p class="description-text project-description" style={{ margin: 0 }}>
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

function formatCodeBlock(children: ComponentChildren) {
    if (typeof children !== 'string') return children;

    const lines = children.replace(/^\r?\n|\r?\n\s*$/g, '').split(/\r?\n/);
    const indents = lines
        .filter(line => line.trim())
        .map(line => line.match(/^\s*/)?.[0].length ?? 0);
    const trimBy = indents.length ? Math.min(...indents) : 0;

    return lines.map(line => line.slice(trimBy)).join('\n');
}

export function ProjectCodeBlock({ caption, children }: ProjectCodeBlockProps) {
    return (
        <div class="project-code-container">
            <pre>
                <code>{formatCodeBlock(children)}</code>
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
