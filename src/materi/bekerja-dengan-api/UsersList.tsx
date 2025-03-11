import { useEffect, useState } from "react"
import { User } from "./type"



const UsersList = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')

                if (!response.ok) {
                    throw new Error('Failed to fetch Users')
                }
                const data: User[] = await response.json()
                setUsers(data)
                setLoading(false)
            } catch (error) {
                setError((error as Error).message);
                setLoading(false)
            }
        }

        fetchUsers()
    }, []);

    const createUser = async () => {
        const newUser: Omit<User, "id"> = {
            name: "John Doe",
            username: "Username ",
            email: "john.doe@example.com",
        }
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to add new users')
            }
            const data: User = await response.json()
            setUsers([...users, data])
            setLoading(false)
        } catch (error) {
            setError((error as Error).message);
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <button onClick={createUser}>
                Add User
            </button>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>{user.name} - {user.email}</li>
                })}
            </ul>
        </div>
    )
}

export default UsersList