import React from 'react'
import NavBar from './components/navbar/BlogNavbar'
import Footer from './components/footer/Footer'
import Home from './views/home/Home'
import Blog from './views/blog/Blog'
import NewBlogPost from './views/new/New'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const baseUrl = process.env.REACT_APP_FE_URL

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="https://m5-w2-monday-recap-frontend.vercel.app/"
          exact
          element={<Home />}
        />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/new" element={<NewBlogPost />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
