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
                        price= {1.00}
                        rating = {5}
                    />
                     <Product 
                        id =  "123459" 
                        title = "The Adventures of Sherlock Holmes by Arthur Conan Doyle"
                        image = "/images/holmes.jpg"
                        type = "ePub Download"
                        price= {4.00}
                        rating = {5}
                    />
                     <Product 
                        id =  "123410" 
                        title = "Pride and Prejudice by Jane Austen "
                        image = "/images/pride.jpg"
                        type = "ePub Download"
                        price= {9.00}
                        rating = {5}
                    />
                     <Product 
                        id =  "123411"
                        title = "Frankenstein; Or, The Modern Prometheus by Mary Wollstonecraft Shelley"
                        image = "/images/frank.jpg"
                        type = "ePub Download"
                        price= {4.00}
                        rating = {5}
                    />
                     <Product 
                        id =  "123412"
                        title = "Alice's Adventures in Wonderland by Lewis Carroll "
                        image = "/images/alice.jpg"
                        type = "ePub Download"
                        price= {9.00}
                        rating = {5}
                    />
                     <Product 
                        id =  "123413"
                        title = "The Scarlet Letter by Nathaniel Hawthorne"
                        image = "/images/scarlet.jpg"
                        type = "ePub Download"
                        price= {9.00}
                        rating = {5}
                    />
                    <Product 
                        id =  "123458" 
                        title = "Moby Dick; Or, The Whale by Herman Melville"
                        image = "/images/moby.jpg"
                        type = "ePub Download"
                        price= {1.00}
                        rating = {4}
                        //link address: https://www.gutenberg.org/ebooks/2701.epub.noimages?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                     <Product 
                        id =  "123414"
                        title = "A Tale of Two Cities by Charles Dickens"
                        image = "/images/twoCities.jpg"
                        type = "ePub Download"
                        price= {1.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/98.epub.images?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                </div>

                <h3 className = "home__rowTitle">Most Downloaded Books This week</h3>
                <div className = "home__row" >
                <Product 
                        id =  "123415"
                        title = "A Modest Proposal by Jonathan Swift"
                        image = "/images/modestProposal.jpg"
                        type = "ePub Download"
                        price= {4.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/1080.epub.noimages?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                     <Product 
                        id =  "123416"
                        title = "Metamorphosis by Franz Kafka"
                        image = "/images/fly.jpg"
                        type = "ePub Download"
                        price= {2.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/5200.epub.noimages?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                     <Product 
                        id =  "123417"
                        title = "Adventures of Huckleberry Finn by Mark Twain"
                        image = "/images/huck.jpg"
                        type = "ePub Download"
                        price= {9.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/76.epub.images?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                     <Product 
                        id =  "123418"
                        title = "The Yellow Wallpaper by Charlotte Perkins Gilman"
                        image = "/images/yellowWallpaper.jpg"
                        type = "ePub Download"
                        price= {2.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/1952.epub.images?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                     <Product 
                        id =  "123419"
                        title = "The Strange Case of Dr. Jekyll and Mr. Hyde by Robert Louis Stevenson"
                        image = "/images/hyde.jpg"
                        type = "ePub Download"
                        price= {9.00}
                        rating = {5}
                        //Link Address:
                    />
                     <Product 
                        id =  "123420"
                        title = "Beowulf: An Anglo-Saxon Epic Poem by J. Lesslie Hall"
                        image = "/images/beowulf.jpg"
                        type = "ePub Download"
                        price= {9.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/16328.epub.noimages?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                     <Product 
                        id =  "123419"
                        title = "War and Peace by graf Leo Tolstoy"
                        image = "/images/warPeace.jpg"
                        type = "ePub Download"
                        price= {5.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/2600.epub.images?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                     <Product 
                        id =  "123419"
                        title = "Little Women by Louisa May Alcott"
                        image = "/images/littleWomen.jpg"
                        type = "ePub Download"
                        price= {7.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/514.epub.noimages?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                </div>

                <h3 className = "home__rowTitle">Featured New Release Books</h3>
                <div className = "home__row" >
                <Product 
                        id =  "123421"
                        title = "The Importance of Being Earnest: A Trivial Comedy for Serious People by Oscar Wilde"
                        image = "/images/earnest.jpg"
                        type = "ePub Download"
                        price= {2.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/844.epub.noimages?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                     <Product 
                        id =  "123422"
                        title = "The Picture of Dorian Gray by Oscar Wilde"
                        image = "/images/gray.jpg"
                        type = "ePub Download"
                        price= {9.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/174.epub.noimages?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                     <Product 
                        id =  "123423"
                        title = "Jane Eyre: An Autobiography by Charlotte Brontë"
                        image = "/images/eyre.jpg"
                        type = "ePub Download"
                        price= {2.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/1260.epub.images?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                     <Product 
                        id =  "123424"
                        title = "Walden, and On The Duty Of Civil Disobedience by Henry David Thoreau"
                        image = "/images/walden.jpg"
                        type = "ePub Download"
                        price= {4.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/205.epub.images?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                     <Product 
                        id =  "123425"
                        title = "The Adventures of Tom Sawyer by Mark Twain"
                        image = "/images/sawyer.jpg"
                        type = "ePub Download"
                        price= {5.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/74.epub.images?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                     <Product 
                        id =  "123426"
                        title = "Dracula by Bram Stoker"
                        image = "/images/dracula.png"
                        type = "ePub Download"
                        price= {9.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/345.epub.images?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                                         <Product 
                        id =  "123426"
                        title = "Great Expectations by Charles Dickens"
                        image = "/images/great.jpg"
                        type = "ePub Download"
                        price= {9.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/1400.epub.images?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                                         <Product 
                        id =  "123426"
                        title = "Heart of Darkness by Joseph Conrad"
                        image = "/images/darkness.jpg"
                        type = "ePub Download"
                        price= {9.00}
                        rating = {5}
                        //Link Address: https://www.gutenberg.org/ebooks/219.epub.noimages?session_id=418fecdbf6475bbfff9b20d4109ea4d5877ba141
                    />
                </div>
            </div>
           
        </div>
    )
}

export default Home
