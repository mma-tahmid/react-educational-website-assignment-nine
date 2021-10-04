import React from 'react';
import "./About.css"
const About = () => {
    return (
        <div>

            <section className='d-flex about-heading'>
                <div>

                    <img className='img-fluid' src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/04/64/715624af3fe5286.jpg" alt="" />

                </div>

                <div className=' bg-secondary '>

                    <h5 className='p-4'>Our dynamic team serves the college community by providing training, research, and  flexible support services. Through creative problem solving, collaboration, and reflection we provide an environment for growth in teaching and learning in an effort to best support our students, faculty and staff. </h5>

                </div>

            </section>


            <section className="m-5">

                <h1 className="p-5 bg-secondary"  > Owner & Co-owner of this platform </h1>

                <div className='d-flex p-4' >

                    <div>

                        <div>
                            <img className="img-fluid w-50" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=712&q=80 " alt="" />
                        </div>

                        <div>
                            <h5> Name: John's karim </h5>
                            <h6> Owner </h6>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img className="img-fluid w-50" src="https://images.unsplash.com/photo-1599256621730-535171e28e50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=671&q=80 " alt="" />
                        </div>

                        <div>
                            <h5> Name: Rahim Uddin </h5>
                            <h6> Co-owner </h6>
                        </div>

                    </div>

                </div>

            </section >


        </div >
    );
};

export default About;