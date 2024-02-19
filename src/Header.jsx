import { useState } from "react";
import Drawer from "./components/Drawer";
import CartIcon from "./components/header/CartIcon";
import Logo from "./components/header/Logo";
import NavBar from "./components/header/NavBar";
import NavButton from "./components/header/NavButton";

function Header({ onClickNav, activeTab }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <header>
        <div className="container relative flex h-20 max-w-6xl items-center justify-between gap-8 border-b px-4 md:h-28 md:border-none">
          <Logo />
          <div className="hidden shrink grow md:block">
            <NavBar activeTab={activeTab} onClickNav={onClickNav} />
          </div>
          <div className="md:hidden">
            {openDrawer && (
              <Drawer onClose={() => setOpenDrawer(false)}>
                <NavBar activeTab={activeTab} onClickNav={onClickNav} onCloseDrawer={() => setOpenDrawer(false)} />
              </Drawer>
            )}
          </div>
          <div className="flex shrink-0 grow-0 items-center justify-center gap-4">
            <CartIcon />
            <NavButton onClick={() => setOpenDrawer(true)} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
