import { useState } from 'react'
import Nav from './layout/Nav'
import About from './section/About'
import Contact from './section/Contact'
import Profile from './section/Profile'
import Projects from './section/Projects'
import Skills from './section/Skills'


function App() {
  return (
    <>
      <div className='bg-custom-gradient min-h-screen flex flex-col items-center'>
          <Nav />
          <main>
            <div id='profile'>
              <Profile />
            </div>
            <div id='about'>
              <About />
            </div>
            <div id='skill'>
              <Skills />
            </div>
            <div id='project'>
              <Projects />
            </div>
            <div id='contact'>
              <Contact />
            </div>
          </main>
      </div>
    </>
  )
}

export default App
