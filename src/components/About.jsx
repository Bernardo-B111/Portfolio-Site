/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Project done',
    number: 1
  },
  {
    label: 'Years of experience',
    number: 3
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          Welcome! I'm Bernardo, a developing data analyst with a passion for uncovering insights and transforming raw data into meaningful stories. I thrive on problem-solving and continuous learning, always looking for new ways to improve my analytical skills. With a blend of creativity and technical expertise, I translate raw data into actionable insights that drive informed decision-making.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About