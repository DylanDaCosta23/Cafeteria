import { motion } from 'framer-motion'
import { Coffee, Star, Clock } from 'lucide-react'

const Menu = () => {
  const menuCategories = [
    {
      title: 'Cafés Especiales',
      items: [
        {
          name: 'Espresso Clásico',
          description: 'Nuestro espresso perfecto con crema dorada y sabor intenso',
          price: '€2.50',
          time: '2 min',
          rating: 4.9,
          popular: true,
          image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6b0d8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=-30&con=-20&brightness=0.9'
        },
        {
          name: 'Cappuccino Artesanal',
          description: 'Espresso con leche vaporizada y arte latte',
          price: '€3.20',
          time: '3 min',
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=-30&con=-20&brightness=0.9'
        },
        {
          name: 'Latte de Vainilla',
          description: 'Café con leche y sirope de vainilla natural',
          price: '€3.50',
          time: '4 min',
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=-30&con=-20&brightness=0.9'
        },
        {
          name: 'Mocha Especial',
          description: 'Espresso con chocolate belga y crema batida',
          price: '€4.00',
          time: '5 min',
          rating: 4.9,
          popular: true,
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=-30&con=-20&brightness=0.9'
        }
      ]
    },
    {
      title: 'Cafés de Origen',
      items: [
        {
          name: 'Colombia Huila',
          description: 'Café de altura con notas cítricas y chocolate',
          price: '€4.50',
          time: '3 min',
          rating: 4.9,
          popular: true,
          image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=-30&con=-20&brightness=0.9'
        },
        {
          name: 'Etiopía Yirgacheffe',
          description: 'Aromas florales con toques de bergamota',
          price: '€4.80',
          time: '3 min',
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=-30&con=-20&brightness=0.9'
        },
        {
          name: 'Guatemala Antigua',
          description: 'Cuerpo completo con notas de caramelo',
          price: '€4.20',
          time: '3 min',
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=-30&con=-20&brightness=0.9'
        }
      ]
    },
    {
      title: 'Bebidas Frías',
      items: [
        {
          name: 'Cold Brew Premium',
          description: 'Café extraído en frío durante 12 horas',
          price: '€3.80',
          time: '1 min',
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=-30&con=-20&brightness=0.9'
        },
        {
          name: 'Frappé de Caramelo',
          description: 'Bebida fría con caramelo y crema',
          price: '€4.20',
          time: '4 min',
          rating: 4.6,
          image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=-30&con=-20&brightness=0.9'
        },
        {
          name: 'Iced Latte',
          description: 'Latte frío con hielo y leche fresca',
          price: '€3.50',
          time: '2 min',
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&sat=-30&con=-20&brightness=0.9'
        }
      ]
    }
  ]

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-6">
            Nuestro Menú
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra selección cuidadosamente curada de cafés especiales, 
            preparados con los mejores granos del mundo y técnicas artesanales.
          </p>
        </motion.div>

        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif font-bold text-coffee-700 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="card-modern p-0 overflow-hidden group relative"
                    whileHover={{ y: -5 }}
                  >
                    {item.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-600 to-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10 shadow-lg">
                        Popular
                      </div>
                    )}
                    
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-coffee-800 group-hover:text-accent-600 transition-colors">
                          {item.name}
                        </h4>
                        <div className="text-2xl font-bold text-gradient">
                          {item.price}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-center">
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-gold-500 fill-current" />
                            <span className="text-sm font-medium text-gray-700">
                              {item.rating}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-accent-50 to-gold-50 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-600/5 to-gold-500/5"></div>
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Coffee className="h-16 w-16 text-gradient mx-auto mb-6" />
            </motion.div>
            <h3 className="text-3xl font-serif font-bold text-coffee-800 mb-4">
              ¿Listo para una experiencia única?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Visítanos y descubre por qué somos la cafetería de especialidad más 
              reconocida de la ciudad. Cada taza es una obra de arte.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contacto" className="btn-primary text-lg shimmer-effect">
                Visítanos
              </a>
              <a href="#nosotros" className="btn-gold text-lg">
                Conoce Nuestra Historia
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu