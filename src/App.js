import './App.css'
import Nav from './components/nav/nav'
import Header from './components/header/header'
import Content from './components/content/content'
import axios from 'axios'

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params={
  api_key:"d9f02336933798702dd85062905dd5ca"
}
const App = ()=>{
  return <div className='Overall'>
    <Nav/>
    <Header/>
    <Content/>
  </div>
}
export default App