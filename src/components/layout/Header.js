import './styles.css';
import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: this.props.auth,
            user: this.props.user
        };
    }

    componentDidMount() {
        console.log(this.state.auth);
    }

    componentWillUnmount() {
    }

    login(){
        this.setState({comment: 'Hello'});
    }

    render() {
        return (
            <div>
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close">
                            <span className="icofont-close js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body">

                    </div>
                </div>
                <nav className="site-nav mb-5" id="sticky">
                    <div className="sticky-nav js-sticky-header">
                        <div className="container position-relative">
                            <div className="site-navigation text-center dark">
                                <a href="index-2.html" className="logo menu-absolute m-0">Helasabili<span
                                    className="text-primary">.</span></a>
                                <ul className="js-clone-nav pl-0 d-none d-lg-inline-block site-menu">
                                    <li className="has-children">
                                        <a>Purchase</a>
                                        <ul className="dropdown">
                                            <li><a href="elements.html">Real Estate</a></li>

                                        </ul>
                                    </li>
                                    <li><a>Home</a></li>
                                    <li><a>About</a></li>
                                    <li><a></a></li>
                                    <li><a>Sign In</a></li>
                                    <li><a>Sign Up</a></li>
                                </ul>
                                <div className="menu-icons">
                                    <a href="#" className="user-profile">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        </svg>
                                    </a>

                                    <a href="cart.html" className="cart">
                                        <span className="item-in-cart">2</span>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                        </svg>
                                    </a>
                                </div>
                                <p
                                    className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
                                    data-toggle="collapse" data-target="#main-navbar">
                                    <span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
