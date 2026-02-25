
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import tailwindcss from '@tailwindcss/vite';
  import path from 'path';
  import fs from 'fs';

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

  function figmaAssetPlugin() {
    return {
      name: 'figma-asset-resolver',
      enforce: 'pre' as const,
      resolveId(source: string) {
        if (source.startsWith('figma:asset/')) {
          return '\0figma-asset:' + source.replace('figma:asset/', '');
        }
        return null;
      },
      load(id: string) {
        if (!id.startsWith('\0figma-asset:')) return null;

        const filename = id.replace('\0figma-asset:', '');
        const srcAssetPath = path.resolve(__dirname, 'src', 'assets', filename);
        const publicAssetPath = path.resolve(__dirname, 'public', 'assets', filename);

        if (fs.existsSync(srcAssetPath)) {
          return `export default "/src/assets/${filename}"`;
        }

        if (fs.existsSync(publicAssetPath)) {
          return `export default "/assets/${filename}"`;
        }

        console.warn(`[figma-asset] Asset bulunamadı: ${filename} — placeholder kullanılıyor`);
        return `export default "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='12'%3E${filename.slice(0, 8)}...%3C/text%3E%3C/svg%3E"`;
      },
    };
  }

  export default defineConfig({
    plugins: [stripVersionPlugin(), figmaAssetPlugin(), react(), tailwindcss()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/fce1abf3574f541e31b932d179e0800f6923176f.png': path.resolve(__dirname, './src/assets/fce1abf3574f541e31b932d179e0800f6923176f.png'),
        'figma:asset/f4a2b725d530ff8fc40d6b218d25befd47d9ced0.png': path.resolve(__dirname, './src/assets/f4a2b725d530ff8fc40d6b218d25befd47d9ced0.png'),
        'figma:asset/eb1ba554062da9f67f53ec45714046538933324c.png': path.resolve(__dirname, './src/assets/eb1ba554062da9f67f53ec45714046538933324c.png'),
        'figma:asset/ddc652b9a9b28f04a82946311b9146cefcb5b28f.png': path.resolve(__dirname, './src/assets/ddc652b9a9b28f04a82946311b9146cefcb5b28f.png'),
        'figma:asset/d979ca68d67046edcf764061a6f4593ff10b928c.png': path.resolve(__dirname, './src/assets/d979ca68d67046edcf764061a6f4593ff10b928c.png'),
        'figma:asset/d649714f8c0c637ba1592d00b17aad52801e9854.png': path.resolve(__dirname, './src/assets/d649714f8c0c637ba1592d00b17aad52801e9854.png'),
        'figma:asset/d2ab04666fdc0a9f5dbb4686856f7b813c60180c.png': path.resolve(__dirname, './src/assets/d2ab04666fdc0a9f5dbb4686856f7b813c60180c.png'),
        'figma:asset/d2152b414c4da4ce744adce5f36820004f3db0dc.png': path.resolve(__dirname, './src/assets/d2152b414c4da4ce744adce5f36820004f3db0dc.png'),
        'figma:asset/d06e0b7556ed96ddac22a26edd9f97900746c9ee.png': path.resolve(__dirname, './src/assets/d06e0b7556ed96ddac22a26edd9f97900746c9ee.png'),
        'figma:asset/ccd1627fb190a43628d89bb1df7fb53bb6cafed9.png': path.resolve(__dirname, './src/assets/ccd1627fb190a43628d89bb1df7fb53bb6cafed9.png'),
        'figma:asset/cc2d0a7e4ae580b3861430308b19c93a5ae112b4.png': path.resolve(__dirname, './src/assets/cc2d0a7e4ae580b3861430308b19c93a5ae112b4.png'),
        'figma:asset/ca4b24f6295b190ba1b76f89dba33d95fba6d4c7.png': path.resolve(__dirname, './src/assets/ca4b24f6295b190ba1b76f89dba33d95fba6d4c7.png'),
        'figma:asset/c91f19e6d773f3b55ab5cdbabed4301b4463981a.png': path.resolve(__dirname, './src/assets/c91f19e6d773f3b55ab5cdbabed4301b4463981a.png'),
        'figma:asset/c8a917c00c9acf958fe8e7624002bd047456b734.png': path.resolve(__dirname, './src/assets/c8a917c00c9acf958fe8e7624002bd047456b734.png'),
        'figma:asset/c263400ee1d84830717ad6ccdf3357ad58ea71dc.png': path.resolve(__dirname, './src/assets/c263400ee1d84830717ad6ccdf3357ad58ea71dc.png'),
        'figma:asset/c04a60481b55adb02843cb1c705c82b743f64382.png': path.resolve(__dirname, './src/assets/c04a60481b55adb02843cb1c705c82b743f64382.png'),
        'figma:asset/bcee4a09a30f54352f6090ea2fa225e35b436522.png': path.resolve(__dirname, './src/assets/bcee4a09a30f54352f6090ea2fa225e35b436522.png'),
        'figma:asset/b9ded05f2643ba129f46f4ebc54c40e3d4b56a7c.png': path.resolve(__dirname, './src/assets/b9ded05f2643ba129f46f4ebc54c40e3d4b56a7c.png'),
        'figma:asset/b89fd6ca595afb859d91d25e1ed464906638884b.png': path.resolve(__dirname, './src/assets/b89fd6ca595afb859d91d25e1ed464906638884b.png'),
        'figma:asset/b6d5afd1d1c8b9c8e17a43a375a38d361139fa63.png': path.resolve(__dirname, './src/assets/b6d5afd1d1c8b9c8e17a43a375a38d361139fa63.png'),
        'figma:asset/b1562d62611b94f117452fa0feb31b700487f3c2.png': path.resolve(__dirname, './src/assets/b1562d62611b94f117452fa0feb31b700487f3c2.png'),
        'figma:asset/ae0167e07f6d2f5e7ed0c8b929ffdc65a3b644c2.png': path.resolve(__dirname, './src/assets/ae0167e07f6d2f5e7ed0c8b929ffdc65a3b644c2.png'),
        'figma:asset/a6bad3ce35b7df98440bda74c2c79b97e190bc61.png': path.resolve(__dirname, './src/assets/a6bad3ce35b7df98440bda74c2c79b97e190bc61.png'),
        'figma:asset/a5bfeb280ff2fa8352ecbcdb53615afe9fbe31ae.png': path.resolve(__dirname, './src/assets/a5bfeb280ff2fa8352ecbcdb53615afe9fbe31ae.png'),
        'figma:asset/a37dea40bd4f979ebf2657026961207873d68bec.png': path.resolve(__dirname, './src/assets/a37dea40bd4f979ebf2657026961207873d68bec.png'),
        'figma:asset/a17c0f87543c3926c75ab878f791cdfb55409622.png': path.resolve(__dirname, './src/assets/a17c0f87543c3926c75ab878f791cdfb55409622.png'),
        'figma:asset/a130cf042e3220be3c49b2944ad071e5ab89546e.png': path.resolve(__dirname, './src/assets/a130cf042e3220be3c49b2944ad071e5ab89546e.png'),
        'figma:asset/9eba754e1cee932b8d89cd4737d7f68d84e97be7.png': path.resolve(__dirname, './src/assets/9eba754e1cee932b8d89cd4737d7f68d84e97be7.png'),
        'figma:asset/9d35ac854d0a117dcad48e884727484f19455f14.png': path.resolve(__dirname, './src/assets/9d35ac854d0a117dcad48e884727484f19455f14.png'),
        'figma:asset/97105b53b2b34a09c99c165d1e6e47e6bd51399c.png': path.resolve(__dirname, './src/assets/97105b53b2b34a09c99c165d1e6e47e6bd51399c.png'),
        'figma:asset/92608ab555dc6c16954878af8f52f2d5d48159ad.png': path.resolve(__dirname, './src/assets/92608ab555dc6c16954878af8f52f2d5d48159ad.png'),
        'figma:asset/8f838fb3b201b207901de91e3325fdbbd65b8077.png': path.resolve(__dirname, './src/assets/8f838fb3b201b207901de91e3325fdbbd65b8077.png'),
        'figma:asset/8e3f7d495340fcc0f5817f8d7215ac05dd8ffd83.png': path.resolve(__dirname, './src/assets/8e3f7d495340fcc0f5817f8d7215ac05dd8ffd83.png'),
        'figma:asset/8a8785b99ff04d445dc392dd55c6829b81277634.png': path.resolve(__dirname, './src/assets/8a8785b99ff04d445dc392dd55c6829b81277634.png'),
        'figma:asset/88b0d1522deb05af13256bcf59412fed2caec3ef.png': path.resolve(__dirname, './src/assets/88b0d1522deb05af13256bcf59412fed2caec3ef.png'),
        'figma:asset/875262093e656cc0ec86480d6c5043a89aa46a2c.png': path.resolve(__dirname, './src/assets/875262093e656cc0ec86480d6c5043a89aa46a2c.png'),
        'figma:asset/7cbcc833f82152db8490a501368442cfbd6df825.png': path.resolve(__dirname, './src/assets/7cbcc833f82152db8490a501368442cfbd6df825.png'),
        'figma:asset/7adc831595693b482853efc03d24113a3ce430e1.png': path.resolve(__dirname, './src/assets/7adc831595693b482853efc03d24113a3ce430e1.png'),
        'figma:asset/78971f239881e799aec001453e391fedb2af4993.png': path.resolve(__dirname, './src/assets/78971f239881e799aec001453e391fedb2af4993.png'),
        'figma:asset/75b11f58cb441f5de762a19fa977a5a94c438b86.png': path.resolve(__dirname, './src/assets/75b11f58cb441f5de762a19fa977a5a94c438b86.png'),
        'figma:asset/749ccf436e9f210b34064ef8f47301a414b5f640.png': path.resolve(__dirname, './src/assets/749ccf436e9f210b34064ef8f47301a414b5f640.png'),
        'figma:asset/6b9ced7fcada32db1fdc0015fbba6a94eb87abd1.png': path.resolve(__dirname, './src/assets/6b9ced7fcada32db1fdc0015fbba6a94eb87abd1.png'),
        'figma:asset/68d4ac64ea56c477a1fd33b5b3c1bf5900aba33e.png': path.resolve(__dirname, './src/assets/68d4ac64ea56c477a1fd33b5b3c1bf5900aba33e.png'),
        'figma:asset/68333e2913569ac420c134ce51ca54a904c182ce.png': path.resolve(__dirname, './src/assets/68333e2913569ac420c134ce51ca54a904c182ce.png'),
        'figma:asset/63425bab7f13fdb7a1ea1062d2211fd71513e84e.png': path.resolve(__dirname, './src/assets/63425bab7f13fdb7a1ea1062d2211fd71513e84e.png'),
        'figma:asset/62a2286500cf6d6818feb37f740283596926e0d5.png': path.resolve(__dirname, './src/assets/62a2286500cf6d6818feb37f740283596926e0d5.png'),
        'figma:asset/618b5259c623e7db8d0eca5a8af600ad402d5e99.png': path.resolve(__dirname, './src/assets/618b5259c623e7db8d0eca5a8af600ad402d5e99.png'),
        'figma:asset/57f9741f980bbe56fba9c6698f983cff387ee1c2.png': path.resolve(__dirname, './src/assets/57f9741f980bbe56fba9c6698f983cff387ee1c2.png'),
        'figma:asset/556084bf263e5264c598fc265fdfc896ef28a102.png': path.resolve(__dirname, './src/assets/556084bf263e5264c598fc265fdfc896ef28a102.png'),
        'figma:asset/53daf6c562dfb2b6d0e53d98a12f4472b4b6b5d9.png': path.resolve(__dirname, './src/assets/53daf6c562dfb2b6d0e53d98a12f4472b4b6b5d9.png'),
        'figma:asset/4a7bd06f8a58df8cecabb3e715abc21eb0ff1026.png': path.resolve(__dirname, './src/assets/4a7bd06f8a58df8cecabb3e715abc21eb0ff1026.png'),
        'figma:asset/44ef0fabe22fc891a772132a0b6ff7b7db1a39df.png': path.resolve(__dirname, './src/assets/44ef0fabe22fc891a772132a0b6ff7b7db1a39df.png'),
        'figma:asset/434b251649a5f0dcfb687c109c5f595abb3695b8.png': path.resolve(__dirname, './src/assets/434b251649a5f0dcfb687c109c5f595abb3695b8.png'),
        'figma:asset/3c0b847edaeedcdf7fe8975d122517a3f516c69f.png': path.resolve(__dirname, './src/assets/3c0b847edaeedcdf7fe8975d122517a3f516c69f.png'),
        'figma:asset/3b3face82845821a785a02ecfae4a3ed156f494b.png': path.resolve(__dirname, './src/assets/3b3face82845821a785a02ecfae4a3ed156f494b.png'),
        'figma:asset/390f6f8e04a864f972e8e27b6cf88d0e64fec1d0.png': path.resolve(__dirname, './src/assets/390f6f8e04a864f972e8e27b6cf88d0e64fec1d0.png'),
        'figma:asset/39087a15108af2452e0a813a63d0bddd7bd0403a.png': path.resolve(__dirname, './src/assets/39087a15108af2452e0a813a63d0bddd7bd0403a.png'),
        'figma:asset/35086f97ae0a7c8c9acc8bc784e72974dcb5a3b2.png': path.resolve(__dirname, './src/assets/35086f97ae0a7c8c9acc8bc784e72974dcb5a3b2.png'),
        'figma:asset/30d407462c683d2033f595448f9405da80fdb4fe.png': path.resolve(__dirname, './src/assets/30d407462c683d2033f595448f9405da80fdb4fe.png'),
        'figma:asset/2cf10d7b6f173905f9d2b776365a4da544e5cfdd.png': path.resolve(__dirname, './src/assets/2cf10d7b6f173905f9d2b776365a4da544e5cfdd.png'),
        'figma:asset/2bb7ba7d32bfc35aae0d617e2d8aea930d4fb748.png': path.resolve(__dirname, './src/assets/2bb7ba7d32bfc35aae0d617e2d8aea930d4fb748.png'),
        'figma:asset/26fd6132cc5bdc6b1c3eb4230ec7d58a12d9c359.png': path.resolve(__dirname, './src/assets/26fd6132cc5bdc6b1c3eb4230ec7d58a12d9c359.png'),
        'figma:asset/2660b975765c865fb3b9e71e114543662848f949.png': path.resolve(__dirname, './src/assets/2660b975765c865fb3b9e71e114543662848f949.png'),
        'figma:asset/262849954bc8b4d3b09d1e8d512b2a9042423ecd.png': path.resolve(__dirname, './src/assets/262849954bc8b4d3b09d1e8d512b2a9042423ecd.png'),
        'figma:asset/1da2541d4f5b19367c11e6bdb58cdd3383df39c3.png': path.resolve(__dirname, './src/assets/1da2541d4f5b19367c11e6bdb58cdd3383df39c3.png'),
        'figma:asset/13d8066d2407d6b5662cdf90afc20a041945309d.png': path.resolve(__dirname, './src/assets/13d8066d2407d6b5662cdf90afc20a041945309d.png'),
        'figma:asset/0af3810380503e75e804a800696caa78adff9b7b.png': path.resolve(__dirname, './src/assets/0af3810380503e75e804a800696caa78adff9b7b.png'),
        'figma:asset/08d78951bfbb062bdd7f903ef22069f8bfc237c7.png': path.resolve(__dirname, './src/assets/08d78951bfbb062bdd7f903ef22069f8bfc237c7.png'),
        'figma:asset/03970ce44a5adb9eafdaa81a9cc8f9f4a3b03999.png': path.resolve(__dirname, './src/assets/03970ce44a5adb9eafdaa81a9cc8f9f4a3b03999.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });