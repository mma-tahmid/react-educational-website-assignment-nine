import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div>


            <section className="footer-part   ">


                <div className='d-flex bg-light'>

                    <div className="text-color">

                        <h4>Address: Banani, Dhaka </h4>
                        <h4> official website: webguro@gmail.com </h4>

                        <h4> Helpline: 01923849484348 </h4>

                        <p> (Available: 09:am  to 9.00pm) </p>


                    </div>


                    <div className='footer_image' >
                        <img className="img-fluid w-75" src="https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM=" alt="" />
                    </div>






                </div>

            </section>


        </div>
    );
};

export default Footer;