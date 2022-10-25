import React, { useEffect, useState } from 'react';
import { Link,} from 'react-router-dom';

const SingleCourse = () => {
    const [course,setCourse]=useState([])
    
    useEffect(()=>{
        fetch('https://coures-express-server-naimcoder.vercel.app/course')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])

    return (
        <div className=''>
           {
            course.map(course=><p className='text-2xl py-2  font-medium' key={course.id}>
                <Link to={`/allcourse/${course.id}`}>{course.name}</Link></p>)
           }
        </div>
    );
};

export default SingleCourse;