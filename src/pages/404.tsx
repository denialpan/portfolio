import clipahh from '../assets/video/404.mp4'

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
                csgo better than cs2
            </h3>

            <p style={{ fontFamily: "Consolas", textAlign: "center" }}>
                originally didnt know gh pages implemented their own 404
            </p>

            <h3 style={{ fontFamily: "Consolas", textAlign: "center", cursor: "pointer" }} onClick={() => window.location.href = "/portfolio/"} >
                back to home
            </h3>

        </div>

    );
}
