import { useEffect, useState } from "react"


const Effect = () => {
    // hook tidak disarankan ditempatkan di dalam function if , dll

    const [count, setCount] = useState<number>(0)
    const [text, setText] = useState<string>('')
    // tanpa parameter dependency
    // useEffect(() => {
    //     console.log("Use Effect dijalankan setiap komponen di render");
    // })

    // menggunakan dependency kosong
    // useEffect(() => {
    //     console.log("Use Effect dijalankan hanya pertama kali komponen di render");
    // }, [])


    useEffect(() => {
        console.log("Use Effect dijalankan apa bila terjadi perubahan di state");
    }, [count])
    return (
        <>
            <div>
                <p>count : {count}</p>
                <button onClick={() => setCount(count + 1)}>add</button>
                <p>{text}</p>
                <button onClick={() => {
                    if (text) {
                        setText("")
                    } else {
                        setText("hello")
                    }
                }
                }>Change Text</button>
            </div>
        </>
    )
}

export default Effect
