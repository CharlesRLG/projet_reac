import '../components/headerperso.css'
import logoBlue from '../assets/img/logo-blue.png'


function headerPerso() {
  return (
    
    <div className="headerperso">
      <header className="App-headerperso">
        <img src={logoBlue} className="header-logo" alt="Logo des 8 fantastiques" />
        <h1>Acheter nos templates</h1>
        
      </header>
    </div>
  )
}

export default headerPerso
