import ProjectArticle, { ProjectCodeBlock } from './projectArticleTemplate';
import { ProjectFigure } from './projectArticleTemplate';
import leesinhudannotator from '../../../../assets/images/leesinhudannotator.png';
import leesinmanualpreview from '../../../../assets/video/leesinmanualpreview.mp4';

export default function LeeSinURF() {
    return (
        <ProjectArticle
            title="Lee Sin URF video analysis"
            description={
                <>
                Video analysis pipeline to dissect League of Legends gameplay. Primary tools used were <a href="https://www.python.org/downloads/">Python 3</a>, <a href="https://github.com/opencv/opencv">OpenCV</a>, <a href="https://github.com/m-bain/whisperx">WhisperX</a>, and various <a href="https://github.com/QwenLM/Qwen">Qwen</a> LLMs
                </>
            }
            date="6/16/2026"
        >
            <h1>Overview</h1>
            <p>
                League of Legends is an incredibly complex game, and its strategies within the game are difficult to document thoroughly, as the constant updates give way to interesting mechanics and gameplay options to be discovered. This is most apparent for one of the game's most difficult champions in the game. While the premise of Lee Sin is ridiculously simple, certain abilities, combos and interactions with external objects and other players on the map leads to actions that are incredibly hard to follow without experience. This is further accentuated when every champion's abilities has its cooldowns reduced to 75% of their original length at the start of the game.
            </p>

            <p>
                This massive cooldown reduction is only possible in the seasonal <a href="https://wiki.leagueoflegends.com/en-us/Ultra_Rapid_Fire">URF</a> gamemode. Due to the somewhat rarity of this gamemode, there are not nearly as many sources of mechanical strategies shared, and knowledge is what's possible is mainly only shared through "word-of-mouth". Or in this case for the modern age, simply watching streams or videos of unique gameplay.
            </p>

            <h2>Sources gathered</h2>

            <p>
                Chinese players are fairly experienced with finding new strategies and widely share them across their own platform. However, the legitimacy of the games in question lead to the suggestion of "scripted" gameplay, where some things may only seem possible in very ideal situations. Furthermore, due to the method of shared content, they are often highly edited with jumps cuts and visual effects, thus making it difficult to properly analyze.
            </p>

            <p>
                There are, however, a few Chinese players that stream their games live in normal queued lobbies, where the enemy team has no relation to them, thus making the combos and mechanics displayed to be more realistically representative of not only their skill, but also the legitimacy of realistic combos. The most prevalent player to fit this example to be <a href="https://space.bilibili.com/470840543">Nanshen</a>. 
            </p>

            <p>
                Although his skill can be debated on whether or not is the best (although few judge otherwise), their streamed content has a particular style where the decision making and abilities/combos used are actively commentated out loud in Chinese as it is happening, further leading into engaging and humorous content at certain intense points. Paired with their content naturally being fairly minimal of just gameplay and refraining from noisy environments and loud background music, <b><a href="https://space.bilibili.com/470840543">Nanshen</a>'s content suddenly becomes an excellent source for analysis compared to other existing contenders.</b>
            </p>

            <p>
                While their streams are mainly on the Chinese platform BiliBili and are occasionally restricted without Chinese credentials, their streams have been archived and shared on these Youtube channels, <a href="https://www.youtube.com/@LoLChallengerCN">LoL Challenger CN</a> and <a href="https://www.youtube.com/@LoLMontageCN">LoL Montage CN</a>. From these two channels, a total of 22 different full URF games across different points of the game's lifespan and updates can be used, amounting to over 5+ hours of content to sift through and understand.
            </p>

            <h1>
                Points of Interest
            </h1>
            <p>
                During URF gameplay, Lee Sin as a champion suddenly gains a multitude of capabilities that in the right player's hands becomes very difficult to follow. As such, for this analysis, there are some goals in mind that aim to allow a beginner unfamiliar to the champion gain an understanding to what is going on:
                
            </p>
            <ul>
                <li>
                    Track the amount of movement options available at any point in the game.
                </li>
                <li>
                    Provide an keystroke history of what relevant movement/damage abilities have been just inputted.
                </li>
                <li>
                    Provide a Chinese to English translation.
                </li>
            </ul>
            <p>

            </p>
            <h2>
                Translation
            </h2>
            <p>
                Although this goal is perhaps the most simple to achieve, as the tools necessary for translation from any language is available through advanced translation engines that existed for nearly a decade since 2016, it is more difficult to extract and translate this information in audio form. 
            </p>
            <p>
                Furthermore, since the commentary in question is within a context of "casual League of Legends terminology", paired with general Chinese slang, it becomes even more difficult to ascertain the true intention and vocal feeling from audio alone. This also does not include the fact that the commentary will also be mixed with natural gameplay audio, thus muddying the data even more.
            </p>
            <p>
                In the rise of many LLM models and neural network tools, it's possible to divide this mountainous task into 3 smaller feats:
            </p>
            <ol>
                <li>
                    Run the audio through noise separators to extract frequencies of vocalization, such as <a href="https://github.com/seanghay/uvr">UVR</a>.
                </li>
                <li>
                    Use an addendum wrapper of OpenAI's Whisper, <a href="https://github.com/m-bain/whisperx">WhisperX</a>, to transcribe the audio into Chinese character text.
                </li>
                <li>
                    Translate the resulting Chinese character text into English with an LLM trained primarily on general asian content, such as <a href="https://github.com/QwenLM/Qwen">Qwen</a>.
                </li>
            </ol>
            <p>
                This is certainly seems to be a good start to see the baseline translation. Here is an example of an output translation the first few runs:
            </p>

            <ProjectCodeBlock
                caption={
                    <>
                        direct translation: <a href="https://www.youtube.com/watch?v=mI9iNnk4CCk&t=783s" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=mI9iNnk4CCk&t=783s</a>
                    </>
                }
            >
                {`
                cue 146 784.600s-787.020s confidence 0.83
                Chinese: 推推棒先秒他再砸你把
                English: Push him down first, then hit you with the push stick.
                `}
            </ProjectCodeBlock>
            <p>
                While the translation itself is "reasonably" correct, the crucial point of the actual context for the game is horribly lost, even when the confidence score of detection and translation is high; when comparing the actual English translation to the gameplay, they no longer coincide very well. As such, it is important to add an additional step towards the translation process, where a brief run of general video context is introduced, rather than just audio translation and a "league of legends" terminology guide for the LLM.
            </p>
            <p>
                Running video data through another LLM is a bit troublesome. Originally the text translation was run through Qwen2.5:14b, however due to the dense usage of taking a video frame and transforming them into tokens, it is important to limit to a lower parameter model, such as Qwen2.5-vl:7b, especially when run on consumer hardware. Time suddenly becomes a huge factor here as well, but if hardware limitations were not a problem, it most certainly would be remediated away instantly, as would other major computating problems. Here is the contextual translation at the same timeframe:
            </p>
            <ProjectCodeBlock
                caption={
                    <>
                        contextual translation: <a href="https://www.youtube.com/watch?v=mI9iNnk4CCk&t=783s" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=mI9iNnk4CCk&t=783s</a>
                    </>
                }
            >
                {`
                cue 146 784.600s-787.020s confidence 0.93
                Chinese: 推推棒先秒他再砸你吧
                English: Use Rocketbelt to kill him down first, then hit you.
                `}
            </ProjectCodeBlock>
            <p>
                Even with such a low parameter model, it is able to garner such small details. Primarily, the impressive part is being able to extract the "Rocketbelt" keyword, as it is a League of Legends specific item term, yet if interpreted literally in audio translation, even for native speakers, it is more close to "push-pull". While effectively the meaning is correct from the audio standpoint, providing general video context greatly improved the contextual translation to discern the actual gameplay within the frame time range, interpret the "push-pull" to be in relation to a specific item movement, then extract the likely item in question. Of course, this is done at the unfortunate cost of time and computing power, but overall still very impressive.
            </p>
            <h3>
                Statistical downsides
            </h3>
            <p>
                As mentioned before, there are instances of needing to manually fix some translations that are incorrect, or adjust the overall tonage to a more appropriate English connotation. While not difficult at all, it often requires running the process again with manually specified frame ranges, waiting for 2 minutes for the subtitle cue translation, then entering the subtitle: 
            </p>
            <ProjectFigure caption="quick demonstration of manual translation and detection fixes">
                <video controls>
                    <source src={leesinmanualpreview} type="video/mp4"></source>
                </video>
            </ProjectFigure>

            <p>
                With this method of automated translation, it's possible to get pretty accurate results, with some instances where texts need to be manually adjusted. The cost of this accurate contextual translation, unfortunately, is time and energy. With the current hardware this project is performed on (RTX 2070 Super, Ryzen 7 3700X, 64GB DDR4), it on average takes 2 minutes to contextualize one subtitle cue that spans about 3 seconds of video time.
            </p>

            <p>
                Factoring in the amount of content and subtitle cues, for about 5 hours of content, we can calculate:
            </p>
            <ul>
                <li>
                    2 minutes on average per subtitle cue.
                </li>
                <li>
                    Each video conservatively averages about 150 subtitle cues.
                </li>
                <li>
                    There are 22 videos to go through.
                </li>
            </ul>
            <p>
                This becomes 110 hours to computationally translate existing transcripted Chinese text into English and briefly analyzing League of Legends gameplay. This does not take into account of the time needed to filter the audio, transcribe, and create the SRT output that the translation process would begin to use, as well as manual translation fixes.
            </p>

            <h2>
                Keystroke and Movement Counter
            </h2>
            <p>
                In the URF gamemode, mechanically skilled players can implement combos at an extremely fast pace, along with a wide range of movement options available. In an attempt to follow this, the goal is to visually display the keystrokes used, and the number of movement options are possible.
            </p>
            <p>
                From the visuals alone, the most consistent and informative source to gather this data from is from the HUD at the bottom of all the videos. From HUD data alone, it's possible to get the exact frame when abiities are inputted, items are used, thus also creating a total of the possible movement options. Fortunately, <a href="https://space.bilibili.com/470840543">Nanshen</a> has played the game with consistent settings across many years, so the method of extracting the frame data can be discerned from just one video, then applied across the remaining 21.
            </p>
            <p>
                Even so, manual image data still needs to be collected, as well as utilizing some image recognition. Across the millions of individual frame data to analyze for precise, the ideal procedure would be specify known guarentees of HUD states, then apply the same logic and conditionals for all general HUD states. This can be done by:
            </p>
            <ol>
                <li>
                    Annotating the regions of relevant HUD state changes.
                </li>
                <li>
                    Extracting the image data in said regions and labelling its state.
                </li>
                <li>
                    Training an image classification model on an OpenCV preprocessed dataset.
                </li>
                <li>
                    Run all footage through the image classification model to extract HUD state timeframes.
                </li>
            </ol>
            <ProjectFigure caption="region annotator quickly built with Tkinter. keyboard shortcuts allow very quick labelling.">
                <img src={leesinhudannotator} alt="a simple hud annotator" />
            </ProjectFigure>
            <p>
                With hud data documented in their respective intervals, it becomes much simpler to take each region and determine the most recent keystrokes and available movement options at any point in time of the video. 
            </p>
            <ProjectCodeBlock caption="counters and state transitions are not all the same, for example, Q and W abilities">
                {`
                // extreme simplification
                // pseudo state movement counter example
                if (Q == "recast") ? 1 : 0
                if (W == "ready") ? 1 : 0

                // pseudo state transition example
                if Q:
                    if ("ready" -> "recast"):
                        return Q1
                    else if ("recast" -> "cooldown"):
                        return Q2
                `}
            </ProjectCodeBlock>
            <p>
                Gathering the data is somewhat trivial with the right tools. A fairly robust custom built tool allows the easy collection of data by randomly determining a few hundred region states. While this is sounds menial, it pales in comparison the millions that would need to be done manually. Furthermore, with this state event system, determining the logical conditions of state transitions allows frame perfect precision with little effort.
            </p>
            <p>
                The processing of 5+ hours of final video data off of the eventually trained OpenCV image classification model would take roughly 3.5 hours in total. If accounting as well for the 30 minutes to manually label each region and specify example region states, <b>the resulting rough 4 hours to process everything would still be shorter than the time it would take to even watch all the 5+ hours of footage in real time.</b>
            </p>

            <h1>
                Final Compilation
            </h1>
            <p>
                A goal of this small research project in such a niche topic is to summarize and display relevant information in an informative and inobtrusive way. This does not tie so much into statistics and in-depth numbers, such as "average keystrokes a game" or "airborne mechanics", as 22 games that can be played healthily within about 6 days is not nearly enough data to come up with an accurate number, not accounting for other game composition anomalies, such as basic team deviations.
            </p>
            <p>
                Presenting the data should be informative for beginner's to learn the champion, but not to detract the viewer's attention away from the main spectacle; the gameplay is very impressive and satisfying to view, and in its raw nature, it should stay that way. Furthermore, the final results do serve as a method of archival: <a href="https://space.bilibili.com/470840543">Nanshen</a> unfortunately has largely retired from playing the game and streaming, and there are few other archived sources of his gameplay accessible to the world. 
            </p>
            <p>
                As such, to properly contribute to the data footage in a meaningful way, keystroke history and movement counter are embedded within the video off to the side with minimalistic transitions. This data is displayed by creating <a href="https://support.apple.com/en-us/102207">ProRes 4444</a> file formats with transparency that will be overlayed on the original sources in Davinci Resolve. Subtitles are also edited and verified with Davinci Resolve to ensure that they are properly aligned and timed. 
            </p>
            <p>
                If a full Youtube video is not presently linked here, it means that the video is still be worked on, mostly verifying that translation is correct and does not disrespect the original commentator. You may check the example two gameplay demonstrations of the content expected soon.
            </p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/7I1_SNA_TK0?si=PlCgJcw55Hholh8p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p>
                <a href="https://github.com/denialpan/leesin-URF-analysis-translation">Source code.</a>.
            </p>
        </ProjectArticle>
    );
}
