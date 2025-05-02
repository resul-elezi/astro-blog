// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [
    icon({
      include: {
        tabler: ['*'],  // Alle Icons aus Tabler einbinden
      }
    })
  ],
  image: {
    service: passthroughImageService()
  }
});