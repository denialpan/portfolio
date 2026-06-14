import { Link } from 'wouter-preact';
import { setMeta } from '../../../../utils/setmeta';

export default function MinesweeperProject() {
    setMeta('minesweeper', 'test project detail page');

    return (
        <section class="description-all">
            <div class="custom-header">Minesweeper</div>
            <div class="description-text custom-divider-bottom">
                Test project page.
            </div>
            <Link class="random-footer" href="/projects">
                Back to Projects
            </Link>
        </section>
    );
}
