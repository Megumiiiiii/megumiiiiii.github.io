"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[8683],{6241:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"dym","metadata":{"permalink":"/ja/blog/dym","source":"@site/blog/dym.md","title":"Web Mint","description":"English Coming Soon","date":"2023-12-03T15:49:53.000Z","formattedDate":"2023\u5e7412\u67083\u65e5","tags":[{"label":"IBC","permalink":"/ja/blog/tags/ibc"},{"label":"EVM","permalink":"/ja/blog/tags/evm"}],"readingTime":4.123711340206186,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"dym","title":"Web Mint","authors":["megumii"],"tags":["IBC","EVM"]},"nextItem":{"title":"First Step to join Permaweb with ArDrive & ArNS","permalink":"/ja/blog/arns"}},"content":"## English Coming Soon"},{"id":"arns","metadata":{"permalink":"/ja/blog/arns","source":"@site/i18n/ja/docusaurus-plugin-content-blog/arns.mdx","title":"First Step to join Permaweb with ArDrive & ArNS","description":"Apa yang dibutuhkan","date":"2023-11-22T19:20:12.000Z","formattedDate":"2023\u5e7411\u670822\u65e5","tags":[{"label":"Arweave","permalink":"/ja/blog/tags/arweave"}],"readingTime":230.9278350515464,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"arns","title":"First Step to join Permaweb with ArDrive & ArNS","authors":["megumii"],"tags":["Arweave"]},"prevItem":{"title":"Web Mint","permalink":"/ja/blog/dym"},"nextItem":{"title":"Penumbra Summoning Ceremony","permalink":"/ja/blog/penumbra"}},"content":"## Apa yang dibutuhkan\\r\\n\\r\\n- [Wallet](https://www.arconnect.io/download)\\r\\n- `$AR`, bisa mendapatkannya dari CEX favoritmu\\r\\n\\r\\n## Unggah ke ArDrive\\r\\n\\r\\n- Kunjungi https://app.ardrive.io\\r\\n- Pilih Login with ArConnect \\r\\n- Buat public Drive\\r\\n- Kemudian unggah file Anda, bisa berupa gambar, video, file teks, apapun! (Ukuran file di bawah 500 Kb GRATIS)\\r\\n- Klik file Anda dan pergi ke bagian `details`, lalu salin `Data Tx ID`\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/arnsde.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n## Dapatkan ArNS\\r\\n\\r\\n#### Untuk membeli ArnS, kamu perlu memiliki Token TestIO, berikut adalah cara meminta token tersebut\\r\\n\\r\\n- Masuk ke Ar.io [Discord](https://discord.gg/c4rSSNV9v3)\\r\\n    - Di channel `#arns-test`, ketik `/apply`, jawab semua pertanyaan\\r\\n    - <img width=\\"100%\\" height=\\"auto\\" src=\\"/img/arnsap.png\\" type=\\"image/png\\"></img>\\r\\n    - Untuk pertanyaan ini, jawab dengan Tx ID dari Langkah sebelumnya\\r\\n    - <img width=\\"100%\\" height=\\"auto\\" src=\\"/img/arnsas.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n#### Setelah menerima `Test IO`\\r\\n\\r\\n- Kunjungi https://arns.app\\r\\n- Cari nama apapun ( 8 digit++ )\\r\\n- Jika tersedia, klik register now\\r\\n- <img width=\\"100%\\" height=\\"auto\\" src=\\"/img/arnsav.png\\" type=\\"image/png\\"></img>\\r\\n- Pilih 1 Year\\r\\n- Isi `Arweave transaction ID ( Target ID )` dengan Tx ID Anda\\r\\n- <img width=\\"100%\\" height=\\"auto\\" src=\\"/img/arnsnt.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\nDan sekarang ArNS mu bisa diakses dengan `https://your-arNS.ar-io.dev`.\\r\\n\\r\\nContoh https://megumii.ar-io.dev\\r\\n\\r\\n#### `ar-io.dev` dapat diganti dengan Gateways lain yang terdaftar di sini - > https://gateways.ar-io.dev\\r\\n\\r\\nContoh:\\r\\n- https://megumii.blessingway.xyz\\r\\n- https://megumii.g8way.io\\r\\n- https://megumii.dwentz.xyz\\r\\n- https://megumii.sulapan.com\\r\\n- https://megumii.66666.site\\r\\n\\r\\n### Terakhir, please STAMP\\r\\n\\r\\n- Buka [Bazar](https://bazar.g8way.io/#/collection/ADd6xeeWq_pYbu0m7ZlihV5CQkjOCKJIb9h7gWEDB6k)\\r\\n- Klik, tidak perlu biaya gas apapun\\r\\n- ![stamp](/img/stamp.png)"},{"id":"penumbra","metadata":{"permalink":"/ja/blog/penumbra","source":"@site/i18n/ja/docusaurus-plugin-content-blog/penumbra.mdx","title":"Penumbra Summoning Ceremony","description":"Install Dependencies","date":"2023-11-14T20:43:21.000Z","formattedDate":"2023\u5e7411\u670814\u65e5","tags":[{"label":"IBC","permalink":"/ja/blog/tags/ibc"}],"readingTime":469.07216494845363,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"penumbra","title":"Penumbra Summoning Ceremony","authors":["megumii"],"tags":["IBC"]},"prevItem":{"title":"First Step to join Permaweb with ArDrive & ArNS","permalink":"/ja/blog/arns"},"nextItem":{"title":"Deploy Contract on Aleo without Node","permalink":"/ja/blog/aleo"}},"content":"import Tabs from \'@theme/Tabs\';\\r\\nimport TabItem from \'@theme/TabItem\';\\r\\n\\r\\n## Install Dependencies\\r\\n\\r\\n- any other\\r\\n```bash\\r\\nsudo apt-get install build-essential pkg-config libssl-dev clang git-lfs screen\\r\\n```\\r\\n\\r\\n- rustup\\r\\n```bash\\r\\ncurl --proto \'=https\' --tlsv1.2 -sSf https://sh.rustup.rs | sh\\r\\n```\\r\\n\\r\\n## Install pcli\\r\\n\\r\\n```bash\\r\\ngit clone https://github.com/penumbra-zone/penumbra\\r\\ncd penumbra && git fetch && git checkout v0.63.1\\r\\ncargo build --release --bin pcli\\r\\n```\\r\\n\\r\\n### Generate/Import wallet\\r\\n\\r\\n<Tabs>\\r\\n<TabItem value=\\"Generate Wallet\\">\\r\\n\\r\\n```bash\\r\\ncargo run --quiet --release --bin pcli init soft-kms generate\\r\\n```\\r\\n\\r\\n</TabItem>\\r\\n<TabItem value=\\"Import Wallet\\">\\r\\n\\r\\n```bash\\r\\ncargo run --quiet --release --bin pcli init soft-kms import-phrase\\r\\n```\\r\\n\\r\\n</TabItem>\\r\\n</Tabs>\\r\\n\\r\\n### Faucet\\r\\n\\r\\n- View address\\r\\n```bash\\r\\ncargo run --quiet --release --bin pcli view address 0\\r\\n```\\r\\n\\r\\n- Request Faucet, [Discord](https://discord.gg/5aYkBpXD)\\r\\n\\r\\n#### Check balance\\r\\n\\r\\n```bash\\r\\ncargo run --quiet --release --bin pcli view sync\\r\\n```\\r\\n\\r\\n```bash\\r\\ncargo run --quiet --release --bin pcli view balance\\r\\n```\\r\\n\\r\\n## Contribute\\r\\n\\r\\n```bash\\r\\nscreen -S penumbra\\r\\ncargo run --quiet --release --bin pcli -- ceremony contribute --phase 1 --bid 60penumbra --coordinator-address penumbra1qvqr8cvqyf4pwrl6svw9kj8eypf3fuunrcs83m30zxh57y2ytk94gygmtq5k82cjdq9y3mlaa3fwctwpdjr6fxnwuzrsy4ezm0u2tqpzw0sed82shzcr42sju55en26mavjnw4\\r\\n```\\r\\n:::info\\r\\n- The minimum bid for this ceremony is 60penumbra.\\r\\n- To change your bid, you can simply run the command again with a different bid amount. Note that each time you bid with the command above, this adds additional funds to all of the previous bids you\'ve already submitted.\\r\\n:::\\r\\n\\r\\nOutput:\\r\\n\\r\\n```js\\r\\n                               \u26d4\ufe0fWARNING\ufe0f\ufe0f\u26d4\ufe0f:\\r\\n\\r\\n                        you are about to lose money!\\r\\n\\r\\n\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\\r\\nThis message ... is part of a system of messages...\\r\\n... we considered ourselves to be a fault-tolerant distributed system...\\r\\nThis message is a warning about danger.\\r\\nThe danger is in a particular location... the center of danger is the pcli binary...\\r\\nThe danger is to your funds, and it can destroy them.\\r\\nThe danger is unleashed only if you execute this software.\\r\\n\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\\r\\n\\r\\n                           USE AT YOUR OWN RISK\\r\\nScanning blocks from last sync height 0 to latest height 235664\\r\\n[2m] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591   46786/235664  383/s ETA: 8m\\r\\n\\r\\n                           USE AT YOUR OWN RISK\\r\\nScanning blocks from last sync height 235949 to latest height 235949\\r\\n[0s] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588       0/0       0/s ETA: 0s\\r\\n\xb8,\xf8\xa4\xba\xb0` initiating summoning participation `\xb0\xba\xa4\xf8,\xb8\\r\\nsubmitting bid 2penumbra for contribution slot from address penumbra1yt3q8shj4ld5ux5t89rha7w0aw2lhd53ypt52l7axvmty50z9g5uq3avhhlqazk4drvdn9rh3hxe4fcq45svn8muphl9kxfpx99pzjmnwjkz8p6dyj262lzlld39cymkwpy39t\\r\\nbuilding transaction...\\r\\nfinished proving in 8.624 seconds [3 actions, 3 proofs, 2389 bytes]\\r\\nbroadcasting transaction and awaiting confirmation...\\r\\ntransaction confirmed and detected: 5dfbe01d738babdbb7648da60147fc1f397448ce00e8817764d6b1c11c3ac3de @ height 235952\\r\\nconnecting to coordinator...\\r\\nconnected to coordinator!\\r\\nYou may disconnect (CTRL+C) to increase your bid if you don\'t like your position in the queue.\\r\\nOtherwise, please keep this window open.\\r\\n\\r\\n[1s] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 position 762 out of 912 connected summoners     (your bid: 97000000, most recent slot bid: \\r\\n[2s] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 position 762 out of 912 connected summoners     (your bid: 97000000, most recent slot bid: \\r\\n[3s] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 position 762 out of 912 connected summoners     (your bid: 97000000, most recent slot bid: \\r\\n```\\r\\n\\r\\n#### Copy `transaction confirmed and detected:` then tweet\\r\\n[Example](https://twitter.com/megumii_tez/status/1724527866627641837)"},{"id":"aleo","metadata":{"permalink":"/ja/blog/aleo","source":"@site/i18n/ja/docusaurus-plugin-content-blog/aleo.mdx","title":"Deploy Contract on Aleo without Node","description":"Install Leo Wallet","date":"2023-11-13T13:18:39.000Z","formattedDate":"2023\u5e7411\u670813\u65e5","tags":[{"label":"Aleo","permalink":"/ja/blog/tags/aleo"}],"readingTime":261.8556701030928,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"aleo","title":"Deploy Contract on Aleo without Node","authors":["megumii"],"tags":["Aleo"]},"prevItem":{"title":"Penumbra Summoning Ceremony","permalink":"/ja/blog/penumbra"},"nextItem":{"title":"Quaver","permalink":"/ja/blog/quaver"}},"content":"## Install Leo Wallet\\r\\n\\r\\n- Download [DISINI](https://chrome.google.com/webstore/detail/leo-wallet/nebnhfamliijlghikdgcigoebonmoibm) dan install\\r\\n- Buat Wallet\\r\\n- Request faucet dengan cara kirim SMS ke nomer +18678885688\\r\\n- Kirim pesan menggunakan format\\r\\n```\\r\\nSend 50 credits to aleoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\r\\n```\\r\\n\\r\\n## Mulai Deploy\\r\\n\\r\\n- Setelah mendapat Aleo, pergi ke web Deployer \u2192 [DISINI](https://aleo.tools/develop)\\r\\n- Copy ini dan paste ke kolom Deploy\\r\\n```\\r\\nprogram nama_bebas.aleo;\\r\\n\\r\\nrecord Token:\\r\\n    owner as address.private;\\r\\n    amount as u64.private;\\r\\n\\r\\n\\r\\nfunction mint:\\r\\n    input r0 as address.private;\\r\\n    input r1 as u64.private;\\r\\n    cast r0 r1 into r2 as Token.record;\\r\\n    output r2 as Token.record;\\r\\n\\r\\n\\r\\nfunction transfer:\\r\\n    input r0 as Token.record;\\r\\n    input r1 as address.private;\\r\\n    input r2 as u64.private;\\r\\n    sub r0.amount r2 into r3;\\r\\n    cast r0.owner r3 into r4 as Token.record;\\r\\n    cast r1 r2 into r5 as Token.record;\\r\\n    output r4 as Token.record;\\r\\n    output r5 as Token.record;\\r\\n```\\r\\n- Ganti `nama_bebas.aleo` dengan nama apapun sesuka hati\\r\\n\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/deployleo.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n- Pastikan gunakan nama yang belum terpakai, buka [Explorer](https://explorer.hamp.app/programs) lalu pada kolom Search cari nama yang akan digunakan, jika 404 berarti bisa dipakai.\\r\\n- Pastekan privkey leo wallet yang tadi dipake req faucet\\r\\n- Isi fee dengan 5\\r\\n- Matikan `Private Fee`\\r\\n\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/deployleoo.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n- Deploy, done\\r\\n\\r\\n## Execute app\\r\\n\\r\\n- Masukan nama app yang sudah di deploy tadi\\r\\n\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/deployleooo.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n- Klik tombol search, maka code nya akan ter-load\\r\\n- Masukan Privkey mu ke kolom *Private Key\\r\\n- Aktifkan `Execute Onchain`\\r\\n- Isi fee 3\\r\\n- Lalu ke bagian `mint`\\r\\n\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/deployleoooo.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n- `r0` isi addressmu\\r\\n- `r1` isi `1000u64`\\r\\n- Runnnnn"},{"id":"quaver","metadata":{"permalink":"/ja/blog/quaver","source":"@site/i18n/ja/docusaurus-plugin-content-blog/quaver.mdx","title":"Quaver","description":"Beatmap Info","date":"2023-10-27T18:35:13.000Z","formattedDate":"2023\u5e7410\u670827\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"quaver","title":"Quaver","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Deploy Contract on Aleo without Node","permalink":"/ja/blog/aleo"},"nextItem":{"title":"Tokiiro Serenade","permalink":"/ja/blog/serenade"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/873811#osu/1846226)\\r\\n- BPM: 186\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/IussrJnOeQ657kp0Dj5fXWS1wakaRg8ZCSpHUxVRF7c\\" type=\\"video/mp4\\"></video>"},{"id":"serenade","metadata":{"permalink":"/ja/blog/serenade","source":"@site/i18n/ja/docusaurus-plugin-content-blog/serenade.mdx","title":"Tokiiro Serenade","description":"Beatmap Info","date":"2023-10-14T11:06:21.000Z","formattedDate":"2023\u5e7410\u670814\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"serenade","title":"Tokiiro Serenade","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Quaver","permalink":"/ja/blog/quaver"},"nextItem":{"title":"Highlight","permalink":"/ja/blog/yo"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/360654#osu/795140)\\r\\n- BPM: 138\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/8Wg3SHBx1slnjUxqfj7jA3_Z8LLv_p0tkxtEBg6mFbU\\" type=\\"video/mp4\\"></video>"},{"id":"yo","metadata":{"permalink":"/ja/blog/yo","source":"@site/i18n/ja/docusaurus-plugin-content-blog/highlight.mdx","title":"Highlight","description":"","date":"2023-10-13T19:53:57.000Z","formattedDate":"2023\u5e7410\u670813\u65e5","tags":[],"readingTime":110.30927835051547,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"title":"Highlight","slug":"yo","authors":["megumii"],"hide_table_of_contents":true},"prevItem":{"title":"Tokiiro Serenade","permalink":"/ja/blog/serenade"},"nextItem":{"title":"Seishun Complex","permalink":"/ja/blog/seishun"}},"content":"<div className=\\"twitter-tweet twitter-tweet-rendered\\" style={{ display: \'flex\', maxWidth: \'550px\', width: \'100%\', marginTop: \'10px\', marginBottom: \'10px\' }}><iframe id=\\"twitter-widget-0\\" scrolling=\\"no\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" class=\\"\\" style={{ position: \'static\', visibility: \'visible\', width: \'492px\', height: \'419px\', display: \'block\', flexGrow: 1}} title=\\"Tweet\\" src=\\"https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=e30%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1707010385155432923&amp;lang=en&amp;origin=file%3A%2F%2F%2FC%3A%2FUsers%2Fmegum%2FOneDrive%2FDocuments%2Findex.html&amp;theme=light&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554&amp;width=550px\\" data-tweet-id=\\"1707010385155432923\\"></iframe></div> <script async=\\"\\" src=\\"https://platform.twitter.com/widgets.js\\" charset=\\"utf-8\\"><\/script>\\r\\n\\r\\n<div class=\\"twitter-tweet twitter-tweet-rendered\\" style={{ display: \'flex\', maxWidth: \'550px\', width: \'100%\', marginTop: \'10px\', marginBottom: \'10px\' }}><iframe id=\\"twitter-widget-1\\" scrolling=\\"no\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" class=\\"\\" style={{ position: \'static\', visibility: \'visible\', width: \'492px\', height: \'419px\', display: \'block\', flexGrow: 1}} title=\\"Tweet\\" src=\\"https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-1&amp;features=e30%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1681212232439595009&amp;lang=en&amp;origin=file%3A%2F%2F%2FC%3A%2FUsers%2Fmegum%2FOneDrive%2FDocuments%2Findex.html&amp;theme=light&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554&amp;width=550px\\" data-tweet-id=\\"1681212232439595009\\"></iframe></div> <script async=\\"\\" src=\\"https://platform.twitter.com/widgets.js\\" charset=\\"utf-8\\"><\/script>\\r\\n\\r\\n<iframe id=\\"rufous-sandbox\\" scrolling=\\"no\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" style={{ position: \'absolute\', visibility: \'hidden\', display: \'none\', width: \'0px\', height: \'0px\', padding: \'0px\', border: \'none\' }} title=\\"Twitter analytics iframe\\"></iframe>"},{"id":"seishun","metadata":{"permalink":"/ja/blog/seishun","source":"@site/i18n/ja/docusaurus-plugin-content-blog/seishun.mdx","title":"Seishun Complex","description":"Beatmap Info","date":"2023-10-10T06:58:43.000Z","formattedDate":"2023\u5e7410\u670810\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"seishun","title":"Seishun Complex","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Highlight","permalink":"/ja/blog/yo"},"nextItem":{"title":"Yume Chizu","permalink":"/ja/blog/yume"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1867294#osu/3842880)\\r\\n- BPM: 190\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/QO_ElN_ioqmiIYIJHYQYvJXEWbHpHYilAE0TTBoi_P8\\" type=\\"video/mp4\\"></video>"},{"id":"yume","metadata":{"permalink":"/ja/blog/yume","source":"@site/i18n/ja/docusaurus-plugin-content-blog/yume.mdx","title":"Yume Chizu","description":"Beatmap Info","date":"2023-10-10T06:58:43.000Z","formattedDate":"2023\u5e7410\u670810\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"yume","title":"Yume Chizu","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Seishun Complex","permalink":"/ja/blog/seishun"},"nextItem":{"title":"Star Beat","permalink":"/ja/blog/star-beat"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1068768#osu/2237468)\\r\\n- BPM: 176\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/76J2RtMOav-Ez3S3BnTxVYuD618a5vANhYZ1TT-EoLs\\" type=\\"video/mp4\\"></video>"},{"id":"star-beat","metadata":{"permalink":"/ja/blog/star-beat","source":"@site/i18n/ja/docusaurus-plugin-content-blog/star.mdx","title":"Star Beat","description":"Beatmap Info","date":"2023-10-09T18:13:26.000Z","formattedDate":"2023\u5e7410\u67089\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"star-beat","title":"Star Beat","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Yume Chizu","permalink":"/ja/blog/yume"},"nextItem":{"title":"Heavy Rotation","permalink":"/ja/blog/heavy"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/650607#osu/1402930)\\r\\n- BPM: 195\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/V9k9uuSQ4a6jubJbNJkkODnUpu815q9bP_hR0GGoh1w\\" type=\\"video/mp4\\"></video>"},{"id":"heavy","metadata":{"permalink":"/ja/blog/heavy","source":"@site/i18n/ja/docusaurus-plugin-content-blog/heavy.mdx","title":"Heavy Rotation","description":"Beatmap Info","date":"2023-10-08T08:40:54.000Z","formattedDate":"2023\u5e7410\u67088\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"heavy","title":"Heavy Rotation","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Star Beat","permalink":"/ja/blog/star-beat"},"nextItem":{"title":"C-Type","permalink":"/ja/blog/c-type"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1556324#osu/3179304)\\r\\n- BPM: 178\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/pj9G7kAR4SkuNXbeUF0YisFPKkky3b3P244Wo1jcd6U\\" type=\\"video/mp4\\"></video>"},{"id":"c-type","metadata":{"permalink":"/ja/blog/c-type","source":"@site/i18n/ja/docusaurus-plugin-content-blog/c-type.mdx","title":"C-Type","description":"Beatmap Info","date":"2023-10-08T08:10:34.000Z","formattedDate":"2023\u5e7410\u67088\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"c-type","title":"C-Type","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Heavy Rotation","permalink":"/ja/blog/heavy"},"nextItem":{"title":"Pudding Funfair","permalink":"/ja/blog/pudding"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/757146#osu/1620144)\\r\\n- BPM: 149.3\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/xTT-Tt7EmSdU_ALYDZSZqZqvk26KbA4rD7Q_gR5pIvA\\" type=\\"video/mp4\\"></video>"},{"id":"pudding","metadata":{"permalink":"/ja/blog/pudding","source":"@site/i18n/ja/docusaurus-plugin-content-blog/pudding.mdx","title":"Pudding Funfair","description":"Beatmap Info","date":"2023-10-08T08:10:34.000Z","formattedDate":"2023\u5e7410\u67088\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"pudding","title":"Pudding Funfair","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"C-Type","permalink":"/ja/blog/c-type"},"nextItem":{"title":"And Again And Again","permalink":"/ja/blog/and-again"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/993369#osu/2225466)\\r\\n- BPM: 150\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/ACKWqx4OoHjb2BVpGynXOAWZ7D1Me6jfWyAT62ejhbk\\" type=\\"video/mp4\\"></video>"},{"id":"and-again","metadata":{"permalink":"/ja/blog/and-again","source":"@site/i18n/ja/docusaurus-plugin-content-blog/again.mdx","title":"And Again And Again","description":"Beatmap Info","date":"2023-10-03T10:23:29.000Z","formattedDate":"2023\u5e7410\u67083\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"and-again","title":"And Again And Again","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Pudding Funfair","permalink":"/ja/blog/pudding"},"nextItem":{"title":"Re Aoharu","permalink":"/ja/blog/aoharu"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/801074#osu/1681634)\\r\\n- BPM: 150\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/Sdgker22LW85KWozIzONFUzkHjaF4oW7ijIx9sXrAcQ\\" type=\\"video/mp4\\"></video>"},{"id":"aoharu","metadata":{"permalink":"/ja/blog/aoharu","source":"@site/i18n/ja/docusaurus-plugin-content-blog/aoharu.mdx","title":"Re Aoharu","description":"Beatmap Info","date":"2023-10-03T10:23:29.000Z","formattedDate":"2023\u5e7410\u67083\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"aoharu","title":"Re Aoharu","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"And Again And Again","permalink":"/ja/blog/and-again"},"nextItem":{"title":"Marshmary","permalink":"/ja/blog/marshmary"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1935191#osu/4001171)\\r\\n- BPM: 180\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/T1ydJjyz4tzFG8Vxs3VD8pqAmoIDcYV91VH0WrFejeU\\" type=\\"video/mp4\\"></video>"},{"id":"marshmary","metadata":{"permalink":"/ja/blog/marshmary","source":"@site/i18n/ja/docusaurus-plugin-content-blog/marshmary.mdx","title":"Marshmary","description":"Beatmap Info","date":"2023-10-03T10:23:29.000Z","formattedDate":"2023\u5e7410\u67083\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"marshmary","title":"Marshmary","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Re Aoharu","permalink":"/ja/blog/aoharu"},"nextItem":{"title":"Arkadia","permalink":"/ja/blog/arkadia"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/962088#osu/2014470)\\r\\n- BPM: 182\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/g5GrUOC577qRtccBB1yIu31em8gPbvew129ArUS4X7M\\" type=\\"video/mp4\\"></video>"},{"id":"arkadia","metadata":{"permalink":"/ja/blog/arkadia","source":"@site/i18n/ja/docusaurus-plugin-content-blog/arkadia.mdx","title":"Arkadia","description":"Beatmap Info","date":"2023-10-02T20:23:28.000Z","formattedDate":"2023\u5e7410\u67082\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"arkadia","title":"Arkadia","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Marshmary","permalink":"/ja/blog/marshmary"},"nextItem":{"title":"Gurumi","permalink":"/ja/blog/gurumi"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1695872#osu/3616425)\\r\\n- BPM: 200\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/2HaguVRp-cZw7jXfoLIjdpYtzwc8jvzKk0mnd83R9J8\\" type=\\"video/mp4\\"></video>"},{"id":"gurumi","metadata":{"permalink":"/ja/blog/gurumi","source":"@site/i18n/ja/docusaurus-plugin-content-blog/gurumi.mdx","title":"Gurumi","description":"Beatmap Info","date":"2023-09-30T15:36:05.000Z","formattedDate":"2023\u5e749\u670830\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"gurumi","title":"Gurumi","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Arkadia","permalink":"/ja/blog/arkadia"},"nextItem":{"title":"Juveline","permalink":"/ja/blog/juveline"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1312079#osu/2732132)\\r\\n- BPM: 185\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/bx5szOf1MxstkmvthtLiBCE7LLJZW8hIyfK4WgnWzIo\\" type=\\"video/mp4\\"></video>"},{"id":"juveline","metadata":{"permalink":"/ja/blog/juveline","source":"@site/i18n/ja/docusaurus-plugin-content-blog/juveline.mdx","title":"Juveline","description":"Beatmap Info","date":"2023-09-30T15:36:05.000Z","formattedDate":"2023\u5e749\u670830\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"juveline","title":"Juveline","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Gurumi","permalink":"/ja/blog/gurumi"},"nextItem":{"title":"Non-breath Oblige","permalink":"/ja/blog/buresu"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1280204#osu/2659371)\\r\\n- BPM: 200\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/HoeHIGEBOTYgRMIgaJlxmQcoonkWJrinR-IE83PUQeo\\" type=\\"video/mp4\\"></video>"},{"id":"buresu","metadata":{"permalink":"/ja/blog/buresu","source":"@site/i18n/ja/docusaurus-plugin-content-blog/buresu.mdx","title":"Non-breath Oblige","description":"Beatmap Info","date":"2023-09-30T09:20:03.000Z","formattedDate":"2023\u5e749\u670830\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"buresu","title":"Non-breath Oblige","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Juveline","permalink":"/ja/blog/juveline"},"nextItem":{"title":"Colorful","permalink":"/ja/blog/colorful"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1889729#osu/3907767)\\r\\n- BPM: 148\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/JzgvfP7BhX78zm2u46BpkwbnTD1WrLFgF_bRuXFxY_M\\" type=\\"video/mp4\\"></video>"},{"id":"colorful","metadata":{"permalink":"/ja/blog/colorful","source":"@site/i18n/ja/docusaurus-plugin-content-blog/colorful.mdx","title":"Colorful","description":"Beatmap Info","date":"2023-09-30T09:20:03.000Z","formattedDate":"2023\u5e749\u670830\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"colorful","title":"Colorful","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Non-breath Oblige","permalink":"/ja/blog/buresu"},"nextItem":{"title":"Girl A","permalink":"/ja/blog/girl-a"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/931452#osu/1962198)\\r\\n- BPM: 192\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/GnDZJ_jT3xxtBqQ4iwFTnJjZ_NGnHw1aE4HmAUXmnEw\\" type=\\"video/mp4\\"></video>"},{"id":"girl-a","metadata":{"permalink":"/ja/blog/girl-a","source":"@site/i18n/ja/docusaurus-plugin-content-blog/girl.mdx","title":"Girl A","description":"Beatmap Info","date":"2023-09-30T09:20:03.000Z","formattedDate":"2023\u5e749\u670830\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"girl-a","title":"Girl A","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Colorful","permalink":"/ja/blog/colorful"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/2064760#osu/4318886)\\r\\n- BPM: 260\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/Yko2NmADJdHuRIpLST96ieqKTspZH_PD2p7ynWFYDwE\\" type=\\"video/mp4\\"></video>"}]}')}}]);