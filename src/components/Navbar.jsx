import { Button , ButtonIcon} from "./elements/Button";
import logo from "../assets/visibloom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

function icon(icon){
  return <FontAwesomeIcon icon={icon}/>;
}
const iconButtons = [
  {iconComponent: () => icon(faFacebookF), href:"https://www.facebook.com/profile.php?id=61572707286789"},
  {iconComponent: () => icon(faInstagram), className:'visiIconInvert', href:''},
  {iconComponent: () => icon(faTiktok),    className:'visiIconInvert', href:''},
]


function Navbar() {
  return (
    <>
      <div className="navbar justify-between fixed z-10 top-0 w-full">
        <div className="flex">
          <a href="#top" className="flex">
            <img src={logo} alt="" className="w-50"/>
            {/* <span className="text-4xl text-fuchsia-600 font-extrabold">isibloom</span> */}
          </a>
        </div>
        <div className="flex-none">
          <div className="flex gap-4">
            {iconButtons.map(({iconComponent, className, href}, index) => 
               <ButtonIcon className={className} key={index} IconComponent={iconComponent()} pathlink={href}/>
            )}
            <Button attributes={{className: "visiButton"}} label={"Contact Us!"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
