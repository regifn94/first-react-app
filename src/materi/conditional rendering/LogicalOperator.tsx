
type Props = {
    isLoggedIn: boolean
    isAdmin: boolean
}

const LogicalOperator = ({isLoggedIn}: Props) => {
  return (
    <div>
        {
            isLoggedIn && <h1>Welcome back, User !</h1> // If isLoggedIn is true, then this will be displayed
        } 
        {
            isLoggedIn || <h2> You are logged in</h2> // If isLoggedIn is false, then this will be displayed
        } 
    </div>
  )
}

export default LogicalOperator