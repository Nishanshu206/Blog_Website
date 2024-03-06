import React, { useContext } from 'react'
import { Context } from '../../main'
import HeroSection from '../miniComponents/HeroSection'
import LatestBlogs from "../miniComponents/LatestBlogs";
import TrendingBlogs from "../miniComponents/TrendingBlogs";
import PopularAuthors from "../miniComponents/PopularAuthors";
const Home = () => {

  const {mode,blogs} = useContext(Context)

  const filteredBlogs = blogs.slice(0, 6);
  return (
   <article className={mode ==='dark' ? 'dark-bg' : 'light-bg'}>
  <HeroSection/>
  <TrendingBlogs/>
  <LatestBlogs heading={"Latest Blogs"} blogs={filteredBlogs}/>
  <PopularAuthors/>
   </article>
  )
}

export default Home