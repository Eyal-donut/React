import { useGlobalContext } from "../context/context"

const Grandson = () => {
    const {gifts} = useGlobalContext()

    return (
        <>
        <h1>I am Grandson component</h1>
        {gifts.map((gift)=> {
            return <h2>{gift}</h2>
        })}
        </>
    )
}

export default Grandson