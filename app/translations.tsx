interface SectionIds {
  home: string;
  about: string;
  projects: string;
  contact: string;
}

interface Translations {
  name: string;
  nav: string[];
  sectionIds: SectionIds; // Definindo o tipo para sectionIds
}
export const translations = {
  en: {
    name: 'Guilherme Santos',
    nav: ['Home', 'About', 'Projects', 'Contact'],
    sectionIds: ['home','about', 'projects','contact'],
    hero: {
      title: 'Welcome to my portfolio!',
      subtitle: 'Here you will find a selection of my projects and experiences as a developer. Feel free to explore!',
      cta: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      p1: 'I am a Systems Analysis and Development student, technology enthusiast, and passionate about software development. In this space, you will find a collection of my projects, where I put into practice everything I learn about Java, Spring, design patterns, MVC, software testing, databases, and much more. In addition, I always strive to stay updated and apply my knowledge in HTML, CSS, JavaScript, SQL, and React.',
      p2: 'When I am not developing, you can find me playing video games, trying new recipes, exercising, or learning something new.',
    },
    skills: ['Html', 'Css', 'Javascript', 'Java', 'SQL', 'React', 'Spring'],
    projects: {
      title: 'Under construction',
      description: 'Coming soon.',
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
    sectionIds: ['home','about', 'projects','contact'],
    hero: {
      title: 'Bem-vindo ao meu portfólio!',
      subtitle: 'Aqui você encontrará uma seleção dos meus projetos e experiências como desenvolvedor. Sinta-se à vontade para explorar!',
      cta: 'Entre em Contato',
    },
    about: {
      title: 'Sobre Mim',
      p1: 'Estudante de Análise e Desenvolvimento de Sistemas, entusiasta da tecnologia e apaixonado por desenvolvimento de softwares. Neste espaço, você encontrará uma coleção dos meus projetos, onde coloco em prática tudo que aprendo sobre Java, Spring, design patterns, MVC, testes de software, banco de Dados e muito mais. Além disso procuro sempre me atualizar e colocar em praticar meu conhecimento em HTML, CSS, JavaScript, SQL e React.',
      p2: 'Quando não estou desenvolvendo, você pode me encontrar jogando videogames, testando receitas novas, praticando exercícios ou aprendendo algo novo.',
    },
    skills: ['Html', 'Css', 'Javascript', 'Java', 'SQL', 'React', 'Spring'],
    projects: {
      title: 'Em construção',
      description: 'Em breve.',
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
