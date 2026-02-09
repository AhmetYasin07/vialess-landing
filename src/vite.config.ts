import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

// -------------------------------------------------------
// Plugin 1: Figma Make "@version" import syntax çözücü
// "sonner@2.0.3" → "sonner"
// "@radix-ui/react-dialog@1.1.6" → "@radix-ui/react-dialog"
// -------------------------------------------------------
function stripVersionPlugin() {
  return {
    name: 'strip-import-versions',
    enforce: 'pre' as const,
    resolveId(this: any, source: string, importer: string | undefined) {
      const scopedMatch = source.match(/^(@[^/]+\/[^@]+)@[\d.]+(.*)$/);
      if (scopedMatch) {
        return this.resolve(scopedMatch[1] + (scopedMatch[2] || ''), importer, { skipSelf: true });
      }
      const unscopedMatch = source.match(/^([^@./][^@]*)@[\d.]+(.*)$/);
      if (unscopedMatch) {
        return this.resolve(unscopedMatch[1] + (unscopedMatch[2] || ''), importer, { skipSelf: true });
      }
      return null;
    },
  };
}

// -------------------------------------------------------
// Plugin 2: Figma Make "figma:asset/" import çözücü
// "figma:asset/abc123.png" → public/assets/abc123.png
// -------------------------------------------------------
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-resolver',
    enforce: 'pre' as const,
    resolveId(source: string) {
      if (source.startsWith('figma:asset/')) {
        const filename = source.replace('figma:asset/', '');
        const assetPath = path.resolve(__dirname, 'public', 'assets', filename);
        if (fs.existsSync(assetPath)) {
          return assetPath;
        }
        return { id: '\0figma-asset-placeholder:' + filename, external: false };
      }
      return null;
    },
    load(id: string) {
      if (id.startsWith('\0figma-asset-placeholder:')) {
        const filename = id.replace('\0figma-asset-placeholder:', '');
        console.warn(`[figma-asset] Asset bulunamadı: public/assets/${filename} — placeholder kullanılıyor`);
        return `export default "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='12'%3E${filename.slice(0, 8)}...%3C/text%3E%3C/svg%3E"`;
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    stripVersionPlugin(),
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion') || id.includes('motion')) {
              return 'motion-vendor';
            }
            if (id.includes('lucide') || id.includes('radix')) {
              return 'ui-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});
