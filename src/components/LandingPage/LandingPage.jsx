import React, { useState, useEffect } from "react";
import './LandingPage.css';
const LandingPage = () => {
    const [mainMenu, setMainMenu] = useState('Login');
    const [mainPath, setMainPath] = useState('Login');

    useEffect(() => {
        const username = localStorage.getItem("username");

        if (username) {
            setMainMenu('Build Pdf');
            setMainPath('createPdf');
        }
    }, []);
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div className="container px-5">
                <a className="navbar-brand fw-bold fs-3 text-primary" href="#page-top" >Printify</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Features</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#pricing">Pricing</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#contactus">Contact Us</a></li>
                    </ul>
                    <a href={mainPath} type="button" className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                        <span className="d-flex align-items-center">
                            <span className="small">{mainMenu}</span>
                        </span>
                    </a>
                </div>
            </div>
        </nav>

        <header className="masthead">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-8">
                        <div className="mb-5 mb-lg-0 text-center text-lg-start">
                            <h1 className="display-3 lh-3 mb-3 text-primary">One Time Hit API Pdf Generator</h1>
                            <p className="lead fw-normal text-muted mb-5">With <i className="text-primary fw-bold">Printify</i>, creating PDF documents has never been easier — all without coding expertise.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img src={process.env.PUBLIC_URL + '/img/main-logo.png'} alt="..." style={{weight: '25rem'}}/>
                    </div>
                </div>
            </div>
        </header>

        {/* <aside className="text-center bg-gradient-primary-to-secondary">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-xl-8">
                        <div className="h2 fs-1 text-white mb-4">"An intuitive solution to a common problem that we all face, wrapped up in a single app!"</div>
                    </div>
                </div>
            </div>
        </aside> */}

        <section id="features" className="bg-gradient-primary-to-secondary">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-12 order-lg-1 mb-5 mb-lg-0">
                        <div className="container-fluid px-5">
                            <div className="row gx-5">
                                <div className="col-md-6 mb-5">
                                    <div className="text-center">
                                        <i className="bi-file-pdf icon-feature text-white d-block mb-3"></i>
                                        <h3 className="font-alt text-white">One Api Call</h3>
                                        <p className="text-white mb-0">Document Generating as simple as one API Call. Easy to Integrate to any system.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="text-center">
                                        <i className="bi-clipboard icon-feature text-white d-block mb-3"></i>
                                        <h3 className="font-alt text-white">Flexible Template</h3>
                                        <p className="text-white mb-0">Template Set using HTML format. Support flexibiity of template changes. Perfect for customer facing (content and design).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-5 mb-md-0">
                                    <div className="text-center">
                                        <i className="bi-file-earmark-code-fill icon-feature text-white d-block mb-3"></i>
                                        <h3 className="font-alt text-white">No More Coding</h3>
                                        <p className="text-white mb-0">No Need to maintain the code for print and design Doc since it will handle by Printify.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-center">
                                        <i className="bi-cash-coin icon-feature text-white d-block mb-3"></i>
                                        <h3 className="font-alt text-white">Choose the perfect plan</h3>
                                        <p className="text-white mb-0">Saving budget and effort.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light" id="pricing">
            <div className="container px-1">
                <div className="pricing-header px-3 py-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 text-primary">Choose the perfect plan</h1>
                    <p className="lead text-danger fst-italic fw-bold">Only pay what you really need.</p>
                </div>
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal text-warning">Basic User</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title text-warning">$10 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Web Dashboard for doc history tracking</li>
                            <li>createpdf</li>
                            <li>24/7 Online Support</li>
                            </ul>
                            <a className="btn btn-lg btn-block btn-primary" onClick={(e) => alert("Launching Soon!")}>Buy</a>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal text-success">Premium User</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title text-success">$30 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Web Dashboard for doc history tracking</li>
                            <li>createpdf max 2K hit per month</li>
                            <li>Max 5 template creation</li>
                            <li>24/7 Online Support</li>
                            <li>Merge Document</li>
                            </ul>
                            <a className="btn btn-lg btn-block btn-primary" onClick={(e) => alert("Launching Soon!")}>Buy</a>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal text-warning">Small Enterprise</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title text-warning">$50 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Web Dashboard for doc history tracking</li>
                            <li>createpdf max 20K hit per month</li>
                            <li>max 10 template creation</li>
                            <li>24/7 Online Support</li>
                            <li>100 tps</li>
                            </ul>
                            <a className="btn btn-lg btn-block btn-primary" onClick={(e) => alert("Launching Soon!")}>Buy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-1">
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal text-success">Premium Enterprise</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title text-success">$80 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Web Dashboard for doc history tracking</li>
                            <li>createpdf max 2K hit per month</li>
                            <li>Max 20 template creation</li>
                            <li>24/7 Online Support</li>
                            <li>Merge Document</li>
                            </ul>
                            <a className="btn btn-lg btn-block btn-primary" onClick={(e) => alert("Launching Soon!")}>Buy</a>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal text-danger">Lifetime</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title text-danger">$3000</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Web Dashboard for doc history tracking</li>
                            <li>Unlimited hit per month</li>
                            <li>Max 20 template creation </li>
                            <li>24/7 Online Support</li>
                            <li>Merge Document</li>
                            <li>100 tps</li>
                            <li>1000$ dollar for every additional node (+50TPS & +10template)</li>
                            <li>SLA agreement</li>
                            </ul>
                            <a className="btn btn-lg btn-block btn-primary" onClick={(e) => alert("Launching Soon!")}>Buy</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta bg-gradient-primary-to-secondary text-white" id="#useapp">
            <div className="cta-content">
                <div className="container px-5">
                    <h2 className="text-white display-1 lh-1 mb-4">
                        Stop waiting.
                        <br />
                        Start generate your pdf.
                    </h2>
                    <a className="btn btn-outline-light py-3 px-4 rounded-pill" href="/login" target="_blank">Create PDF</a>
                </div>
            </div>
        </section>
        <section className="bg-light pt-5" id="contactus">
            <div className="container px-5">
                <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                    <div className="col-12 col-lg-6">
                        <img className="img-fluid rounded" loading="lazy" src="https://freefrontend.dev/assets/map-img-4.png" alt="Get in touch"/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row justify-content-xl-center">
                        <div className="col-12 col-xl-11">
                            <h2 className="h1 mb-3 text-primary">Contact us</h2>
                            <p className="lead fs-4 text-secondary mb-5">We're always on the lookout to work with new clients. If you're interested in working with us, please get in touch in one of the following ways.</p>
                            <div className="d-flex mb-4">
                            <div className="me-4 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-geo" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="mb-3">Address</h4>
                                <address className="mb-0 text-secondary">Tangerang Selatan</address>
                            </div>
                            </div>
                            <div className="d-flex mb-4">
                            <div className="me-4 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="mb-3">Phone</h4>
                                <p className="mb-0">
                                <a className="link-secondary text-decoration-none" href="tel:+6281927137713">+62 819-2713-7713</a>
                                </p>
                            </div>
                            </div>
                            <div className="d-flex">
                            <div className="me-4 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="mb-3">E-Mail</h4>
                                <p>
                                <a className="link-secondary text-decoration-none" href="mailto:customersupport@printify-id.online">customersupport@printify-id.online</a>
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <footer className="bg-black text-center py-5">
            <div className="container px-5">
                <div className="text-white-50 small">
                    <div className="mb-2">&copy; Printify 2024. All Rights Reserved.</div>
                    <a href="#!">Privacy</a>
                    <span className="mx-1">&middot;</span>
                    <a href="#!">Terms</a>
                    <span className="mx-1">&middot;</span>
                    <a href="#!">FAQ</a>
                </div>
            </div>
        </footer>
        </>
    )
};
            
  export default LandingPage;