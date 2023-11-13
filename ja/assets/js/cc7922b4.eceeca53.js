"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[8683],{6241:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"aleo","metadata":{"permalink":"/ja/blog/aleo","source":"@site/i18n/ja/docusaurus-plugin-content-blog/aleo.mdx","title":"Deploy Contract on Aleo without Node","description":"Install Leo Wallet","date":"2023-11-13T13:18:39.000Z","formattedDate":"2023\u5e7411\u670813\u65e5","tags":[{"label":"Aleo","permalink":"/ja/blog/tags/aleo"}],"readingTime":261.8556701030928,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"aleo","title":"Deploy Contract on Aleo without Node","authors":["megumii"],"tags":["Aleo"]},"nextItem":{"title":"Quaver","permalink":"/ja/blog/quaver"}},"content":"## Install Leo Wallet\\r\\n\\r\\n- Download [DISINI](https://chrome.google.com/webstore/detail/leo-wallet/nebnhfamliijlghikdgcigoebonmoibm) dan install\\r\\n- Buat Wallet\\r\\n- Request faucet dengan cara kirim SMS ke nomer +18678885688\\r\\n- Kirim pesan menggunakan format\\r\\n```\\r\\nSend 50 credits to aleoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\r\\n```\\r\\n\\r\\n## Mulai Deploy\\r\\n\\r\\n- Setelah mendapat Aleo, pergi ke web Deployer \u2192 [DISINI](https://aleo.tools/develop)\\r\\n- Copy ini dan paste ke kolom Deploy\\r\\n```\\r\\nprogram nama_bebas.aleo;\\r\\n\\r\\nrecord Token:\\r\\n    owner as address.private;\\r\\n    amount as u64.private;\\r\\n\\r\\n\\r\\nfunction mint:\\r\\n    input r0 as address.private;\\r\\n    input r1 as u64.private;\\r\\n    cast r0 r1 into r2 as Token.record;\\r\\n    output r2 as Token.record;\\r\\n\\r\\n\\r\\nfunction transfer:\\r\\n    input r0 as Token.record;\\r\\n    input r1 as address.private;\\r\\n    input r2 as u64.private;\\r\\n    sub r0.amount r2 into r3;\\r\\n    cast r0.owner r3 into r4 as Token.record;\\r\\n    cast r1 r2 into r5 as Token.record;\\r\\n    output r4 as Token.record;\\r\\n    output r5 as Token.record;\\r\\n```\\r\\n- Ganti `nama_bebas.aleo` dengan nama apapun sesuka hati\\r\\n\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/deployleo.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n- Pastikan gunakan nama yang belum terpakai, buka [Explorer](https://explorer.hamp.app/programs) lalu pada kolom Search cari nama yang akan digunakan, jika 404 berarti bisa dipakai.\\r\\n- Pastekan privkey leo wallet yang tadi dipake req faucet\\r\\n- Isi fee dengan 5\\r\\n- Matikan `Private Fee`\\r\\n\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/deployleoo.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n- Deploy, done\\r\\n\\r\\n## Execute app\\r\\n\\r\\n- Masukan nama app yang sudah di deploy tadi\\r\\n\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/deployleooo.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n- Klik tombol search, maka code nya akan ter-load\\r\\n- Masukan Privkey mu ke kolom *Private Key\\r\\n- Aktifkan `Execute Onchain`\\r\\n- Isi fee 3\\r\\n- Lalu ke bagian `mint`\\r\\n\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/deployleoooo.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n- `r0` isi addressmu\\r\\n- `r1` isi `1000u64`\\r\\n- Runnnnn"},{"id":"quaver","metadata":{"permalink":"/ja/blog/quaver","source":"@site/i18n/ja/docusaurus-plugin-content-blog/quaver.mdx","title":"Quaver","description":"Beatmap Info","date":"2023-10-27T18:35:13.000Z","formattedDate":"2023\u5e7410\u670827\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"quaver","title":"Quaver","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Deploy Contract on Aleo without Node","permalink":"/ja/blog/aleo"},"nextItem":{"title":"Tokiiro Serenade","permalink":"/ja/blog/serenade"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/873811#osu/1846226)\\r\\n- BPM: 186\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/IussrJnOeQ657kp0Dj5fXWS1wakaRg8ZCSpHUxVRF7c\\" type=\\"video/mp4\\"></video>"},{"id":"serenade","metadata":{"permalink":"/ja/blog/serenade","source":"@site/i18n/ja/docusaurus-plugin-content-blog/serenade.mdx","title":"Tokiiro Serenade","description":"Beatmap Info","date":"2023-10-14T11:06:21.000Z","formattedDate":"2023\u5e7410\u670814\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"serenade","title":"Tokiiro Serenade","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Quaver","permalink":"/ja/blog/quaver"},"nextItem":{"title":"Highlight","permalink":"/ja/blog/yo"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/360654#osu/795140)\\r\\n- BPM: 138\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/8Wg3SHBx1slnjUxqfj7jA3_Z8LLv_p0tkxtEBg6mFbU\\" type=\\"video/mp4\\"></video>"},{"id":"yo","metadata":{"permalink":"/ja/blog/yo","source":"@site/i18n/ja/docusaurus-plugin-content-blog/highlight.mdx","title":"Highlight","description":"","date":"2023-10-13T19:53:57.000Z","formattedDate":"2023\u5e7410\u670813\u65e5","tags":[],"readingTime":110.30927835051547,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"title":"Highlight","slug":"yo","authors":["megumii"],"hide_table_of_contents":true},"prevItem":{"title":"Tokiiro Serenade","permalink":"/ja/blog/serenade"},"nextItem":{"title":"Seishun Complex","permalink":"/ja/blog/seishun"}},"content":"<div className=\\"twitter-tweet twitter-tweet-rendered\\" style={{ display: \'flex\', maxWidth: \'550px\', width: \'100%\', marginTop: \'10px\', marginBottom: \'10px\' }}><iframe id=\\"twitter-widget-0\\" scrolling=\\"no\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" class=\\"\\" style={{ position: \'static\', visibility: \'visible\', width: \'492px\', height: \'419px\', display: \'block\', flexGrow: 1}} title=\\"Tweet\\" src=\\"https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=e30%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1707010385155432923&amp;lang=en&amp;origin=file%3A%2F%2F%2FC%3A%2FUsers%2Fmegum%2FOneDrive%2FDocuments%2Findex.html&amp;theme=light&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554&amp;width=550px\\" data-tweet-id=\\"1707010385155432923\\"></iframe></div> <script async=\\"\\" src=\\"https://platform.twitter.com/widgets.js\\" charset=\\"utf-8\\"><\/script>\\r\\n\\r\\n<div class=\\"twitter-tweet twitter-tweet-rendered\\" style={{ display: \'flex\', maxWidth: \'550px\', width: \'100%\', marginTop: \'10px\', marginBottom: \'10px\' }}><iframe id=\\"twitter-widget-1\\" scrolling=\\"no\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" class=\\"\\" style={{ position: \'static\', visibility: \'visible\', width: \'492px\', height: \'419px\', display: \'block\', flexGrow: 1}} title=\\"Tweet\\" src=\\"https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-1&amp;features=e30%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1681212232439595009&amp;lang=en&amp;origin=file%3A%2F%2F%2FC%3A%2FUsers%2Fmegum%2FOneDrive%2FDocuments%2Findex.html&amp;theme=light&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554&amp;width=550px\\" data-tweet-id=\\"1681212232439595009\\"></iframe></div> <script async=\\"\\" src=\\"https://platform.twitter.com/widgets.js\\" charset=\\"utf-8\\"><\/script>\\r\\n\\r\\n<iframe id=\\"rufous-sandbox\\" scrolling=\\"no\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" style={{ position: \'absolute\', visibility: \'hidden\', display: \'none\', width: \'0px\', height: \'0px\', padding: \'0px\', border: \'none\' }} title=\\"Twitter analytics iframe\\"></iframe>"},{"id":"seishun","metadata":{"permalink":"/ja/blog/seishun","source":"@site/i18n/ja/docusaurus-plugin-content-blog/seishun.mdx","title":"Seishun Complex","description":"Beatmap Info","date":"2023-10-10T06:58:43.000Z","formattedDate":"2023\u5e7410\u670810\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"seishun","title":"Seishun Complex","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Highlight","permalink":"/ja/blog/yo"},"nextItem":{"title":"Yume Chizu","permalink":"/ja/blog/yume"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1867294#osu/3842880)\\r\\n- BPM: 190\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/QO_ElN_ioqmiIYIJHYQYvJXEWbHpHYilAE0TTBoi_P8\\" type=\\"video/mp4\\"></video>"},{"id":"yume","metadata":{"permalink":"/ja/blog/yume","source":"@site/i18n/ja/docusaurus-plugin-content-blog/yume.mdx","title":"Yume Chizu","description":"Beatmap Info","date":"2023-10-10T06:58:43.000Z","formattedDate":"2023\u5e7410\u670810\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"yume","title":"Yume Chizu","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Seishun Complex","permalink":"/ja/blog/seishun"},"nextItem":{"title":"Star Beat","permalink":"/ja/blog/star-beat"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1068768#osu/2237468)\\r\\n- BPM: 176\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/76J2RtMOav-Ez3S3BnTxVYuD618a5vANhYZ1TT-EoLs\\" type=\\"video/mp4\\"></video>"},{"id":"star-beat","metadata":{"permalink":"/ja/blog/star-beat","source":"@site/i18n/ja/docusaurus-plugin-content-blog/star.mdx","title":"Star Beat","description":"Beatmap Info","date":"2023-10-09T18:13:26.000Z","formattedDate":"2023\u5e7410\u67089\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"star-beat","title":"Star Beat","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Yume Chizu","permalink":"/ja/blog/yume"},"nextItem":{"title":"Heavy Rotation","permalink":"/ja/blog/heavy"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/650607#osu/1402930)\\r\\n- BPM: 195\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/V9k9uuSQ4a6jubJbNJkkODnUpu815q9bP_hR0GGoh1w\\" type=\\"video/mp4\\"></video>"},{"id":"heavy","metadata":{"permalink":"/ja/blog/heavy","source":"@site/i18n/ja/docusaurus-plugin-content-blog/heavy.mdx","title":"Heavy Rotation","description":"Beatmap Info","date":"2023-10-08T08:40:54.000Z","formattedDate":"2023\u5e7410\u67088\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"heavy","title":"Heavy Rotation","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Star Beat","permalink":"/ja/blog/star-beat"},"nextItem":{"title":"C-Type","permalink":"/ja/blog/c-type"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1556324#osu/3179304)\\r\\n- BPM: 178\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/pj9G7kAR4SkuNXbeUF0YisFPKkky3b3P244Wo1jcd6U\\" type=\\"video/mp4\\"></video>"},{"id":"c-type","metadata":{"permalink":"/ja/blog/c-type","source":"@site/i18n/ja/docusaurus-plugin-content-blog/c-type.mdx","title":"C-Type","description":"Beatmap Info","date":"2023-10-08T08:10:34.000Z","formattedDate":"2023\u5e7410\u67088\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"c-type","title":"C-Type","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Heavy Rotation","permalink":"/ja/blog/heavy"},"nextItem":{"title":"Pudding Funfair","permalink":"/ja/blog/pudding"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/757146#osu/1620144)\\r\\n- BPM: 149.3\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/xTT-Tt7EmSdU_ALYDZSZqZqvk26KbA4rD7Q_gR5pIvA\\" type=\\"video/mp4\\"></video>"},{"id":"pudding","metadata":{"permalink":"/ja/blog/pudding","source":"@site/i18n/ja/docusaurus-plugin-content-blog/pudding.mdx","title":"Pudding Funfair","description":"Beatmap Info","date":"2023-10-08T08:10:34.000Z","formattedDate":"2023\u5e7410\u67088\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"pudding","title":"Pudding Funfair","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"C-Type","permalink":"/ja/blog/c-type"},"nextItem":{"title":"And Again And Again","permalink":"/ja/blog/and-again"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/993369#osu/2225466)\\r\\n- BPM: 150\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/ACKWqx4OoHjb2BVpGynXOAWZ7D1Me6jfWyAT62ejhbk\\" type=\\"video/mp4\\"></video>"},{"id":"and-again","metadata":{"permalink":"/ja/blog/and-again","source":"@site/i18n/ja/docusaurus-plugin-content-blog/again.mdx","title":"And Again And Again","description":"Beatmap Info","date":"2023-10-03T10:23:29.000Z","formattedDate":"2023\u5e7410\u67083\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"and-again","title":"And Again And Again","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Pudding Funfair","permalink":"/ja/blog/pudding"},"nextItem":{"title":"Re Aoharu","permalink":"/ja/blog/aoharu"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/801074#osu/1681634)\\r\\n- BPM: 150\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/Sdgker22LW85KWozIzONFUzkHjaF4oW7ijIx9sXrAcQ\\" type=\\"video/mp4\\"></video>"},{"id":"aoharu","metadata":{"permalink":"/ja/blog/aoharu","source":"@site/i18n/ja/docusaurus-plugin-content-blog/aoharu.mdx","title":"Re Aoharu","description":"Beatmap Info","date":"2023-10-03T10:23:29.000Z","formattedDate":"2023\u5e7410\u67083\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"aoharu","title":"Re Aoharu","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"And Again And Again","permalink":"/ja/blog/and-again"},"nextItem":{"title":"Marshmary","permalink":"/ja/blog/marshmary"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1935191#osu/4001171)\\r\\n- BPM: 180\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/T1ydJjyz4tzFG8Vxs3VD8pqAmoIDcYV91VH0WrFejeU\\" type=\\"video/mp4\\"></video>"},{"id":"marshmary","metadata":{"permalink":"/ja/blog/marshmary","source":"@site/i18n/ja/docusaurus-plugin-content-blog/marshmary.mdx","title":"Marshmary","description":"Beatmap Info","date":"2023-10-03T10:23:29.000Z","formattedDate":"2023\u5e7410\u67083\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"marshmary","title":"Marshmary","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Re Aoharu","permalink":"/ja/blog/aoharu"},"nextItem":{"title":"Arkadia","permalink":"/ja/blog/arkadia"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/962088#osu/2014470)\\r\\n- BPM: 182\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/g5GrUOC577qRtccBB1yIu31em8gPbvew129ArUS4X7M\\" type=\\"video/mp4\\"></video>"},{"id":"arkadia","metadata":{"permalink":"/ja/blog/arkadia","source":"@site/i18n/ja/docusaurus-plugin-content-blog/arkadia.mdx","title":"Arkadia","description":"Beatmap Info","date":"2023-10-02T20:23:28.000Z","formattedDate":"2023\u5e7410\u67082\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"arkadia","title":"Arkadia","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Marshmary","permalink":"/ja/blog/marshmary"},"nextItem":{"title":"Gurumi","permalink":"/ja/blog/gurumi"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1695872#osu/3616425)\\r\\n- BPM: 200\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/2HaguVRp-cZw7jXfoLIjdpYtzwc8jvzKk0mnd83R9J8\\" type=\\"video/mp4\\"></video>"},{"id":"gurumi","metadata":{"permalink":"/ja/blog/gurumi","source":"@site/i18n/ja/docusaurus-plugin-content-blog/gurumi.mdx","title":"Gurumi","description":"Beatmap Info","date":"2023-09-30T15:36:05.000Z","formattedDate":"2023\u5e749\u670830\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"gurumi","title":"Gurumi","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Arkadia","permalink":"/ja/blog/arkadia"},"nextItem":{"title":"Juveline","permalink":"/ja/blog/juveline"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1312079#osu/2732132)\\r\\n- BPM: 185\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/bx5szOf1MxstkmvthtLiBCE7LLJZW8hIyfK4WgnWzIo\\" type=\\"video/mp4\\"></video>"},{"id":"juveline","metadata":{"permalink":"/ja/blog/juveline","source":"@site/i18n/ja/docusaurus-plugin-content-blog/juveline.mdx","title":"Juveline","description":"Beatmap Info","date":"2023-09-30T15:36:05.000Z","formattedDate":"2023\u5e749\u670830\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"juveline","title":"Juveline","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Gurumi","permalink":"/ja/blog/gurumi"},"nextItem":{"title":"Non-breath Oblige","permalink":"/ja/blog/buresu"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1280204#osu/2659371)\\r\\n- BPM: 200\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/HoeHIGEBOTYgRMIgaJlxmQcoonkWJrinR-IE83PUQeo\\" type=\\"video/mp4\\"></video>"},{"id":"buresu","metadata":{"permalink":"/ja/blog/buresu","source":"@site/i18n/ja/docusaurus-plugin-content-blog/buresu.mdx","title":"Non-breath Oblige","description":"Beatmap Info","date":"2023-09-30T09:20:03.000Z","formattedDate":"2023\u5e749\u670830\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"buresu","title":"Non-breath Oblige","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Juveline","permalink":"/ja/blog/juveline"},"nextItem":{"title":"Colorful","permalink":"/ja/blog/colorful"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1889729#osu/3907767)\\r\\n- BPM: 148\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/JzgvfP7BhX78zm2u46BpkwbnTD1WrLFgF_bRuXFxY_M\\" type=\\"video/mp4\\"></video>"},{"id":"colorful","metadata":{"permalink":"/ja/blog/colorful","source":"@site/i18n/ja/docusaurus-plugin-content-blog/colorful.mdx","title":"Colorful","description":"Beatmap Info","date":"2023-09-30T09:20:03.000Z","formattedDate":"2023\u5e749\u670830\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"colorful","title":"Colorful","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Non-breath Oblige","permalink":"/ja/blog/buresu"},"nextItem":{"title":"Girl A","permalink":"/ja/blog/girl-a"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/931452#osu/1962198)\\r\\n- BPM: 192\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/GnDZJ_jT3xxtBqQ4iwFTnJjZ_NGnHw1aE4HmAUXmnEw\\" type=\\"video/mp4\\"></video>"},{"id":"girl-a","metadata":{"permalink":"/ja/blog/girl-a","source":"@site/i18n/ja/docusaurus-plugin-content-blog/girl.mdx","title":"Girl A","description":"Beatmap Info","date":"2023-09-30T09:20:03.000Z","formattedDate":"2023\u5e749\u670830\u65e5","tags":[{"label":"Osu!","permalink":"/ja/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"girl-a","title":"Girl A","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Colorful","permalink":"/ja/blog/colorful"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/2064760#osu/4318886)\\r\\n- BPM: 260\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/Yko2NmADJdHuRIpLST96ieqKTspZH_PD2p7ynWFYDwE\\" type=\\"video/mp4\\"></video>"}]}')}}]);