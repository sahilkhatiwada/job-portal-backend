const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-black cursor-pointer">
          <strong className="text-blue-600 cursor-pointer ">Job</strong>Portal
        </h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          About us
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Features
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Testimonials
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Contact Us
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Register
        </li>
      </div>
    </div>
  );
};

export default NavBar;
