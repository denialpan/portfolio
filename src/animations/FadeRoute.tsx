import { h, ComponentType } from "preact";
import './FadeRoute.css'

export function FadeRoute({ component: C }: { component: ComponentType }) {
    return (
        <div class="fade">
            <C />
        </div>
    );
}