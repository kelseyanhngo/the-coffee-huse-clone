import React from 'react';
import MobileLooks from '../../Componenets/MobileLooks';
import Searching from '../../Componenets/Searching';
import News from '../News';
import Products from '../Products';
import SugesstionItems from '../SuggestionItems';
import Slider from './../../Componenets/Sliders/index';
import Footer from './../Footer/index';

Home.propTypes = {
    
};

function Home(props) {
    return (
        <div>
     
            <div className='sliders'>
            <Slider/>
           
            </div>
            <div className='suggestion' >
            <SugesstionItems/>
            </div>

            <div className='prod'>
            <Products/>

            </div>
            <div className='news'>
            <News/>

            </div>
            <div className='mobileLooks'>
            <MobileLooks/>

            </div>
            <div className='searching'>
            <Searching/>

            </div>

            {/* <div className='footer'>
            <Footer/>

            </div> */}
        </div>
    );
}

export default Home;