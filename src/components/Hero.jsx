import { motion } from 'framer-motion'
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/90 via-coffee-800/80 to-accent-900/70"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-gold-500/20 animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Café de <span className="text-gradient">Especialidad</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
          >
            Descubre el sabor auténtico del café artesanal con granos seleccionados 
            y tostado perfecto en cada taza.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <a 
              href="#menu"
              className="btn-primary text-lg flex items-center group shimmer-effect"
            >
              Ver Menú
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#nosotros"
              className="btn-gold text-lg flex items-center group"
            >
              Nuestra Historia
              <Star className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div 
              className="flex flex-col items-center text-center bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/30"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-4 rounded-full mb-4 animate-float shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-coffee-800">Calidad Premium</h3>
              <p className="text-coffee-600">Granos seleccionados de las mejores regiones del mundo</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/30"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-4 rounded-full mb-4 animate-float shadow-lg" style={{ animationDelay: '0.5s' }}>
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-coffee-800">Tostado Artesanal</h3>
              <p className="text-coffee-600">Tostamos nuestros granos diariamente para máxima frescura</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/30"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-4 rounded-full mb-4 animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-coffee-800">Ubicación Céntrica</h3>
              <p className="text-coffee-600">En el corazón de la ciudad, fácil acceso y estacionamiento</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero