import React from "react"

const TextInput = () => {
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default TextInput
