// // The usual bootstrapping imports
// import { bootstrap }      from '@angular/platform-browser-dynamic';
// import { AppComponent }   from './app.component.ts';
//
// bootstrap(AppComponent, [ ]);

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);