import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"



export default function TravelsPage (props){
    const [travels, setTravels] = useState([])
    const [foundTravel, setFoundTravel] = useState(null)
    const [newTravel, setNewTravel] = useState({
        title: '',
        image: '',
        category: '',
        attractions: ''
    })
    // index
    const getTravels = async () => {
        try {
            const response = await fetch('/api/travels')
            const data = await response.json()
            setTravels(data)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteTravel = async (id) => {
        try {
            const response = await fetch(`/api/travels/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundTravel(data)
        } catch (error) {
            console.error(error)
        }
    }
    // update
    const updateTravel = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/travels/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...updatedData})
            })
            const data = await response.json()
            setFoundTravel(data)
        } catch (error) {
            console.error(error)
        }
    }
    // create
        const createTravel = async () => {
            try {
                const response = await fetch(`/api/travels`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...newTravel})
                })
                const data = await response.json()
                setFoundTravel(data)
                setNewTravel({
                    title: '',
                    image: '',
                    category: '',
                    attractions: ''
                })
            } catch (error) {
                console.error(error)
            }
        }

    const handleChange = (evt) => {
        setNewTravel({...newTravel, [evt.target.name]: evt.target.value})
    }

    useEffect(()=> {
        getTravels()
    }, [foundTravel])

    return (
        <>
            {
                travels && travels.length ? (<ul>
                    {
                        travels.map((travel) => {
                            return (
                                <li>
                                    {travel.title} is {travel.image} {travel.attractions}
                                    <br/><button onClick={() => deleteTravel(travel._id)}>Delete This Travel</button>
                                </li>
                            )
                        })
                    }
                </ul>): <h1>No Travels Yet Add One Below</h1>
            }
            {'Title '}<input value={newTravel.title} onChange={handleChange} name="title"></input><br/>
            {'Image '}<input value={newTravel.image} onChange={handleChange} name="image"></input><br/>
            {'Category '}<input value={newTravel.category} onChange={handleChange} name="category"></input><br/>
            {'Attractions '}<input value={newTravel.attractions} onChange={handleChange} name="attractions"></input><br/>
            <button onClick={() => createTravel() }>Create A New Travel</button>
            {
                foundTravel? <div>
                    <h1>{foundTravel.title}</h1>
                    <h2>{foundTravel.image}</h2>
                    <h3>{foundTravel.category}</h3>
                    <h4>{foundTravel.attractions}</h4>
                </div>: <>No Travel in Found Travel State</>
            }
        </>
    )
}