import React from 'react'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Article from './components/Article.jsx'
import Footer from './components/Footer.jsx'
import brooklyn from './assets/blog-image-1.jpg'
import Vintage from './assets/blog-image-2.jpg'



const App = () => {
  return (
    <div>
      <Header title="Sartre's List"  subtitle="Better-Dressed Peolple"/>
      <Nav list={
      <ul>
      <li>Women's</li>
      <li> Men's</li>
      <li>On the street</li>
      <li>The catwalk</li>
      <li>Adwalk</li>
      <li>About</li>
    </ul>}/>
      <Article  date="11/12/20" description="On the street in Brooklyn" src={brooklyn} text="Selfies sunt orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." continue="Continue..."/>
      <Article  date="11/12/20" description="Vintage in Vogue" src={Vintage} text="Cray ipsum, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." continue="Continue..."/>
      <Footer footer= {
      <ul>
      <li>Home</li>
      <li>Women's</li>
      <li> Men's</li>
      <li>On the street</li>
      <li>The catwalk</li>
      <li>Adwalk</li>
      <li>About</li>
      <li>Tips</li>
    </ul>
     } copyright="&copy; 2013 Valet Industries, Inc"/>
    </div>
  )
}

export default App
