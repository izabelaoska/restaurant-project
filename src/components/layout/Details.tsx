import React from "react"

export const Details = () => {
  return (
    <div className="flex flex-col justify-start lg:flex-row text-md items-left lg:items-center lg:justify-between lg:text-lg details-container">
      <div>Silk St, Barbican, London EC2Y 8DS, UK</div>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:space-x-6">
        <div>+39-055-123456</div>
        <div>booking@patiotime.com</div>
      </div>
    </div>
  )
}
