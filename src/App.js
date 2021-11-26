import "./App.css";
// import FeatureBanner from "./components/FeatureBanner";
// import Header from "./components/Header";
// import Slideshow from "./components/Slideshow";
// import Partners from "./Partners";
// import Footer from "./Footer";
// import SignatureBanner from "./SignatureBanner";
// import HeaderTop from "./components/HeaderTop";
// import Slogan from "./components/Slogan";
// import ContactForm from "./components/ContactForm";

import { BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home.js";
import about from "./Pages/AboutUs.js";
import services from "./Pages/Services.js";
import news from "./Pages/NewsAndEvents.js";
import Team from "./Pages/Team";
import { Route, Switch } from "react-router";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/about" component={about} />
        <Route path="/team" component={Team} />
        <Route path="/services" component={services} />
        {/* <Route path="/news" component={news} /> */}
        <Route path="/" component={Home} exact />
      </Switch>
    </main>
  );
}

export default App;
