import React from "react"

export const Introsection = () => {
  return (
    <div className="introsection-container grid grid-cols-1 lg:grid-cols-2 gap-20 min-h-[600px]">
      <div className="flex flex-col items-start">
        <h2 className="mb-5 lg:text-xl text-[#DD5903] ">
          REFRESH YOUR TASTEBUDS
        </h2>
        <h1 className="pt-2 pb-2 mb-6 text-2xl lg:text-6xl introsection-main-title">
          Enjoy An Exceptional Journey Of Taste
        </h1>
        <p className="mb-8 text-sm text-left md:text-md md:text-justify lg:text-justify lg:text-lg">
          We see our customers as invited guests to a party,
          and we are the hosts. It’s our job every day to
          make every important aspect of the customer
          experience a little bit better.
        </p>
        <button className="px-7 py-2 mb-4 text-white  bg-[#DD5903] hover:scale-110 duration-300">
          Discover more
        </button>
        <img
          className="h-auto mt-auto"
          src={
            "https://patiotime.loftocean.com/wp-content/uploads/2022/03/davide-cantelli-jpkfc5_d-DI-unsplash-1536x1025.jpg"
          }
        />
      </div>
      <div>
        <img
          src={
            "https://patiotime.loftocean.com/wp-content/uploads/2022/03/img-10.jpg"
          }
        />
      </div>
    </div>
  )
}
