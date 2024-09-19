import MicrosoftHeaderLogo from '../../assets/MicrosoftHeaderLogo.png'
import './header.scss'


const navigation = [
  { title: 'Introduction',  link: 'https://techcommunity.microsoft.com/t5/microsoft-teams-blog/introducing-operator-connect-and-more-teams-calling-updates/ba-p/2176398' },
  { title: 'Configuration', link: 'https://learn.microsoft.com/en-us/MicrosoftTeams/operator-connect-configure' },
  { title: 'Plan', link: 'https://learn.microsoft.com/en-us/microsoftteams/operator-connect-plan' },
]

const Header = () => {

  

  return (
    <div className='header-container'>
        <a href="https://www.microsoft.com/en-ca/" className='header-link'><img src={MicrosoftHeaderLogo} alt='logo' width={90} height={20} className='header-logo'></img></a>
        <p className='header-title'>Operator Connect Portal</p>
        
        <nav className='header-nav'>
          {
              navigation.map((n, i) => (
                <div key={n.link+n.title+i}>
                  <a href={n.link} aria-label={n.title}>{n.title}</a>
                </div>
              ))
          }
        </nav>
        <a className='header-login' href="#">
            <span>Sign in</span>
          </a>
    </div>
  )
}

export default Header