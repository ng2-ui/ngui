(function(global) {
  var map = {
    app: "app",
    '@angular': '../node_modules/@angular',
    'rxjs': '../node_modules/rxjs',
    'ng2-ui': '../src'
    // 'ng2-ui': '../dist'
  };
  var packages = {
    app: { main: './main.ts', defaultExtension: 'ts' },
    '@angular': 'https://npmcdn.com/@angular',
    '@angular/common': { main: 'bundles/common.umd.js', defaultExtension: 'js' },
    '@angular/compiler': { main: 'bundles/compiler.umd.js', defaultExtension: 'js' },
    '@angular/core': { main: 'bundles/core.umd.js', defaultExtension: 'js' },
    '@angular/forms': { main: 'bundles/forms.umd.js', defaultExtension: 'js' },
    '@angular/http': { main: 'bundles/http.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js', defaultExtension: 'js' },
    rxjs: { defaultExtension: 'js' },
    'ng2-ui': {main: 'index.ts', defaultExtension: 'ts'}
    // 'ng2-ui': {main: 'index.js', defaultExtension: 'js'}
  };

  System.config({
    transpiler: 'typescript', //use typescript for compilation
    typescriptOptions: {      //typescript compiler options
      emitDecoratorMetadata: true
    },
    map: map,
    packages: packages
  });
})(this);
