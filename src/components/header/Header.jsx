import React from 'react';
import './headerStyles.scss'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from '../../firebase/firebaseUtils';
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';


const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    Sign Out
                    </div>
            ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                )}
                <CartIcon/>
        </div>
        {
            hidden ? null:
        <CartDropdown/>
        }
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser, hidden
});

export default connect(mapStateToProps)(Header);