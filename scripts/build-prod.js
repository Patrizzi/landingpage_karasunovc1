const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const JavaScriptObfuscator = require('javascript-obfuscator');
const { minify } = require('html-minifier-terser');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

async function buildProduction() {
  console.log('🚀 [DevSecOps] Iniciando compilación, ofuscación y endurecimiento...\n');

  // 1. Preparar directorio dist
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }
  const distJsDir = path.join(DIST_DIR, 'js');
  if (!fs.existsSync(distJsDir)) {
    fs.mkdirSync(distJsDir, { recursive: true });
  }

  // 2. Compilar Tailwind CSS
  console.log('📦 1/5 Compilando Tailwind CSS minificado...');
  execSync('npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify', {
    cwd: ROOT_DIR,
    stdio: 'inherit'
  });

  // 3. Ofuscar JavaScript (src/js/app.js)
  console.log('\n🔒 2/5 Aplicando ofuscación severa en JavaScript (control flow flattening, string encoding, self-defending)...');
  const sourceJs = fs.readFileSync(path.join(ROOT_DIR, 'src', 'js', 'app.js'), 'utf8');

  const obfuscatedResult = JavaScriptObfuscator.obfuscate(sourceJs, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: false, // Evita loop en navegadores legítimos
    disableConsoleOutput: false, // Permitir mensaje de seguridad en consola
    identifierNamesGenerator: 'hexadecimal',
    numbersToExpressions: true,
    renameGlobals: false,
    selfDefending: true, // Auto-defensa si intentan formatear el código
    simplify: true,
    splitStrings: true,
    splitStringsChunkLength: 8,
    stringArray: true,
    stringArrayCallsTransform: true,
    stringArrayEncoding: ['base64'],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayThreshold: 0.8,
    transformObjectKeys: true
  });

  const obfuscatedJs = obfuscatedResult.getObfuscatedCode();
  fs.writeFileSync(path.join(distJsDir, 'app.min.js'), obfuscatedJs, 'utf8');
  console.log(`   ✓ Archivo ofuscado creado: dist/js/app.min.js (${(Buffer.byteLength(obfuscatedJs) / 1024).toFixed(1)} KB)`);

  // 4. Copiar assets y configuraciones de seguridad
  console.log('\n🛡️ 3/5 Copiando assets y cabeceras de seguridad...');
  const assetsSrc = path.join(ROOT_DIR, 'assets');
  const assetsDist = path.join(DIST_DIR, 'assets');
  if (fs.existsSync(assetsSrc)) {
    if (!fs.existsSync(assetsDist)) fs.mkdirSync(assetsDist, { recursive: true });
    const files = fs.readdirSync(assetsSrc);
    for (const file of files) {
      fs.copyFileSync(path.join(assetsSrc, file), path.join(assetsDist, file));
    }
    console.log('   ✓ Directorio assets/ copiado a dist/assets/');
  }

  // Copiar archivos de seguridad (.htaccess, _headers, vercel.json)
  const secFiles = ['.htaccess', '_headers', 'vercel.json'];
  for (const f of secFiles) {
    const srcPath = path.join(ROOT_DIR, f);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, path.join(DIST_DIR, f));
      console.log(`   ✓ Cabecera de seguridad copiada: dist/${f}`);
    }
  }

  // 5. Minificar HTML y vincular JS ofuscado
  console.log('\n📄 4/5 Minificando HTML y eliminando comentarios y espacios en blanco...');
  let rawHtml = fs.readFileSync(path.join(ROOT_DIR, 'code.html'), 'utf8');

  // En la versión de producción en dist/, reemplazar el script embebido largo por el script ofuscado independiente
  const scriptRegex = /<!-- JavaScript Application Script.*?<script>[\s\S]*?<\/script>/i;
  if (scriptRegex.test(rawHtml)) {
    rawHtml = rawHtml.replace(scriptRegex, '<script src="./js/app.min.js"></script>');
  }

  const minifiedHtml = await minify(rawHtml, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true
  });

  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), minifiedHtml, 'utf8');
  fs.writeFileSync(path.join(DIST_DIR, 'code.html'), minifiedHtml, 'utf8');
  console.log(`   ✓ HTML minificado en: dist/index.html y dist/code.html (${(Buffer.byteLength(minifiedHtml) / 1024).toFixed(1)} KB)`);

  console.log('\n✅ 5/5 ¡Compilación de producción completada con éxito en la carpeta /dist!');
  console.log('   - Código HTML 100% minificado y sin comentarios.');
  console.log('   - JavaScript ofuscado y protegido con self-defending.');
  console.log('   - Cabeceras de seguridad listas para desplegar.');
}

buildProduction().catch(err => {
  console.error('❌ Error en el proceso de compilación:', err);
  process.exit(1);
});
