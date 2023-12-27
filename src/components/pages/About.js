import React, { useState } from 'react'

const About = () => {
  const [isBooks, setIsBooks] = useState(false);
  const [isMovies, setIsMovies] = useState(false);
  const [isFrag, setIsFrag] = useState(false);

  return (
    <div className='px-10'>
      <h1 className='text-xl'>About Me</h1>
      <div className='flex justify-around px-64'>
        <div>
          <h1 onClick={()=> { 
            setIsBooks(!isBooks);
            setIsMovies(false);
            setIsFrag(false);
          }}>Books</h1>
        </div>
        <div>Movies</div>
        <div>Fragrances</div>
      </div>
      <div className='px-64'>
        {isBooks && (
            <div>
              <div>these are my favorite books</div>

              <div className='flex'>
                <div>
                  <li>
                    <a href="https://www.goodreads.com/book/show/60018643-how-to-read-now" className=' hover:underline'>How to Read Now</a>
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/3711.White_Teeth" className=' hover:underline'>White Teeth</a>
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/50403471-what-tech-calls-thinking" className='hover:underline'>What Tech Calls Thinking</a>
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/242472.The_Black_Swan" className='hover:underline'>The Black Swan: The Impact of the Highly Improbable</a>
                  </li>
                </div>

                <div>
                  <div>Elaine Castillo</div>
                  <div>Zadie Smith</div>
                  <div>What Tech Calls Thinking</div>
                  <div>Nassim Nicholas Taleb</div>
                </div>
              </div>

            </div>
          )}
        </div>
    </div>
  )
}

export default About
