import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Message } from 'emailjs';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { EmailValidator } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
