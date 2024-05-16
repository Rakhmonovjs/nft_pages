import React from 'react'
import userImg1 from '../Components/assets/images/userImg1.jpg'

export const Collection = () => {
  return (
    <div>
        <section className='collections'>
            <div className='container'>
                <div className='text'>
                    <h2>Trending Collections</h2>
                    <label htmlFor=''>
                        Libero Enim Sed Fauicibu. Turpis In Eu Mu Sis Lorem Ipsum 
                    </label>
                </div>
                <div className='grid-3' >
                    <CollectionCard cover={colImg1} name='Marco Dre' user="@ffbek" img={userImg1} />
                    <CollectionCard cover={colImg1} name='Marco Dre' user="@ffbek" img={userImg1} />
                    <CollectionCard cover={colImg1} name='Marco Dre' user="@ffbek" img={userImg1} />

                </div>
            </div>
        </section>
    </div>
  )
}


export const CollectionCard = (props) => {
    return (
        <div className='card'>
            <div className='img'>
                <div className='img'>
                    <img src={props.cover} alt='' />
                </div>
                <img className='user' src={props.img} alt='' />
                <img src={props.img} alt='' />
            </div>
            <div className='content'>
                <h3>{props.name}</h3>
                <p>{props.user}</p>
            </div>
        </div>
    )
}