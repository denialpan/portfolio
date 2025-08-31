import { h, ComponentType } from "preact";
import './fadeRoute.css'

export function FadeRoute({ component: C }: { component: ComponentType }) {
    return (
        <div class="fade">
            <C />
        </div>
    );
}