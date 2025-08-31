import minedemo from '../../../assets/video/7.mp4';
import dankeyboard from '../../../assets/images/dankeyboard.png';
import danverter from '../../../assets/images/danverter.png';
import s4shadowplay from '../../../assets/images/s4-shadowplay.png'
import db1 from '../../../assets/images/db1.png'
import db2 from '../../../assets/images/db2.png'




export default function contentProjects() {

    return (

        <div class="description-all">
            <div class="description-text">
                Here is a list of major projects that I've worked on that has extensively improved my programming skills.
            </div>

            <div class="description-text custom-divider-bottom">
                yes, a majority of my projects have prefix "dan-" and then the supposed thing, i am bad at naming stuff, i am not a narcissist
            </div>

            <div class="custom-header">
                dansweeper
            </div>
            <video
                autoplay
                loop
                muted
                playsinline
                width="500"
                preload="metadata"
                poster="/thumb.jpg"
                class='latest-video'
            >
                <source src={minedemo} type="video/webm" />
            </video>

            <div class="custom-caption custom-divider-bottom">
                minesweeper from scratch with multiple planned solving and generation algorithms
            </div>


            <div class="custom-header">
                dankeyboard
            </div>

            <img src={dankeyboard} width={720} />

            <div class="custom-caption custom-divider-bottom">
                keyboard and mouse tracking with a custom heatmap graph of keyboard, mouse, and monitor
            </div>

            <div class="custom-header">
                DoABarrelWall
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
                <img src={db1} width={200} />
                <img src={db2} width={200} />
            </div>


            <div class="custom-caption custom-divider-bottom">
                an iOS 13 - 15 tweak adding wallpaper functionality that took Apple up until iOS 16 to implement
            </div>

            <div class="custom-header">
                s4-shadowplay
            </div>

            <img src={s4shadowplay} width={720} />

            <div class="custom-caption custom-divider-bottom">
                a personal Google Drive alternative file storage supporting multiple users
            </div>

            <div class="custom-header">
                danverter
            </div>

            <img src={danverter} width={420} />

            <div class="custom-caption custom-divider-bottom">
                small GUI paired with ffmpeg with the intent to convert "shadowplays" to 8mb clips
            </div>





        </div>

    )

}