import { React } from 'react';


export default function USAPage ({ travels }) {
  return (
    <>
      {
                travels
                  ? (
                    <main>
                      {
                            travels
                              .filter(travel => travel.category === '3')
                              .map((travel) => {
                                return (
                                  <article className='city' key={travel._id}>
                                    <h1>{travel.title}</h1>
                                    <img src={travel.image} alt='' />
                                    <p>{travel.attractions}</p>
                                  </article>
                                )
                              })
                        }
                    </main>
                    )
                  : <h1>Error</h1>
            }
    </>
  )
}