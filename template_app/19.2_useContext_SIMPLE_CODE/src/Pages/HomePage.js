import { useGlobalContext } from "../context/context"

const HomePage = () => {
    const {mode} = useGlobalContext()
    return <h1 className={mode==='day'? 'day':'night'}>Home Page</h1>
}

export default HomePage