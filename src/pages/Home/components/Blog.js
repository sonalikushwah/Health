import React from "react";
import Image1 from "../../../Images/image_1.jpg";
import Image2 from "../../../Images/image_2.jpg";
import Image3 from "../../../Images/image_3.jpg";
import Image4 from "../../../Images/image_4.jpg";
import Image5 from "../../../Images/image_5.jpg";
import Image6 from "../../../Images/image_6.jpg";
const Contents = [
    {
        id:1,
        image:Image1,
        date:"June 9, 2019",
        name:"ADMIN",
        message:"3",
        heading:"Scary Thing That You Don’t Get Enough Sleep",
        para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        id:2,
        image:Image2,
        date:"June 9, 2019",
        name:"ADMIN",
        message:"3",
        heading:"Scary Thing That You Don’t Get Enough Sleep",
        para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        id:3,
        image:Image3,
        date:"June 9, 2019",
        name:"ADMIN",
        message:"3",
        heading:"Scary Thing That You Don’t Get Enough Sleep",
        para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        id:4,
        image:Image4,
        date:"June 9, 2019",
        name:"ADMIN",
        message:"3",
        heading:"Scary Thing That You Don’t Get Enough Sleep",
        para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        id:5,
        image:Image5,
        date:"June 9, 2019",
        name:"ADMIN",
        message:"3",
        heading:"Scary Thing That You Don’t Get Enough Sleep",
        para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        id:6,
        image:Image6,
        date:"June 9, 2019",
        name:"ADMIN",
        message:"3",
        heading:"Scary Thing That You Don’t Get Enough Sleep",
        para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
]
const Card = (props)=>{
    return(<>
    <div className="col-md-4 ftco-animated">
                        <div className="blog-entry">
                            <a href="blog-single.html" className="block-20" style={{backgroundImage: `url(${props.image})`}}>
                            </a>
                            <div className="text d-block">
                                <div className="meta mb-3">
                                    <div><a href="#">{props.date}</a></div>
                                    <div><a href="#">{props.name}</a></div>
                                    <div><a href="#" className="meta-chat"><i class="fa-solid fa-message-lines"></i>{props.message}</a></div>
                                </div>
                                <h3 className="heading"><a href="#">{props.heading}</a></h3>
                                <p>{props.para}</p>
                                <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                            </div>
                        </div>
                    </div>
    </>)
}
const Blog = () => {
    return (<>
        <section className="ftco-section bg-light" id="blog-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-5">
                    <div className="col-md-10 heading-section text-center ftco-animated">
                        <h2 className="mb-4">Gets Every Single Updates Here</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
                <div className="row d-flex">
                    {Contents.map((content)=>{
                        return(<>
                        <Card key={content.id}
                        image={content.image}
                        name={content.name}
                        date={content.date}
                        message={content.message}
                        heading={content.heading}
                        para={content.para}/>
                        </>)
                    })}
                    {/* <div className="col-md-4 ftco-animate">
                        <div className="blog-entry">
                            <a href="blog-single.html" className="block-20" style="background-image: url('images/image_1.jpg');">
                            </a>
                            <div className="text d-block">
                                <div className="meta mb-3">
                                    <div><a href="#">June 9, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading"><a href="#">Scary Thing That You Don’t Get Enough Sleep</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ftco-animate">
                        <div className="blog-entry">
                            <a href="blog-single.html" className="block-20" style="background-image: url('images/image_2.jpg');">
                            </a>
                            <div className="text d-block">
                                <div className="meta mb-3">
                                    <div><a href="#">June 9, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading"><a href="#">Scary Thing That You Don’t Get Enough Sleep</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ftco-animate">
                        <div className="blog-entry">
                            <a href="blog-single.html" className="block-20" style="background-image: url('images/image_3.jpg');">
                            </a>
                            <div className="text d-block">
                                <div className="meta mb-3">
                                    <div><a href="#">June 9, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading"><a href="#">Scary Thing That You Don’t Get Enough Sleep</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ftco-animate">
                        <div className="blog-entry">
                            <a href="blog-single.html" className="block-20" style="background-image: url('images/image_4.jpg');">
                            </a>
                            <div className="text d-block">
                                <div className="meta mb-3">
                                    <div><a href="#">June 9, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading"><a href="#">Scary Thing That You Don’t Get Enough Sleep</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ftco-animate">
                        <div className="blog-entry">
                            <a href="blog-single.html" className="block-20" style="background-image: url('images/image_5.jpg');">
                            </a>
                            <div className="text d-block">
                                <div className="meta mb-3">
                                    <div><a href="#">June 9, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading"><a href="#">Scary Thing That You Don’t Get Enough Sleep</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ftco-animate">
                        <div className="blog-entry">
                            <a href="blog-single.html" className="block-20" style="background-image: url('images/image_6.jpg');">
                            </a>
                            <div className="text d-block">
                                <div className="meta mb-3">
                                    <div><a href="#">June 9, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading"><a href="#">Scary Thing That You Don’t Get Enough Sleep</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    </>)
}
export default Blog;