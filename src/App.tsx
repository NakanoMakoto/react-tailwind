import React from "react";
import Header from "./components/Header/index"
import Body from "./components/Body/index"
import Footer from "./components/Footer/index"

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
