import React from "react";
import Image from "../../../Images/dept-1.jpg";
const Content1 =[
    {
        id:1,
        name:"Neurology",
        desc:"Far far away, behind the word mountains"
    },
    {
        id:2,
        name:"Surgical",
        desc:"Far far away, behind the word mountains"
    },
    {
        id:3,
        name:"Dental",
        desc:"Far far away, behind the word mountains"
    }]
    const Content2=[
    {
        id:1,
        name:"Opthalmology",
        desc:"Far far away, behind the word mountains"
    },
    {
        id:2,
        name:"Cardiology",
        desc:"Far far away, behind the word mountains"
    },
    {
        id:3,
        name:"Traumatology",
        desc:"Far far away, behind the word mountains"
    }]
    const Content3=[
    {
        id:1,
        name:"Nuclear",
        desc:"Far far away, behind the word mountains"
    },
    {
        id:2,
        name:"X-ray",
        desc:"Far far away, behind the word mountains"
    },
    {
        id:3,
        name:"Cardiology",
        desc:"Far far away, behind the word mountains"
    }
    
]
const Card = (props) => {
    return (<>
        <div className="department-wrap p-4 ftco-animated fadeInUp">
            <div className="text p-2 text-center">
                <div className="icon">
                    <i class="fa-solid fa-stethoscope"></i>
                </div>
                <h3><a href="#">{props.name}</a></h3>
                <p>{props.desc}</p>
            </div>
        </div>
    </>)
}
const Categories = () => {
    return (<>
        <section className="ftco-section ftco-no-pt ftco-no-pb" id="department-section">
            <div className="container-fluid px-0">
                <div className="row no-gutters">
                    <div className="col-md-4 d-flex">
                        <div className="img img-dept align-self-stretch" style={{ backgroundImage: `url(${Image})` }}></div>
                    </div>
                    <div className="col-md-8">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            {Content1.map((content,index)=>{
                                return(<>
                                <Card key={index}
                                   name={content.name}
                                   desc={content.desc}/>
                                </>)
                            })}</div>
                            <div className="col-md-4">
                            {Content2.map((content,index)=>{
                                return(<>
                                <Card key={index}
                                   name={content.name}
                                   desc={content.desc}/>
                                </>)
                            })}</div><div className="col-md-4">
                            {Content3.map((content,index)=>{
                                return(<>
                                <Card key={index}
                                   name={content.name}
                                   desc={content.desc}/>
                                </>)
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default Categories;