import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { type SharedData } from '@/types';

interface WelcomeProps {
  canRegister?: boolean;
}

export default function Welcome({ canRegister = true }: WelcomeProps) {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title="Inicio - Menús Digitales">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Header con Navbar integrado */}
        <Header auth={auth} canRegister={canRegister} />

        {/* Main Content */}
        <main className="w-full">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-20 md:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                Menús Digitales para tu{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Restaurante
                </span>
              </h1>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
                Moderniza tu negocio con menús digitales interactivos.
                Fácil de usar, rápido de actualizar y perfecto para tus clientes.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                {canRegister && (
                  <a
                    href="/register"
                    className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-center text-base font-semibold text-white transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-xl sm:w-auto"
                  >
                    Comenzar Gratis 🚀
                  </a>
                )}
                <a
                  href="#features"
                  className="w-full rounded-lg border-2 border-blue-600 bg-white px-8 py-4 text-center text-base font-semibold text-blue-600 transition-all hover:bg-blue-50 sm:w-auto dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                >
                  Ver Características
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="bg-white py-20 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                  Características Principales
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Todo lo que necesitas para digitalizar tu menú
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="group rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105 dark:from-gray-800 dark:to-gray-900">
                  <div className="mb-4 text-5xl">📱</div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    100% Responsive
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Diseñado para verse perfecto en cualquier dispositivo: móviles, tablets y computadoras.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="group rounded-2xl bg-gradient-to-br from-green-50 to-white p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105 dark:from-gray-800 dark:to-gray-900">
                  <div className="mb-4 text-5xl">⚡</div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    Actualización Instantánea
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Modifica precios, platos y promociones en tiempo real sin necesidad de reimprimir menús.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="group rounded-2xl bg-gradient-to-br from-purple-50 to-white p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105 dark:from-gray-800 dark:to-gray-900">
                  <div className="mb-4 text-5xl">🎨</div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    Personalizable
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Adapta colores, tipografía e imágenes para que coincida con la identidad de tu marca.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="group rounded-2xl bg-gradient-to-br from-yellow-50 to-white p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105 dark:from-gray-800 dark:to-gray-900">
                  <div className="mb-4 text-5xl">🔍</div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    Búsqueda Inteligente
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Tus clientes pueden encontrar fácilmente sus platos favoritos con nuestra búsqueda avanzada.
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="group rounded-2xl bg-gradient-to-br from-red-50 to-white p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105 dark:from-gray-800 dark:to-gray-900">
                  <div className="mb-4 text-5xl">📊</div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    Análisis Detallados
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Conoce qué platos son los más vistos y populares entre tus clientes.
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="group rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105 dark:from-gray-800 dark:to-gray-900">
                  <div className="mb-4 text-5xl">🌐</div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    Multiidioma
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ofrece tu menú en múltiples idiomas para atender a clientes internacionales.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="bg-gray-50 py-20 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                  Planes y Precios
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Elige el plan perfecto para tu negocio
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {/* Plan Básico */}
                <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-900">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Básico</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">$19</span>
                    <span className="text-gray-600 dark:text-gray-400">/mes</span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2 text-green-500">✓</span> Hasta 50 productos
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2 text-green-500">✓</span> 1 Menú digital
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2 text-green-500">✓</span> Actualizaciones ilimitadas
                    </li>
                  </ul>
                  <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
                    Comenzar
                  </button>
                </div>

                {/* Plan Pro */}
                <div className="relative rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 shadow-2xl transform scale-105">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-blue-900">
                    Popular
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white">Pro</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">$49</span>
                    <span className="text-blue-100">/mes</span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    <li className="flex items-center text-white">
                      <span className="mr-2 text-yellow-400">✓</span> Productos ilimitados
                    </li>
                    <li className="flex items-center text-white">
                      <span className="mr-2 text-yellow-400">✓</span> 5 Menús digitales
                    </li>
                    <li className="flex items-center text-white">
                      <span className="mr-2 text-yellow-400">✓</span> Análisis avanzados
                    </li>
                    <li className="flex items-center text-white">
                      <span className="mr-2 text-yellow-400">✓</span> Soporte prioritario
                    </li>
                  </ul>
                  <button className="w-full rounded-lg bg-yellow-400 py-3 font-semibold text-blue-900 hover:bg-yellow-300">
                    Comenzar
                  </button>
                </div>

                {/* Plan Enterprise */}
                <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-900">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">$99</span>
                    <span className="text-gray-600 dark:text-gray-400">/mes</span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2 text-green-500">✓</span> Todo de Pro
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2 text-green-500">✓</span> Menús ilimitados
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2 text-green-500">✓</span> API personalizada
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2 text-green-500">✓</span> Soporte 24/7
                    </li>
                  </ul>
                  <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="bg-white py-20 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                    ¿Por qué elegir Menús Digitales?
                  </h2>
                  <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
                    Somos una empresa comprometida con la innovación en el sector gastronómico.
                    Nuestra misión es ayudar a los restaurantes a modernizarse y ofrecer la mejor
                    experiencia a sus clientes.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Con años de experiencia en desarrollo de software y diseño UX, hemos creado
                    una plataforma intuitiva que cualquier restaurante puede usar sin complicaciones.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center text-9xl">
                    🍽️
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="mb-6 text-3xl font-bold text-white">
                ¿Listo para comenzar?
              </h2>
              <p className="mb-8 text-xl text-blue-100">
                Únete a cientos de restaurantes que ya están usando Menús Digitales
              </p>
              {canRegister && (
                <a
                  href="/register"
                  className="inline-block rounded-lg bg-yellow-400 px-10 py-4 text-lg font-semibold text-blue-900 transition-all hover:bg-yellow-300 hover:shadow-xl"
                >
                  Crear mi menú gratis 🚀
                </a>
              )}
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}