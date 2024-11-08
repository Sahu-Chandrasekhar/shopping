import { Link } from "react-router-dom";
import './Myfooter.css'; // Custom CSS for more styling control
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

const Myfooter = () => {
    return (
        <footer className="footer bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    {/* About Us Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-warning mb-3">About Us</h5>
                        <p className="text-light">
                            I developed a fully functional e-commerce platform utilizing React, Bootstrap, JSON, and JavaScript. This project included implementing form validation, product filtering, and sorting to enhance user navigation. The focus was on optimizing performance, creating an intuitive user interface, and ensuring a responsive design.
                        </p>
                    </div>

                    {/* Our Address Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-warning mb-3">Our Address</h5>
                        <address className="text-light">
                            <p>
                                <i className="fas fa-map-marker-alt me-2 text-warning"></i>
                                Idco Info Park, Technology Corridor, <br />
                                Chandaka Industrial Estate, Patia, <br />
                                Bhubaneswar, Odisha 751024
                            </p>
                            <p>Email: <a href="mailto:sahuchandrasekhar1109@gmail.com" className="text-warning">sahuchandrasekhar1109@gmail.com</a></p>
                            <p>Phone: <a href="tel:+919583519278" className="text-warning">+91 958-351-9278</a></p>
                        </address>
                    </div>

                    {/* Social Media Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-warning mb-3">In Social Media</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li>
                                <i className="fab fa-facebook fa-lg me-2" style={{ color: '#3b5998' }}></i>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">Facebook</a>
                            </li>
                            <li>
                                <i className="fab fa-twitter fa-lg me-2" style={{ color: '#1da1f2' }}></i>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">Twitter</a>
                            </li>
                            <li>
                                <i className="fab fa-linkedin fa-lg me-2" style={{ color: '#0077b5' }}></i>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">LinkedIn</a>
                            </li>
                            <li>
                                <i className="fab fa-instagram fa-lg me-2" style={{ color: '#e4405f' }}></i>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Myfooter;
