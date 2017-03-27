import { NgModule, Compiler } from '@angular/core';
import { JitCompiler } from '@angular/compiler';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: Compiler, useExisting: JitCompiler,
        },
    ]
})
export class AppModule {
}
