'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/16_9.png": "51bfd48c2d729f02f68efac6e4eb8ed3",
"assets/AssetManifest.json": "d476a376d0b3b0b93f4cf4dbddd7f7e6",
"assets/assets/compartir-qr.png": "506a59d61cfaf5b4c3e0e079f8cf525e",
"assets/assets/google-play-badge.png": "4263a06f4d3d0e7ab066e7145c58c992",
"assets/assets/google-play.png": "ab55de459d0249e4e8360fccf8288ae2",
"assets/assets/google-play2.png": "000ed096541c4460b8bd6f2e75205673",
"assets/assets/google_play_store.png": "ef7a9b6a49c2d892bc9377fb236b5ae8",
"assets/assets/iphone-6-png-transparent-11%2520-%2520copia%2520-%2520copia.png": "ff21474419da15f1c0c7ca8a793c3014",
"assets/assets/laptop.png": "29e6a9e7a1f1289773f7dabd3e33871d",
"assets/assets/logo.png": "acd4c9caf093b9584dda861b5060a56f",
"assets/assets/menu-a-la-carta.png": "c7eda325c489b98495ba31eff42cdd41",
"assets/assets/menu_a_la_carta.png": "00f1f5c91c78d4644cf91fc922c2e7fb",
"assets/assets/no-image.png": "1bdef0b5837fe56734fd7d7d93a83ee5",
"assets/assets/phone-category.png": "554409d527970ed62c9be8f1d9a38e95",
"assets/assets/phone-home.png": "5fceea057541a200f897c7fd395e2ffb",
"assets/assets/phone-splash.png": "1340ce08848209cecaa8b4e9782d56cd",
"assets/assets/qr-code-menu-restaurant.png": "795a805514265398f47645764a5da659",
"assets/assets/qrcode_4kd.com.ar%2520-%2520copia.png": "770725817e938e23cec65314fb3d9fd9",
"assets/assets/qrcode_4kd.com.ar%2520370x370%2520-%2520copia.pdn": "8c56ccca03bc4671a60dc5be038bf70b",
"assets/assets/qrcode_4kd.com.ar%2520370x370%2520-%2520copia.png": "dbde338c4365e9f018f9a8e4f8b611ed",
"assets/assets/qrcode_4kd.com.ar%2520370x370.png": "dbde338c4365e9f018f9a8e4f8b611ed",
"assets/assets/qrcode_4kd.com.ar.png": "5e884f2c244609b3bfe1e62269e5c01a",
"assets/assets/qrcode_play.google.com%2520-%2520copia.png": "b73702212fb3c5ede1710bd1377d2623",
"assets/assets/qrcode_play.google.com.png": "53a125501a831e03abc4862132c8a898",
"assets/assets/qr_google_play.png": "67ecf329676b72b38fa7e073aacf3a86",
"assets/assets/sad.png": "084d8a7e56d2708812664652e6b6c1bb",
"assets/assets/scan.pdn": "55f74c04dbcf44471bba813b6d6d63f2",
"assets/assets/scan.png": "1c148a4c40a0b1df97e58bb2d735d0e3",
"assets/assets/Sin%2520t%25C3%25ADtulo.pdn": "345d6daea8e9aa83831d6c61b48881ad",
"assets/assets/Sin%2520t%25C3%25ADtulo.png": "b94d3258e70455d9abbc99a3db51bd0c",
"assets/assets/WhatsApp%2520Image%25202021-02-27%2520at%252012.07.59%2520(1).jpeg": "9bf8ab3512a2ec16abeb70b4deec8b7d",
"assets/assets/WhatsApp%2520Image%25202021-02-27%2520at%252012.07.59.jpeg": "c9faded41af0292aa6c4f1dc7bbc6470",
"assets/assets/WhatsApp%2520Image%25202021-03-01%2520at%252018.18.30.jpeg": "5c4e60fedad80d49aa6882c8105118aa",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/menu_a_la_carta.png": "00f1f5c91c78d4644cf91fc922c2e7fb",
"assets/no-image.png": "1bdef0b5837fe56734fd7d7d93a83ee5",
"assets/NOTICES": "9e20407bda0a4442781e4a53693aca95",
"assets/sad.png": "084d8a7e56d2708812664652e6b6c1bb",
"favicon.png": "db005c4beecdffc4aad14721cc9a299c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8273007140adb70473b3ac44426d673d",
"/": "8273007140adb70473b3ac44426d673d",
"main.dart.js": "93c445203f97f25d61f92926bb9f53c7",
"manifest.json": "4494413cde58ee458a7b4e00e4230c7a",
"version.json": "98ece6ba2f545a3f872d2df2184a4c1d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
