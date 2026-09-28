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

  // 2. Compilar Tailwind CSS (con fallback seguro)
  console.log('📦 1/5 Compilando Tailwind CSS minificado...');
  const tailwindBin = path.join(ROOT_DIR, 'node_modules', '.bin', process.platform === 'win32' ? 'tailwindcss.cmd' : 'tailwindcss');
  const tailwindCmd = fs.existsSync(tailwindBin)
    ? `"${tailwindBin}" -i ./src/input.css -o ./dist/output.css --minify`
    : `npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify`;

  try {
    execSync(tailwindCmd, { cwd: ROOT_DIR, stdio: 'inherit' });
  } catch (twErr) {
    if (fs.existsSync(path.join(DIST_DIR, 'output.css'))) {
      console.warn('   ⚠️ Advertencia Tailwind CLI: usando dist/output.css precompilado.');
    } else {
      throw twErr;
    }
  }

  // 3. Ofuscar JavaScript (src/js/app.js)
  console.log('\n🔒 2/5 Aplicando ofuscación severa en JavaScript (control flow flattening, string encoding, self-defending)...');
  const sourceJs = fs.readFileSync(path.join(ROOT_DIR, 'src', 'js', 'app.js'), 'utf8');

  const obfuscatedResult = JavaScriptObfuscator.obfuscate(sourceJs, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: false,
    disableConsoleOutput: false,
    identifierNamesGenerator: 'hexadecimal',
    numbersToExpressions: true,
    renameGlobals: false,
    selfDefending: true,
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
  console.log('\n🛡️ 3/5 Sincronizando assets y cabeceras de seguridad...');
  const assetsSrc = path.join(ROOT_DIR, 'assets');
  const assetsDist = path.join(DIST_DIR, 'assets');
  if (fs.existsSync(assetsSrc)) {
    if (!fs.existsSync(assetsDist)) fs.mkdirSync(assetsDist, { recursive: true });
    const files = fs.readdirSync(assetsSrc);
    for (const file of files) {
      fs.copyFileSync(path.join(assetsSrc, file), path.join(assetsDist, file));
    }
    console.log('   ✓ Directorio assets/ sincronizado');
  }

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
  const rawHtml = fs.readFileSync(path.join(ROOT_DIR, 'code.html'), 'utf8');
  const scriptRegex = /<!-- JavaScript Application Script[\s\S]*?<script>[\s\S]*?<\/script>/i;

  const minifyOptions = {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true
  };

  // 5A. Versión para el ROOT (index.html raíz servido por Vercel / GitHub)
  let rootHtml = rawHtml;
  if (scriptRegex.test(rootHtml)) {
    rootHtml = rootHtml.replace(scriptRegex, '<script src="./dist/js/app.min.js"></script>');
  }
  const minifiedRootHtml = await minify(rootHtml, minifyOptions);
  fs.writeFileSync(path.join(ROOT_DIR, 'index.html'), minifiedRootHtml, 'utf8');
  console.log(`   ✓ HTML minificado de producción: index.html raíz (${(Buffer.byteLength(minifiedRootHtml) / 1024).toFixed(1)} KB)`);

  // 5B. Versión para dist/ (dist/index.html para despliegue aislado)
  let distHtml = rawHtml.replace('./dist/output.css', './output.css');
  if (scriptRegex.test(distHtml)) {
    distHtml = distHtml.replace(scriptRegex, '<script src="./js/app.min.js"></script>');
  }
  const minifiedDistHtml = await minify(distHtml, minifyOptions);
  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), minifiedDistHtml, 'utf8');
  fs.writeFileSync(path.join(DIST_DIR, 'code.html'), minifiedDistHtml, 'utf8');
  console.log(`   ✓ HTML minificado de producción: dist/index.html (${(Buffer.byteLength(minifiedDistHtml) / 1024).toFixed(1)} KB)`);

  console.log('\n✅ 5/5 ¡Compilación de producción completada con éxito!');
  console.log('   - index.html en la raíz 100% minificado y protegido para Vercel.');
  console.log('   - JavaScript ofuscado y blindado contra inspección.');
  console.log('   - Cabeceras de seguridad listas en vercel.json.');
}

buildProduction().catch(err => {
  console.error('❌ Error en el proceso de compilación:', err);
  process.exit(1);
});
