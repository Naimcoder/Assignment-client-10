import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CouresCard from '../CouresCard.js/CouresCard';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {

const allcourses= useLoaderData()

    return (
     <div className='flex  justify-between mx-auto container'>
         <SingleCourse></SingleCourse>
          <div className='grid lg:grid-cols-3 gap-5 lg:ml-14 lg:py-10'>
             {allcourses.map(courses=><CouresCard key={courses.id} courses={courses}></CouresCard>)}
          </div>
     </div>

    );
};
export default Courses;