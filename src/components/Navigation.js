import React from 'react';
import { Link } from 'react-router-dom';

function Navigate() {
  // const [isOpen, setIsOpen] = useState(false);
  //   const [isMobile, setIsMobile] = useState(false);

  //   function handleToggle() {
  //     setIsOpen(!isOpen);
  //   }
  return (
    <>
      <div>
        <img
          src="https://img.icons8.com/ios-glyphs/1x/menu-rounded.png"
          alt="Hamburger"
          className="hamburger"
        //   onClick={handleToggle}
        />

        {/* {isOpen && ( */}
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="../add_room">Add Room</Link>
            </li>
            <li>
              <Link to="../delete">Delete Room</Link>
            </li>
            <li>
              <Link to="../reservations">My Reservations</Link>
            </li>
            <li>
              <Link to="../reserve">Reserve Room</Link>
            </li>
          </ul>
        </nav>
        {/* )} */}
      </div>
    </>
  );
}

export default Navigate;
