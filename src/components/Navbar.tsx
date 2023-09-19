import { useNavigate } from "react-router-dom";

export const navigations = [
  {
    href: "/plan",
    title: "Build",
    icon: "/icons/build.svg",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-3 flex justify-center w-full z-10">
      <div className="py-2 px-5 flex flex-row items-center w-[250px] text-sm bg-white bg-opacity-5 backdrop-blur-md rounded-3xl">
        <div className="flex-1" onClick={() => navigate("/")}>
          <img src="icons/logo.png" className="w-[80px] cursor-pointer"/>
        </div>
        {navigations.map((navi, id) => {
          return (
            <div key={id} onClick={() => navigate(`${navi.href}`)}>
              <div className="ml-1 px-3 py-2 hover:bg-[#111111] rounded-xl duration-200 cursor-pointer">
                <div className="flex items-center">
                  <img src={navi.icon} className="mr-[5px]" alt={navi.title} />
                  {navi.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
