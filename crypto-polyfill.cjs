// Patch node:crypto for Node 16 — Vite 5 calls crypto.getRandomValues() directly
// but in Node 16 this only exists on crypto.webcrypto, not on the top-level export.
const cryptoMod = require('crypto')
if (!cryptoMod.getRandomValues) {
  Object.defineProperty(cryptoMod, 'getRandomValues', {
    value: cryptoMod.webcrypto.getRandomValues.bind(cryptoMod.webcrypto),
    enumerable: true,
    configurable: true,
    writable: true,
  })
}
// Also expose as globalThis.crypto for any code that uses the Web Crypto global
if (!globalThis.crypto) {
  globalThis.crypto = cryptoMod.webcrypto
}
