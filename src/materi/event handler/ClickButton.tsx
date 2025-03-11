
const ClickButton = () => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert('button clicked');
        console.log(event.target);
    }

  return (
    <button onClick={handleClick}>Click Me</button>
  )
}

export default ClickButton;