'use client';

import React, { useState } from 'react';
import { translations } from './path/to/translations'; // Adjust the path accordingly
import { JavaOriginal, JavascriptOriginal, Html5Original, Css3Original, AzuresqldatabaseOriginal, ReactOriginal, SpringOriginal } from 'some-icon-library'; // Import your icon components
import { SunIcon, MoonIcon, GlobeIcon } from 'some-icon-library'; // Import your icons
import { Sheet, SheetTrigger, SheetContent } from 'some-ui-library'; // Import your sheet component

export default function Component() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'pt' ? 'en' : 'pt');

  const t = translations[language];

  const skillIcons = {
    Java: <JavaOriginal size={24} />,
    Javascript: <JavascriptOriginal size={24} />,
    Html: <Html5Original size={24} />,
    Css: <Css3Original size={24} />,
    SQL: <AzuresqldatabaseOriginal size={24} />,
    React: <ReactOriginal size={24} />,
    Spring: <SpringOriginal size={24} />,
  };

  const NavItems = ({ mobile = false }) => (
    <ul className={`${mobile ? 'flex flex-col space-y-4' : 'hidden md:flex md:space-x-6'}`}>
      {t.nav.map((item) => (
        <li key={item}>
          <a
            href={`#${t.sectionIds[item.toLowerCase()]}`} // Ensure correct section ID
            className={`text-base md:text-lg font-medium transition duration-300 relative group ${
              darkMode
                ? 'text-violet-400 hover:text-pink-500'
                : 'text-blue-500 hover:text-cyan-500'
            }`}
            onClick={() => setIsMenuOpen(false)}
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
    </ul>
  );

  return (
    <div
      className={`min-h-screen ${darkMode ? 'bg-gray-900 text-pink-100' : 'bg-blue-50 text-blue-900'}`}
    >
      <div className={`fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none ${darkMode ? '' : 'invert'}`} />
      <div className="relative">
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-md ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <h1 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-pink-500 to-violet-500' : 'from-blue-500 to-cyan-500'}`}>
                {t.name}
              </h1>
              <div className="flex items-center space-x-6">
                <NavItems />
                <div className="hidden md:flex items-center space-x-2">
                  <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                      darkMode
                        ? 'bg-gray-700 text-yellow-300 hover:bg-gray-200 hover:text-blue-500'
                        : 'bg-gray-200 text-blue-500 hover:bg-gray-700 hover:text-yellow-300'
                    }`}
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={toggleLanguage}
                    className={`p-2 rounded-full transition-all duration-300 transform hover:[transform:rotateY(180deg)] ${
                      darkMode
                        ? 'bg-gray-700 text-yellow-300'
                        : 'bg-gray-200 text-blue-500'
                    }`}
                    aria-label={language === 'en' ? "Switch to Portuguese" : "Switch to English"}
                  >
                    <GlobeIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <button
                        className={`p-2 rounded-md ${darkMode ? 'bg-gray-700 text-pink-200' : 'bg-gray-200 text-blue-500'}`}
                        aria-label="Open menu"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className={`w-[300px] sm:w-[400px] ${darkMode ? 'bg-gray-800 text-pink-100' : 'bg-white text-blue-900'}`}
                    >
                      <div className="flex flex-col h-full justify-between py-6">
                        <div className="space-y-4">
                          <NavItems mobile />
                        </div>
                        <div className="flex justify-center space-x-4">
                          <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                              darkMode
                                ? 'bg-gray-700 text-yellow-300 hover:bg-gray-200 hover:text-blue-500'
                                : 'bg-gray-200 text-blue-500 hover:bg-gray-700 hover:text-yellow-300'
                            }`}
                            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                          >
                            {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                          </button>
                          <button
                            onClick={toggleLanguage}
                            className={`p-2 rounded-full transition-all duration-300 transform hover:[transform:rotateY(180deg)] ${
                              darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-blue-500'
                            }`}
                            aria-label={language === 'en' ? "Switch to Portuguese" : "Switch to English"}
                          >
                            <GlobeIcon className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          <section
            id={sectionIds.home}
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
                className={`text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
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
                className={`text-lg md:text-xl mb-8 ${
                  darkMode
                    ? 'text-violet-300'
                    : 'text-white'
                }`}
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

          <section id={sectionIds.about} className="py-20 relative">
            <div className="container mx-auto px-4">
              <h3
                className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${
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
                        className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-transform duration-300 hover:scale-105 ${
                          darkMode ? 'bg-gray-800' : 'bg-gray-200'
                        }`}
                      >
                        {skillIcons[skill] || (
                          <div
                            className={`w-6 h-6 rounded-full ${
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

          <section id={sectionIds.projects} className="py-20 relative">
            <div className="container mx-auto px-4">
              <h3
                className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${
                  darkMode
                    ? 'from-violet-400 to-pink-500'
                    : 'from-blue-600 to-cyan-500'
                }`}
              >
                {t.projects.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {[1, 2, 3].map((project) => (
                  <motion.div
                    key={project}
                    whileHover={{ scale: 1.05 }}
                    className={`rounded-lg shadow-lg overflow-hidden ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    }`}
                    style={{ minWidth: '300px',
                  maxWidth: '600px' }}
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

          <section id={sectionIds.contact} className="py-20 relative">
            <div className="container mx-auto px-4">
              <h3
                className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${
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
