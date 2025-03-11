import PropsComponent from "./PropsComponent";

export const ParentComponent = () => {
  return (
    <>
    <PropsComponent nama = 'admin' umur = {26} sudahMenikah='sudah'  />
    <PropsComponent umur = {26} sudahMenikah='sudah'  />
    </>
  )
}

export default ParentComponent;