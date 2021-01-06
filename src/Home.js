import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className = "home" >
            <div className = "home__topMenu" >
               <div className = "home__topMenuItems">
                    <img src="/images/arts.png" alt = "" />
                    <p>Arts &</p> <p> Photography</p>
               </div>
               <div className = "home__topMenuItems">
                    <img src="/images/bio.png" alt = "" />
                    <p>Biographies</p>
               </div>
               <div className = "home__topMenuItems">
                    <img src="/images/money.png" alt = "" />
                    <p>Business</p>
               </div>
               <div className = "home__topMenuItems">
                    <img src="/images/comp.png" alt = "" />
                    <p>Computer</p>  <p>Science</p>
               </div>
               <div className = "home__topMenuItems">
                    <img src="/images/cook.png" alt = "" />
                    <p>Cookbooks</p>
               </div>
               <div className = "home__topMenuItems">
                    <img src="/images/his.png" alt = "" />
                    <p>History</p>
               </div>
               <div className = "home__topMenuItems">
                    <img src="/images/lit.png" alt = "" />
                    <p>Literature</p>
               </div>
               <div className = "home__topMenuItems">
                    <img src="/images/mys.png" alt = "" />
                    <p>Mysteries</p>
               </div>
               <div className = "home__topMenuItems">
                    <img src="/images/rom.png" alt = "" />
                    <p>Romance</p>
               </div>
               <div className = "home__topMenuItems">
                    <img src="/images/sci.png" alt = "" />
                    <p>Sci fi</p>
               </div>
                
            </div>
            <div>
                <h2 className = "home__rowTitle">Row Title</h2>
                <div className = "home__row" >
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>

                <h2 className = "home__rowTitle">Row Title</h2>
                <div className = "home__row" >
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>

                <h2 className = "home__rowTitle">Row Title</h2>
                <div className = "home__row" >
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
           
        </div>
    )
}

export default Home
