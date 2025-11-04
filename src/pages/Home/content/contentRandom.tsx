import { useEffect } from 'preact/hooks';
import { useRoute, useLocation } from 'wouter-preact';
import { parse as parseYAML } from 'yaml';
import { marked } from 'marked';
import { setMeta } from '../../../utils/setmeta';

const files = import.meta.glob('/src/randomcontent/**/*.md', { as: 'raw', eager: true }) as Record<string, string>;

function parseFrontMatter(raw: string) {
    const m = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
    if (m) {
        const data = m[1] ? parseYAML(m[1]) : {};
        const content = raw.slice(m[0].length);
        return { data, content };
    }
    return { data: {}, content: raw };
}

type PostMeta = {
    title?: string;
    date?: string;
    slug?: string;
    [k: string]: any;
};

type Post = {
    slug: string;
    meta: PostMeta;
    body: string;
};

const allPosts: Post[] = Object.entries(files).map(([path, raw]) => {
    const { data, content } = parseFrontMatter(raw);
    const filename = path.split('/').pop()!;
    const fallbackSlug = filename.replace(/\.md$/i, '');
    const slug = (data as any)?.slug || fallbackSlug;

    return {
        slug,
        meta: (data || {}) as PostMeta,
        body: content,
    };

}).sort((a, b) => {
    const ad = new Date(a.meta.date ?? 0).getTime();
    const bd = new Date(b.meta.date ?? 0).getTime();
    return bd - ad;
});

export default function ContentRandom() {
    const [match, params] = useRoute('/random/:slug');
    const [, setLocation] = useLocation();
    const slug = match ? params?.slug : undefined;

    const post = slug ? allPosts.find(p => p.slug === slug) : undefined;

    useEffect(() => {
        if (post) {
            const title = post.meta.title || `Random: ${post.slug}`;
            const description = post.meta.description || post.body.slice(0, 150);
            const image = post.meta.image;
            setMeta(title, description, image);
        } else {
            setMeta("random", "random thoughts and ideas and posts and stuff");
        }
    }, [post, slug]);

    // redirect if slug exists but post not found
    useEffect(() => {
        if (slug && !post) {
            setLocation('/random');
        }
    }, [slug, post, setLocation]);

    const { archived, active } = allPosts.reduce(
        (acc, p) => {
            if (p.meta.status?.toLowerCase().includes("archived")) acc.archived.push(p);
            else acc.active.push(p);
            return acc;
        },
        { archived: [] as Post[], active: [] as Post[] }
    );

    if (slug) {
        if (!post) return null;

        const html = marked.parse(post.body) as string;

        useEffect(() => {
            const container = document.querySelector('.markdown');
            if (!container) return;

            const scripts = container.querySelectorAll('script');
            scripts.forEach((oldScript) => {
                const newScript = document.createElement('script');
                for (const attr of oldScript.attributes) {
                    newScript.setAttribute(attr.name, attr.value);
                }
                newScript.text = oldScript.text;
                oldScript.replaceWith(newScript);
            });

        }, [slug]);

        return (
            <article>
                {post.meta.title && <div class="custom-header">{post.meta.title}</div>}
                {post.meta.description && <p style={{ margin: 0 }}>{post.meta.description}</p>}
                {post.meta.status === "archived" && <small> ({post.meta.status})</small>}
                <div class="custom-divider-bottom">
                    {post.meta.date && <small>{post.meta.date}</small>}
                </div>

                <div class="markdown" dangerouslySetInnerHTML={{ __html: html }} />
                <div class="custom-divider-bottom" />
                <a class="random-footer" href="#/random">← Back to Random</a>
            </article>
        );
    }

    return (
        <section>
            <div class="description-all">
                <div class="description-text">
                    This is a collection of some random thoughts, notes, or ideas I have.
                </div>

                <div class="description-text custom-divider-bottom">
                    Not really a blog, this is more like a random public notepad.
                </div>

                <div>
                    {active.map(p => (
                        <div class="list-all-random" key={p.slug}>
                            {p.meta.date ? <code>({p.meta.date}) </code> : null}
                            <a href={`#/random/${p.slug}`}>{p.meta.title || p.slug}</a>
                        </div>
                    ))}
                </div>

                <div>
                    <i>Archived thoughts or ideas that I no longer need</i>
                    {archived.map(p => (
                        <div class="list-all-random" key={p.slug}>
                            {p.meta.date ? <code>({p.meta.date}) </code> : null}
                            <a href={`#/random/${p.slug}`}>{p.meta.title || p.slug}</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
