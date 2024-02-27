import { useState } from 'react'
import styles from './LoginForm.module.scss'

export default function LoginForm(props) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return(
        <>
        <h2 className={styles.heading}>Login to the Sunnyh Animal Shelter</h2>
            <form className={styles.form} onSubmit= {(e) => {
                e.preventDefault()
                props.login(credentials)
            }}>
                <input type='text' name='email' onChange={handleChange} value={credentials.email}/>
                <input type='text' name='password' onChange={handleChange} value={credentials.password}/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}