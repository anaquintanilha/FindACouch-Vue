Project to pratice router and vuex
this project is not mobile optimize
using dummy data for now

---

-Run npm install in the extracted project folder to install all required dependencies => This
will create a node_modules folder

-Run npm run serve to bring up the development server, view the app at localhost:8080
(or whichever port is shown in your terminal)

-Run npm build to build the project to publish

---

/src

app.vue - page base
main.js - create vue app
router.js - urls defenition

/store

    /coaches - store of coaches
    /requests

/pages

    NotFound.vue - page 404
    /coaches - pages for coaches (registation, list and details)
    /requests - pages for messages

/components

    /base - common desings
    /coaches - components related to coaches
    /layout - components used every page (Header)
