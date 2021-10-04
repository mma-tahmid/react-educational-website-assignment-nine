import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleHome from '../SingleHome/SingleHome';
import "./Home.css"

const Home = () => {

    const [homes, setHomes] = useState([])

    useEffect(() => {

        fetch("./Home.json")
            .then(res => res.json())
            .then(data => setHomes(data))

    }, [])


    return (
        <div>

            <h3 className="m-3"> Welcome to CourseGuro !!</h3>

            <section className=" fixed-part-for-home" >

                <div>
                    <img src=" https://image.shutterstock.com/image-vector/education-composition-students-learning-studying-600w-1891132315.jpg" alt="" />

                </div>

                <div className='p-5 m-4'>
                    <h3> This is one of the best platform for Learning. visit the services Menu & Enroll the course </h3>

                </div>


            </section>



            <div className=" full-home-container">

                {

                    homes.map(singlehome => <SingleHome

                        key={singlehome._id}

                        SingleHome={singlehome}


                    >

                    </SingleHome>)
                }


            </div>



        </div>
    );
};

export default Home;