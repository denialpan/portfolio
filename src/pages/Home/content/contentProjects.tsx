import { useRoute } from 'wouter-preact';
import { NotFound } from '../../404';
import MinesweeperProject from './projects/projectMinesweeper';
import ProjectList from './projects/contentProjectList';

export default function ContentProjects() {
    const [isDetail, params] = useRoute('/projects/:slug');

    if (!isDetail) {
        return <ProjectList />;
    }

    if (params.slug === 'minesweeper') {
        return <MinesweeperProject />;
    }

    return <NotFound />;

}
