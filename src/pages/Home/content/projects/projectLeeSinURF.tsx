import ProjectArticle, { ProjectCodeBlock } from './projectArticleTemplate';

export default function LeeSinURF() {
    return (
        <ProjectArticle
            title="Lee Sin URF video analysis"
            description="Video analysis pipeline to dissect League of Legends gameplay."
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
                Running video data through another LLM is a bit troublesome. Originally the text translation was run through Qwen2.5-vl 14b, however due to the dense usage of taking a video frame and transforming them into tokens, it is important to limit to a lower parameter model, such as Qwen2.5-vl 7b, especially when run on consumer hardware. Time suddenly becomes a huge factor here as well, but if hardware limitations were not a problem, it most certainly would be remediated away instantly, as would other major computating problems. Here is the contextual translation at the same timeframe:
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
                With this method of translation, it's possible to get pretty accurate results, with some instances where texts need to be manually adjusted. The cost of this accurate contextual translation, unfortunately, is time and energy. With the current hardware this project is performed on (RTX 2070 Super, Ryzen 7 3700X, 64GB DDR4), it on average takes 2 minutes to contextualize one subtitle cue that spans about 3 seconds of video time.
            </p>

            <p>
                Factoring in the amount of content and subtitle cue points where translation is contextualized, for about 5 hours of content, we can calculate:
            </p>
            <ul>
                <li>
                    2 minutes on average per subtitle cue
                </li>
                <li>
                    Each video conservatively averages about 150 subtitle cues
                </li>
                <li>
                    There are 22 videos to go through
                </li>
            </ul>
            <p>
                This becomes 110 hours to computationally translate existing transcripted Chinese text into English and briefly analyzing League of Legends gameplay. This does not take into account of the time needed to filter the audio, transcribe, and create the SRT output that the translation process would begin to use, as well as manual translation fixes.
            </p>


        </ProjectArticle>
    );
}
