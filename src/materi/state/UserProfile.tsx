import { useState } from "react"
import { User } from "../../types/User";
// update state dengan tipe object


const UserProfile = () => {
    const [user, setUser] = useState<User>({
        name: "John Doe",
        age: 22
    });
    const updateUser = () => {
        setUser({
            ...user, // spread operator
            age: user.age + 1
        })
    }
    const updateUsername = () => {
        setUser({
            ...user,
            name: "Jane Doe"
        })
    }
    return (
        <div>
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
            <button onClick={updateUser}>Increase Age</button>
            <button onClick={updateUsername}>Change Name to Jane Doe</button>
        </div>
    );
}

export default UserProfile