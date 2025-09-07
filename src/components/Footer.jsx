import { motion } from 'framer-motion'
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Café': [
      { name: 'Nuestro Menú', href: '#menu' },
      { name: 'Cafés de Origen', href: '#menu' },
      { name: 'Tostado Artesanal', href: '#nosotros' },
      { name: 'Baristas Expertos', href: '#nosotros' }
    ],
    'Empresa': [
      { name: 'Nuestra Historia', href: '#nosotros' },
      { name: 'Ubicación', href: '#contacto' }
    ],
    'Contacto': [
      { name: 'Visítanos', href: '#contacto' },
      { name: 'Horarios', href: '#contacto' }
    ]
  }

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <footer className="bg-coffee-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Coffee className="h-8 w-8 text-cream-300" />
                <span className="text-2xl font-serif font-bold">
                  Café Especialidad
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Desde 2008, ofrecemos la mejor experiencia en café de especialidad 
                con granos seleccionados y tostado artesanal.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-cream-300" />
                  <span className="text-sm">Calle Principal 123, Centro</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-5 w-5 text-cream-300" />
                  <span className="text-sm">+34 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-5 w-5 text-cream-300" />
                  <span className="text-sm">hola@cafeteria-especialidad.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="h-5 w-5 text-cream-300" />
                  <span className="text-sm">Lun-Dom: 7:00 - 20:00</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-cream-300">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-cream-300 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-coffee-800 py-8"
        >
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-cream-300">
              ¡Visítanos Pronto!
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Ven y disfruta de la mejor experiencia en café de especialidad
            </p>
            <a 
              href="#contacto"
              className="inline-block bg-gradient-to-r from-accent-600 to-gold-500 hover:from-accent-700 hover:to-gold-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Ver Ubicación y Horarios
            </a>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-coffee-800 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Café Especialidad. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-cream-300 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer