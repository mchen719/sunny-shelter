import { useState, useEffect } from 'react'
import CreateForm from '../../components/CreateForm/CreateForm'
import Animals from '../../components/Animals/Animals'

export default function HomePage (props) {
    const [animals, setAnimals] = useState([])
    const [showCreate, setShowCreate] = useState(false)

    // Animals
    useEffect(() => {

        const fetchAnimals = async () => {
            try {
                const data = await props.getAllAnimals()
                setAnimals(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchAnimals()
    }, []) ///if dependency array is empty it will only run once on load 

    // Checking the token & user in localStorage
    useEffect(() => {
        if(localStorage.token && !props.token){
            props.setToken(localStorage.getItem('token'))
            setShowCreate(true) 
        }
        if(localStorage.token && localStorage.user && !props.user){
            props.setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, []) ///if dependency array is empty it will only run once on load 

    return(
        <div>
            <h1>Welcome to Sunny Animal Shelter!</h1>
            { showCreate? <CreateForm createAnimal={props.createAnimal} user={props.user} token={props.token}/> : <></> }
            { animals.length? <Animals animals={animals}/> : 'Sorry but not sorry, all animals have found a happy home!' }
        </div>
    )
}