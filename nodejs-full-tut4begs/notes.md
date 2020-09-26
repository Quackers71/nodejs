# Notes for Node.js - Full Tutorial for Beginners

#### Link to how to create a large .txt file
https://gist.github.com/olivertappin/0fc0b6a76e6555e51f884f9638249de2

#### This example creates a 2.7Gb .txt file
- $ dd if=/dev/zero of=largefile.txt count=1024 bs=2748576

#### This example create a 2.7Gb .txt file with random text
- dd if=/dev/urandom of=sample.txt bs=1G count=1024 bs=2748576

#### For new packages goto
https://www.npmjs.com/
https://www.npmjs.com/package/lodash
#### To install lodash use
- $ npm install lodash

Why Lodash?
Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
Lodash’s modular methods are great for:

- Iterating arrays, objects, & strings
- Manipulating & testing values
- Creating composite functions

#### Semantic Versioning

Within the package.json
```yaml
    "lodash": "^4.17.20" //major.minor.patch versioning
                         // ^ means no major updates, minor and patching can be updated
                         // ~ means patching can be updated i.e. ~4.17.x
                         //  4.17.20 only this version to be installed and used
```

#### Express Web Framework

http://expressjs.com/

- $ mkdir expressjs && cd expressjs
- $ npm init --yes
- $ npm install express

#### using req.query

http://localhost:3000/example/Q/49?tutorial=paramstutorial&sort=byage
- Output:
```yaml
$ node app{ name: 'Q', age: '49' }
{}
{ name: 'Q', age: '49' }
{ tutorial: 'paramstutorial', sort: 'byage' }
```

- Use route params when you must require the data i.e. name
- Use query string params when only optional required i.e. sort

