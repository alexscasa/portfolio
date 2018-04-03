export const PAGES = [
    'About Me',
    'Portfolio',
    'Resume',
    'Contact'
];

export const PROJECTS = [
  'Pirate Game',
  '3D Chess',
  'Other Projects'
];

export const PROJECT_URLS = [
    '/projects/pirates/index.html',
    '/projects/chess/index.html'
];

export const PROJECT_NOTES = [
    'This project was developed using Phaser, a javascript game engine.  I developed this game to practice with client side scripting as well as machine learning.  The AI utilizes a basic reinforcement learning algorithm, but could be improved using a neural network and a more accurate reward algorithm.  I planned, and hope, to incorporate peer to peer multiplayer.  Unfortunately this requires at least a signaling server, so has been delayed to reduce costs of the project.',
    'This project was developed using BabylonJS, a javascript 3D game engine.  I developed this game to get a feel for 3D game development in a familiar language.  There is an issue with the collision detection and it has yet to be solved.  I plan to incorporate multiplayer features and a neural network learning algorithm into this game at some point, after fixing the collision detection.  I also plan to integrate VR support with the goal to create a casual atmosphere to play chess in VR with friends and strangers in interesting environments through the use of 360 video.'
];

export const PROJECT_THANKS = [
    'Special thanks to: _____ for the sprites and _____ for the music!',
    'Special thanks to: _____ for the models and ______ for the textures!'
];


export const OTHER_PROJECTS = [
    'ConcertViewer',
    'WeatherCompair',
    'Portfolio'
];

export const OTHER_NOTES = [
    'This project was developed using PHP.  I developed this application to allow me to browse concerts at my favorite venues easily and quickly.  I soon realized the problems with web scraping, such as changing web page structure that require an updated scraper and odd encoding issues, and have since abandoned the project.  It also features responsive design with Bootstrap and AJAX queries to my PHP scripts using jQuery.',
    'This project was developed using Angular2.  The purpose of this application was to allow users to obtain current weather data based on a provided location, as well as provide users with a compairison of the same weather data available for that location from a given year.  This would, in theory, allow users to see the changes in their current weather with what has been observered throughout history. This project has been abandoned due to breaking changes that occurred when upgrading to Angular 3, and due to this difficulty I have stopped using Angular as my primary frontend framework since their roadmap continues this trend.',
    'This project was developed using ReactJS and Redux.  I developed this website to host my portfolio as well as learn React and Redux.  I used Redux for state management and navigation. The URL updates are mostly for show and made possible through the HTML5 History API. I also used the front-end libraries Material and Bootstrap to provide a repsonsive and modern design.  Hosting is provided through Github Pages. Some improvements for this website would be using react-router to provide a more functional navigation experience and addressing accessibility/usability concerns.'
];

export const OTHER_THANKS = [
    'Special thanks to: 930 Club and the 8x10 for not restricting scraping in their ToS or ceasing my operations during development and testing.',
    'Special thanks to Wunderground for providing their API for free, with limitations. Much appreciated despite this projects failure!'
];