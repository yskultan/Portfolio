import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: ["Юлия Скултан", "Yulia Skultan"],
    description: ["Я фронтенд разработчица из Красноярска. Хорошо знаю Vue.js. Вот мое портфолио.", "I'm a frontend developer specialized in Vue.js. Here's my portfolio website."],
    languages: ["ru", "en"],
    header: {
        en: {
            hello: "Hey there, I'm",
            quote: "{ translate great ideas into code }",
            description: [
                "I'm a frontend developer and web designer based in Krasnoyarsk, Russia! I'm ",
                " years old. I’m specialized in Vue.js and have professional experience working with React.js and Python.",
            ],
            label: "Get in Touch"
        },
        ru: {
            hello: "Привет, меня зовут",
            quote: "{ перевожу крутые идеи в код }",
            description: [
                "Я фронтенд разработчица и веб-дизайнер из Красноярска. Мне ",
                " год. Люблю Vue.js, но также неплохо разбираюсь в React.js и Python.",
            ],
            label: "Написать"
        },
    },
    profile: {
        birthDay: new Date(1999, 6, 5),
        en: {
            title: "About Me",
            name: "Yulia",
            surname: "Skultan",
            startDescription: "I’m Yulia",
            description:
            ", vice European champion in checkers, MVP of European championship in basketball and head of student organizational comitteee. It proves that I always achieve my goals, know how to work in a team, also that I'm persistent and initiative. I love challenging tasks and challenging myself. Oh, and by the way I have a good sense of humor.",
    },
        ru: {
            title: "Обо мне",
            name: "Юлия",
            surname: "Скултан",
            startDescription: "Я Юля",
            description:
                ", чемпионка Европы по шашкам, лучший игрок Чемпионата Европы по баскетболу, руководитель организационного комитета института. Это доказывает то, что я всегда добиваюсь своих целей, умею работать в команде, а также отличаюсь упорством и инициативностью. Люблю решать сложные задачи и развиваться. А еще я неплохо шучу",
        },
    },
    technologies: {
        en: { 
            title: "Skills",
            subtitles: ["Programming", "Frameworks", "Tools", "Experience"]
        },
        ru: { 
            title: "Навыки",
            subtitles: ["Разработка", "Фреймворки", "Инструменты", "Опыт"]
        },
        programming:  [
            { name: "Vue.js", level: 90 },
            { name: "React.js", level: 70 },
            { name: "HTML & (S)CSS", level: 80 },
            { name: "JavaScript", level: 60 }
        ],
        libraries: [
            { name: "Bootstrap", level: 86 },
            { name: "Tailwind", level: 70 },
            { name: "Vuetify", level: 60 },
            { name: "Vuesax", level: 65 }
        ],
        tools:[
            { name: "git" },
            { name: "webpack" },
            { name: "docker" },
            { name: "figma" }
        ]
    },
    projectsPage: {
        en: {
            title: "Projects",
            description: "A list of my more relevant projects. I like to learn new technologies while doing side projects afterwork."
        },
        ru: {
            title: "Проекты",
            description: "Список моих наиболее интересных проектов. Мне нравится изучать новые технологии в свободное от работы время."
        },
    },
    projects: {
        en: [{
            name: "Admin dashboard",
            description: "This admin panel was created for studying Vuesax. There are all the components from the docs and a couple of pages using them.",
            link: "https://github.com/yskultan/Admin-dashboard",
            icon: "chart-bar",
            startDate: "August 7, 2019",
            endDate: "Present",
            developer: "yskultan",
            tags: [
                { name: "#vue" },
                { name: "#vuesax" }
            ]
        },{
            name: "Mapbox app",
            description: "I created this app while learning QGIS for studying. It is an interactive map where you can add your own markers.",
            link: "https://github.com/yskultan/Mapbox-app",
            icon: "map",
            startDate: "Sep 20, 2018",
            endDate: "Present",
            developer: "yskultan",
            tags: [
                { name: "#vue" },
                { name: "#mapbox" }
            ]
        },{
            name: "Portfolio",
            description: "I always wanted to create portfolio website. After working with TailwindCSS I decided that with this library it would be really easy and fast.",
            link: "https://github.com/yskultan/Portfolio",
            icon: "address-card",
            startDate: "Dec 20, 2019",
            endDate: "Present",
            developer: "yskultan",
            tags: [
                { name: "#vue" },
                { name: "#tailwindcss" }
            ]
        }],
        ru: [{ 
            name: "Админ панель",
            description: "Эта админ панель была создана пока я изучала Vuesax. Там находятся все компоненты из документации. а также страницы с их использованием.",
            link: "https://github.com/yskultan/Admin-dashboard",
            icon: "chart-bar",
            startDate: "Авг 7, 2019",
            endDate: "Сейчас",
            developer: "yskultan",
            tags: [
                { name: "#vue" },
                { name: "#vuesax" }
            ]
        },{
            name: "Mapbox приложение",
            description: "Я создала это приложение пока изучала QGIS в институте. Это интерактивная карта, где можно добавить свои маркеры.",
            link: "https://github.com/yskultan/Mapbox-app",
            icon: "map",
            startDate: "Сен 20, 2018",
            endDate: "Сейчас",
            developer: "yskultan",
            tags: [
                { name: "#vue" },
                { name: "#mapbox" }
            ]
        },{
            name: "Портфолио",
            description: "Я всегда хотела создать сайт-портфолио. После работы с TailwindCSS я поняла, что с его помощью я смогу создать сайт быстро и легко.",
            link: "https://github.com/yskultan/Portfolio",
            icon: "address-card",
            startDate: "Дек 20, 2019",
            endDate: "Сейчас",
            developer: "yskultan",
            tags: [
                { name: "#vue" },
                { name: "#tailwindcss" }
            ]
        }
    ]}, 
    events: {
        en: [{ 
            name: "SibFU",
            description: "php, drupal, vue.js, flask",
            role: "Senior programmer",
            type: "work",
            startDate: "Jun 2020",
            endDate: "Present",
            roles:[
                {description:" Separated russian and english versions of main website" },
                {description:" Developed new feature in main website for schedules (xlsx files parsing)" },
                {description:" Developed new website on Vue.js and Flask" }
            ]
        }, { 
            name: "Sibdev",
            description: "vue.js, rest api, jest, vuex",
            role: "Junior frontend developer",
            type: "work",
            startDate: "Jun 2019",
            endDate: "Dec 2019",
            roles:[
                {description:" Developed Vue.js SPA" },
                {description:" Wrote unit-tests" },
                {description:" Worked with axios and vuex" },
            ]
        }, { 
            name: "Aspirity",
            description: "figma, sketch, adobe xd",
            role: "UI/UX designer ",
            type: "work",
            startDate: "Jun 2018",
            endDate: "Dec 2018",
            roles:[
                {description:" Created mockup of landing page in Figma" },
                {description:" Created prototypes in Sketch" },
                {description:" Created brandbook" },
            ]
        }, { 
            name: "SibFU",
            description: "information systems and technologies",
            role: "Student",
            type: "education",
            startDate: "Sep 2017",
            endDate: "Jun 2021",
            roles:[
                { description:" Learned OOP programing with C#. " },
                { description:" Learned HTML, CSS, JS and Python " },
                { description:" Learned guidelines of design " },
                { description:" Learned basics of networks and their structure. " }
            ]
        }],
        ru: [{ 
            name: "СФУ",
            description: "php, drupal, vue.js, flask",
            role: "Старший программист",
            type: "работа",
            startDate: "Июнь 2020",
            endDate: "Сейчас",
            roles:[
                {description:" Отделила английскую версию основго сайта от русской" },
                {description:" Разработала новую функцию на основном сайте (парсинг xlsx файлов)" },
                {description:" Разработала новый сайт с помощью Vue.js и Flask" }
            ]
        }, { 
            name: "Sibdev",
            description: "vue.js, rest api, jest, vuex",
            role: "Junior фронтенд разработчик",
            type: "работа",
            startDate: "Июнь 2019",
            endDate: "Дек 2019",
            roles:[
                {description:" Разработала SPA на Vue.js" },
                {description:" Писала unit-тесты" },
                {description:" Поработала с axios и vuex" },
            ]
        }, { 
            name: "Aspirity",
            description: "figma, sketch, adobe xd",
            role: "UI/UX дизайнер ",
            type: "работа",
            startDate: "Июнь 2018",
            endDate: "Дек 2018",
            roles:[
                {description:" Создала макет лэндинга в Figma" },
                {description:" Создала прототип сайта в Sketch" },
                {description:" Сделала брендбук" },
            ]
        }, { 
            name: "СФУ",
            description: "Институт Космических и Информационных Технологий",
            role: "студентка",
            type: "образование",
            startDate: "Сен 2017",
            endDate: "Июнь 2021",
            roles:[
                { description:" Изучила ООП на примере C#" },
                { description:" Изучила HTML, CSS, JS and Python " },
                { description:" Изучила гайдлайны и стандарты дизайна" },
                { description:" Получила базовые знания о сетях, серверах и протоколах" }
            ]
        }
    ]}, 
    contactsPage: {
        en: {
            title: "Contacts",
            description: "I'm currently looking for a fulltime or part-time job. My inbox is always open. Whether for a potential project or idea, I'll try my best to answer your email!",
            label: "Get in touch",
            subtitle: "where else you can find me"
        },
        ru: {
            title: "Контакты",
            description: "В данный момент я ищу работу с полной или частичной занятостью. Вы всегда можете мне написать насчет потенциального проекта или идеи. Я постараюсь ответить на ваше сообщение.",
            label: "Написать",
            subtitle: "также вы можете найти меня здесь"
        },
    },
    socials: [ 
        {
            name: "Github",
            link: "https://github.com/yskultan",
            icon: "github" 
        }, {
            name: "Twitter",
            link: "https://twitter.com/yskultan",
            icon: "twitter" 
        }, {
            name: "Instagram",
            link: "https://www.instagram.com/yskultan",
            icon: "instagram" 
        }, {
            name: "Vkontakte",
            link: "https://vk.com/yskultan",
            icon: "vk" 
        },
    ]
},

    getters: { 
        age: state => {
            let ageDiff = Date.now() - state.profile.birthDay;
            let ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        profile: state => state.profile,
        header: state => state.header,
        projectsPage: state => state.projectsPage,
        projects: state => state.projects,
        technologies: state => state.technologies,
        events: state => state.events,
        socials: state => state.socials,
        contactsPage: state => state.contactsPage,
        language: state => state.languages[0],
        translation: state => state.languages[1],
        title: state => state.title[0],
        description: state => state.description[0],
    },
    mutations: {
        change_lang(state) {
            state.languages = [state.languages[1], state.languages[0]]
            state.title = [state.title[1], state.title[0]]
            state.description = [state.description[1], state.description[0]]
        },
    },
    actions: {}
});
