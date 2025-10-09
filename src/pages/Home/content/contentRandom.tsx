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

    if (slug) {

        const post = allPosts.find(p => p.slug === slug);
        if (!post) {
            setLocation('/random');
            return null;
        }

        useEffect(() => {
            const title = post.meta.title || `Random: ${slug}`;
            const description = post.meta.description || post.body.slice(0, 150);
            const image = post.meta.image;
            setMeta(title, description, image);
        }, [slug]);

        const html = marked.parse(post.body) as string;

        return (
            <article>
                {post.meta.title && <div class="custom-header">{post.meta.title}</div>}
                {post.meta.date && <small>{post.meta.date}</small>}
                <div class="markdown" dangerouslySetInnerHTML={{ __html: html }} />
                <div class="custom-divider-bottom" />
                <a href="#/random">← Back to Random</a>
            </article>
        );
    }

    return (
        <section>

            <div class="description-all">
                <div class="description-text">
                    This is a general of some random thoughts, notes, or ideas I've had.
                </div>

                <div class="description-text custom-divider-bottom">
                    Not really a blog persay, this is more like a random public notepad.
                </div>

                <div>
                    {allPosts.map(p => (
                        <div class="list-of-random" key={p.slug}>
                            {p.meta.date ? <small>({p.meta.date}) </small> : null}
                            <a href={`#/random/${p.slug}`}>{p.meta.title || p.slug}</a>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}
