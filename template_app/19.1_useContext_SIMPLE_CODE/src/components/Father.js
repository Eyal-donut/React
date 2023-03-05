import { useGlobalContext } from "../context/context"
import Son from './Son'

const Father = () => {
    const {setGifts} = useGlobalContext()
    setGifts(['gift one', 'gift two'])

    return <Son/>
}

export default Father