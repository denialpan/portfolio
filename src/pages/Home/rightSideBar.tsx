import darktheme from '../../assets/icons/dark-theme.svg'
import facebook from '../../assets/icons/facebook.svg'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import { useTheme } from '../../hooks/useTheme';

export default function RightSidebar() {

    const { theme, toggle } = useTheme();
    return (
        <div class="right-widgets">
            <img src={github} width={32} height={32} />
            <img src={linkedin} width={32} height={32} />
            <img src={facebook} width={32} height={32} />
            <img src={darktheme} width={32} height={32} class="darktheme-icon" onClick={toggle} />
        </div>

    )
}