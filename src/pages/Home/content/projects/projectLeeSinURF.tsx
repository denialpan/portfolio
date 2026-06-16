import { Link } from 'wouter-preact';
import { setMeta } from '../../../../utils/setmeta';

export default function MinesweeperProject() {
    setMeta('lee sin URF', 'video analysis project to dissect league of legends gameplay with Chinese commentary');

    return (
        <section class="description-all">
            <div class="custom-header">Lee Sin URF video analysis</div>
            <div class="description-text custom-divider-bottom">
                lee sin urf
            </div>
            <Link class="random-footer" href="/projects">
                Back to Projects
            </Link>
        </section>
    );
}
