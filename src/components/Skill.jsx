/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/RStudio.svg',
    label: 'RStudio',
    desc: 'Data Analysis'
  },
  {
    imgSrc: '/images/cloud-sql-svgrepo-com.svg',
    label: 'SQL Database',
    desc: 'Database Management'
  },
  {
    imgSrc: '/images/bigquery.svg',
    label: 'Google BigQuery',
    desc: 'Big Data Queries'
  },
  {
    imgSrc: '/images/Tableau.svg',
    label: 'Tableau',
    desc: 'Interactive Data Visualization'
  },
  {
    imgSrc: '/images/Excel.svg',
    label: 'Microsoft Excel',
    desc: 'Small Dataset Analysis'
  },
  {
    imgSrc: '/images/Sheets.svg',
    label: 'Google Sheets',
    desc: 'Collaborative Spreadsheets'
  },
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Essential Programs I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        These essential programs help me clean, analyze, and visualize complex datasets to uncover meaningful patterns and trends.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill