"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
   const featuredWebinars = [
      {
         title: "Understanding Music Theory",
         description:
            "Dive deep into the fundamentals of music theory and enhance your musical skills.",
         slug: "understanding-music-theory",
         isFeatured: true,
      },
      {
         title: "The Art of Songwriting",
         description:
            "Learn the craft of songwriting from experienced musicians and songwriters.",
         slug: "the-art-of-songwriting",
         isFeatured: true,
      },
      {
         title: "Mastering Your Instrument",
         description:
            "Advanced techniques to master your musical instrument of choice.",
         slug: "mastering-your-instrument",
         isFeatured: true,
      },
      {
         title: "Music Production Essentials",
         description:
            "Get started with music production with this comprehensive overview.",
         slug: "music-production-essentials",
         isFeatured: true,
      },
      // Added two more webinars
      {
         title: "Live Performance Techniques",
         description:
            "Enhance your live performance skills with expert tips and strategies.",
         slug: "live-performance-techniques",
         isFeatured: true,
      },
      {
         title: "Digital Music Marketing",
         description:
            "Learn how to promote your music effectively in the digital age.",
         slug: "digital-music-marketing",
         isFeatured: true,
      },
   ];

   return (
      <div className="p-12 bg-gray-900">
         <div className="max-w-7xl px-4 sm:px-6 mx-auto">
            <div className="text-center">
               <h2 className="text-base text-green-600 font-semibold uppercase tracking-wide">
                  Featured Webinars
               </h2>
               <p className="mt-2 text-3xl tracking-tight text-white sm:text-4xl font-extrabold leading-8">
                  Enhance your Musical Journey
               </p>
            </div>
            <div className="mt-10">
               <HoverEffect
                  items={featuredWebinars.map((webinar) => ({
                     title: webinar.title,
                     description: webinar.description,
                     link: webinar.slug,
                  }))}
               />
            </div>
            <div className="mt-10 text-center">
               <Link
                  href={"/"}
                  className="text-black px-4 py-3 bg-white rounded-md font-normal text-lg hover:bg-gray-200 transition duration-200 border border-neutral-300"
               >
                  View All Webinars
               </Link>
            </div>
         </div>
      </div>
   );
}

export default UpcomingWebinars;
