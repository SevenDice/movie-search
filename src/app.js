"use strict";

import Main from './views/pages/Main.js'
import Action_setA from './views/pages/Action_setA.js'
import Action_setB from './views/pages/Action_setB.js'
import Action_setC from './views/pages/Action_setC.js'
import Adjective from './views/pages/Adjective.js'
import Animal_setA from './views/pages/Animal_setA.js'
import Animal_setB from './views/pages/Animal_setB.js'
import Template1 from './views/pages/Template1.js'
import Template2 from './views/pages/Template2.js'

import Sidenav from './views/components/Sidenav.js'

import Utils from './services/Utils.js'

// List of supported routes
const routes = {
  '/'             : Main
  , '/action_set-a'      : Action_setA
  , '/action_set-b'      : Action_setB
  , '/action_set-c'      : Action_setC
  , '/adjective'      : Adjective
  , '/animal_set-a'      : Animal_setA
  , '/animal_set-b'      : Animal_setB
  , '/template1'      : Template1
  , '/template2'      : Template2
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