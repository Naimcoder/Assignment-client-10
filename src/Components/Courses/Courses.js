import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CouresCard from '../CoursesPage/CouresCard.js/CouresCard';
import SingleCourse from '../CoursesPage/SingleCourse/SingleCourse';

const Courses = () => {

const allcourses= useLoaderData()

    return (
     <div className='lg:flex  justify-between mx-auto container'>
        <div>
              <SingleCourse></SingleCourse>
        </div>
          <div className='grid lg:grid-cols-3 gap-5 lg:ml-14 lg:py-10'>
             {allcourses.map(courses=><CouresCard key={courses.id} courses={courses}></CouresCard>)}
          </div>
     </div>

    );
};
export default Courses;