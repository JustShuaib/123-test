const NavLinks = () => {
  return (
    <div className="flex flex-col items-center font-bai-jamjuree text-nav-text md:flex-row">
      <ul className="flex flex-col items-center gap-5 md:flex-row">
        <li>
          <a href="#">Tasks</a>
        </li>
        <li>
          <a href="#">Discover Service Providers</a>
        </li>
        <li>
          <a href="#">How it Works</a>
        </li>
      </ul>
      <ul className="mt-5 flex flex-col items-center gap-5 border-l-primary pl-5 text-primary md:mt-0 md:ml-5 md:flex-row md:border-l">
        <li>
          <a href="#">Log In</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
        <li className="rounded-16 bg-primary py-3 px-5 font-medium text-white">
          <a href="#">Provide a Service</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
