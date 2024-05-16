import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { Banner } from './Banner'

export const BlogPages = () => {
  return (
    <>
        <section className='blog'>
            <div className='container grid-3'>
                <BlogCard title='' cover='' />
                <BlogCard title='' cover='' />
                <BlogCard title='' cover='' />
            </div>
        </section>
    </>
  )
}

// BlogCard


export const BlogCard = (props) => {
  return (
    <div className='card'>
        <div className='img'>
            <img src={props.cover} alt='' />

        </div>
        <h1>{props.title}</h1>
        <br />
        <button>
            <NavLink to='/single-page' className={flex-b-g}  >
                Start using Becca today <HiOutlineArrowNarrowRight size={25}/>
            </NavLink>
        </button>
    </div>
  )
}


export const BlogSinglePages = () => {
  return (
    <section className='blog blogpage'>
      <div className='container'>
        <div className='card'>
          <div className='img'>
              <img src='' alt='' />
            </div>
            <h1>Awesome </h1>
            <p>consequat</p>
            <h3>Be Open</h3>
            <p>Consequet</p>
          </div>  
      </div>
      <br />
      <Banner />
    </section>
  )
}

