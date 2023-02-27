import { useGlobalContext } from "../context/context"

const AboutPage = () => {
    const {mode} = useGlobalContext()
    return <h1 className={mode==='day'? 'day':'night'}>About Page</h1>
}

export default AboutPage