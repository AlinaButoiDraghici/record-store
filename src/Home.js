import React from 'react'
import './Home.css'
import banner from './assets/banner1.jpg';
import Product from './Product';
import am from './assets/am.jpg';
import logo from './assets/vinyl.png';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className='home_image' src={banner} alt="Banner" />

            <div className="home_row">
                <Product id="12321341"
            title="Arctic Monkeys-AM"
            price={11.96}
            rating={5}
            image={am}/>
                <Product id="12321341"
            title="Arctic Monkeys-AM"
            price={11.96}
            rating={5}
            image={am}/>
            <Product id="12321341"
            title="Arctic Monkeys-AM"
            price={11.96}
            rating={5}
            image={am}/>
            <Product id="12321341"
            title="Arctic Monkeys-AM"
            price={11.96}
            rating={5}
            image={am}/>
            </div>
            <div className="home_row">
            <Product id="12321341"
            title="Arctic Monkeys-AM"
            price={11.96}
            rating={5}
            image={am}/>
                <Product id="12321341"
            title="Arctic Monkeys-AM"
            price={11.96}
            rating={5}
            image={am}/>
            </div>
            <div className="home_row">
                {/* Product */}
                {/* Product */}
            </div>
            </div>
        </div>
    )
}

export default Home
