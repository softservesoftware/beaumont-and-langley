import "./App.css";
// import Footer from "./components/footer";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Main from "./routes/main";
// import About from "./routes/about";
// import Nav from "./components/nav";
import Blank from "./routes/blank";

// const navigation = [
//   { name: "Product", href: "/#Product" },
//   { name: "Features", href: "/#Features" },
//   { name: "Pricing", href: "/#Pricing" },
//   { name: "About", href: "/about" },
// ];

export const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Site Uptime Status", href: "#" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

function App() {
  return (
    <>
    <Blank />
      {/* <Nav navigation={navigation}/>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}  />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer navigation={footerNavigation} /> */}
    </>
  );
}

export default App;
