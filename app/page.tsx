'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, GlobeIcon } from 'lucide-react';
import {
  JavaOriginal,
  ReactOriginal,
  Html5Plain,
  Css3Plain,
  AzuresqldatabaseOriginal,
  JavascriptOriginal,
  SpringOriginal,
  Html5Original,
  Css3Original,
} from 'devicons-react';

type Language = 'en' | 'pt';

const translations = {
  en: {
    name: 'Guilherme Santos',
    nav: ['Home', 'About', 'Projects', 'Contact'],
    hero: {
      title: 'Welcome to my portfolio!',
      subtitle:
        'Here you will find a selection of my projects and experiences as a developer. Feel free to explore!',
      cta: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      p1: 'I am a Systems Analysis and Development student, technology enthusiast, and passionate about software development. In this space, you will find a collection of my projects, where I put into practice everything I learn about Java, Spring, design patterns, MVC, software testing, databases, and much more. In addition, I always strive to stay updated and apply my knowledge in HTML, CSS, JavaScript, SQL, and React.',
      p2: 'When I am not developing, you can find me playing video games, trying new recipes, exercising, or learning something new.',
    },
    skills: ['Html', 'Css', 'Javascript', 'Java', 'SQL', 'React', 'Spring'],
    projects: {
      title: 'Projects',
      description: 'A brief description of the project and its main features.',
      cta: 'Learn More',
    },
    contact: {
      title: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
    },
    footer: '© 2024 Guilhermehvs. All rights reserved.',
  },
  pt: {
    name: 'Guilherme Santos',
    nav: ['Início', 'Sobre', 'Projetos', 'Contato'],
    hero: {
      title: 'Bem-vindo ao meu portfólio!',
      subtitle:
        'Aqui você encontrará uma seleção dos meus projetos e experiências como desenvolvedor. Sinta-se à vontade para explorar!',
      cta: 'Entre em Contato',
    },
    about: {
      title: 'Sobre Mim',
      p1: 'Estudante de Análise e Desenvolvimento de Sistemas, entusiasta da tecnologia e apaixonado por desenvolvimento de softwares. Neste espaço, você encontrará uma coleção dos meus projetos, onde coloco em prática tudo que aprendo sobre Java, Spring, design patterns, MVC, testes de software, banco de Dados e muito mais. Além disso procuro sempre me atualizar e colocar em praticar meu conhecimento em HTML, CSS, JavaScript, SQL e React.',
      p2: 'Quando não estou desenvolvendo, você pode me encontrar jogando videogames, testando receitas novas, praticando exercícios ou aprendendo algo novo.',
    },
    skills: ['Html', 'Css', 'Javascript', 'Java', 'SQL', 'React', 'Spring'],
    projects: {
      title: 'Projetos',
      description:
        'Uma breve descrição do projeto e suas principais características.',
      cta: 'Saiba Mais',
    },
    contact: {
      title: 'Entre em Contato',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
    },
    footer: '© 2024 Guilhermehvs. Todos os direitos reservados.',
  },
};

export default function Page() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<Language>('en');

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'en' ? 'pt' : 'en');

  const t = translations[language];

  const skillIcons: { [key: string]: React.ReactNode } = {
    Java: <JavaOriginal size={20} />,
    Javascript: <JavascriptOriginal size={20} />,
    Html: <Html5Original size={20} />,
    Css: <Css3Original size={20} />,
    SQL: <AzuresqldatabaseOriginal size={20} />,
    React: <ReactOriginal size={20} />,
    JavaScript: <JavascriptOriginal size={20} />,
    Spring: <SpringOriginal size={20} />,
  };
  return (
    <div
      className={`min-h-screen ${
        darkMode ? 'bg-gray-900 text-pink-100' : 'bg-blue-50 text-blue-900'
      }`}
    >
      <div
        className={`fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none ${
          darkMode ? '' : 'invert'
        }`}
      />
      <div className="relative">
        <nav
          className={`fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-md `}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <h1
                className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                  darkMode
                    ? 'from-pink-500 to-violet-500'
                    : 'from-blue-500 to-cyan-500'
                }`}
              >
                {t.name}
              </h1>
              <ul className="flex space-x-6 items-center">
                {t.nav.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-sm font-medium transition duration-300 relative group ${
                        darkMode
                          ? 'text-violet-400 hover:text-pink-500'
                          : 'text-blue-500 hover:text-cyan-500'
                      }`}
                    >
                      {item}
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                          darkMode ? 'bg-pink-500' : 'bg-cyan-500'
                        }`}
                      ></span>
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={toggleDarkMode}
                    className={`p-1 rounded-full ${
                      darkMode
                        ? 'bg-gray-700 text-yellow-300'
                        : 'bg-gray-200 text-blue-500'
                    }`}
                  >
                    {darkMode ? (
                      <SunIcon className="w-4 h-4" />
                    ) : (
                      <MoonIcon className="w-4 h-4" />
                    )}
                  </button>
                </li>
                <li>
                  <button
                    onClick={toggleLanguage}
                    className={`p-1 rounded-full ${
                      darkMode
                        ? 'bg-gray-700 text-yellow-300'
                        : 'bg-gray-200 text-blue-500'
                    }`}
                  >
                    <GlobeIcon className="w-4 h-4" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="pt-20">
          <section
            id="home"
            className="py-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <div
                className={`absolute inset-0 ${
                  darkMode
                    ? 'bg-gradient-to-b from-transparent to-gray-900'
                    : 'bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-200'
                }`}
              />
              <div
                className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWY3YWVhIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4YjVjZjYiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20 ${
                  darkMode ? '' : 'invert'
                }`}
              />
            </div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
                  darkMode
                    ? 'from-pink-400 via-violet-500 to-purple-500'
                    : 'from-zinc-300 via-white to-zinc-300'
                }`}
              >
                {t.hero.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={
                  darkMode
                    ? 'text-xl mb-8 text-violet-300'
                    : 'text-xl mb-8 text-white'
                }
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block"
              >
                <a
                  href="#contact"
                  className={`bg-gradient-to-r text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg ${
                    darkMode
                      ? 'from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 shadow-pink-500/50 hover:shadow-pink-500/75'
                      : 'from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-blue-500/50 hover:shadow-blue-500/75'
                  }`}
                >
                  {t.hero.cta}
                </a>
              </motion.div>
            </div>
            <div
              className={`absolute bottom-0 left-0 right-0 h-24 ${
                darkMode
                  ? 'bg-gradient-to-t from-gray-900 to-transparent'
                  : 'bg-gradient-to-t from-blue-50 to-transparent'
              }`}
            />
          </section>

          <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4">
              <h3
                className={`text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${
                  darkMode
                    ? 'from-pink-400 to-violet-500'
                    : 'from-cyan-500 to-blue-500'
                }`}
              >
                {t.about.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p
                    className={
                      darkMode
                        ? 'text-lg text-pink-200'
                        : 'text-lg text-gray-700'
                    }
                  >
                    {t.about.p1}
                  </p>
                  <p
                    className={
                      darkMode
                        ? 'text-lg text-violet-200'
                        : 'text-lg text-blue-700'
                    }
                  >
                    {t.about.p2}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {t.skills.map((skill) => (
                      <div
                        key={skill}
                        className={`flex items-center space-x-2 px-3 py-1 rounded-full ${
                          darkMode ? 'bg-gray-800' : 'bg-gray-200'
                        }`}
                      >
                        {skillIcons[skill] || (
                          <div
                            className={`w-5 h-5 rounded-full ${
                              darkMode ? 'bg-purple-400' : 'bg-blue-600'
                            }`}
                          />
                        )}
                        <span
                          className={`text-sm ${
                            darkMode ? 'text-violet-200' : 'text-gray-700'
                          }`}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-full blur-lg opacity-75 animate-pulse ${
                        darkMode
                          ? 'bg-gradient-to-r from-pink-500 to-violet-500'
                          : 'bg-gradient-to-r from-cyan-400 to-blue-400'
                      }`}
                    />
                    <img
                      src="https://avatars.githubusercontent.com/u/68071170?v=4"
                      alt="Profile"
                      className={`relative rounded-full border-4 shadow-lg ${
                        darkMode ? 'border-pink-500' : 'border-blue-400'
                      }`}
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4">
              <h3
                className={`text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${
                  darkMode
                    ? 'from-violet-400 to-pink-500'
                    : 'from-blue-600 to-cyan-500'
                }`}
              >
                {t.projects.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4].map((project) => (
                  <motion.div
                    key={project}
                    whileHover={{ scale: 1.05 }}
                    className={`rounded-lg shadow-lg overflow-hidden ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    }`}
                  >
                    <div
                      className={`h-48 bg-gradient-to-br ${
                        darkMode
                          ? 'from-pink-400 via-violet-500 to-purple-500'
                          : 'from-blue-300 via-cyan-400 to-blue-500'
                      }`}
                    />
                    <div className="p-6">
                      <h4
                        className={`text-2xl font-semibold mb-2 ${
                          darkMode ? 'text-pink-300' : 'text-blue-700'
                        }`}
                      >
                        {t.projects.title} {project}
                      </h4>
                      <p
                        className={
                          darkMode
                            ? 'text-violet-200 mb-4'
                            : 'text-blue-600 mb-4'
                        }
                      >
                        {t.projects.description}
                      </p>
                      <a
                        href="#"
                        className={`inline-block bg-gradient-to-r text-white px-4 py-2 rounded-full font-semibold transition duration-300 ${
                          darkMode
                            ? 'from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600'
                            : 'from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600'
                        }`}
                      >
                        {t.projects.cta}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-4">
              <h3
                className={`text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${
                  darkMode
                    ? 'from-pink-500 to-violet-500'
                    : 'from-blue-600 to-cyan-500'
                }`}
              >
                {t.contact.title}
              </h3>
              <form
                className={`max-w-lg mx-auto p-8 rounded-lg shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-pink-300' : 'text-blue-700'
                    }`}
                  >
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${
                      darkMode
                        ? 'bg-gray-700 border border-gray-600 focus:ring-pink-500 text-pink-100'
                        : 'bg-white border border-blue-300 focus:ring-blue-500 text-blue-900'
                    }`}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-pink-300' : 'text-blue-700'
                    }`}
                  >
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${
                      darkMode
                        ? 'bg-gray-700 border border-gray-600 focus:ring-pink-500 text-pink-100'
                        : 'bg-white border border-blue-300 focus:ring-blue-500 text-blue-900'
                    }`}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-pink-300' : 'text-blue-700'
                    }`}
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${
                      darkMode
                        ? 'bg-gray-700 border border-gray-600 focus:ring-pink-500 text-pink-100'
                        : 'bg-white border border-blue-300 focus:ring-blue-500 text-blue-900'
                    }`}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r text-white px-6 py-3 rounded-md font-semibold transition duration-300 shadow-lg ${
                    darkMode
                      ? 'from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 shadow-pink-500/50 hover:shadow-pink-500/75'
                      : 'from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-blue-500/50 hover:shadow-blue-500/75'
                  }`}
                >
                  {t.contact.send}
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer
          className={`py-6 text-center ${
            darkMode ? 'text-pink-400' : 'text-gray-600'
          }`}
        >
          <p>{t.footer}</p>
        </footer>
      </div>
    </div>
  );
}
