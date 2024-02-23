"use client";
import React from "react";
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
   id: number;
   title: string;
   slug: string;
   description: string;
   price: number;
   instructor: string;
   isFeatured: boolean;
}

function FeaturedCourses() {
   const featuredCourses = courseData.courses.filter(
      (course: Course) => course.isFeatured
   );
   return (
      <>
         <div className="py-12 px-8 bg-gray-900 w-full min-h-screen">
            <div>
               <div className="text-center">
                  <h2 className="text-base text-green-600 font-semibold uppercase tracking-wide">
                     Featured Courses
                  </h2>
                  <p className="mt-2 text-3xl tracking-tight text-white sm:text-4xl font-extrabold leading-8">
                     Learn with the Best
                  </p>
               </div>
            </div>
            <div className="mt-10">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                  {featuredCourses.map((course: Course) => (
                     <div className="flex justify-center" key={course.id}>
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                           <div className="p-4 sm:p-6 flex flex-col text-center items-center flex-grow">
                              <p className="text-lg sm:text-xl text-black m-2 dark:text-neutral-200">
                                 {course.title}
                              </p>
                              <p className="text-sm text-neutral-800 dark:text-neutral-400 flex-grow">
                                 {course.description}
                              </p>
                              <Link
                                 className="mt-2 font-semibold"
                                 href={`/courses/${course.slug}`}
                              >
                                 Learn More
                              </Link>
                           </div>
                        </BackgroundGradient>
                     </div>
                  ))}
               </div>
            </div>
            <div className="mt-20 text-center">
               <Link
                  href={"/courses"}
                  className="text-black px-4 py-3 bg-white rounded-md font-normal text-lg hover:bg-gray-200 transition duration-200 border border-neutral-300"
               >
                  View all Courses
               </Link>
            </div>
         </div>
      </>
   );
}

export default FeaturedCourses;
