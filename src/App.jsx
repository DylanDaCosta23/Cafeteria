import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>Cafetería de Especialidad | Café Artesanal Premium</title>
        <meta name="description" content="Descubre el mejor café de especialidad en nuestra cafetería. Granos seleccionados, tostado artesanal y preparación experta. Ambiente acogedor y experiencia única." />
        <meta name="keywords" content="café especialidad, cafetería, café artesanal, granos premium, tostado, barista, café colombiano, café etíope, latte art" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Menu />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
