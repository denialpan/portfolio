import minedemo from '../../../assets/video/minedemov2.mp4';
import s4shadowplay from '../../../assets/images/s4-shadowplay.png'
import { setMeta } from '../../../utils/setmeta';

export default function ContentHome() {

    setMeta("home", "home page of latest projects");

    return (

        <>
            <div class="latest">
                <div class="custom-header" onClick={() => window.open("https://github.com/denialpan/dansweeper-ml", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}>
                    Latest Project - dansweeper
                </div>
                <video
                    autoplay
                    loop
                    muted
                    playsinline
                    width="720"
                    preload="metadata"
                    class='latest-video'
                >
                    <source src={minedemo} type="video/webm" />
                </video>
                <div class="custom-caption custom-divider-bottom">
                    minesweeper from scratch with multiple planned solving and generation algorithms
                </div>

                <div class="custom-header" onClick={() => window.open("https://github.com/denialpan/s4-shadowplay", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}>
                    Largest Project - s4-shadowplay
                </div>
                <img src={s4shadowplay} alt="s4-shadowplay" width={720} />
                <div class="custom-caption custom-divider-bottom">
                    a personal Google Drive alternative file storage supporting multiple users
                </div>
            </div>
        </>

    )
}