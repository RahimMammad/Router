import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import ShortCodes from './pages/ShortCodes'
import About from './pages/About'
import Languages from './pages/Languages'
import Markup from './pages/Markup'
import Contact from './pages/Contact'
import Alignment from './pages/Alignment'
import Clearing from './pages/Clearing'
import Comment from './pages/Comment'
import CommentDisabled from './pages/CommentDisabled'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shortcodes" element={<ShortCodes />} />
            <Route path="/about" element={<About />} />
            <Route path="/languages" element={<Languages />} />
            <Route path='/markup' element={<Markup />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/align' element={<Alignment />} />
            <Route path='/clear' element={<Clearing />} />
            <Route path='/comment' element={<Comment />} />
            <Route path='/comment/disabled' element={<CommentDisabled />} />
          </Route> 
      </Routes>
    </div>
  )
}

export default App