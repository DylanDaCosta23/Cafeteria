import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'
import Map from './Map'

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      details: 'Calle de la Paz, 123',
      subDetails: '28012 Madrid, España'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: '+34 123 456 789',
      subDetails: 'Lunes a Domingo 7:00 - 20:00'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hola@cafeteria-especialidad.com',
      subDetails: 'Respondemos en 24 horas'
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: 'Lun - Vie: 7:00 - 19:00',
      subDetails: 'Sáb - Dom: 8:00 - 20:00'
    }
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-6">
            Visítanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos ubicados en el corazón de la ciudad. Ven y disfruta de una 
            experiencia única en nuestro acogedor espacio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-coffee-800 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-coffee-100 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-coffee-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-coffee-800 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-700 font-medium">
                        {info.details}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {info.subDetails}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-semibold text-coffee-800 mb-4">
                Síguenos
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-coffee-600 hover:bg-coffee-700 text-white p-3 rounded-lg transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map and Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Interactive Map */}
            <div>
              <h4 className="text-xl font-semibold text-coffee-800 mb-4">
                Nuestra Ubicación
              </h4>
              <Map />
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-coffee-800 mb-6">
                Envíanos un Mensaje
              </h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Cuéntanos más detalles..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact