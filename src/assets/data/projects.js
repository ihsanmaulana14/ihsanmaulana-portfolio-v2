import { v4 as uuidv4 } from 'uuid';
import portfolioImg from '../images/projects/ihsan-portfolio.jpg';
import drumMachineImg from '../images/projects/project-drum-machine.JPG';
import markdownPreviewerImg from '../images/projects/project-markdown-previewer.JPG';
import randomQuoteMachineImg from '../images/projects/project-random-quote-machine.JPG';
import jsCalculatorImg from '../images/projects/project-javascript-calculator.JPG';
import ClockAppImg from '../images/projects/project-25+5clock-app.JPG';

const projects = [
  {
    id: uuidv4(),
    name: 'Ihsan Maulana Portfolio website',
    desc:
      'This is my personal website portfolio , create with html, css, and react js.',
    img: portfolioImg,
    projectLink: 'https://ihsanmaulana-portfolio.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'drum machine - freecodecamp',
    desc: 'A website to play drums online on mobile and desktop devices.',
    img: drumMachineImg,
    projectLink: 'https://ihsanmaulana14.github.io/a_project_drum_machine/',
  },
  {
    id: uuidv4(),
    name: 'Markdown Previewer - freecodecamp',
    desc:
      'A website to help make it easier to edit the text and at the same time the view that is generated.',
    img: markdownPreviewerImg,
    projectLink: 'https://ihsanmaulana14.github.io/MarkdownPreviewer/',
  },
  {
    id: uuidv4(),
    name: 'Random Quote Machine - freecodecamp',
    desc:
      'This is a web aplication to see recommendations of quotes and you can post these quotes if you want.',
    img: randomQuoteMachineImg,
    projectLink:
      'https://ihsanmaulana14.github.io/a_bootstrap_random_quote_machine/',
  },
  {
    id: uuidv4(),
    name: 'JavaScrpipt Calculator - freecodecamp',
    desc:
      'This is a web application for calculating arithmetic wherever you are.',
    img: jsCalculatorImg,
    projectLink: 'https://ihsanmaulana14.github.io/a_js_calculator/',
  },
  {
    id: uuidv4(),
    name: '25 + 5 Clock App - freecodecamp',
    desc:
      'This is a website to help you figure out how long it takes you to do something.',
    img: ClockAppImg,
    projectLink: 'https://ihsanmaulana14.github.io/a_25_5_clock/',
  },
];

export default projects;
