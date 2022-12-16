import { Customers, FirstSlider, Footer, Header, MobileApp, Nav, Question, SecondSlider } from "./components";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <FirstSlider />
      <SecondSlider />
      <MobileApp />
      <Customers />
      <Question />
      <Footer />
    </div>
  );
};

export default App;
