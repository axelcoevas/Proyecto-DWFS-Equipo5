import { Link } from 'react-router-dom';

const Nav = () => {
    return <div>
        <h1>Nav</h1>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
    </div>
}

export default Nav;