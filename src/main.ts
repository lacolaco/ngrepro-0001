import {platformBrowser} from '@angular/platform-browser';
import {COMPILER_PROVIDERS} from '@angular/compiler';
import {AppModuleNgFactory} from './app.module.ngfactory';

platformBrowser([
    ...COMPILER_PROVIDERS,
]).bootstrapModuleFactory(AppModuleNgFactory);