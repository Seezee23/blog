import { Link } from 'react-router-dom';

export default function NavBar() {
  const handleClick = (evt) => {
    localStorage.clear()
  }
  return (
    <nav>
      <Link to="/home">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/usa">USA</Link>
      &nbsp; | &nbsp;
      <Link to="/italy">Italy</Link>
      &nbsp; | &nbsp;
      <Link to="/canada">Canada</Link>
      &nbsp; | &nbsp;
      <Link to="/china">China</Link>
      <button className='logout' onClick={handleClick}>LogOut</button>
    </nav>
  );
}