import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import Aura from '@primeng/themes/aura';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    providePrimeNG({ theme: { preset: Aura } }),
    importProvidersFrom(ChartModule, TableModule, InputTextModule, ButtonModule) // ✅ Correcto
  ]
};




