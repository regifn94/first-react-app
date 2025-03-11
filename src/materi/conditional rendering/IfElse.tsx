type Props = {
    isLoggedIn: boolean
}



const IfElse = ({isLoggedIn}: Props) => {
    let message: React.ReactNode
    if(isLoggedIn){
        message = <h1>Welcome back!</h1>;
    }else{
        message = <h1>Please login</h1>;
    }
    return (
        <div>
            {message}
            <h2></h2>
        </div>
    )
}

export default IfElse