import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import { HiMiniUsers } from "react-icons/hi2";
import { FaHistory } from "react-icons/fa";
import { GiRamProfile } from "react-icons/gi";
import { MdReviews } from "react-icons/md";

const SideBar = () => {
  return (
    <Stack gap={2}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          <AiFillDashboard /> Dashboard
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/books">
          <IoBookSharp /> Books
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/user-list">
          <HiMiniUsers /> All Users
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/borrow">
          <FaHistory /> Borrow History
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/reviews">
          <MdReviews /> Reviews
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
          <GiRamProfile /> Profile
        </Link>
      </div>
    </Stack>
  );
};

export default SideBar;
