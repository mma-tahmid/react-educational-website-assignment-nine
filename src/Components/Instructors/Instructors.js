import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Instructor from '../Instructor/Instructor';
import "./Instructors.css"

const Instructors = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {

        fetch("./Instructors.json")
            .then(res => res.json())
            .then(data => setInstructors(data))

    }, [])

    return (
        <div>
            <h3> Course Instructor of CSE Department </h3>



            <div className=" full-instructor-container">

                {

                    instructors.map(instructor => <Instructor

                        key={instructor._id}

                        instructor={instructor}


                    >

                    </Instructor>)
                }

            </div>

        </div>
    );
};

export default Instructors;