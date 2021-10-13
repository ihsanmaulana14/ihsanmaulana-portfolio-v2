import { v4 as uuidv4 } from 'uuid';
import drumMachineImg from '../images/projects/project-drum-machine.JPG';
import markdownPreviewerImg from '../images/projects/project-markdown-previewer.JPG';
import randomQuoteMachineImg from '../images/projects/project-random-quote-machine.JPG';
import jsCalculatorImg from '../images/projects/project-javascript-calculator.JPG';
import ClockAppImg from '../images/projects/project-25+5clock-app.JPG';

const projects = [
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
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: randomQuoteMachineImg,
    projectLink:
      'https://ihsanmaulana14.github.io/a_bootstrap_random_quote_machine/',
  },
  {
    id: uuidv4(),
    name: 'JavaScrpipt Calculator - freecodecamp',
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: jsCalculatorImg,
    projectLink: 'https://ihsanmaulana14.github.io/a_js_calculator/',
  },
  {
    id: uuidv4(),
    name: '25 + 5 Clock App - freecodecamp',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ClockAppImg,
    projectLink: 'https://ihsanmaulana14.github.io/a_25_5_clock/',
  },
];

export default projects;
