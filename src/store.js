import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: ["Юлия Скултан", "Yulia Skultan"],
    description: ["Я фуллстак разработчица с уклоном во фронтенд из Красноярска. Хорошо знаю Vue.js. Вот мое портфолио.", "I'm a fullstack developer specialized in frontend and Vue.js. Here's my portfolio website."],
    languages: ["ru", "en"],
    header: {
        en: {
            hello: "Hey there, I'm",
            quote: "{ translate great ideas into code }",
            description: [
                "I'm a fullstack developer specialized in frontendÍ based in Krasnoyarsk, Russia! I'm ",
                " years old. I’m specialized in Vue.js and have professional experience working with Node.js and MongoDB",
            ],
            label: "Get in Touch"
        },
        ru: {
            hello: "Привет, меня зовут",
            quote: "{ перевожу крутые идеи в код }",
            description: [
                "Я фуллстак разработчица с уклоном во фронтенд из Красноярска. Мне ",
                " год. Люблю Vue.js, но также неплохо разбираюсь в Node.js и MongoDB.",
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
            subtitles: ["Frontend", "Backend", "Tools", "Experience"]
        },
        ru: { 
            title: "Навыки",
            subtitles: ["Фронтенд", "Бэкенд", "Инструменты", "Опыт"]
        },
        frontend:  [
            { name: "Vue.js", level: 90 },
            { name: "React.js", level: 70 },
            { name: "HTML & (S)CSS", level: 80 },
            { name: "JavaScript", level: 60 }
        ],
        backend: [
            { name: "Node.js", level: 70 },
            { name: "Express", level: 80 },
            { name: "MongoDB", level: 60 },
            { name: "Mongoose", level: 65 }
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
            name: "Advertisment aggregator",
            description: "This website aggregates thousands of advs from 6 sources in realtime. Backend and frontend was created by me. Also there is map support.",
            link: "https://skyliner24.ru",
            icon: "home",
            startDate: "May 16, 2021",
            endDate: "Jun 8, 2021",
            developer: "yskultan",
            tags: [
                { name: "#node.js" },
                { name: "#vue" },
                { name: "#mongodb" }
            ]
        },{
            name: "Form with zip import/export",
            description: "This form allows you to save form data such as text, images, files to zip archive and then import it for editing",
            link: "https://github.com/yskultan/Form-with-ZIP-import-export",
            icon: "file-archive",
            startDate: "Oct 17, 2020",
            endDate: "Nov 10, 2020",
            developer: "yskultan",
            tags: [
                { name: "#vue" },
                { name: "#base64" },
                { name: "#blob" },
            ]
        },{
            name: "Portfolio",
            description: "I always wanted to create portfolio website. After working with TailwindCSS I decided that with this library it would be really easy and fast.",
            link: "https://github.com/yskultan/Portfolio",
            icon: "address-card",
            startDate: "Dec 20, 2019",
            endDate: "Jan 15, 2020",
            developer: "yskultan",
            tags: [
                { name: "#vue" },
                { name: "#tailwindcss" }
            ]
        }],
        ru: [{ 
            name: "Агрегатор объявлений",
            description: "Сайт агрегирует объявления с 6 популярных досок (авито, n1 итд). Серверная и клиентская часть была написана мной. Есть возможность поиска по карте.",
            link: "https://skyliner24.ru",
            icon: "home",
            startDate: "Май 16, 2021",
            endDate: "Июн 8, 2021",
            developer: "yskultan",
            tags: [
                { name: "#node.js" },
                { name: "#vue" },
                { name: "#mongodb" }
            ]
        },{
            name: "Форма с сохранением и открытием из zip",
            description: "Эта форма позволяет сохранять картинки/файлы/текст в единый архив с последующим его открытием и редактированием.",
            link: "https://github.com/yskultan/Form-with-ZIP-import-export",
            icon: "file-archive",
            startDate: "Окт 17, 2020",
            endDate: "Ноя 10, 2020",
            developer: "yskultan",
            tags: [
                { name: "#vue" },
                { name: "#base64" },
                { name: "#blob" },
            ]
        },{
            name: "Портфолио",
            description: "Я всегда хотела создать сайт-портфолио. После работы с TailwindCSS я поняла, что с его помощью я смогу создать сайт быстро и легко.",
            link: "https://github.com/yskultan/Portfolio",
            icon: "address-card",
            startDate: "Дек 20, 2019",
            endDate: "Янв 15, 2020",
            developer: "yskultan",
            tags: [
                { name: "#vue" },
                { name: "#tailwindcss" }
            ]
        }
    ]}, 
    events: {
        en: [{ 
            name: "Razlet.ru",
            description: "php, vue.js, jest, rest api",
            role: "Middle frontend developer",
            type: "work",
            startDate: "Mar 2021",
            endDate: "Present",
            roles:[
                {description:" Maintained two website on Vue.js" },
                {description:" Developed new feature for filling form from barcode scan, payment and receipt printing" },
            ]
        }, { 
            name: "SibFU",
            description: "php, drupal, vue.js, flask",
            role: "Senior programmer",
            type: "work",
            startDate: "Jun 2020",
            endDate: "Mar 2021",
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
            name: "Razlet.ru",
            description: "php, vue.js, jest, rest api",
            role: "Middle фронтенд разработчик",
            type: "работа",
            startDate: "Март 2021",
            endDate: "Сейчас",
            roles:[
                {description:" Поддержка двух сайтов на Vue.js" },
                {description:" Разработала новый раздел с заполнением формы из штрихкода, оплатой и печатью билета" },
            ]
        },{ 
            name: "СФУ",
            description: "php, drupal, vue.js, flask",
            role: "Старший программист",
            type: "работа",
            startDate: "Июнь 2020",
            endDate: "Март 2021",
            roles:[
                {description:" Отделила английскую версию основного сайта от русской" },
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
