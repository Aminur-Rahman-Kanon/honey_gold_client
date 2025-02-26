import React from 'react';
import './banner.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bg1 from '../../assets/images/banner/bg_1.jpg';
import bg2 from '../../assets/images/banner/bg_2.jpg';
import bg3 from '../../assets/images/banner/bg_3.jpg';
import bg4 from '../../assets/images/banner/bg_4.jpg';
import bg5 from '../../assets/images/banner/bg_5.jpg';

const Banner = () => {
    return (
        <div className='container'>
            <div className='root'>
                <Carousel dynamicHeight={false}
                          showThumbs={false}
                          showArrows={false}
                          showStatus={false}
                          autoPlay={true}
                          infiniteLoop={true}
                          preventMovementUntilSwipeScrollTolerance={false}
                          swipeScrollTolerance={50}>
                    <div className='item'>
                        <div className='bg-container'>
                            <img src={bg1} alt='honey gold' className='bg' />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='bg-container'>
                            <img src={bg2} alt='honey gold' className='bg' />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='bg-container'>
                            <img src={bg3} alt='honey gold' className='bg' />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='bg-container'>
                            <img src={bg4} alt='honey gold' className='bg' />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='bg-container'>
                            <img src={bg5} alt='honey gold' className='bg' />
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Banner;
