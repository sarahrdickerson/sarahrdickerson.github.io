import Image from 'next/image'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='w-screen justify-center items-center flex flex-col'>
        <div className='h-screen w-full flex flex-row justify-center items-center p-10' id="home">
            <div className="mockup-code border w-3/5 shadow-md hidden lg:block md:block">
              <pre data-prefix="1"><code className='text-fuchsia-300'>class </code><code className='text-purple-300'>Sarah</code><code className='text-white'>:</code></pre>
              <pre data-prefix="2"><code className='text-fuchsia-300'>    def </code><code className='text-purple-300'>__init__</code><code className='text-white'>(</code><code className='text-rose-300'>self</code><code className='text-white'>):</code></pre>
              <pre data-prefix="3"><code className='text-white'>        </code><code className='text-rose-300'>self</code><code className='text-white'>.</code><code className='text-white'>name</code><code className='text-white'> = &quot;</code><code className='text-sky-300 hover:opacity-50 transition-all'>Sarah</code><code className='text-white'>&quot;</code></pre>
              <pre data-prefix="4"><code className='text-white'>        </code><code className='text-rose-300'>self</code><code className='text-white'>.</code><code className='text-white'>university</code><code className='text-white'> = &quot;</code><code className='text-sky-300 hover:opacity-50 transition-all'>The University of Texas at Austin</code><code className='text-white'>&quot;</code></pre>
              <pre data-prefix="5"><code className='text-white'>        </code><code className='text-rose-300'>self</code><code className='text-white'>.</code><code className='text-white'>major</code><code className='text-white'> = &quot;</code><code className='text-sky-300 hover:opacity-50 transition-all'>Electrical &amp; Computer Engineering</code><code className='text-white'>&quot;</code></pre>
              <pre data-prefix="6"><code className='text-white'>        </code><code className='text-rose-300'>self</code><code className='text-white'>.</code><code className='text-white'>concentration</code><code className='text-white'> = &quot;</code><code className='text-sky-300 hover:opacity-50 transition-all'>Software Engineering</code><code className='text-white'>&quot;</code></pre>
              <pre data-prefix="7"><code className='text-white'>        </code><code className='text-rose-300'>self</code><code className='text-white'>.</code><code className='text-white'>graduation</code><code className='text-white'> = &quot;</code><code className='text-sky-300 hover:opacity-50 transition-all'>May 2024</code><code className='text-white'>&quot;</code></pre>
              <pre data-prefix="8"><code></code></pre>
              <pre data-prefix="9"><code className='text-fuchsia-300'>    def </code><code className='text-purple-300'>get_resume</code><code className='text-white'>(</code><code className='text-white'>):</code></pre>
              <pre data-prefix="10"><code className='text-white'>        </code><code className='text-white'>return </code><code className='text-teal-300 underline hover:opacity-50 transition-all'><a href="Dickerson_Sarah_Resume.pdf" target='_blank'>Dickerson_Sarah_Resume</a></code></pre>
              <pre data-prefix="11"><code></code></pre>
              <pre data-prefix="12"><code className='text-fuchsia-300'>    def </code><code className='text-purple-300'>get_email</code><code className='text-white'>(</code><code className='text-white'>):</code></pre>
              <pre data-prefix="10"><code className='text-white'>        </code><code className='text-white'>return </code><code className='text-teal-300 hover:opacity-50 transition-all'>sarahrdickerson@gmail.com</code></pre>
            </div>
            <div className='p-5 justify-center items-center place-items-center text-center flex flex-col gap-2 lg:gap-1 w-2/5'>
              <h1 className='text-3xl font-semibold'>sarah dickerson</h1>
              <h2 className='text-xl font-semibold text-gray-600/75'>electrical & computer engineering @ ut austin</h2>
              <div className='flex flex-row justify-center items-center'>
                <a href="
                  https://www.linkedin.com/in/srdickerson/
                " target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className='text-lg m-2 text-gray-600/75 hover:opacity-50 transition-all' />
                </a>
                <a href="
                  https://www.github.com/sarahrdickerson
                  " target="_blank" rel="noopener noreferrer">
                  <FaGithub className='text-lg m-2 text-gray-600/75 hover:opacity-50 transition-all' />
                </a>
              </div>
            </div>
        </div>

        {/* EXPERIENCE */}
        <div className='min-h-screen w-full flex flex-col justify-center items-center p-10 pt-[100px] gap-5' id="experience">
          <h1 className='text-2xl font-semibold'>Experience</h1>

          {/* experience grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>

            {/* silicon labs */}
            <div className="card min-w-96 bg-base-100 shadow-xl flex-row">
              <figure className="px-5 pt-10 pb-10">
                <a href='https://www.silabs.com' target='_blank'><Image src="silabs.png" alt="silicon labs" className="rounded-xl" width={400} height={400}/></a>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Software Engineer Intern</h2>
                <h3 className='text-lg'>Silicon Labs</h3>
                <p className='italic text-gray-400'>June 2023 - August 2023</p>
                <ul>
                  <li className='flex flex-row gap-1 pb-2'>&#x2022; <p>Boosted code coverage on 4 C++ projects from 21.5% to 81.5% by developing and expanding unit tests, significantly enhancing overall code quality and unit test effectiveness.</p></li>
                  <li className='flex flex-row gap-1'>&#x2022; <p>Resolved bug and feature tickets for Java code, driving continuous improvement and maintenance of internal company software.</p></li>
                </ul>
              </div>
            </div> {/* end silicon labs */}

            {/* aristocrat */}
            <div className="card min-w-96 bg-base-100 shadow-xl flex-row">
              <figure className="px-5 pt-10 pb-10">
                <a href='https://www.aristocrat.com' target='_blank'><Image src="aristocrat.png" alt="aristocrat" className="rounded-xl" width={400} height={400}/></a>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Software Engineer Intern</h2>
                <h3 className='text-lg'>Aristocrat Technologies, Inc.</h3>
                <p className='italic text-gray-400'>September 2022 - April 2023</p>
                <ul>
                  <li className='flex flex-row gap-1 pb-2'>&#x2022; <p>Developed an Angular Proof of Concept loyalty app, facilitating seamless NFC communication from mobile wallet passes to electronic gambling machines, elevating user experience and connectivity.</p></li>
                  <li className='flex flex-row gap-1 pb-2'>&#x2022; <p>Demonstrated the apps capabilities with sample wallet passes, showcasing its potential to executives</p></li>
                  <li className='flex flex-row gap-1'>&#x2022; <p>Automated the generation of wallet passes using Python scripts, enabling integration into the loyalty app.</p></li>
                </ul>
              </div>
            </div> {/* end aristocrat */}

            {/* ut austin */}
            <div className="card min-w-96 bg-base-100 shadow-xl flex-row">
              <figure className="px-5 pt-10 pb-10">
                <a href='https://cockrell.utexas.edu' target='_blank'><Image src="ut.png" alt="aristocrat" className="rounded-xl" width={400} height={400}/></a>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Undergraduate Teaching Assistant</h2>
                <h3 className='text-lg'>The University of Texas at Austin</h3>
                <p className='italic text-gray-400'>January 2022 - April 2023</p>
                <p className='italic text-gray-400'>ECE312 / ECE312H Software Implementation and Design I</p>
                <ul>
                  <li className='flex flex-row gap-1 pb-2'>&#x2022; <p>Facilitated weekly recitation sessions for 15-20 students on C/C++ topics, data structures, algorithms, and more, resulting in heightened comprehension and academic success within my section.</p></li>
                  <li className='flex flex-row gap-1 pb-2'>&#x2022; <p>Conducted regular office hours for student support, concept clarification, and exam review.</p></li>
                </ul>
              </div>
            </div> {/* end ut austin */}

            {/* poly */}
            <div className="card min-w-96 bg-base-100 shadow-xl flex-row">
              <figure className="px-5 pt-10 pb-10">
                <a href='https://www.poly.com/us/en' target='_blank'><Image src="poly.png" alt="aristocrat" className="rounded-xl" width={400} height={400}/></a>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Software Engineer Intern</h2>
                <h3 className='text-lg'>Poly (acquired by HP in Nov 2022)</h3>
                <p className='italic text-gray-400'>June 2022 - August 2022</p>
                <ul>
                  <li className='flex flex-row gap-1 pb-2'>&#x2022; <p>Designed a Windows streaming application to optimize internal development and debugging processes for a newer IP video connection video mode, accelerating the implementation of this new feature.</p></li>
                  <li className='flex flex-row gap-1 pb-2'>&#x2022; <p>Assisted in weekly software quality assurance testing for new video conferencing modes.</p></li>
                </ul>
              </div>
            </div> {/* end poly */}

          </div> {/* end experience grid */}

          <h1 className='text-2xl font-semibold pt-20'>Student Organizations</h1>
          {/* org grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>

            {/* trel */}
            <div className="card min-w-96 bg-base-100 shadow-xl flex-row">
              <figure className="px-5 pt-10 pb-10">
                <a href='https://www.texasrocketlab.com/' target='_blank'><Image src="trel.png" alt="silicon labs" className="rounded-xl" width={400} height={400}/></a>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Software Engineer</h2>
                <h3 className='text-lg'>Texas Rocket Engineering Lab</h3>
                <p className='italic text-gray-400'>February 2021 - Present</p>
                <ul>
                  <li className='flex flex-row gap-1 pb-2'>&#x2022; <p>Enhanced monitoring of various rocket subsystems by developing fault handling mechanisms for the dashboard application using Python, Node.js, and MQTT to streamline fault detection and response.</p></li>
                  <li className='flex flex-row gap-1'>&#x2022; <p>Collaborate with a multidisciplinary team of 250 engineers to ensure integration of flight software with various rocket subsystems.</p></li>
                </ul>
              </div>
            </div> {/* end trel */}

            {/* guadaloop */}
            <div className="card min-w-96 bg-base-100 shadow-xl flex-row">
              <figure className="px-5 pt-10 pb-10">
                <a href='https://www.texasrocketlab.com/' target='_blank'><Image src="guadaloop.png" alt="silicon labs" className="rounded-xl" width={400} height={400}/></a>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Communications Software Engineer</h2>
                <h3 className='text-lg'>Texas Guadaloop</h3>
                <p className='italic text-gray-400'>September 2022 - Present</p>
                <ul>
                  <li className='flex flex-row gap-1 pb-2'>&#x2022; <p>Researched and analyzed potential communication systems implementations and designs for a Hyperloop pod as part of a student organization, assessing compatibility with project requirements and objectives.</p></li>
                  <li className='flex flex-row gap-1'>&#x2022; <p>Collaborated with cross-functional team members to ensure alignment with project objectives and technical feasibility.</p></li>
                </ul>
              </div>
            </div> {/* end guadaloop */}

          </div> {/* end org grid */}
        </div>


        {/* EDUCATION */}
        

        {/* PROJECTS */}
        <div className='min-h-screen w-full flex flex-col justify-center items-center p-10 pt-[100px] gap-5' id="projects">
          <h1 className='text-2xl font-semibold'>Projects</h1>

          {/* project grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

            {/* calendar fusion */}
            <div className="card min-w-96 bg-base-100 shadow-xl max-w-[488px]">
              <figure><Image src="calendar.png" alt="calendar fusion" width={500} height={300}/></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Calendar Fusion
                </h2>
                <p>A dynamic web application with a robust group calendar system. Calendar Fusion seamlessly integrates everyone members various calendars into a single unified view, revolutionizing collaborative planning and event scheduling among friends. No more missed brunch plans buried in a group chat!</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline badge-primary">Next.js</div> 
                  <div className="badge badge-outline badge-secondary">React</div>
                  <div className="badge badge-outline badge-error">MongoDB</div>
                  <div className="badge badge-outline badge-error-content">Prisma</div>
                </div>
              </div>
            </div> {/* end calendar fusion */}

            {/* angular poc app */}
            <div className="card min-w-96 bg-base-100 shadow-xl max-w-[488px]">
              <figure><Image src="loyalty.png" alt="loyalty app" width={500} height={300} /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Cross Platform Loyalty Mobile App
                </h2>
                <p>Proof of Concept Loyalty Application to demonstrate potential use cases. Implemented NFC communication between generated Apple and Google mobile wallet passes and NFC readers embedded in physical electronic gambling machines.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-accent">Angular</div>
                  <div className="badge badge-outline badge-info">Python</div> 
                  <div className="badge badge-outline badge-error">Typescript</div>
                </div>
              </div>
            </div> {/* angular poc app */}

            {/* haas */}
            <div className="card min-w-96 bg-base-100 shadow-xl max-w-[488px]">
              <figure><Image src="haas.png" alt="haas website" width={500} height={300}/></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Hardware as a Service Website
                </h2>
                <p>User centric HaaS website for check in and out of hardware products and project management. Designed backend database models and API endpoints. Integrated frontend UI with APIs. Team based project for Software Engineering and Design Lab.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-info">Python</div> 
                  <div className="badge badge-outline badge-secondary">React</div>
                  <div className="badge badge-outline badge-error">MongoDB</div>
                  <div className="badge badge-outline badge-error-content">Flask</div>
                </div>
              </div>
            </div> {/* end haas */}

            {/* android weather app */}
            <div className="card min-w-96 bg-base-100 shadow-xl max-w-[488px]">
              <figure><Image src="weather.png" alt="android weather app" width={500} height={300}/></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Android Weather App
                </h2>
                <p>Weather App built using Android Studio. Interact with weather api endpoints to fetch real-time data and display in a cohesive, structured manner.</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline badge-primary">Java</div>
                </div>
              </div>
            </div> {/* end android weather app */}

            {/* fruit masters */}
            <div className="card min-w-96 bg-base-100 shadow-xl max-w-[488px]">
              <figure><Image src="fruit masters.png" alt="fruit masters" width={500} height={300}/></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Fruit Masters
                </h2>
                <p>80s style arcade game built for my Introduction to Embedded Systems class. Based on Fruit Ninja.</p>
                <a className='btn-link text-[#E87D8B] no-underline hover:underline' href="https://youtu.be/R79hIcKxW3E" target="_blank">Project Video</a>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-warning">C++</div>
                  <div className="badge badge-outline">ARM Cortex-M</div>
                </div>
              </div>
            </div> {/* end fruit masters */}

            {/* personal website */}
            <div className="card min-w-96 bg-base-100 shadow-xl max-w-[488px]">
              <figure><Image src="website.png" alt="website" width={500} height={300}/></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Personal Website
                </h2>
                <p>I coded this website using Next.js and deployed it through Github pages! I also designed the icons in Canva.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline badge-primary">Next.js</div> 
                  <div className="badge badge-outline badge-secondary">React</div>
                </div>
              </div>
            </div> {/* end personal website */}

          </div> {/* end project grid */}
        </div>
        
        {/* <div className='h-screen w-full flex flex-col justify-center items-center p-10' id="education">
          <h1>education</h1>
        </div> */}


      <div id="contact" className='w-screen  h-16 items-center  border-t-[1px]'>
        <div className='flex flex-row justify-between pl-4 pr-4 sm:pl-8 sm:pr-8 md:pl-16 md:pr-16 lg:pl-52 lg:pr-52'>
          <a className='btn btn-link no-underline text-black font-normal' href='https://www.linkedin.com/in/srdickerson' target='_blank'>LinkedIn</a>
          <a className='btn btn-link no-underline text-black font-normal' href='https://www.github.com/sarahrdickerson' target='_blank'>GitHub</a>
          <a className='btn btn-link no-underline text-black font-normal' href='Dickerson_Sarah_Resume.pdf' target='_blank'>Resume</a>
          <a className='btn btn-link no-underline text-black font-normal' href='mailto:sarahrdickerson@gmail.com' target='_blank'>Email</a>
        </div>
        
      </div>
    </div>
  )
}
