function Landslider(props){
    return(
        <div className="untree_co-section">
            <div className="container">
                <div className="row mb-5 align-items-center">
                    <div className="col-md-6">
                        <h2 className="h3">Popular Items</h2>
                    </div>
                    <div className="col-sm-6 carousel-nav text-sm-right">
                        <a href="#" className="prev js-custom-prev-v2">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path fill-rule="evenodd"
                                      d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
                                <path fill-rule="evenodd"
                                      d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
                            </svg>
                        </a>
                        <a href="#" className="next js-custom-next-v2">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path fill-rule="evenodd"
                                      d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                                <path fill-rule="evenodd"
                                      d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="owl-3-slider owl-carousel">
                    <div className="item">
                        <div className="product-item">
                            <a href="shop-single.html" className="product-img">
                                <span className="custom-badge sale">{props.badge}</span>
                                <img src={props.src} alt="Image"
                                     className="img-fluid"/>
                            </a>
                            <h3 className="title"><a href="#">{props.location}</a></h3>
                            <div className="price">
                                <del>Ksh. {props.price} </del>
                                {/*&mdash; <span>£69.00</span>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Landslider;