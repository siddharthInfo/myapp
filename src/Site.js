import React, { Component } from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import About from './pages/About'

export class Site extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Layout/>}></Route>
            <Route index element = {<Home/>}></Route>
            <Route path="Blogs" element = {<Blogs/>}></Route>
            <Route path="Contact" element = {<Contact/>}></Route>
            <Route path="About" element = {<About/>}></Route>
            <Route path="*" element = {<NoPage/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default Site
