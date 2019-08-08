<div align="center">

<p><img src="https://github.com/tamiat/tamiat/blob/master/tamiat-new-logo.png" width="48%"></p>

<p align="center">
  <a href="https://www.tamiat.org"><img src="https://img.shields.io/badge/dynamic/json.svg?uri=https://raw.githubusercontent.com/tamiat/tamiat/master/package.json&query=$.version&label=Version&prefix=v&colorB=orange" alt="Version"></a>
  <a href="https://travis-ci.org/tamiat/tamiat"><img src="https://travis-ci.org/tamiat/tamiat.svg?branch=master" alt="Build Status"></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
  <a href="https://www.tamiat.org"><img src="https://img.shields.io/website-up-down-green-red/https/www.tamiat.org.svg?label=tamiat.org" alt="Tamiat.org"></a>
  <a href="https://demo.tamiat.org"><img src="https://img.shields.io/website-up-down-green-red/https/demo.tamiat.org.svg?label=Online-Demo" alt="Online Demo"></a>
</p>

<h1>Tamiat CMS</h1>

<p>
  <strong>Tamiat headless CMS</strong>
</p>

<p>
  <sub>Made with ❤︎ by
    <a href="https://github.com/mahnouman">Mahmoud Nouman</a> and
    <a href="https://github.com/tamiat/tamiat/graphs/contributors">contributors</a>
  </sub>
</p>

</div>

---

<p align="center">
  <strong>Support our development with </strong>
  <a href="https://patreon.com/tamiatcms" target="_blank"><img src="https://s3.amazonaws.com/patreon_public_assets/toolbox/patreon.png" target="_blank" alt-text="patreon link" width="15%" margin-left="1.5em"></a>
</p>

[vue]: http://vuejs.org/
[firebase]: https://firebase.google.com/

---

<h1 text-align="center"> What It Looks Like </h1>

![posts section](https://i.imgur.com/6sfuFOv.png)
![settings section](https://i.imgur.com/gHzekpP.png)
![media section](https://i.imgur.com/gkYFzcC.png)

# Getting Started

To get started with Tamiat CMS, you have two options:

- Making Tamiat your starting point.
- Integrating Tamiat into an existing project.

## Making Tamiat Your Starting Point

1. Clone the CMS repository and install the dependencies.

```bash
# clone the repo
git clone https://github.com/tamiat/tamiat.git

# install the dependencies
npm install
# or
yarn
```

2. Go to <a href="https://console.firebase.google.com/">https://console.firebase.google.com/</a> then login with your google account.<br/>- then add your project following the steps in the image.<br/>![posts section](./public/static/img/tamiat-col-1.jpg)



3) Go to Authentication section and set up your sign-in method<br/>after that you will find "add user" Button is active you can now add your <strong>Email</strong> and <strong>Password</strong>.<br/> *you will need them later to login in tamiat*.<br/>![posts section](./public/static/img/tamiat-col-2.jpg)

4. You now see your <strong>UID</strong> copy it.<br/>now Rename `database.rules.json.tmp` file in root folder to `database.rules.json`<br/>![posts section](./public/static/img/tamiat-col-3.jpg)<br/>then add your <strong>UID</strong> in here...<br/>
```js
"rules": {
    ".write": "auth.uid === 'kkw4UkvxU8UmIDuMInYTh*****'",

```

5. Navigate to `/src/admin/firebase_config` and rename `config.js.tmp` to `config.js`<br/> then get your project configurations from WEB SETUP (_in Authentication section of firebase console_) and paste them in `config.js` file by replacing the existing ones.<br/>![posts section](./public/static/img/tamiat-col-4.jpg)

6. Now make these two steps to add storage and Realtime database<br/>![posts section](./public/static/img/tamiat-col-5.jpg)

7. Run the `firebase init` command (if you haven't installed firebase yet, do so by `npm install -g firebase-tools`), select your firebase project from the list, use the default database rules already present `database.rules.json`, choose `dist` as your public directory and configure the project as a single-page app.<br/> you can follow this steps here<br/>![posts section](./public/static/img/firebase-init.jpg)

8) Make sure `.firebaserc` is created in your project root directory and the file contains the project id of firebase project you created earlier


9. Now you should first create the dist folder by making
`npm run build` or `yarn build` then `firebase deploy` to deploy the security rules you just entered.<br/><strong>*every time you make changes in the code you should to make this steps again*</strong>

10) Run the local dev server with `npm run dev` or `yarn dev`.

11. Access the admin interface by navigating to `localhost:8080/admin`.


12) Sign in with your previous email and password.



13. (Optional) Navigate to Database menu from sidebar to add demo contents from `tamiat.config.json`

14) Enjoy!

<br>

## Integrating Tamiat Into an Existing Project

1. Create a new vue.js project based on webpack template.

```bash
vue init webpack my-project
# install webpack template dependencies
npm install
```

2. Install the required dependencies by Tamiat.

```bash
cd my-project

# install development dependencies
npm install node-sass sass-loader --save-dev

# install production dependencies
npm install moment vue-router bulma firebase vuefire font-awesome vue-quill-editor
```

3. In `main.js` file, import the external stylesheets and the necessary plugins and activate them.

```js
import router from './router'
import VueFire from 'vuefire'
import VueQuillEditor from 'vue-quill-editor'

// import external stylesheets
import fontAwesome from '../node_modules/font-awesome/css/font-awesome.css'
import bulma from '../node_modules/bulma/css/bulma.css'

Vue.use(VueFire) // activate vuefire plugin
Vue.use(VueQuillEditor) // activate vue-quill-editor
```

> **Remember, don't forget to add the `router` property to the vue instance.**

```js
new Vue({
  el: '#app',
  router, // this property should be added to the vue instance
  template: '<App/>',
  components: { App }
})
```

4. Clean up your `App.vue` file by deleting the extra content and making it similar to that:

```html
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
```

5. Now, open the Tamiat CMS repo and copy the following folders and files:

##### Folders to be copied:

| Source            | Target                | Description                                |
| ----------------- | --------------------- | ------------------------------------------ |
| Tamiat/src/admin  | my-project/src/admin  | The building blocks of the admin interface |
| Tamiat/src/app    | my-project/src/app    | The building blocks of the app interface   |
| Tamiat/src/router | my-project/src/router | The routing logic of the CMS               |

6. Once this is done, you can just follow the same instructions of the first option above starting from `step 2`.

7. Enjoy!

# Features

- Front end focused CMS
- Powered by [Vue][] **2.0** & [Firebase]

## Routing

In **Tamiat CMS**, there are reserved routes that are built in the CMS itself as well as dynamic routes that you can create yourself.

### What benefit it offers

With dynamic routes you are in complete control and have the total freedom about the presentation of your content. You can associate the content that you want with the template that you want and give them the url that you want.

### How to create a dynamic route

In order to create a dynamic route you have to go to the `Routing` section in **Tamiat** admin area.

![Routing section](https://i.imgur.com/2iH5fpJ.png)

On the right side, you can see the reserved routes in the CMS (you can not create dynamic routes with these paths).

On the left side you see the form that you need to fill in to create a new dynamic route. This form consists of 4 inputs:

- The route path
- The route template
- The route content type
- The route content

The only required fields in the form are `path` & `template`. The other fileds: `Content type` & `Content` are optional since some templates are static and don't accept any dynamic content to show. This type of templates shows static content instead (like the default `About us` template).

After you fill in the form and click the `add` button, the dynamic route will be created and added to the _Dynamic routes_ on the right hand side. There, you can test it by clicking on the path link that will open the new route in a new browser tab.

After the creation of the new route, you will have options to edit all it's components (path, template, content type & content) in addition to completely deleting it. You just need to hove over the created route to see those control buttons.


In order to create a route that lists content of a certain type and has the ability to display instances of it dynamically two dynamic routes need to be created (one that uses a template that displays a list of all instances and one that uses a template that can fetch only a certain instance
based on route params)

![Routing section](https://i.imgur.com/CYeXMuZ.png)

### What about creating new templates

Creating new templates is very easy. All you have to do is:

- Create a new `MyTemplate.vue` file in `/src/app/templates` folder.

```html
<template>
  <div class="template">
    <h1>Hello, I am a new template</h1>
  </div>
</template>
```

- Add some info about the new template to `/src/app/templates/templates.json` as in the following snippet of code:

```javascript
[
  ...
  {
    "filename": "MyTemplate", // the name of the file you created without ".vue" extension
    "displayName": "My New Template" // The name you want your template to be called in the Routing page
  }
  ...
]
```

### Static vs dynamic templates

Static templates are templates that contains only hard coded content. They can not be used to show dynamic content (ex: the AboutUs default template).

here is the minimal code for a static template:

```html
<template>
  <div class="template">
    <h1>Hello, I am a static template</h1>
  </div>
</template>
```

On the other side, dynamic templates are used to show dynamic content in a given layout defined by the template (ex: the BlogPost default template)

Here is the minimal code for a dynamic template:

```html
<template>
  <div class="template">
    <h1>{{content.title}}</h1>
  </div>
</template>

<script>
import LoadContent from './LoadContent'
export default {
  mixins: [LoadContent]
}
</script>
```

The vue mixin `LoadContent` will expose your content as a data object called `content`. There, you can access all the fields of the content you assigned to that route.

<br>

## Content types/Contents/Fields

First, we have to understand the basic concepts and the DB structure.

- Content type - type from which we create specific contents - every content type has it's own `name`, `icon`, `path`, `fields` and `data`(Contents)
- Content - actual contents created as `data` in Content types
- Fields - used as properties for Contents and can be created as one of the available input types (`textarea`, `textbox`, `integer`, `boolean`, `url`, `richtextbox`, `tags`, `select`, `input`)

### Why do we need this?

This way, everything we create is custom made. We don't have any restrictions in sense of how our content should be named, what properties(inputs) should it have, on what path should our contents be, etc.

### **_ For users who have used previous version of Tamiat CMS _**

In order for this new feature to work, you have to do the following:

- Delete everything from DB except `media`, `nav` and `settings`
- Go to the `Database` section in **Tamiat** admin area and add `Demo Content` and `Demo Fields`
- After this, you have successfully added the demo data and initialized the DB. Now you can continue on working with contents and fields.

### How to create Content types and Fields?

In order to create content types and fields we have to go to the `Content` section in **Tamiat** admin area.

#### Content types

![Content type section](https://i.imgur.com/8QNUIef.png)

##### Create

To be able to create new content type we have to define the name and select one or more fields from available fields list.
On the right side we have a list of available fields. Those are the fields that are currently available in the DB.
By checking a field from that list, we decide to include it in the creation of content type.
If we want some fields to be shown later in the UI, we have to check a field from `Fields` list (only `textbox` type fields are available). Also, we can reorder fields so that they are stored in the DB as we want.

##### Edit/Delete

Lets look at the right section.
By selecting a content type from dropdown menu, section on the left is populated with data of selected content type.
From that point, we can choose to edit or to delete it.

#### Fields

![Fields section](https://i.imgur.com/8IDPTjn.png)

##### Create

By clicking on `Add new field` button, this block is displayed.
Field name and field type are mandatory, but multi value isn't.

##### Edit/Delete

Next to every fields name in the available fields list, we have two icons - delete and edit.
The same block is displayed just now it's populated with selected fields data.

### We created a new content type, what now?

After successfull creation, content types are displayed in the dropdown menu `Content` in **Tamiat** admin area.
By clicking on a specific content type, this page is displayed:

![Content section](https://i.imgur.com/n6wRkuh.png)

From this point, we can Create (Save/Publish), Edit, Delete, Bulk delete, Select, Filter and Sort contents.
Those contents will be displayed later in the app.

In the picture above we can see that we have newly created content type, ex. `Posts`, which has an actual data that is displayed in the table.<br>
Notice that only `author` and `title` fields are displayed - because those are the fields we previously marked to be shown in content list when we were creating content type.<br>
It is omportant to note that in order to be able to mark a field to be visible in the content list we must make sure that when creating or editing that field we set the `Listable` checkbox to true like shown below.
![Content section](https://i.imgur.com/YbXFyKt.png)

It is important to note that in order to be able to mark a field to be visible in the content list we must make sure that when creating or editing that field we set the `Listable` checkbox to true like shown below.

![Content section](https://i.imgur.com/YbXFyKt.png)
This setting lets Tamiat know that this field can be made listable in any content type that uses it. This will make a small checkbox appear next to a field that was selected as part of a content type you are creating/editing.
![Content section](https://i.imgur.com/OfJt0C5.png)
If the checkbox is present it means that we have successfully defined that field as listable. If the checkbox is checked that means that the field will be visible in contents list for this specific content type. Notice how the `img` field has a checkbox but it is not checked, that means that the `img` field has been globally defined as listable when it was created or edited, but for this specific content type this field will not be listed, since in this instance we do not want that. However, if you decide you want the `img` field to be listable in another content type the checkbox will always be present, since whether a field is listable or not for a content type is stored within that content types section in the database and will never interfere with the global definition of a field or how it is set in another content type. 