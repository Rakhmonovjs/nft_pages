import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { BiBitcoin } from "react-icons/bi"
import { MdExplore } from "react-icons/md"
import { SliderContent } from './Slider'
import { TrendingAuthor } from './TrendingAuthor'
import HomeImg1 from '../Components/assets/images/HomeImg1.jpg'
import HomeImg2 from '../Components/assets/images/HomeImg2.jpg'
import HomeImg3 from '../Components/assets/images/HomeImg3.jpg'
import { Banner } from './Banner'

export const HomePage = () => {
  return (
    <>
        <Home/>
        <SliderContent />
        <TrendingAuthor />
        <HomeWrapper />
        <Banner />
    </>
  )
}



 const Home = () => {
    return (
      <>
      <section className='home'>
        <div className="container">
            <div className="left w-50">
                <h1>
                    We Are Becca <span>NFTs</span> <br />
                    Colection. Place 
                    <br />
                    Your First Bid
                </h1>
                <button className='flex-b-g'>
                    Start using Becca today 
                    <HiOutlineArrowNarrowRight size={25}/>
                </button>
            </div>

            <div className='right'>
                <div className='card'>
                    <div className='flex'>
                        <div className='user-img'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hdWj9InBJ2y2tH7C2MfeGHRyGTk727R4waZvWa0apg&s' alt='' />
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hdWj9InBJ2y2tH7C2MfeGHRyGTk727R4waZvWa0apg&s' alt='' />
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hdWj9InBJ2y2tH7C2MfeGHRyGTk727R4waZvWa0apg&s' alt='' />
                        </div>
                        <label>3567 + USERs</label>
                    </div>
                    <br />
                    <h3>$18.017.223</h3>
                    <h5>+$5.665.533 +73,4%</h5>
                    <div className='flex'>
                        <BiBitcoin size={25} />
                        <MdExplore size={25} />
                    </div>
                </div>
            </div>
        </div>
      </section>
      </>
    )
  }

  export const HomeWrapper = () => {
    return (
        <section className='home home-wrapper'>
            ?<div className='container'>
                <div className='w-50'>
                    <h1>
                        We Work Together <br /> 
                        Create Beatiful Products <br />
                        That People <span>Love</span>
                    </h1>
                </div>
                <div className='w-50 right'>
                    <div className='images'>
                        <img src={HomeImg1} alt='' />
                        <img src={HomeImg2} alt='' />
                        <img src={HomeImg3} alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
  }
