import Reveal from '../reveal.js/js/reveal.js';
window.Reveal = Reveal;
import '../reveal.js/css/reveal.css';
import '../reveal.js/css/theme/black.css';
Reveal.initialize();

/* Slides */
import graphqlSlide from './graphql-slide.js';

graphqlSlide('graphql-slide');
