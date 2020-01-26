import project1 from '../assets/My React-Redux Porfolio-Image.png';
import project2 from '../assets/SiteTDD-Docker-Image.png';
import project3 from '../assets/Project-Python-TravisCI-Image.png';
import project4 from '../assets/Cristal-Collector-Game-Image.png';

// SCREAM CASE syntax is in the varible PROJECTS, for global variables
// Add id to each object in the array to identify each obj separately
const PROJECTS = [
    {   
        id: 1,
        title: 'My React-Redux Porfolio',
        description: 'React porfolio built with major Reactjs concepts such as router, redux, and HOC',
        link: 'https://github.com/jeancarlov/myPortfolio',
        image: project1
    },
    {
        id: 2,
        title: 'SiteTDD-Docker',
        description: 'Ptyhon Django application built with Docker, SSL, and Nginx for scalability',
        link: 'https://github.com/jeancarlov/site_tdd',
        website: 'https://jcv123.xyz/about',
        image: project2
    },
    {
        id: 3,
        title: 'Project-Python-TravisCI',
        description: 'Ptyhon Django application built with TravisCI, SSL, and Nginx for scalability',
        link: 'https://github.com/jeancarlov/projectPython',
        website: 'https://jcvtest.xyz/',
        image: project3
    },
    {
        id: 4,
        title: 'Cristal-Collector-Game',
        description: 'This is an interactive game design with the apply technologies of Bootstrap, JavaScript, and Jquery.',
        link: 'https://github.com/jeancarlov/unit-4-game',
        website: 'https://jeancarlov.github.io/unit-4-game/',
        image: project4
    }
    // {
    //     id: 5,
    //     title: 'Google-Firebase-Train',
    //     description: 'Ptyhon Django application built with TravisCI, SSL, and Nginx for scalability',
    //     link: 'https://github.com/jeancarlov/Firebase-train-homework',
    //     website: 'https://jeancarlov.github.io/Firebase-train-homework/',
    //     image: project3
    // },
    // {
    //     id: 6,
    //     title: 'GACmaintenance',
    //     description: 'PHP and CMS application built with HTML, CSS, JavasScript and Apache server',
    //     link: '',
    //     website: 'https://gacmaintenance.com/',
    //     image: project3
    // }
];

export default PROJECTS