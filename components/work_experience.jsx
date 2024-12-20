import experienceData from "@/data/work_experience";

export default function Experience() {
  return (
    <div
      className="min-h-screen bg-[#EDECED] text-[#131411]"
      id="experience"
    >
      {/* Section Title */}
      <div className="container grid md:grid-cols-3 gap-8 items-center mb-4">
        <div className="md:col-start-2 md:col-span-2">
          <h2 className="inline-block bg-[#BBB1D275] text-2xl py-2 px-4 md:-ml-4 mb-4 font-semibold text-[#354259]">
            work experience
          </h2>
        </div>
      </div>

      {/* Experience Items */}
      <div className="relative space-y-16 pb-5">
        {experienceData.map((job, index) => (
          <div
            key={index}
            className="container grid md:grid-cols-3 gap-4 md:gap-8"
          >
            {/* Dates */}
            <div className="pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
              {job.dates}
            </div>

            {/* Job Details */}
            <div className="pl-12 md:col-span-2 relative">
              <div className="rounded-full bg-[#EDECED] border-2 border-gray-500 w-5 h-5 absolute mt-1.5 -ml-12"></div>
              <h3 className="text-xl font-bold text-[#7F7895]">
                {job.title}
                <a
                  className="italic font-light hover:text-[#BBB1D2] transition duration-300 ease-in-out"
                  href={job.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  @ {job.company}
                </a>
              </h3>
              <p className="text-sm text-gray-500 pb-4">
                {job.location} | {job.type}
              </p>

              {/* Bullet Points */}
              <div className="pr-5 md:pr-20">
                <ul className="list-disc">
                  {job.bulletPoints.map((point, idx) => (
                    <li key={idx} className="pb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
