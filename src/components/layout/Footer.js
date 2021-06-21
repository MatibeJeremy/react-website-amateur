
function Footer() {
  return (
    <div>
        <div className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="widget">
                            <h3>Help</h3>
                            <ul className="list-unstyled">
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="widget">
                            <h3>About</h3>
                            <ul className="list-unstyled">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="widget">
                            <h3>Browse</h3>
                            <ul className="list-unstyled">
                                <li><a href="#">Store</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Student Discount</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="widget">
                            <h3>Join our list and receive exclusives</h3>
                            <form action="#" className="subscribe">
                                <div className="d-flex">
                                    <input type="email" className="form-control" placeholder="Email address"/>
                                        <input type="submit" className="btn btn-black" value="Subscribe"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center copyright">
                        <p>

                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script>
                            All rights reserved | This template is made with <i className="icon-heart text-danger"
                                                                                aria-hidden="true"></i> by <a
                            href="https://colorlib.com/" target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;