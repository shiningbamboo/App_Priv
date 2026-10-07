importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// The page passes its Firebase config in the URL, so it only lives in index.html.
let cfg = {};
try { cfg = JSON.parse(new URL(self.location).searchParams.get('c') || '{}'); } catch (e) {}

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

if (cfg.apiKey) {
  firebase.initializeApp(cfg);
  firebase.messaging();
}
