import { useState } from "react";
import Drawer from "./components/Drawer";
import Account from "./components/header/Account";
import CartIcon from "./components/header/CartIcon";
import Logo from "./components/header/Logo";
import NavBar from "./components/header/NavBar";
import NavButton from "./components/header/NavButton";

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white">
        <div className="container relative flex h-20 max-w-6xl items-center justify-between gap-8 overflow-hidden border-b px-4 md:h-28 md:border-none">
          <div className="flex shrink-0 grow-0 items-center justify-center gap-4">
            <NavButton onClick={() => setOpenDrawer(true)} />
            <Logo />
          </div>
          <div className="hidden shrink grow md:block">
            <NavBar />
          </div>
          <div className="md:hidden">
            {openDrawer && (
              <Drawer onClose={() => setOpenDrawer(false)}>
                <NavBar onCloseDrawer={() => setOpenDrawer(false)} />
              </Drawer>
            )}
          </div>
          <div className="flex shrink-0 grow-0 items-center justify-center gap-4">
            <CartIcon />
            <Account />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
