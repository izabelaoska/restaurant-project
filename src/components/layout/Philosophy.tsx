import React from "react"

export const Philosophy = () => {
  return (
    <div className="container pb-5 mx-auto mt-10 mb-10 border">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] py-14 gap-14">
        <div className="container relative top-0 bottom-0 flex flex-col">
          <img
            className="w-[330px] h-[495px] absolute top-16 "
            src={
              "https://patiotime.loftocean.com/wp-content/uploads/2022/03/klara-kulikova-gXmCinze3k8-unsplash-370x555.jpg"
            }
          />
          <img
            className="object-cover w-[420px] h-[550px] absolute bottom-4 left-28"
            src={
              "https://patiotime.loftocean.com/wp-content/uploads/2022/03/chef-1-550x687.jpg"
            }
          />
        </div>
        <div className="flex flex-col">
          <h2 className="border">text</h2>
        </div>
      </div>
    </div>
  )
}
