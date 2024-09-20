
import MicrosoftHeaderLogo from '../../assets/MicrosoftHeaderLogo.png'
import './header.scss'


const navigation = [
  { title: 'Introduction', link: 'https://techcommunity.microsoft.com/t5/microsoft-teams-blog/introducing-operator-connect-and-more-teams-calling-updates/ba-p/2176398' },
  { title: 'Configuration', link: 'https://learn.microsoft.com/en-us/MicrosoftTeams/operator-connect-configure' },
  { title: 'Plan', link: 'https://learn.microsoft.com/en-us/microsoftteams/operator-connect-plan' },
]

const Header = () => {
  return (
    <header className="header-container" role="banner" aria-label="Microsoft Operator Connect Portal">
      <a href="https://www.microsoft.com/en-ca/" className='header-link'>
        <img src={MicrosoftHeaderLogo} alt='logo' width={90} height={20} className='header-logo' loading='lazy' />
      </a>

      <h1 className='header-title'>Operator Connect Portal</h1>

      <nav className='header-nav' aria-label="Main Navigation">
        {
          navigation.map((n, i) => (
            <div key={`${n.link}-${i}`}>
              <a href={n.link} aria-label={`Navigate to ${n.title}`} target="_blank" rel="noopener noreferrer">{n.title}</a>
            </div>
          ))
        }
      </nav>
      <a className='header-login' href="https://localhost:44365/" role="button" aria-label="Sign in">
        <span>Sign in</span>
      </a>
    </header>
  )
}

export default Header