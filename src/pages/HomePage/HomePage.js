import { React } from 'react';

export default function HomePage ({ travels }) {
    return (
      <>
        {
                  travels && travels.length
                    ? (
                      <main>
                        {
                              travels
                                .filter(travel => travel.category === '0')
                                .map((travel) => {
                                  return (
                                    <article key={travel._id} className='city'>
                                      <h1>{travel.title}</h1>
                                      <img src={travel.image} alt='' />
                                      <p>{travel.attractions}</p>  
                                      <button className='home' onClick={() => { window.travel.href = travel.url }}>VIEW HOME</button>

                                    </article>
                                  )
                                })
                          }
                      </main>
                      )
                    : <h1>Home</h1>
              }
      </>
    )
  }