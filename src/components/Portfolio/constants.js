export const NAMES = [
    'Concert Viewer',
    'Pirate Game',
    'Chess',
    'Portfolio'
];

export const URLS = {
    ConcertViewer: '',
    PirateGame: 'https://alexscasa.github.io/pirates/',
    Chess: 'https://alexscasa.github.io/chess/',
    Portfolio: 'http://www.alexhouse.tech'
};

export const REPOS = {
    ConcertViewer: 'https://github.com/alexscasa/concerts',
    PirateGame: 'https://github.com/alexscasa/pirates',
    Chess: 'https://github.com/alexscasa/chess',
    Portfolio: 'https://github.com/alexscasa/portfolio'
};

export const NOTES = {
    ConcertViewer: 'This project was developed using PHP.  I developed this application to allow me to browse concerts at my favorite venues easily and quickly.  I soon realized the problems with web scraping, such as changing web page structures that required an updated scraper and odd encoding issues, and have since abandoned the project.  It also features responsive design with Bootstrap and AJAX queries to my PHP scripts using jQuery.',
    PirateGame: 'This project was developed using Phaser, a javascript game engine.  I developed this game to practice with client side scripting as well as machine learning.  The AI utilizes a basic reinforcement learning algorithm, but could be improved using a neural network and a more accurate reward algorithm.  I planned, and still hope, to incorporate peer to peer multiplayer.  Unfortunately this requires at least a signaling server, so has been delayed to reduce costs of the project.',
    Chess: 'This project was developed using BabylonJS, a javascript 3D game engine.  I developed this game to get a feel for 3D game development for the browser in a familiar language.  There is an issue with the collision detection that has yet to be solved.  I plan to incorporate multiplayer features and an unsupervised learning algorithm after fixing the collision detection.  A long term goal is to integrate VR support, creating a unique atmosphere to play chess in against opponents, human or AI, in a variety of environments through the use of 360 degree video.',
    Portfolio: 'This project was developed using ReactJS, react-router, and react-bootstrap.  I developed this website to host my portfolio as well as learn React and its associated libraries.  It was originally built with React and Redux, however issues with navigation prove to be too challenging.  For this attempt, I used the built-in state management and react-router for navigation. I used the front-end libraries  Bootstrap to provide a repsonsive and minimalist design.  Hosting is provided through Github Pages and integrated with Travis CI for CI/CD through GitHub. In the future, I would like to shift to redux for state management to learn how to integrate it with react-router. There are also issues with some of the third-party libraries (specifically react-pdf) that still need to be addressed.'
};

export const THANKS = {
    ConcertViewer: [
        '9:30 Club and the 8x10 for not restricting scraping in their ToS or ceasing my operations during development and testing.',
  
    ],
    PirateGame: [
        'Pirate ship by Bleed,http://remusprites.carbonmade.com/',
        'Cannonball by Dionelou,http://DontMind8.blogspot.com',
        'Music by Matthew Pablo,http://www.matthewpablo.com'
    ],
    Chess: [
        'Chess Pieces by Clint Bellanger,https://opengameart.org/content/chess-pieces-0',
        'Chess Board by Pennomi (except for one texture *see below*),https://opengameart.org/content/chess-board',
        'Chess Board\'s White Square texture by Tiziana,https://opengameart.org/node/6988'
    ]
};