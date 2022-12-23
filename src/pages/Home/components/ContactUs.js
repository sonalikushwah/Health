import React from "react";
const Contents = [
    {
        id:1,
        class:"fa-solid fa-signs-post",
        head:"Address",
        desc:"198 West 21th Street, Suite 721 New York NY 10016"
    },
    {
        id:2,
        class:"fa-solid fa-phone",
        head:"Contact Number",
        desc:"+ 1235 2355 98"
    },
    {
        id:3,
        class:"fa-sharp fa-solid fa-paper-plane",
        head:"Email Address",
        desc:"info@yoursite.com"
    },
    {
        id:4,
        class:"fa-solid fa-earth-europe",
        head:"Website",
        desc:"yoursite.com"
    }
]
const Card = (props) => {
    return (<>
        <div className="col-md-6 col-lg-3 d-flex ftco-animated">
            <div className="align-self-stretch box p-4 text-center bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                    <i class={props.class}></i>
                </div>
                <h3 className="mb-4">{props.head}</h3>
                <p><a>{props.desc} </a></p>
            </div>
        </div>
    </>)
}
const ContactUs = () => {
    return (<>
        <section className="ftco-section contact-section" id="contact-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section text-center ftco-animated">
                        <h2 className="mb-4">Contact Us</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
                <div className="row d-flex contact-info mb-5">
                    {Contents.map((content)=>{
                        return(<>
                        <Card class={content.class}
                         head={content.head}
                         desc={content.desc}/>
                        </>)
                    })}
                    {/* <div className="col-md-6 col-lg-3 d-flex ftco-animated">
                        <div className="align-self-stretch box p-4 text-center bg-light">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <i class="fa-solid fa-signs-post"></i>
                            </div>
                            <h3 className="mb-4">Address</h3>
                            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex ftco-animated">
                        <div className="align-self-stretch box p-4 text-center bg-light">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <h3 className="mb-4">Contact Number</h3>
                            <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex ftco-animated">
                        <div className="align-self-stretch box p-4 text-center bg-light">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <i class="fa-sharp fa-solid fa-paper-plane"></i>
                            </div>
                            <h3 className="mb-4">Email Address</h3>
                            <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex ftco-animated">
                        <div className="align-self-stretch box p-4 text-center bg-light">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <i class="fa-solid fa-earth-europe"></i>
                            </div>
                            <h3 className="mb-4">Website</h3>
                            <p><a href="#">yoursite.com</a></p>
                        </div>
                    </div> */}
                </div>
                {/* <div className="row no-gutters block-9">
                    <div className="col-md-6 order-md-last d-flex">
                        <form action="#" className="bg-light p-5 contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email">
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject">
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send Message" className="btn btn-secondary py-3 px-5">
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div id="map" className="bg-white"></div>
                    </div>
                </div> */}
            </div>
        </section>
    </>)
}
export default ContactUs;