import darktheme from '../../../assets/icons/dark-theme.svg'
import facebook from '../../../assets/icons/facebook.svg'
import github from '../../../assets/icons/github.svg'
import linkedin from '../../../assets/icons/linkedin.svg'

export default function ContentHome() {
    return (
        <>
            <div class="description-content">My passion surrounds all the complexity that the future of computer science has to offer. </div>
            <div class="description-content">This is my personal page, which contains everything that I've worked on, and a collection of random stuff and thoughts that I find particularly interesting for software, media, or new frameworks. </div>
            <div class="description-content">Enjoy your stay!</div>

            <hr class="divider-faded" />

            <div class="links-main description-content">
                <div class="resume-main">
                    RESUME
                </div>
                <div class="links">

                    <img src={github} width={32} height={32} />
                    <img src={linkedin} width={32} height={32} />
                    <img src={facebook} width={32} height={32} />

                </div>

            </div >

        </>
    )
}