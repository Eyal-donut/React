import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const Navigation = () => {
    const {mode, setMode } = useGlobalContext()

    const clickHandler = () => {
        mode === 'day' ? setMode('night') : setMode('day')
    }

    return (
        <nav className={mode === 'day' ? 'nav-day' : 'nav-night'}>
            <ul>
                <li className={mode === 'day' ? 'day' : 'night'}>
                    <NavLink to='/'
                    end
                    >Home</NavLink>
                </li>
                <li className={mode === 'day' ? 'day' : 'night'}>
                    <NavLink to='/about'
                    end
                    >About</NavLink>
                </li>
            </ul>
            <button className={mode === 'day' ? 'day' : 'night'} onClick={clickHandler}>{mode === 'day' ? 'Make night' : 'Make day'}</button>
        </nav>

    )
}
export default Navigation