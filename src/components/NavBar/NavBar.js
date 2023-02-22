import { Link } from 'react-router-dom';

export default function NavBar() {
  const handleClick = (evt) => {
    localStorage.clear()
  }
  return (
    <nav>
      <Link to="/Home">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/USA">USA</Link>
      &nbsp; | &nbsp;
      <Link to="/Italy">Italy</Link>
      &nbsp; | &nbsp;
      <Link to="/Canada">Canada</Link>
      &nbsp; | &nbsp;
      <Link to="/China">China</Link>
      <button className='logout' onClick={handleClick}>LogOut</button>
    </nav>
  );
}