import Headerperso from './components/headerperso.js'
import logo from './logo.svg'
import './App.css'
import ProductList from './components/productslist.js'
import Cart from './components/cart.js'
import FooterPerso from './components/footerPerso.js'

function App() {
  return (
    <div className="App">
      < Headerperso />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < ProductList />
        < Cart />
      </header>
      < FooterPerso />
    </div>
  )
}
export default App

