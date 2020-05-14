## Installation

Install packages with NPM

Open command line

change directory to WebApplication

Run ```npm install```

## Usage / GULP tasks

### Compile SASS
Run ```gulp sass``` concatenates scss in the _/src/sass_ folder, compiles it to css, minify and output to _/dist/css_ folder

Run ```gulp sass:watch``` watches for changes to scss files in _/src/sass_ folder

### Compile JS
Run ```gulp js``` transpile, minify, bundle and output to _/dist/js_ folder

Run ```gulp js:watch``` watches for changes to _/src/js_ folder

Run ```all:watch``` watches for changes to scss and js files in _/src/js_ and sass files in _/src/sass_, respectively

Open solution in Visual Studio or Rider. Build and hit F5. 

After Installation navigate to [http://localhost:5000/product-page.html](http://localhost:5000/product-page.html)

You're ready to go.