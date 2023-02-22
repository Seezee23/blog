import { React } from 'react';



export default function ItalyPage ({ travels }) {
    return (
      <>
        {
                  travels && travels.length
                    ? (
                      <main>
                        {
                              travels
                                .filter(travel => travel.category === '2')
                                .map((travel) => {
                                  return (
                                    <article key={travel._id} className='city'>
                                      <h1>{travel.title}</h1>
                                      <img src={travel.image} alt='' />
                                      <p>{travel.attractions}</p>  
                                    </article>
                                  )
                                })
                          }
                      </main>
                      )
                    : <h1>Italy</h1>
              }
      </>
    )
  }