import minedemo from '../../../assets/video/minedemov2.mp4';
import s4shadowplay from '../../../assets/images/s4-shadowplay.png'
import { setMeta } from '../../../utils/setmeta';
import { Link } from 'wouter-preact';
import leesinurf from '../../../assets/images/leesinURFpreview.png'

export default function ContentHome() {

    setMeta("home", "home page of latest projects");

    return (

        <>
            <div class="latest">
                <Link class="custom-header project-link" href="/projects/leesinurf">
                    Latest Project - complex video analysis and audio translation
                </Link>
                <div>
                    <img src={leesinurf} alt="lee sin urf workflow" width={720} />
                    <div class="custom-caption">
                        a custom League of Legends video and audio tool pipeline to analyze sophisticated niche gameplay, and further translate casual Chinese commentary to English
                        <ul>
                            <li>
                                <b>OpenCV</b> - frame region extraction and icon recognition within a video
                            </li>
                            <li>
                                <b>Whisper large-v3</b> - language transcription
                            </li>
                            <li>
                                <b>UVR</b> - vocal isolation in noisy contexts
                            </li>
                            <li>
                                <b>Qwen2.5-VL 14B</b> - Chinese to English translation
                            </li>
                            <li>
                                <b>Qwen2.5-VL 7B</b> - visual analysis of broad gameplay frames
                            </li>
                            <li>
                                <b>Davinci Resolve</b> - multitrack video editing and SRT subtitle creation
                            </li>
                        </ul>
                    </div>

                    <div class="custom-divider-bottom">

                    </div>
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