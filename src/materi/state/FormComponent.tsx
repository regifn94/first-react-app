import { useState } from "react"
import React from "react"
type FormData = {
    name: string
    email: string
    password: string
}
const FormComponent = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            // [event.target.name]: event.target.value,
            [name]: value,
        })
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('data yang di submit : ', formData);
        setFormData({
            name: "",
            email: "",
            password: "",
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" value={formData.password} onChange={handleInputChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormComponent