
type Props = {
    children: React.ReactNode;
}

const ChildrenProps = ({children}: Props) => {
  return (
    <div>
        <h1>Ini contoh children props</h1>
        <p>{children}</p>
    </div>
  )
}

export default ChildrenProps;