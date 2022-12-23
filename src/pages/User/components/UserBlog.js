import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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
const Option = {
    autoplay: true,
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1024: {
            items: 3,
        }
    },
};
const Card = (props)=>{
    return(<>
    <div className=" ftco-animated">
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
const UserBlog = () => {
    return (<>
        <section className="ftco-sections bg-light" id="blog-section">
            <div className="container px-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-10 heading-section text-center ftco-animated">
                        <h2 className="mb-4">Advertisement</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="row d-flex">
                <OwlCarousel className='ftco-owl' loop margin={10}  {...Option}  >
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
                        </OwlCarousel>
                         </div>
            </div>
        </section>
    </>)
}
export default UserBlog;