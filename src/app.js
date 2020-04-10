"use strict";

import Main from './views/pages/Main.js'
import Action_setA from './views/pages/Action_setA.js'
import Action_setB from './views/pages/Action_setB.js'
import Animal_setA from './views/pages/Animal_setA.js'
import Animal_setB from './views/pages/Animal_setB.js'
import Clothes from './views/pages/Clothes.js'
import Emotion from './views/pages/Emotion.js'
import Error404     from './views/pages/Error404.js'

import Sidenav from './views/components/Sidenav.js'

import Utils from './services/Utils.js'

import Cards from './assets/cards.js'

// List of supported routes
const routes = {
  '/'             : Main
  , '/action_set-a'      : Action_setA
  , '/action_set-b'      : Action_setB
  , '/animal_set-a'      : Animal_setA
  , '/animal_set-b'      : Animal_setB
  , '/clothes'      : Clothes
  , '/emotion'      : Emotion
};

const router = async () => {

  // Load view element:
  const header = null || document.getElementById('header_container');
  const content = null || document.getElementById('page_container');

  // Render the Header of the page
  header.innerHTML = await Sidenav.render();
  await Sidenav.after_render();

  // Get the parsed URl from the addressbar
  let request = Utils.parseRequestURL()

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Error404
  content.innerHTML = await page.render();
  await page.after_render();

}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);