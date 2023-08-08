import React from 'react'

const ProjectCard = ({ title, languages, description, achievements }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">Languages: {languages.join(', ')}</p>
      <p className="text-base">{description}</p>
      <h3 className="text-xl font-semibold mt-4">Achievements/Results:</h3>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index} className="list-disc list-inside">{achievement}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectCard
