import { useEffect, useState } from "react";
import Container from "../../component/Container"
import logo from '../../images/logo.png';
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  let [theme, setTheme] = useState('false');
  useEffect(() => {
    if(theme) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  return (
    <div className=" py-4 border-b dark:border-[#666]">
        <Container className="flex justify-between items-center">
            <img src={logo} className=" dark:brightness-200	" alt="img" />
            <MdOutlineLightMode onClick={() => setTheme(!theme)} className={` dark:text-white text-xl cursor-pointer ${theme  && 'text-black'}`}/>
        </Container>
    </div>
  ) 
}

export default Header