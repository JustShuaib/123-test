import { Customers, FirstSlider, Footer, Header, MobileApp, Nav, SecondSlider } from "./components";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <FirstSlider />
      <SecondSlider />
      <MobileApp />
      <Customers />
      <Footer />
    </div>
  );
};

export default App;
