import Image from 'next/image'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='w-screen justify-center items-center flex flex-col'>
        <div className='h-screen w-full flex flex-row justify-center items-center p-10' id="home">
            <div className="mockup-code border w-3/5 shadow-md hidden lg:block md:block">
              <pre data-prefix="1"><code className='text-fuchsia-300'>class </code><code className='text-purple-300'>Sarah</code><code className='text-white'>:</code></pre>
              <pre data-prefix="2"><code className='text-fuchsia-300'>    def </code><code className='text-purple-300'>__init__</code><code className='text-white'>(</code><code className='text-rose-300'>self</code><code className='text-white'>):</code></pre>
              <pre data-prefix="3"><code className='text-white'>        </code><code className='text-rose-300'>self</code><code className='text-white'>.</code><code className='text-white'>name</code><code className='text-white'> = "</code><code className='text-sky-300'>Sarah</code><code className='text-white'>"</code></pre>
              <pre data-prefix="4"><code className='text-white'>        </code><code className='text-rose-300'>self</code><code className='text-white'>.</code><code className='text-white'>university</code><code className='text-white'> = "</code><code className='text-sky-300'>The University of Texas at Austin</code><code className='text-white'>"</code></pre>
              <pre data-prefix="5"><code className='text-white'>        </code><code className='text-rose-300'>self</code><code className='text-white'>.</code><code className='text-white'>major</code><code className='text-white'> = "</code><code className='text-sky-300'>Electrical & Computer Engineering</code><code className='text-white'>"</code></pre>
              <pre data-prefix="6"><code className='text-white'>        </code><code className='text-rose-300'>self</code><code className='text-white'>.</code><code className='text-white'>concentration</code><code className='text-white'> = "</code><code className='text-sky-300'>Software Engineering</code><code className='text-white'>"</code></pre>
              <pre data-prefix="7"><code className='text-white'>        </code><code className='text-rose-300'>self</code><code className='text-white'>.</code><code className='text-white'>graduation</code><code className='text-white'> = "</code><code className='text-sky-300'>May 2024</code><code className='text-white'>"</code></pre>
            </div>
            <div className='p-5 justify-center items-center place-items-center text-center flex flex-col w-2/5'>
              <h1 className='text-3xl font-semibold'>sarah dickerson</h1>
              <h2 className='text-xl font-semibold text-gray-600/75'>electrical & computer engineering @ ut austin</h2>
              <div className='flex flex-row justify-center items-center'>
                <a href="
                  https://www.linkedin.com/in/srdickerson/
                " target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className='text-lg m-2 text-gray-600/75' />
                </a>
                <a href="
                  https://www.github.com/sarahrdickerson
                  " target="_blank" rel="noopener noreferrer">
                  <FaGithub className='text-lg m-2 text-gray-600/75' />
                </a>
              </div>
            </div>
        </div>
      
    </div>
  )
}
