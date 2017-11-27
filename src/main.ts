import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

window['canEmojify'] = (function () {
  const node = document.createElement('canvas');
  if (!node.getContext || !node.getContext('2d') || typeof node.getContext('2d').fillText !== 'function') {
    return false;
  }

  const ctx = node.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.font = '32px Arial';
  ctx.fillText('\ud83d\ude03', 0, 0);

  return ctx.getImageData(16, 16, 1, 1).data[0] !== 0;
})();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
