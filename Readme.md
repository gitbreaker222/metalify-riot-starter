# Metalify-Riot-Starter

**beta**

Website generator with Metalsmith, Netlify, Elemeno CMS and Riot JS

## Index

- [Configuration]('#configuration')
- [Get Started]('#get-started')
- [Metalsmith]('#metalsmith')
- [Netlify]('#netlify')
- [Elemeno CMS]('#elemeno')
- [Riot JS]('#riot-js')

## Configuration

- Metalsmith build tasks: `build.js`
- Elemeno headless CMS: `modules/metalsmith-elemeno/index.js`
- Templates / Custom tags: `src/tags`

## Get Started

1. **Clone** this repo and then install dependencies:

  ```
  npm install
  ```

1. **Build** static site in `build/` folder:

  ```
  make build dev=true
  ```

  With the **dev** flag this will rebuild on changes in the source folder and serve the build folder in your browser on `localhost:8080`)

1. **Deploy to Netlify**

   - Sign Up at [netlify.com][netlify] with github (has other options)
   - click _"New site from git"_ button somewhere
   - follow instructions
    - […]
    - … build command: `make build`

1. **Setup CMS** (with elemeno.io, takes a bit)

  - Sign up at at [elemeno.io][elemeno]
  - create single-item **"Meta"** with these fields:
    - *Main Title* (Plain Text)
    - *Description* (Plain Text)
    - *Logo* (image)
    - *Favicon* (image)
    - *URL* (Plain Text; url pattern)
  - save template, open the item and fill the fields
  - create collection **"Pages"** with these fields:
    - *Title* (Plain Text; required)
    - *Position* (Number; Position in nav menu)
    - *Content* (Markdown)
    - *Collection* (Plain Text; Slug; Reference to another collection to list its content)
  - save template, open collection and create some page-items
  - create collection **"Articles"** with these fields:
    - *title* (Plain Text; required)
    - *position* (Number)
    - *content* (Markdown)
  - open a page-item and enter in *collection* field: `articles` -> use page as _list-view_
  - Go to `Settings > API keys` and create a *API token*
  - Back at Source Code: Create a new file in root folder: `.env`
  - paste the API token in there: `ELEMENO_API_TOKEN=<API-TOKEN-HERE>`
  - **Security advice:** Don't add `.env` to VCS, else it gets published
  - test connection *(stop prior running process with `ctrl + c`/`cmd + c`)*
  ```
  make build dev=true
  ```

1. Now you can run your site locally with content from Elemeno. To make it ready for production and let it update automatically online, you finally need to **connect netlify and Elemeno**:
  - At Elemeno go to `Settings > API keys` and copy *API token*
  - Go to Netlify `Settings > Build & deploy > Build environment variables`
  - Click "Edit variables" -> "New variable"
  - key = *"ELEMENO_API_TOKEN"*; value = *(PASTE-API-TOKEN-HERE)*
  - Go to `Build hooks`
  - Click "Add build hook"
  - Copy url and go back to Elemeno
  - Go to "Webhooks" and click "Create new web hook"
  - Paste the url

## Metalsmith [(link)](http://www.metalsmith.io)

> An extremely simple, _pluggable_ static site generator.

Used to:
- process SASS files
- concat riot tags and js files
- copy files to `build` folder
- [with dev flag] start local development server

Original README: https://www.npmjs.com/package/metalsmith

### License

The MIT License (MIT)

Copyright &copy; Segment \<friends@segment.com\>

---

## Netlify

> All the features developers need right out of the box: Global CDN, Continuous Deployment, one click HTTPS and more…

[www.netlify.com][netlify]

---

## Elemeno

> Elemeno is an API-Based, Headless CMS designed to manage content for digital projects on any platform or device

[www.elemeno.io][elemeno]

---

## Riot JS

> Simple and elegant component-based UI library

Original README: https://www.npmjs.com/package/riot

---

## License

TL;DR

>A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

– https://choosealicense.com/licenses/mit/

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



[netlify]: https://www.netlify.com
[elemeno]: https://www.elemeno.io
