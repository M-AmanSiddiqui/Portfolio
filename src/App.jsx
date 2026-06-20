import { BrowserRouter } from "react-router-dom";

import { About, Contact,Education, Experience, Certificates, Hero, Navbar, Tech, Works,  } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 min-h-screen overflow-hidden bg-primary'>
        <div className='pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(115deg,rgba(0,206,168,0.08),transparent_28%,rgba(145,94,255,0.12)_58%,transparent_82%)]' />
        <div className='relative z-10 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <main className='relative z-10'>
          <About />
          <Experience />
          <Education />
          <Tech />
          <Works />
          <Certificates />
          <Contact />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
