import clipahh from '../assets/video/404.mp4'
import { useTheme } from '../hooks/useTheme';

export function NotFound() {

    return (
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>

            <h3 style={{ fontFamily: "Consolas", textAlign: "center" }}>
                this is 404, but not like any other 404 you've seen

            </h3>
            <video
                controls
                width={800}
                preload="metadata"
                poster="/thumb.jpg"
            >
                <source src={clipahh} type="video/webm" />
            </video>
            <h3 style={{ fontFamily: "Consolas", textAlign: "center" }}>
                csgo > cs2
            </h3>
            <h3 style={{ fontFamily: "Consolas", textAlign: "center", cursor: "pointer" }} onClick={() => window.location.href = "/"} >
                back to home
            </h3>

        </div>

    );
}
