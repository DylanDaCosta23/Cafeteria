import { motion } from 'framer-motion'
import { Coffee, Award, Users, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '15+', label: 'Años de Experiencia', icon: Award },
    { number: '50+', label: 'Variedades de Café', icon: Coffee },
    { number: '1000+', label: 'Clientes Satisfechos', icon: Users },
    { number: '100%', label: 'Pasión por el Café', icon: Heart },
  ]

  return (
    <section id="nosotros" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Desde 2008, hemos estado comprometidos con la excelencia en cada taza de café. 
              Nuestra pasión por el café de especialidad nos ha llevado a viajar por el mundo 
              en busca de los mejores granos y técnicas de preparación.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Cada mañana, nuestros baristas expertos tostan los granos frescos y preparan 
              cada bebida con la precisión y el cuidado que merece. Creemos que el café 
              no es solo una bebida, es una experiencia que conecta personas y culturas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="btn-primary">
                Ver Nuestro Menú
              </a>
              <a href="#contacto" className="btn-secondary">
                Visita Nuestro Local
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80"
                alt="Barista preparando café"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-coffee-100 p-2 rounded-lg">
                  <Coffee className="h-6 w-6 text-coffee-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-800">Tostado Diario</h4>
                  <p className="text-sm text-gray-600">Granos frescos cada día</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Tostamos nuestros granos en pequeñas cantidades para garantizar 
                la máxima frescura y sabor en cada taza.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-coffee-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-coffee-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-coffee-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About