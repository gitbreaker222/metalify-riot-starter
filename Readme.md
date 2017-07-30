# Metalsmith-Prismic-Riot starter


Install dependencies:

```
npm install
```

Generate dynamic static site:

```
make build
```
## Index

- [Configuration]('#configuration')
- [Metalsmith]('#metalsmith')
- [Prismic]('#prismic')
- [Riot]('#riot')

## Configuration

- Metalsmith build tasks: `index.js`
- Prismic headless CMS: `prismic-configuration.js`

## Metalsmith [(link)](http://www.metalsmith.io)

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coveralls-badge]][coveralls-url]
[![Slack chat][slack-badge]][slack-url]

> An extremely simple, _pluggable_ static site generator.

## Plugins

Check out the website for a list of [plugins](http://www.metalsmith.io#the-community-plugins).

## API

Checkout the [project scaffolder](examples/project-scaffolder) or [build tool](examples/build-tool) examples to see a real example of the Javascript API in use.

#### new Metalsmith(dir)

Create a new `Metalsmith` instance for a working `dir`.

#### #use(plugin)

Add the given `plugin` function to the middleware stack. Metalsmith uses
[ware](https://github.com/segmentio/ware) to support middleware, so plugins
should follow the same pattern of taking arguments of `(files, metalsmith, callback)`,
modifying the `files` or `metalsmith.metadata()` argument by reference, and then
calling `callback` to trigger the next step.

#### #build(fn)

Build with the given settings and a callback having signature `fn(err, files)`.

#### #source(path)

Set the relative `path` to the source directory, or get the full one if no `path` is provided. The source directory defaults to `./src`.

#### #destination(path)

Set the relative `path` to the destination directory, or get the full one if no `path` is provided. The destination directory defaults to `./build`.

#### #concurrency(max)

Set the maximum number of files to open at once when reading or writing.  Defaults to `Infinity`.  To avoid having too many files open at once (`EMFILE` errors), set the concurrency to something lower than `ulimit -n`.

#### #clean(boolean)

Set whether to remove the destination directory before writing to it, or get the current setting. Defaults to `true`.

#### #frontmatter(boolean)

Set whether to parse YAML frontmatter. Defaults to `true`.

#### #ignore(path)

Ignore files/paths from being loaded into Metalsmith.

`path` can be a string, a function, or an array of strings and/or functions.
Strings use the glob syntax from
[minimatch](https://github.com/isaacs/minimatch) to match files and directories
to ignore. Functions are called with the full path to the file as their first
argument, and the `stat` object returned by Node's `fs.stat` function as their
second argument, and must return either `true` to ignore the file, or `false` to
keep it.

#### #metadata(json)

Get the global metadata. This is useful for plugins that want to set global-level metadata that can be applied to all files.

#### #path(paths...)

Resolve any amount of `paths...` relative to the working directory. This is useful for plugins who want to read extra assets from another directory, for example `./layouts`.

#### #run(files, fn)

Run all of the middleware functions on a dictionary of `files` and callback with `fn(err, files)`, where `files` is the altered dictionary.

#### #process(fn)

Process the files like build without writing any files. Callback signature `fn(err, files)`.

## Metadata API

Add metadata to your files to access these build features. By default, Metalsmith uses a few different metadata fields:

- `contents` - The body content of the file, not including any [YAML frontmatter](https://middlemanapp.com/basics/frontmatter/).
- `mode` - The numeric version of the [file's mode](http://en.wikipedia.org/wiki/Modes_%28Unix%29).

You can add your own metadata in two ways:

- Using [YAML frontmatter](https://middlemanapp.com/basics/frontmatter/) at the top of any file.
- Enabling [a plugin](https://github.com/segmentio/metalsmith/blob/master/Readme.md#plugins) that adds metadata programmatically.

#### mode

Set the mode of the file. For example,

```
$ cat cleanup.sh

--
mode: 0764
--

rm -rf .
```

would be built with mode ```-rwxrw-r--```, i.e. user-executable.

### License

The MIT License (MIT)

Copyright &copy; Segment \<friends@segment.com\>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[npm-badge]: https://img.shields.io/npm/v/metalsmith.svg
[npm-url]: https://www.npmjs.com/package/metalsmith
[travis-badge]: https://travis-ci.org/segmentio/metalsmith.svg
[travis-url]: https://travis-ci.org/segmentio/metalsmith
[coveralls-badge]:https://coveralls.io/repos/segmentio/metalsmith/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/segmentio/metalsmith?branch=master
[slack-badge]: https://img.shields.io/badge/Slack-Join%20Chat%20→-blue.svg
[slack-url]: http://metalsmith-slack.herokuapp.com/

## Prismic

123

## Riot

123
