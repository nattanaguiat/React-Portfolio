import { Outlet } from 'react-router-dom'
import NavTabs from './components/NavTabs'
import Header from './components/header'
import Footer from './components/Footer'
import './App.css'
import { Fragment } from 'react'

function App() {
  return (
    <>
      <Header>
        <NavTabs />
      </Header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
