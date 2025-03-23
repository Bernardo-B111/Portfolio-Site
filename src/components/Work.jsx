/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/project-1.png',
    title: 'Bellabeat Case Study',
    tags: ['Data Analysis', 'Marketing', 'Health'],
    projectLink: 'https://github.com/Bernardo-B111/PortfolioProjects/blob/main/case-study-on-bellabeat%20(1).ipynb'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My Portfolio Projects
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work