import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

export const Banner = () => {
  return (
    <>
        <section className='banner' >
            <div className='container'>
                <div className='box box1'>
                    <div className='w-50'>
                        <h1>
                            Awesome NFT Collection - Rare Original & Exlusive card NFTs
                        </h1>
                        <button className='flex-b-g'>
                            Start using Becca today <HiOutlineArrowNarrowRight />
                        </button>
                    </div>
                </div>
                
                <div className='boxs flex-b-g'>
                    <div className='box box2'>
                        <h1>
                            Filter By Type, Artists & Currency NFTs
                        </h1>
                        <button className='flex-b-g'>
                            Start using Becca today <HiOutlineArrowNarrowRight />
                        </button>
                    </div>
                    {/* ///// 3 */}
                    <div className='box box3'>
                        <h1>
                            Artists & Bids On A Single Playform
                        </h1>
                        <button className='flex-b-g'>
                            Start using Becca today <HiOutlineArrowNarrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
