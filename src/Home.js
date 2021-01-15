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
            <div className = "home__rowContainer">    
                <h3 className = "home__rowTitle" >Items to Consider</h3>
                <div className = "home__row" >
                    <Product 
                        id =  "123457"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123459" 
                        title = "The Adventures of Sherlock Holmes by Arthur Conan Doyle"
                        image = "/images/holmes.jpg"
                        type = "ePub Download"
                        price= {4.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123410" 
                        title = "Pride and Prejudice by Jane Austen "
                        image = "/images/pride.jpg"
                        type = "ePub Download"
                        price= {9.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123411"
                        title = "Frankenstein; Or, The Modern Prometheus by Mary Wollstonecraft Shelley"
                        image = "/images/frank.jpg"
                        type = "ePub Download"
                        price= {4.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123412"
                        title = "Alice's Adventures in Wonderland by Lewis Carroll "
                        image = "/images/alice.jpg"
                        type = "ePub Download"
                        price= {9.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123413"
                        title = "The Scarlet Letter by Nathaniel Hawthorne"
                        image = "/images/scarlet.jpg"
                        type = "ePub Download"
                        price= {9.99}
                        rating = {5}
                    />
                    <Product 
                        id =  "123458" 
                        title = "Red House"
                        image = "/images/redHouse.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {4}
                    />
                     <Product 
                        id =  "123414"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                </div>

                <h3 className = "home__rowTitle">Most Downloaded Books This week</h3>
                <div className = "home__row" >
                <Product 
                        id =  "123415"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123416"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123417"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123418"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123419"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123420"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                </div>

                <h3 className = "home__rowTitle">Featured New Release Books</h3>
                <div className = "home__row" >
                <Product 
                        id =  "123421"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123422"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123423"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123424"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123425"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                     <Product 
                        id =  "123426"
                        title = "A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens"
                        image = "/images/scrooge.jpg"
                        type = "ePub Download"
                        price= {1.99}
                        rating = {5}
                    />
                </div>
            </div>
           
        </div>
    )
}

export default Home
