import Page from "./Page";
import { CartProvider, NavigationProvider } from "./providers";
import ModalProvider from "./providers/ModalProvider";

function App() {
  return (
    <>
      <ModalProvider>
        <CartProvider>
          <NavigationProvider>
            <Page />
          </NavigationProvider>
        </CartProvider>
      </ModalProvider>
    </>
  );
}

export default App;
