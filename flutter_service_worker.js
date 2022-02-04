'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "039698218781fc773c64706e505ffaaa",
"index.html": "6283ef0a0da71aa67f7b029bfffc9ec1",
"/": "6283ef0a0da71aa67f7b029bfffc9ec1",
"firebase-messaging-sw.js": "3ccc7c1aa87e72430cb2b6403b765185",
"main.dart.js": "d35727295d4387a9ce39a044d29a73bd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "190711d25f577894a01d6e4cc37c8249",
"assets/images/parking_image_assets.jpg": "34cb3fe8f39f7b411447b0f187c245d9",
"assets/images/stroke_1.png": "f76012ad1abd2bb337b240a6bbb8f45e",
"assets/images/rectangleEmpty.png": "6a6c473c4440e450016e904d3c8f3ff2",
"assets/images/sub.png": "72ff29ec84efd33928fe676e4c6e9376",
"assets/images/no_fav.png": "b93ab379cd42e2a7701e4e8d973d8529",
"assets/images/exhibition_logo.jpg": "664069aa79309d2e2ab76400d63498a8",
"assets/images/nomessages.png": "be81fc2527336c194830de248991a135",
"assets/images/ellipse.png": "baf66b485a786f5293b810b0e763d0b4",
"assets/images/ghollak_motto.png": "d569aae213041b2a2fdb07053c6154ad",
"assets/images/empty_user.png": "76e194a5f584e34f94fce5f0c548f4e6",
"assets/images/rectangle.png": "2edbf2454cba1126b5a56f88dd9dcfeb",
"assets/images/my_qr_code.png": "de5054e13df471aca07321c26e1db89c",
"assets/images/no_tickets.png": "34b3d74610dd02cc2dbc24fd6fe12dbe",
"assets/images/vectorImage.png": "59db86e1398af092f794478bc5d2cfc5",
"assets/AssetManifest.json": "d10a4b0e2f407f1c2771f31a13b46ec1",
"assets/NOTICES": "f4377a262f91e9c05c88a64ebf595788",
"assets/lang/en.json": "1571b838537fcb6fe60113c6060c76f7",
"assets/lang/fa.json": "aa7de987d8290a5616a6ed128257db6a",
"assets/FontManifest.json": "6fa30e9f8842e45cde1a54e5862303ba",
"assets/icons/search.svg": "43e8b4e6fb5a79892603b30ac00becad",
"assets/icons/ghollak_cardholder.svg": "f86b75ed8693459ab3401fbd366e4092",
"assets/icons/like.svg": "1129882aeec4814e2d0d56c8a411ef87",
"assets/icons/about_us.svg": "10a3d4c63620f0c9e94e2ff76da5cf66",
"assets/icons/ghollak_nahang_logo.png": "282968f3aee78ff9f23efb5a3bd91f5e",
"assets/icons/persons.svg": "cc61416de84b0f9ddd2428bad01275a5",
"assets/icons/play_circle.svg": "4c85e04850c5493eeb4c83c31c015e20",
"assets/icons/ghollak_contacts.svg": "1557f4f6f0696bb4f8c493b103d00652",
"assets/icons/ghollak_scan.svg": "664caaa06e82aa1e64d81255e586cbca",
"assets/icons/ideal_play.svg": "64602f807c433668041e1a7ed790c85d",
"assets/icons/ghollak_back.svg": "9a02ead27be60a8c4d26d54f49c4a6d1",
"assets/icons/nahang_icon_grid.svg": "1f6fa536aba12d59e8e5f79a24e15aab",
"assets/icons/ideal_selected.svg": "ede7dcbdb9401424c0d17ffb5f9c4db7",
"assets/icons/ghollak_qr_top_right.svg": "45ea3f8de48bbfbba6064b03c5f083b7",
"assets/icons/eye_show.svg": "bc9d841bcefc58a5cd9fbc0413cd2295",
"assets/icons/ideal_subtitle.svg": "3023d4ca72b27abebd751d9c708cafb7",
"assets/icons/person.svg": "797a3bab94149993099e9b90cbe2ce1d",
"assets/icons/home.svg": "6f0b12f2804c8d447afc88943ffbc066",
"assets/icons/creditcard.svg": "439db1520fa1170e1857bf3d45da0e43",
"assets/icons/music.svg": "30daf29989ee987775e0268b0bce6456",
"assets/icons/join_to_nahang.svg": "cc61416de84b0f9ddd2428bad01275a5",
"assets/icons/logout.svg": "22848d57bdfb7f5274f0d92496b5a0f6",
"assets/icons/notCheckBox.svg": "ff4851fda7c1c0d7cc201161ffb45023",
"assets/icons/empty_search.svg": "5e2302c6a3d164aa3fb24618b306ffd3",
"assets/icons/ghollak_favorite.svg": "898ad6fbb380df185fd93686dc7ce298",
"assets/icons/ideal_full_screen.svg": "04b55abdbff4bcbee49f3b03724160a6",
"assets/icons/whats_app.svg": "54625f1964612973c46400ab2018bd02",
"assets/icons/ghollak_info_2.svg": "be1bb49e077173d017e75924bb838d83",
"assets/icons/outline_play_icon.svg": "4c85e04850c5493eeb4c83c31c015e20",
"assets/icons/map_icon.png": "40ee32fc2ebfa06b73b962ee5c5f3ac9",
"assets/icons/vector.svg": "dac28d5458d70afa3ccfb04cd2522598",
"assets/icons/share_icon.svg": "d947a65f3d71aeacae2cc00922f468ca",
"assets/icons/ideal_video_slider_thumb.svg": "4d7eee7ffd36ed2b78801d110c0a6505",
"assets/icons/services.svg": "0d7bedd3ec53f94482c3e8510556480c",
"assets/icons/ghollak_qr_bottom_left.svg": "07ccade4a6d91f6a5e881b116bc25d16",
"assets/icons/ideal_episodes.svg": "7c41b1a7f06ec0deea3c62b0e487f583",
"assets/icons/mobileIcon.svg": "d01766704518efc3a31b1700cee05d6a",
"assets/icons/ghollak_info_1.svg": "0ddfec6037d9fef6e57ed7b107ec87f3",
"assets/icons/fluent_mail.svg": "94fcab13377ac8df2986a68047555f4f",
"assets/icons/ghollak_call.svg": "8ec10eb3178fc0977a88560987926e90",
"assets/icons/clarity_attachment.svg": "9e78b11ed81d098f4d70fdd402355ba0",
"assets/icons/lock.svg": "8c274e0315fc85091d3d822e7a368268",
"assets/icons/star_icon.svg": "7c0314a7c3f3e10888375cfa47254ff3",
"assets/icons/income_icon.svg": "131bdb7fa44c1ced0a3912861d1917d5",
"assets/icons/ideal_volume_up.svg": "2b2ee50cf54bce3294972765d47fcfba",
"assets/icons/calender.svg": "26896592122821e5a771f02d16e31937",
"assets/icons/pen.svg": "8b0d5c8e4d0fa8205dbb2f1c8214dd45",
"assets/icons/dislike.svg": "9ee0431b170c99e92fc0af4e1c5b80c7",
"assets/icons/poi_icon.png": "f2657711b6042d75f2a88df83a9d6147",
"assets/icons/instagram.svg": "e47a7800bdf586332172b18b9fef7941",
"assets/icons/eye_hidden.svg": "ad8e3c91f7dc29bd7d6728ee19a31889",
"assets/icons/rule.svg": "251d32bfa694df027af5e2378be65e9c",
"assets/icons/ideal_video_slider_thumb.png": "b5db43c734340ea9181770224eaee16c",
"assets/icons/ghollak_qr_top_left.svg": "c5809ba159bd021e3ffafce3298d0691",
"assets/icons/settings.svg": "e0dc22a1bf0fbdb8fbb2219ad797399c",
"assets/icons/map_icon.svg": "3818fd9b0fddafaad52015cdf3db2b1e",
"assets/icons/movie.svg": "5862d6c23cfb48d71c93fe786caf2bfe",
"assets/icons/time.svg": "c3427569e3af06d89c4ccb6a5b23b901",
"assets/icons/tickBox.svg": "6d53197302f75bb6ca99162ca76008c3",
"assets/icons/mailIcon.svg": "6a9d9315afd1f7646c698934a0284a83",
"assets/icons/my_add_icon.svg": "49ce1e89d22e140b5f72ffbaf0c14c37",
"assets/icons/sub.svg": "a5a87f228bed43f4b43f0bd40c441c70",
"assets/icons/menu_icon.svg": "8594006a00d81cbf1d62b0cddb88c664",
"assets/icons/nahang_site.svg": "ee77f1ba703fa001697e685b0b0f578b",
"assets/icons/ghollak_date.svg": "29de6f5da1d27a8f4ab95134f2a88b9a",
"assets/icons/enter_subscription.svg": "06df6c97e8cc114371c559e77e99a03d",
"assets/icons/ghollak_nearby.svg": "76413f68da78f351b6327fb73189f19b",
"assets/icons/download_solid.svg": "d8b9e6d686f1fc9f2e07633b28fc5d7f",
"assets/icons/telegram.svg": "9a690f5df3229c6e32f40208b9c52864",
"assets/icons/cancel_button.svg": "027811c3fe8c957143b858f0edd420cd",
"assets/icons/transactions.svg": "28e8ea3565f92fa447e4a73762159619",
"assets/icons/direction.svg": "09f2d42416b91fdf3cdcec312b92e1a7",
"assets/icons/nahangtxt.svg": "769a3e8c3a545fc8a766b9d59a134cf7",
"assets/icons/plus.svg": "1b15682b66e22d0c8923df4fcf238bd8",
"assets/icons/check.svg": "b1eb39d45ad75273df1e64cec3fd6399",
"assets/icons/artist_biography.svg": "d4af2dfac69ac11f94512370629baf82",
"assets/icons/internet.svg": "8718f762fe5d36100ea98e2d22737112",
"assets/icons/info.svg": "f5e5db5737fa1d6e553cd72f131cf974",
"assets/icons/close.svg": "b565cfbf86bd62f9600c9daa1a2020e7",
"assets/icons/deletePhoneNuber.svg": "291a19b78bade887e9a95694946d9c34",
"assets/icons/refresh.svg": "89f0a3a2a327366c29475697e1cb372a",
"assets/icons/ideal_pause.svg": "37bfd2f69ee32eb081c1294bc345e724",
"assets/icons/camera_icon.svg": "8518a4519d7a1f76c17e1cbf1da55fdc",
"assets/icons/save.svg": "0d27b7c243b8172c098b993b574c8da6",
"assets/icons/navigation.svg": "673bf201916aef955fd8392177e8f620",
"assets/icons/ideal_backward.svg": "8202d3a8621a9c984394ed943fef0cbe",
"assets/icons/ideal_quality.svg": "9eac9d16be1e309108f5fdf7ae0298b2",
"assets/icons/setting.svg": "b0a60a0a154356b1d2720f404e2571a7",
"assets/icons/outline_heart.svg": "40d623f292463f2472081c41b273d34c",
"assets/icons/bag_icon.svg": "a8a0d615da5e6808f34a5d86ada4f6b3",
"assets/icons/tick_circle.svg": "4f554a5b23b9758be522ec9cb395175f",
"assets/icons/message.svg": "97da98204de61b8c995d6378c87fab16",
"assets/icons/chat.svg": "c720db55b8e7ae9f94eec0c5d9ae5329",
"assets/icons/artist_news.svg": "e8a863774b3ced1174236e76764ec20e",
"assets/icons/send.svg": "b9b06aece32a20aba7728d065e94d80b",
"assets/icons/ghollak_home.svg": "d478b4946f33637e5813be5a17ee25a5",
"assets/icons/ghabzMoreIcon.png": "7d0cf480b129a0132f402e2c22b7ac83",
"assets/icons/logo.png": "d7d370aef0de172c67f20bdd18983819",
"assets/icons/ghollak_share.svg": "71b1c94abc7271f9ea4113dbeac72dd8",
"assets/icons/ghollak_message.svg": "8e36d732b659b6bea7f1ae621b105f44",
"assets/icons/subscription_password.svg": "4894f3f0076e2af9217e0eae313758c4",
"assets/icons/voice.svg": "4bf01907a3228ccdbf360aba6752af51",
"assets/icons/services_rule.svg": "10a3d4c63620f0c9e94e2ff76da5cf66",
"assets/icons/trash.svg": "e97fb053b9fc0c6efa24f16bbffd6746",
"assets/icons/ghollak_print.svg": "57e3f9bb97c93014c89a49b2dd5c9a72",
"assets/icons/ideal_volume.svg": "3f783fa0366dd6bc661bc5288b3eabb9",
"assets/icons/ideal_student.svg": "ca8b99f73a66c50839c8bf63abbbe8e6",
"assets/icons/no_request_icon.svg": "b9ce753c883e9474e723cf41b646dbd7",
"assets/icons/users_subscription.svg": "4a457978243aecf22b583660b3248a05",
"assets/icons/edit.svg": "2f47008b2375a73972f7ea3a7cbe0272",
"assets/icons/faq.svg": "16ba2a3a94d6de21abbe53f2419b9a39",
"assets/icons/contact_us.svg": "b929226e7cf8b6dcce72113c3b975967",
"assets/icons/ideal_forward.svg": "43e5dece81a72d23189fbf4600a73b70",
"assets/icons/pdf.svg": "6a9a28b3f1b6f6e2de1ffb2cd9eb2283",
"assets/icons/ghollak_pdf.svg": "2fe223dd51c8fc4029c1cfe848dafbd3",
"assets/icons/sell_to_nahang.svg": "28e8ea3565f92fa447e4a73762159619",
"assets/icons/QR.svg": "bfa05f4ba0fbcf065af1e2c4ed46afce",
"assets/icons/exit.svg": "add1e2a8687a1cd821597c3e645f0f22",
"assets/icons/delete.svg": "47d731ba5f8e222b79dee7caba90eed2",
"assets/icons/buy_subscription.svg": "eea42ba18ec1cff12418aa9560c219e7",
"assets/icons/phone.svg": "cecb1e79cb8ef58e7cf992702ba0e602",
"assets/icons/ghollak_selection.svg": "afa65ce7a28e68e3fa6432f841f092ad",
"assets/icons/call.svg": "f82e2638ae2446f500611dec1f6769de",
"assets/icons/wallet_art_bg.svg": "5eb8b9d66eccd6b90970f5e3b9c44173",
"assets/icons/ghollak_lock.svg": "0e096cd9ef1b9eaff435f885249e7b9e",
"assets/icons/theater_icon.svg": "010609fedec57e1f75db7bbbe99b2c8e",
"assets/icons/eye.svg": "62294ed23c6a1114bdd1225d20bcb6a1",
"assets/icons/location.svg": "e31b472e169a8d72d076fd8200fbf0e5",
"assets/icons/ghollak_drawer.svg": "e87241ea0f4a32542b71bddf88abc8df",
"assets/icons/empty_background.svg": "2631f7bfa33dfd2650e7b91170f3595f",
"assets/icons/profile.svg": "b76beb8353eca3f9efeac0b8bb3ce499",
"assets/icons/ghollak_close.svg": "150409e1a577efb8618b3d8734eaab0a",
"assets/icons/dowloads.svg": "a3024ed20af56db1a5d28d9d35ea78e9",
"assets/icons/business.svg": "e084b237427c94ce029f2f50a784e935",
"assets/icons/filter.svg": "79f8e58dc70394adcddcbf9b00a5541f",
"assets/icons/emptyList.svg": "7233b5a6e43cfaa99ae0cd0918edf7e6",
"assets/icons/ghollak_time.svg": "a24225ef8aa556e18b6ba0262dc7e371",
"assets/icons/share_solid.svg": "cb1d3951bd1dd5e5e8055388d19183c7",
"assets/icons/logo.svg": "5f8b5bfe893ce2f4b8fe2287ff6c4175",
"assets/icons/ghollak_qr_bottom_right.svg": "5ca71eae7d850936d292a9064da47147",
"assets/icons/my_subscription.svg": "32d9c84e8ff37132cb4c4b871645f014",
"assets/icons/wallet_icon.svg": "c3407734e91776c3a42bf089371994b7",
"assets/icons/loading_image.png": "76e60d6084f011b79ba709bff0b64942",
"assets/icons/ghollak_ghollaks.svg": "f07c142c899fdc0033a0250297d109ee",
"assets/icons/ghollak_search.svg": "c14f6be1f8782ed7112ea662dac976f3",
"assets/icons/register_jobs.svg": "8b37fe102cc8af08bdaa69b02e7bf1ad",
"assets/icons/bold_heart.svg": "e4aaf5582ba969641ce7f9ecf4c81dce",
"assets/icons/top.svg": "16c37d35529b77755bc2b5522da11331",
"assets/icons/archive_requests.svg": "6204e50dbde2b41d3e835631e8f764fb",
"assets/icons/deleteIconMasseges.svg": "e97fb053b9fc0c6efa24f16bbffd6746",
"assets/icons/minus.svg": "c3b4aa12d27db8ef1f0deb5a73bdfc8d",
"assets/icons/version_icon.svg": "0dcb8fbd74e80e83c6d0b0a8b7b39e02",
"assets/icons/play_icon.svg": "a931e1425a641e9053fc274fb3bcd7e5",
"assets/icons/ghollak_card.svg": "f8564df4df7ffce80d97ba3d7bcc0ae8",
"assets/icons/privacy.svg": "616c1ebc2bbbf20e2488fcb02c39f4ca",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/IRANYekanMobileRegular.ttf": "2c58293edeb64bdb41bcc8fa6353515e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
