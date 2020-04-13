import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from "../../Redux/action_creators/actions";
import '../../styles/style.css'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

let imgUrl3 = 'https://res.cloudinary.com/comicom/image/upload/v1586179566/Pages%20Image/54678_jm38fm.jpg'
let imgUrl2 = 'https://res.cloudinary.com/comicom/image/upload/v1586178462/Pages%20Image/14358_ntpkal.jpg'
let imgUrl = 'https://res.cloudinary.com/comicom/image/upload/v1586178469/Pages%20Image/batman-dc-comics-dark-poster-wallpaper_qhlhh3.jpg'


class Home extends Component {
    constructor(props) {
        super(props)
        console.log("4")
        if(!this.props.user.isAuthenticated){
            this.props.dispatch(getUserInfo());
        }
    }

    render() {
        return (
            <div className="home-page">
                <section className="hero hero-2">
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src={imgUrl} alt="First slide"
                            />
                            <Carousel.Caption>
                            <div className="container">
                                <div className="content text-center">
                                    <h5 className="text-uppercase">Lorem ipsum dolor</h5>
                                    <h1 className="text-uppercase text-primary">Batman House</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                    <Link to='/product/batman' className="arrow text-uppercase">shop now</Link>
                                </div>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={imgUrl2} alt="Second slide"
                            />
                            <Carousel.Caption>
                            <div className="container">
                                <div className="content text-center">
                                    <h5 className="text-uppercase">Lorem ipsum dolor</h5>
                                    <h1 className="text-uppercase text-primary">Marvel House</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                    <Link to='/product/marvel' className="arrow text-uppercase">shop now</Link>
                                </div>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={imgUrl3} alt="Third slide"
                            />
                            <Carousel.Caption>
                            <div className="container">
                                <div className="content text-center">
                                    <h5 className="text-uppercase">Lorem ipsum dolor</h5>
                                    <h1 className="text-uppercase text-primary">Venom House</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                    <Link to='/product/marvel' className="arrow text-uppercase">shop now</Link>
                                </div>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>
                <section className="categories">
                    <div className="container">
                        <div className="categories-inner">
                            <header>
                                <h2 className="h5 heading-line d-none d-md-block">Categories</h2>
                            </header>
                            <div className="row text-center">
                                <div className="col-md-4 item">
                                    <Link to={'/product/indian'}>
                                        <h4>Indian Comics</h4>
                                        <p>Chacha Chowdary, Pinky, etc</p>
                                        <div className="image">
                                            <img src="https://res.cloudinary.com/comicom/image/upload/v1586180656/Chacha%20Choudary/12e3a6_fe5bfcb0da5643e69c6e55da997ae329_mv2_d_1253_1300_s_2_bicd1v.webp" alt="comic" className="img-fluid" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4 item">
                                    <Link to={'/product/western'}>
                                        <h4>Western Comics</h4>
                                        <p>Ironman, Batman, etc</p>
                                        <div className="image">
                                            <img src="https://res.cloudinary.com/comicom/image/upload/v1585809951/Ironman/clean_ylty3m.jpg" alt="comic" className="img-fluid" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4 item">
                                    <Link to={'/product/manga'}>
                                        <h4>Manga</h4>
                                        <p>One Piece, Oishinbo, etc</p>
                                        <div className="image">
                                            <img src="https://res.cloudinary.com/comicom/image/upload/v1585814838/Manga/again_3_x383bz.jpg" alt="comic" className="img-fluid" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sale">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Lorem Ipsum</h2>
                                <p>lorem ipsum dolor sit amet consectetur adipiscing elit, ed do eiusmod tempor incididunt</p>
                                <Link to="/product/iron man" className="btn btn-dark shop-now">Shop Now</Link>
                            </div>
                            <div className="col-md-6 d-none d-md-block">
                                <div className="product">
                                    <img src="https://res.cloudinary.com/comicom/image/upload/v1586196019/Pages%20Image/tnxjxsfidzw31-removebg-preview_mx20x5.png" alt="ironman" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sale-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-none d-md-block">
                                <div className="product-1-2">
                                    <img src="https://res.cloudinary.com/comicom/image/upload/v1586195416/Pages%20Image/290795_p8ukp6-removebg-preview-removebg-preview_sck9ck.png" alt="batman" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2>Lorem Ipsum</h2>
                                <p>lorem ipsum dolor sit amet consectetur adipiscing elit, ed do eiusmod tempor incididunt</p>
                                <Link to="/product/deadpool" className="btn btn-dark shop-now">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="divider">
                    <div className="container text-center">
                        <p className="h5">New Arrival Collections</p>
                        <h2>Lorem ipsum dolor</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <Link to="/product/all" className="btn btn-dark">Learn More</Link>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(Home);