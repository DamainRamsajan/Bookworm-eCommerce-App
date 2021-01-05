import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import { Link } from 'react-router-dom';
// import { useStateValue } from './StateProvider';
// import { auth } from './firebase';



function Header() {
    // const[{basket, user}] = useStateValue();

    const handleAuthentication = () =>{
        // if(user){
            // auth().signOut();
        // }else{
            // auth().signInWithEmailAndPassword ();
        // }
    }

    return (
        <div className = "header"> 
            {/* <Link to = "/" > */}
                 <img className = "header__logo" alt="" src= "/images/bookworm.png" />
            {/* </Link>            */}

            <div className = "header__search">
                <input className = "header__searchInput" type= "text" />
                <SearchIcon className = "header__searchIcon" />
            </div>

            <div className = "header__nav">
                
                <div onClick={handleAuthentication} className = "header__option">
                    
                        <span className ="header__optionLineOne">
                            Hello Guest
                        </span>
                    {/* <Link to = {!user && "/login"}>                 */}
                        <span className ="header__optionLineTwo">
                            User{/* {user ? "Sign Out": "Sign In" }  */}
                        </span>   
                    {/* </Link>  */}
                </div>
                
                <div className = "header__option">
                    <span className ="header__optionLineOne">
                        Returns
                    </span>
                    <span className ="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className = "header__option">
                    <span className ="header__optionLineOne">
                        Your
                    </span>
                    <span className ="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                {/* <Link to ="/checkout"> */}
                    <div className = "header__optionBasket">
                        <AddShoppingCartIcon />
                        <span className = "header__optionLineTwo header__basketCount" >
                           {/* {basket?.length} */}
                        </span>
                    </div>
                {/* </Link>               */}
            </div>            
        </div>
    )
}

export default Header
