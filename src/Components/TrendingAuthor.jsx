import React from 'react'
import authImg1 from '../Components/assets/images/authImg1.jpg'
import authImg2 from '../Components/assets/images/authImg2.jpg'
import authImg3 from '../Components/assets/images/authImg2.jpg'

export const TrendingAuthor = () => {
  return (
    <div>
        <section className='author'>
            <section className='container'>
                <h2>Trending Author</h2>
                <br />
                <br />
                <br />
                <div className='grid-3'>
                    <TrendingAuthorCard img={authImg1} name='@Young' />
                    <TrendingAuthorCard img={authImg2} name='@levin ' />
                    <TrendingAuthorCard img={authImg3} name='@Dunkam' />
                </div>
            </section>
        </section>
    </div>
  )
}


export const TrendingAuthorCard = ({img, name}) => {
  return (
    <div className='card'>
        <div className='img'>
            <img src={img} alt='' />
        </div>
        <label htmlFor=''>{name}</label>
    </div>
  )
}

