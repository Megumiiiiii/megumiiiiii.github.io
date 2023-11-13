"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[4175],{6530:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"aleo","metadata":{"permalink":"/id/blog/aleo","source":"@site/i18n/id/docusaurus-plugin-content-blog/aleo.mdx","title":"Deploy Contract on Aleo without Node","description":"Install Leo Wallet","date":"2023-11-13T13:18:39.000Z","formattedDate":"13 November 2023","tags":[{"label":"Aleo","permalink":"/id/blog/tags/aleo"}],"readingTime":261.8556701030928,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"aleo","title":"Deploy Contract on Aleo without Node","authors":["megumii"],"tags":["Aleo"]},"nextItem":{"title":"Quaver","permalink":"/id/blog/quaver"}},"content":"## Install Leo Wallet\\r\\n\\r\\n- Download [DISINI](https://chrome.google.com/webstore/detail/leo-wallet/nebnhfamliijlghikdgcigoebonmoibm) dan install\\r\\n- Buat Wallet\\r\\n- Request faucet dengan cara kirim SMS ke nomer +18678885688\\r\\n- Kirim pesan menggunakan format\\r\\n```\\r\\nSend 50 credits to aleoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\r\\n```\\r\\n\\r\\n## Mulai Deploy\\r\\n\\r\\n- Setelah mendapat Aleo, pergi ke web Deployer \u2192 [DISINI](https://aleo.tools/develop)\\r\\n- Copy ini dan paste ke kolom Deploy\\r\\n```\\r\\nprogram nama_bebas.aleo;\\r\\n\\r\\nrecord Token:\\r\\n    owner as address.private;\\r\\n    amount as u64.private;\\r\\n\\r\\n\\r\\nfunction mint:\\r\\n    input r0 as address.private;\\r\\n    input r1 as u64.private;\\r\\n    cast r0 r1 into r2 as Token.record;\\r\\n    output r2 as Token.record;\\r\\n\\r\\n\\r\\nfunction transfer:\\r\\n    input r0 as Token.record;\\r\\n    input r1 as address.private;\\r\\n    input r2 as u64.private;\\r\\n    sub r0.amount r2 into r3;\\r\\n    cast r0.owner r3 into r4 as Token.record;\\r\\n    cast r1 r2 into r5 as Token.record;\\r\\n    output r4 as Token.record;\\r\\n    output r5 as Token.record;\\r\\n```\\r\\n- Ganti `nama_bebas.aleo` dengan nama apapun sesuka hati\\r\\n\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/deployleo.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n- Pastikan gunakan nama yang belum terpakai, buka [Explorer](https://explorer.hamp.app/programs) lalu pada kolom Search cari nama yang akan digunakan, jika 404 berarti bisa dipakai.\\r\\n- Pastekan privkey leo wallet yang tadi dipake req faucet\\r\\n- Isi fee dengan 5\\r\\n- Matikan `Private Fee`\\r\\n\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/deployleoo.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n- Deploy, done\\r\\n\\r\\n## Execute app\\r\\n\\r\\n- Masukan nama app yang sudah di deploy tadi\\r\\n\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/deployleooo.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n- Klik tombol search, maka code nya akan ter-load\\r\\n- Masukan Privkey mu ke kolom *Private Key\\r\\n- Aktifkan `Execute Onchain`\\r\\n- Isi fee 3\\r\\n- Lalu ke bagian `mint`\\r\\n\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/deployleoooo.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n- `r0` isi addressmu\\r\\n- `r1` isi `1000u64`\\r\\n- Runnnnn"},{"id":"quaver","metadata":{"permalink":"/id/blog/quaver","source":"@site/i18n/id/docusaurus-plugin-content-blog/quaver.mdx","title":"Quaver","description":"Beatmap Info","date":"2023-10-27T18:35:13.000Z","formattedDate":"27 Oktober 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"quaver","title":"Quaver","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Deploy Contract on Aleo without Node","permalink":"/id/blog/aleo"},"nextItem":{"title":"Tokiiro Serenade","permalink":"/id/blog/serenade"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/873811#osu/1846226)\\r\\n- BPM: 186\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/IussrJnOeQ657kp0Dj5fXWS1wakaRg8ZCSpHUxVRF7c\\" type=\\"video/mp4\\"></video>"},{"id":"serenade","metadata":{"permalink":"/id/blog/serenade","source":"@site/i18n/id/docusaurus-plugin-content-blog/serenade.mdx","title":"Tokiiro Serenade","description":"Beatmap Info","date":"2023-10-14T11:06:21.000Z","formattedDate":"14 Oktober 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"serenade","title":"Tokiiro Serenade","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Quaver","permalink":"/id/blog/quaver"},"nextItem":{"title":"Highlight","permalink":"/id/blog/yo"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/360654#osu/795140)\\r\\n- BPM: 138\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/8Wg3SHBx1slnjUxqfj7jA3_Z8LLv_p0tkxtEBg6mFbU\\" type=\\"video/mp4\\"></video>"},{"id":"yo","metadata":{"permalink":"/id/blog/yo","source":"@site/i18n/id/docusaurus-plugin-content-blog/highlight.mdx","title":"Highlight","description":"Please Stamp","date":"2023-10-13T19:53:57.000Z","formattedDate":"13 Oktober 2023","tags":[],"readingTime":168.04123711340208,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"title":"Highlight","slug":"yo","authors":["megumii"],"hide_table_of_contents":true},"prevItem":{"title":"Tokiiro Serenade","permalink":"/id/blog/serenade"},"nextItem":{"title":"Seishun Complex","permalink":"/id/blog/seishun"}},"content":"<div className=\\"twitter-tweet twitter-tweet-rendered\\" style={{ display: \'flex\', maxWidth: \'550px\', width: \'100%\', marginTop: \'10px\', marginBottom: \'10px\' }}><iframe id=\\"twitter-widget-0\\" scrolling=\\"no\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" class=\\"\\" style={{ position: \'static\', visibility: \'visible\', width: \'492px\', height: \'419px\', display: \'block\', flexGrow: 1}} title=\\"Tweet\\" src=\\"https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=e30%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1707010385155432923&amp;lang=en&amp;origin=file%3A%2F%2F%2FC%3A%2FUsers%2Fmegum%2FOneDrive%2FDocuments%2Findex.html&amp;theme=light&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554&amp;width=550px\\" data-tweet-id=\\"1707010385155432923\\"></iframe></div> <script async=\\"\\" src=\\"https://platform.twitter.com/widgets.js\\" charset=\\"utf-8\\"><\/script>\\r\\n\\r\\n<div class=\\"twitter-tweet twitter-tweet-rendered\\" style={{ display: \'flex\', maxWidth: \'550px\', width: \'100%\', marginTop: \'10px\', marginBottom: \'10px\' }}><iframe id=\\"twitter-widget-0\\" scrolling=\\"no\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" class=\\"\\" style={{ position: \'static\', visibility: \'visible\', width: \'492px\', height: \'419px\', display: \'block\', flexGrow: 1}} title=\\"Twitter Tweet\\" src=\\"https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1716545943397335149&amp;lang=en&amp;origin=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps%253A%252F%252Ftwitter.com%252FOurBazAR%252Fstatus%252F1716545943397335149%26widget%3DTweet&amp;sessionId=6efb86803ef87bb9a786a41fe1bfbc1a958b4576&amp;theme=light&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554&amp;width=550px\\" data-tweet-id=\\"1716545943397335149\\" __idm_id__=\\"3948545\\"></iframe></div>\\r\\n\\r\\n<div class=\\"twitter-tweet twitter-tweet-rendered\\" style={{ display: \'flex\', maxWidth: \'550px\', width: \'100%\', marginTop: \'10px\', marginBottom: \'10px\' }}><iframe id=\\"twitter-widget-1\\" scrolling=\\"no\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" class=\\"\\" style={{ position: \'static\', visibility: \'visible\', width: \'492px\', height: \'419px\', display: \'block\', flexGrow: 1}} title=\\"Tweet\\" src=\\"https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-1&amp;features=e30%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1681212232439595009&amp;lang=en&amp;origin=file%3A%2F%2F%2FC%3A%2FUsers%2Fmegum%2FOneDrive%2FDocuments%2Findex.html&amp;theme=light&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554&amp;width=550px\\" data-tweet-id=\\"1681212232439595009\\"></iframe></div> <script async=\\"\\" src=\\"https://platform.twitter.com/widgets.js\\" charset=\\"utf-8\\"><\/script>\\r\\n\\r\\n<iframe id=\\"rufous-sandbox\\" scrolling=\\"yes\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" style={{ position: \'absolute\', visibility: \'hidden\', display: \'none\', width: \'0px\', height: \'0px\', padding: \'0px\', border: \'none\' }} title=\\"Twitter analytics iframe\\"></iframe>\\r\\n\\r\\n### Please Stamp\\r\\n\\r\\n- Go to [Bazar](https://bazar.g8way.io/#/collection/ADd6xeeWq_pYbu0m7ZlihV5CQkjOCKJIb9h7gWEDB6k)\\r\\n- Click it, no need any gas fees\\r\\n- ![stamp](/img/stamp.png)"},{"id":"seishun","metadata":{"permalink":"/id/blog/seishun","source":"@site/i18n/id/docusaurus-plugin-content-blog/seishun.mdx","title":"Seishun Complex","description":"Beatmap Info","date":"2023-10-10T06:58:43.000Z","formattedDate":"10 Oktober 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"seishun","title":"Seishun Complex","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Highlight","permalink":"/id/blog/yo"},"nextItem":{"title":"Yume Chizu","permalink":"/id/blog/yume"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1867294#osu/3842880)\\r\\n- BPM: 190\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/QO_ElN_ioqmiIYIJHYQYvJXEWbHpHYilAE0TTBoi_P8\\" type=\\"video/mp4\\"></video>"},{"id":"yume","metadata":{"permalink":"/id/blog/yume","source":"@site/i18n/id/docusaurus-plugin-content-blog/yume.mdx","title":"Yume Chizu","description":"Beatmap Info","date":"2023-10-10T06:58:43.000Z","formattedDate":"10 Oktober 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"yume","title":"Yume Chizu","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Seishun Complex","permalink":"/id/blog/seishun"},"nextItem":{"title":"Star Beat","permalink":"/id/blog/star-beat"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1068768#osu/2237468)\\r\\n- BPM: 176\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/76J2RtMOav-Ez3S3BnTxVYuD618a5vANhYZ1TT-EoLs\\" type=\\"video/mp4\\"></video>"},{"id":"star-beat","metadata":{"permalink":"/id/blog/star-beat","source":"@site/i18n/id/docusaurus-plugin-content-blog/star.mdx","title":"Star Beat","description":"Beatmap Info","date":"2023-10-09T18:13:26.000Z","formattedDate":"9 Oktober 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"star-beat","title":"Star Beat","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Yume Chizu","permalink":"/id/blog/yume"},"nextItem":{"title":"Heavy Rotation","permalink":"/id/blog/heavy"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/650607#osu/1402930)\\r\\n- BPM: 195\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/V9k9uuSQ4a6jubJbNJkkODnUpu815q9bP_hR0GGoh1w\\" type=\\"video/mp4\\"></video>"},{"id":"heavy","metadata":{"permalink":"/id/blog/heavy","source":"@site/i18n/id/docusaurus-plugin-content-blog/heavy.mdx","title":"Heavy Rotation","description":"Beatmap Info","date":"2023-10-08T08:40:54.000Z","formattedDate":"8 Oktober 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"heavy","title":"Heavy Rotation","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Star Beat","permalink":"/id/blog/star-beat"},"nextItem":{"title":"C-Type","permalink":"/id/blog/c-type"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1556324#osu/3179304)\\r\\n- BPM: 178\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/pj9G7kAR4SkuNXbeUF0YisFPKkky3b3P244Wo1jcd6U\\" type=\\"video/mp4\\"></video>"},{"id":"c-type","metadata":{"permalink":"/id/blog/c-type","source":"@site/i18n/id/docusaurus-plugin-content-blog/c-type.mdx","title":"C-Type","description":"Beatmap Info","date":"2023-10-08T08:10:34.000Z","formattedDate":"8 Oktober 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"c-type","title":"C-Type","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Heavy Rotation","permalink":"/id/blog/heavy"},"nextItem":{"title":"Pudding Funfair","permalink":"/id/blog/pudding"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/757146#osu/1620144)\\r\\n- BPM: 149.3\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/xTT-Tt7EmSdU_ALYDZSZqZqvk26KbA4rD7Q_gR5pIvA\\" type=\\"video/mp4\\"></video>"},{"id":"pudding","metadata":{"permalink":"/id/blog/pudding","source":"@site/i18n/id/docusaurus-plugin-content-blog/pudding.mdx","title":"Pudding Funfair","description":"Beatmap Info","date":"2023-10-08T08:10:34.000Z","formattedDate":"8 Oktober 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"pudding","title":"Pudding Funfair","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"C-Type","permalink":"/id/blog/c-type"},"nextItem":{"title":"And Again And Again","permalink":"/id/blog/and-again"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/993369#osu/2225466)\\r\\n- BPM: 150\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/ACKWqx4OoHjb2BVpGynXOAWZ7D1Me6jfWyAT62ejhbk\\" type=\\"video/mp4\\"></video>"},{"id":"and-again","metadata":{"permalink":"/id/blog/and-again","source":"@site/i18n/id/docusaurus-plugin-content-blog/again.mdx","title":"And Again And Again","description":"Beatmap Info","date":"2023-10-03T10:23:29.000Z","formattedDate":"3 Oktober 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"and-again","title":"And Again And Again","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Pudding Funfair","permalink":"/id/blog/pudding"},"nextItem":{"title":"Re Aoharu","permalink":"/id/blog/aoharu"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/801074#osu/1681634)\\r\\n- BPM: 150\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/Sdgker22LW85KWozIzONFUzkHjaF4oW7ijIx9sXrAcQ\\" type=\\"video/mp4\\"></video>"},{"id":"aoharu","metadata":{"permalink":"/id/blog/aoharu","source":"@site/i18n/id/docusaurus-plugin-content-blog/aoharu.mdx","title":"Re Aoharu","description":"Beatmap Info","date":"2023-10-03T10:23:29.000Z","formattedDate":"3 Oktober 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"aoharu","title":"Re Aoharu","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"And Again And Again","permalink":"/id/blog/and-again"},"nextItem":{"title":"Marshmary","permalink":"/id/blog/marshmary"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1935191#osu/4001171)\\r\\n- BPM: 180\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/T1ydJjyz4tzFG8Vxs3VD8pqAmoIDcYV91VH0WrFejeU\\" type=\\"video/mp4\\"></video>"},{"id":"marshmary","metadata":{"permalink":"/id/blog/marshmary","source":"@site/i18n/id/docusaurus-plugin-content-blog/marshmary.mdx","title":"Marshmary","description":"Beatmap Info","date":"2023-10-03T10:23:29.000Z","formattedDate":"3 Oktober 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"marshmary","title":"Marshmary","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Re Aoharu","permalink":"/id/blog/aoharu"},"nextItem":{"title":"Arkadia","permalink":"/id/blog/arkadia"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/962088#osu/2014470)\\r\\n- BPM: 182\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/g5GrUOC577qRtccBB1yIu31em8gPbvew129ArUS4X7M\\" type=\\"video/mp4\\"></video>"},{"id":"arkadia","metadata":{"permalink":"/id/blog/arkadia","source":"@site/i18n/id/docusaurus-plugin-content-blog/arkadia.mdx","title":"Arkadia","description":"Beatmap Info","date":"2023-10-02T20:23:28.000Z","formattedDate":"2 Oktober 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"arkadia","title":"Arkadia","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Marshmary","permalink":"/id/blog/marshmary"},"nextItem":{"title":"Gurumi","permalink":"/id/blog/gurumi"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1695872#osu/3616425)\\r\\n- BPM: 200\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/2HaguVRp-cZw7jXfoLIjdpYtzwc8jvzKk0mnd83R9J8\\" type=\\"video/mp4\\"></video>"},{"id":"gurumi","metadata":{"permalink":"/id/blog/gurumi","source":"@site/i18n/id/docusaurus-plugin-content-blog/gurumi.mdx","title":"Gurumi","description":"Beatmap Info","date":"2023-09-30T15:36:05.000Z","formattedDate":"30 September 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"gurumi","title":"Gurumi","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Arkadia","permalink":"/id/blog/arkadia"},"nextItem":{"title":"Juveline","permalink":"/id/blog/juveline"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1312079#osu/2732132)\\r\\n- BPM: 185\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/bx5szOf1MxstkmvthtLiBCE7LLJZW8hIyfK4WgnWzIo\\" type=\\"video/mp4\\"></video>"},{"id":"juveline","metadata":{"permalink":"/id/blog/juveline","source":"@site/i18n/id/docusaurus-plugin-content-blog/juveline.mdx","title":"Juveline","description":"Beatmap Info","date":"2023-09-30T15:36:05.000Z","formattedDate":"30 September 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"juveline","title":"Juveline","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Gurumi","permalink":"/id/blog/gurumi"},"nextItem":{"title":"Non-breath Oblige","permalink":"/id/blog/buresu"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1280204#osu/2659371)\\r\\n- BPM: 200\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/HoeHIGEBOTYgRMIgaJlxmQcoonkWJrinR-IE83PUQeo\\" type=\\"video/mp4\\"></video>"},{"id":"buresu","metadata":{"permalink":"/id/blog/buresu","source":"@site/i18n/id/docusaurus-plugin-content-blog/buresu.mdx","title":"Non-breath Oblige","description":"Beatmap Info","date":"2023-09-30T09:20:03.000Z","formattedDate":"30 September 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"buresu","title":"Non-breath Oblige","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Juveline","permalink":"/id/blog/juveline"},"nextItem":{"title":"Colorful","permalink":"/id/blog/colorful"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1889729#osu/3907767)\\r\\n- BPM: 148\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/JzgvfP7BhX78zm2u46BpkwbnTD1WrLFgF_bRuXFxY_M\\" type=\\"video/mp4\\"></video>"},{"id":"colorful","metadata":{"permalink":"/id/blog/colorful","source":"@site/i18n/id/docusaurus-plugin-content-blog/colorful.mdx","title":"Colorful","description":"Beatmap Info","date":"2023-09-30T09:20:03.000Z","formattedDate":"30 September 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"colorful","title":"Colorful","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Non-breath Oblige","permalink":"/id/blog/buresu"},"nextItem":{"title":"Girl A","permalink":"/id/blog/girl-a"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/931452#osu/1962198)\\r\\n- BPM: 192\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/GnDZJ_jT3xxtBqQ4iwFTnJjZ_NGnHw1aE4HmAUXmnEw\\" type=\\"video/mp4\\"></video>"},{"id":"girl-a","metadata":{"permalink":"/id/blog/girl-a","source":"@site/i18n/id/docusaurus-plugin-content-blog/girl.mdx","title":"Girl A","description":"Beatmap Info","date":"2023-09-30T09:20:03.000Z","formattedDate":"30 September 2023","tags":[{"label":"Osu!","permalink":"/id/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"girl-a","title":"Girl A","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Colorful","permalink":"/id/blog/colorful"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/2064760#osu/4318886)\\r\\n- BPM: 260\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/Yko2NmADJdHuRIpLST96ieqKTspZH_PD2p7ynWFYDwE\\" type=\\"video/mp4\\"></video>"}]}')}}]);