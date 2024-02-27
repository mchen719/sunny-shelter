import {useState} from 'react'


export default function CreateForm(props) {
    const [ formData, setFormData ] = useState({
        name: '',
        species: '',
        image: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await props.createAnimal(formData, props.token)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Create A Animal {props.user.name} </h2>
            <input placeholder='Name' type="text" name="name" value={formData.name} onChange={handleChange}/>
            <input placeholder='Species' type="text" name="species" value={formData.species} onChange={handleChange}/>
            <input placeholder='Image' type="text" name="image" value={formData.image} onChange={handleChange}/>
            <input type="submit" value="Create Animal"/>
        </form>
    )
}