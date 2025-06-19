import NavBar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar/>
        <Hero />
        <About />
    </main>
  );
}

export default App;
