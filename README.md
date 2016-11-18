# js-dev-environment

Repository for following along with Cory House's Pluralsight 
"[Building a JavaScript Development Environment](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents)" 
course.

* **Coding style**
    * .editorconfig
* **Package management**
    * npm
* **Package security scanning**
    * Node Security Project (nsp)
* **Development web server**
    * Express
    * localtunnel - _for public sharing of localhost_
* **Automation**
    * npm Scripts
* **JavaScript version**
    * ES6 (_for both app code and build scripts_)
* **Transpilation**
    * babel
* **Module Format**
    * ES6
* **Bundling**
    * Webpack
* **Linting**
    * ESLint
* **Testing**
    * framework:
        * Mocha
    * assertion:
        * Chai
    * helpers:
        * JSDOM
        * Cheero
        * PhantomJS
    * CI:
        * Travis CI
        * AppVeyor
* **HTTP and Mock APIs**
    * Node: request
    * Browser: fetch
    * Mocking:
        * json-server
        * JSON Schema Faker
        * Express
* **Production build**
    * minification:
        * uglify (webpack.optimize.UglifyJsPlugin)
    * sourcemaps:
        * Webpack
    * HTML minification & dynamic script tags:
        * html-webpack-plugin
    * cache busting:
        * webpack-md5-hash
    * bundle splitting:
        * Webpack (webpack.optimize.CommonsChunkPlugin)
    * error logging:
        * Track::js
    * dynamic HTML:
        * EmbeddedJS (EJS)
