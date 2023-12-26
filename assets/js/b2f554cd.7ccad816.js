"use strict";(self.webpackChunkelysian=self.webpackChunkelysian||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"owshen","metadata":{"permalink":"/blog/owshen","source":"@site/blog/owshen.md","title":"Register Owshen","description":"Install Dependencies","date":"2023-12-26T11:16:00.000Z","formattedDate":"December 26, 2023","tags":[{"label":"ZK","permalink":"/blog/tags/zk"}],"readingTime":85.56701030927836,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"owshen","title":"Register Owshen","authors":["megumii"],"tags":["ZK"]},"nextItem":{"title":"Web Mint","permalink":"/blog/dym"}},"content":"## Install Dependencies\\r\\n\\r\\n```\\r\\nsudo apt update && sudo apt install libfuse2\\r\\n```\\r\\n\\r\\n## Install Owshen\\r\\n\\r\\n```\\r\\nwget -O owshen https://github.com/OwshenNetwork/owshen/releases/download/v0.1.0/Owshen_v0.1.0_x86_64.AppImage; chmod +x owshen\\r\\nmv owshen /usr/local/bin \\r\\nowshen --version\\r\\n```\\r\\n\\r\\n## Init Wallet\\r\\n\\r\\n```\\r\\nowshen init\\r\\n```\\r\\n\\r\\n#### Save Mnemonic Pharse!!!\\r\\n\\r\\n### Check Wallet Address\\r\\n\\r\\n```\\r\\nowshen info\\r\\n```\\r\\n\\r\\n## Register\\r\\n\\r\\n1. Follow [Owshen Twitter](https://x.com/OwshenNetwork)\\r\\n2. Retweet + Like [THIS POST](https://x.com/OwshenNetwork/status/1739258666199449979)\\r\\n3. Comment your wallet address\\r\\n\\r\\n## Check web wallet\\r\\n\\r\\n1. Run this\\r\\n\\r\\n```\\r\\nowshen wallet\\r\\n```\\r\\n\\r\\n2. Open http://127.0.0.1:9000 in your browser"},{"id":"dym","metadata":{"permalink":"/blog/dym","source":"@site/blog/dym.md","title":"Web Mint","description":"English Coming Soon","date":"2023-12-03T15:49:53.000Z","formattedDate":"December 3, 2023","tags":[{"label":"IBC","permalink":"/blog/tags/ibc"},{"label":"EVM","permalink":"/blog/tags/evm"}],"readingTime":4.123711340206186,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"dym","title":"Web Mint","authors":["megumii"],"tags":["IBC","EVM"]},"prevItem":{"title":"Register Owshen","permalink":"/blog/owshen"},"nextItem":{"title":"First Step to join Permaweb with ArDrive & ArNS","permalink":"/blog/arns"}},"content":"## English Coming Soon"},{"id":"arns","metadata":{"permalink":"/blog/arns","source":"@site/blog/arns.mdx","title":"First Step to join Permaweb with ArDrive & ArNS","description":"What you need","date":"2023-11-22T19:20:12.000Z","formattedDate":"November 22, 2023","tags":[{"label":"Arweave","permalink":"/blog/tags/arweave"}],"readingTime":260.82474226804123,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"arns","title":"First Step to join Permaweb with ArDrive & ArNS","authors":["megumii"],"tags":["Arweave"]},"prevItem":{"title":"Web Mint","permalink":"/blog/dym"},"nextItem":{"title":"Penumbra Summoning Ceremony","permalink":"/blog/penumbra"}},"content":"## What you need \\r\\n\\r\\n- [Wallet](https://www.arconnect.io/download)\\r\\n- `$AR`, you can get it from your favorite CEX\\r\\n\\r\\n## Upload to ArDrive \\r\\n\\r\\n- Visit https://app.ardrive.io\\r\\n- Login with ArConnect \\r\\n- Create a public Drive\\r\\n- Then upload your file, you can upload image, video, text file, anything! ( Under 500Kb file size are FREE )\\r\\n- Click your file and go to `details` section, then copy the `Data Tx ID`\\r\\n<img width=\\"100%\\" height=\\"auto\\" src=\\"/img/arnsde.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n## Buy your ArNS\\r\\n\\r\\n#### To buy ArnS you need to have TestIO Token, here\'s how to request the token\\r\\n\\r\\n- Go to Ar.io [Discord](https://discord.gg/c4rSSNV9v3)\\r\\n    - In the `#arns-test` channel type `/apply`, answer all questions\\r\\n    - <img width=\\"100%\\" height=\\"auto\\" src=\\"/img/arnsap.png\\" type=\\"image/png\\"></img>\\r\\n    - For this question, answer with your Tx ID from previous Step\\r\\n    - <img width=\\"100%\\" height=\\"auto\\" src=\\"/img/arnsas.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\n#### After receiving `Test IO`\\r\\n\\r\\n- Go to https://arns.app\\r\\n- Find your name  ( 8 digit++ )\\r\\n- If it\'s available, click register now\\r\\n- <img width=\\"100%\\" height=\\"auto\\" src=\\"/img/arnsav.png\\" type=\\"image/png\\"></img>\\r\\n- Choose 1 Year\\r\\n- Fill the `Arweave transaction ID ( Target ID )` with your Tx ID\\r\\n- <img width=\\"100%\\" height=\\"auto\\" src=\\"/img/arnsnt.png\\" type=\\"image/png\\"></img>\\r\\n\\r\\nAnd now you can access your ArNS with `https://your-arNS.ar-io.dev`.\\r\\n\\r\\nExample https://megumii.ar-io.dev\\r\\n\\r\\n#### `ar-io.dev` can be changed to any Gateways that listed here - > https://gateways.ar-io.dev\\r\\n \\r\\nExample:\\r\\n- https://megumii.blessingway.xyz\\r\\n- https://megumii.g8way.io\\r\\n- https://megumii.dwentz.xyz\\r\\n- https://megumii.sulapan.com\\r\\n- https://megumii.66666.site\\r\\n\\r\\n#### Official [Guide](https://ar.io/docs/guides/arns/registering.html)\\r\\n\\r\\n#### Wanna create a **Permanent** website? Check this out https://permasite.arweave.dev/\\r\\n\\r\\n### Last, please STAMP\\r\\n\\r\\n- Go to [Bazar](https://bazar.g8way.io/#/collection/ADd6xeeWq_pYbu0m7ZlihV5CQkjOCKJIb9h7gWEDB6k)\\r\\n- Click it, no need any gas fees\\r\\n- ![stamp](/img/stamp.png)"},{"id":"penumbra","metadata":{"permalink":"/blog/penumbra","source":"@site/blog/penumbra.mdx","title":"Penumbra Summoning Ceremony","description":"Install Dependencies","date":"2023-11-14T20:43:21.000Z","formattedDate":"November 14, 2023","tags":[{"label":"IBC","permalink":"/blog/tags/ibc"}],"readingTime":469.07216494845363,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"penumbra","title":"Penumbra Summoning Ceremony","authors":["megumii"],"tags":["IBC"]},"prevItem":{"title":"First Step to join Permaweb with ArDrive & ArNS","permalink":"/blog/arns"},"nextItem":{"title":"Deploy Contract on Aleo without Node","permalink":"/blog/aleo"}},"content":"import Tabs from \'@theme/Tabs\';\\r\\nimport TabItem from \'@theme/TabItem\';\\r\\n\\r\\n## Install Dependencies\\r\\n\\r\\n- any other\\r\\n```bash\\r\\nsudo apt-get install build-essential pkg-config libssl-dev clang git-lfs screen\\r\\n```\\r\\n\\r\\n- rustup\\r\\n```bash\\r\\ncurl --proto \'=https\' --tlsv1.2 -sSf https://sh.rustup.rs | sh\\r\\n```\\r\\n\\r\\n## Install pcli\\r\\n\\r\\n```bash\\r\\ngit clone https://github.com/penumbra-zone/penumbra\\r\\ncd penumbra && git fetch && git checkout v0.63.1\\r\\ncargo build --release --bin pcli\\r\\n```\\r\\n\\r\\n### Generate/Import wallet\\r\\n\\r\\n<Tabs>\\r\\n<TabItem value=\\"Generate Wallet\\">\\r\\n\\r\\n```bash\\r\\ncargo run --quiet --release --bin pcli init soft-kms generate\\r\\n```\\r\\n\\r\\n</TabItem>\\r\\n<TabItem value=\\"Import Wallet\\">\\r\\n\\r\\n```bash\\r\\ncargo run --quiet --release --bin pcli init soft-kms import-phrase\\r\\n```\\r\\n\\r\\n</TabItem>\\r\\n</Tabs>\\r\\n\\r\\n### Faucet\\r\\n\\r\\n- View address\\r\\n```bash\\r\\ncargo run --quiet --release --bin pcli view address 0\\r\\n```\\r\\n\\r\\n- Request Faucet, [Discord](https://discord.gg/5aYkBpXD)\\r\\n\\r\\n#### Check balance\\r\\n\\r\\n```bash\\r\\ncargo run --quiet --release --bin pcli view sync\\r\\n```\\r\\n\\r\\n```bash\\r\\ncargo run --quiet --release --bin pcli view balance\\r\\n```\\r\\n\\r\\n## Contribute\\r\\n\\r\\n```bash\\r\\nscreen -S penumbra\\r\\ncargo run --quiet --release --bin pcli -- ceremony contribute --phase 1 --bid 60penumbra --coordinator-address penumbra1qvqr8cvqyf4pwrl6svw9kj8eypf3fuunrcs83m30zxh57y2ytk94gygmtq5k82cjdq9y3mlaa3fwctwpdjr6fxnwuzrsy4ezm0u2tqpzw0sed82shzcr42sju55en26mavjnw4\\r\\n```\\r\\n:::info\\r\\n- The minimum bid for this ceremony is 60penumbra.\\r\\n- To change your bid, you can simply run the command again with a different bid amount. Note that each time you bid with the command above, this adds additional funds to all of the previous bids you\'ve already submitted.\\r\\n:::\\r\\n\\r\\nOutput:\\r\\n\\r\\n```js\\r\\n                               \u26d4\ufe0fWARNING\ufe0f\ufe0f\u26d4\ufe0f:\\r\\n\\r\\n                        you are about to lose money!\\r\\n\\r\\n\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\\r\\nThis message ... is part of a system of messages...\\r\\n... we considered ourselves to be a fault-tolerant distributed system...\\r\\nThis message is a warning about danger.\\r\\nThe danger is in a particular location... the center of danger is the pcli binary...\\r\\nThe danger is to your funds, and it can destroy them.\\r\\nThe danger is unleashed only if you execute this software.\\r\\n\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\\r\\n\\r\\n                           USE AT YOUR OWN RISK\\r\\nScanning blocks from last sync height 0 to latest height 235664\\r\\n[2m] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591   46786/235664  383/s ETA: 8m\\r\\n\\r\\n                           USE AT YOUR OWN RISK\\r\\nScanning blocks from last sync height 235949 to latest height 235949\\r\\n[0s] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588       0/0       0/s ETA: 0s\\r\\n\xb8,\xf8\xa4\xba\xb0` initiating summoning participation `\xb0\xba\xa4\xf8,\xb8\\r\\nsubmitting bid 2penumbra for contribution slot from address penumbra1yt3q8shj4ld5ux5t89rha7w0aw2lhd53ypt52l7axvmty50z9g5uq3avhhlqazk4drvdn9rh3hxe4fcq45svn8muphl9kxfpx99pzjmnwjkz8p6dyj262lzlld39cymkwpy39t\\r\\nbuilding transaction...\\r\\nfinished proving in 8.624 seconds [3 actions, 3 proofs, 2389 bytes]\\r\\nbroadcasting transaction and awaiting confirmation...\\r\\ntransaction confirmed and detected: 5dfbe01d738babdbb7648da60147fc1f397448ce00e8817764d6b1c11c3ac3de @ height 235952\\r\\nconnecting to coordinator...\\r\\nconnected to coordinator!\\r\\nYou may disconnect (CTRL+C) to increase your bid if you don\'t like your position in the queue.\\r\\nOtherwise, please keep this window open.\\r\\n\\r\\n[1s] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 position 762 out of 912 connected summoners     (your bid: 97000000, most recent slot bid: \\r\\n[2s] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 position 762 out of 912 connected summoners     (your bid: 97000000, most recent slot bid: \\r\\n[3s] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 position 762 out of 912 connected summoners     (your bid: 97000000, most recent slot bid: \\r\\n```\\r\\n\\r\\n#### Copy `transaction confirmed and detected:` then tweet\\r\\n[Example](https://twitter.com/megumii_tez/status/1724527866627641837)"},{"id":"aleo","metadata":{"permalink":"/blog/aleo","source":"@site/blog/aleo.mdx","title":"Deploy Contract on Aleo without Node","description":"English Coming Soon","date":"2023-11-13T13:18:39.000Z","formattedDate":"November 13, 2023","tags":[{"label":"Aleo","permalink":"/blog/tags/aleo"}],"readingTime":4.123711340206186,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"aleo","title":"Deploy Contract on Aleo without Node","authors":["megumii"],"tags":["Aleo"]},"prevItem":{"title":"Penumbra Summoning Ceremony","permalink":"/blog/penumbra"},"nextItem":{"title":"Quaver","permalink":"/blog/quaver"}},"content":"## English Coming Soon"},{"id":"quaver","metadata":{"permalink":"/blog/quaver","source":"@site/blog/quaver.mdx","title":"Quaver","description":"Beatmap Info","date":"2023-10-27T18:35:13.000Z","formattedDate":"October 27, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"quaver","title":"Quaver","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Deploy Contract on Aleo without Node","permalink":"/blog/aleo"},"nextItem":{"title":"Tokiiro Serenade","permalink":"/blog/serenade"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/873811#osu/1846226)\\r\\n- BPM: 186\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/IussrJnOeQ657kp0Dj5fXWS1wakaRg8ZCSpHUxVRF7c\\" type=\\"video/mp4\\"></video>"},{"id":"serenade","metadata":{"permalink":"/blog/serenade","source":"@site/blog/serenade.mdx","title":"Tokiiro Serenade","description":"Beatmap Info","date":"2023-10-14T11:06:21.000Z","formattedDate":"October 14, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"serenade","title":"Tokiiro Serenade","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Quaver","permalink":"/blog/quaver"},"nextItem":{"title":"Highlight","permalink":"/blog/yo"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/360654#osu/795140)\\r\\n- BPM: 138\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/8Wg3SHBx1slnjUxqfj7jA3_Z8LLv_p0tkxtEBg6mFbU\\" type=\\"video/mp4\\"></video>"},{"id":"yo","metadata":{"permalink":"/blog/yo","source":"@site/blog/highlight.mdx","title":"Highlight","description":"Please Stamp","date":"2023-10-13T19:53:57.000Z","formattedDate":"October 13, 2023","tags":[],"readingTime":168.04123711340208,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"title":"Highlight","slug":"yo","authors":["megumii"],"hide_table_of_contents":true},"prevItem":{"title":"Tokiiro Serenade","permalink":"/blog/serenade"},"nextItem":{"title":"Seishun Complex","permalink":"/blog/seishun"}},"content":"<div className=\\"twitter-tweet twitter-tweet-rendered\\" style={{ display: \'flex\', maxWidth: \'550px\', width: \'100%\', marginTop: \'10px\', marginBottom: \'10px\' }}><iframe id=\\"twitter-widget-0\\" scrolling=\\"no\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" class=\\"\\" style={{ position: \'static\', visibility: \'visible\', width: \'492px\', height: \'419px\', display: \'block\', flexGrow: 1}} title=\\"Tweet\\" src=\\"https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=e30%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1707010385155432923&amp;lang=en&amp;origin=file%3A%2F%2F%2FC%3A%2FUsers%2Fmegum%2FOneDrive%2FDocuments%2Findex.html&amp;theme=light&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554&amp;width=550px\\" data-tweet-id=\\"1707010385155432923\\"></iframe></div> <script async=\\"\\" src=\\"https://platform.twitter.com/widgets.js\\" charset=\\"utf-8\\"><\/script>\\r\\n\\r\\n<div class=\\"twitter-tweet twitter-tweet-rendered\\" style={{ display: \'flex\', maxWidth: \'550px\', width: \'100%\', marginTop: \'10px\', marginBottom: \'10px\' }}><iframe id=\\"twitter-widget-0\\" scrolling=\\"no\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" class=\\"\\" style={{ position: \'static\', visibility: \'visible\', width: \'492px\', height: \'419px\', display: \'block\', flexGrow: 1}} title=\\"Twitter Tweet\\" src=\\"https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1716545943397335149&amp;lang=en&amp;origin=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps%253A%252F%252Ftwitter.com%252FOurBazAR%252Fstatus%252F1716545943397335149%26widget%3DTweet&amp;sessionId=6efb86803ef87bb9a786a41fe1bfbc1a958b4576&amp;theme=light&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554&amp;width=550px\\" data-tweet-id=\\"1716545943397335149\\" __idm_id__=\\"3948545\\"></iframe></div>\\r\\n\\r\\n<div class=\\"twitter-tweet twitter-tweet-rendered\\" style={{ display: \'flex\', maxWidth: \'550px\', width: \'100%\', marginTop: \'10px\', marginBottom: \'10px\' }}><iframe id=\\"twitter-widget-1\\" scrolling=\\"no\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" class=\\"\\" style={{ position: \'static\', visibility: \'visible\', width: \'492px\', height: \'419px\', display: \'block\', flexGrow: 1}} title=\\"Tweet\\" src=\\"https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-1&amp;features=e30%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1681212232439595009&amp;lang=en&amp;origin=file%3A%2F%2F%2FC%3A%2FUsers%2Fmegum%2FOneDrive%2FDocuments%2Findex.html&amp;theme=light&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554&amp;width=550px\\" data-tweet-id=\\"1681212232439595009\\"></iframe></div> <script async=\\"\\" src=\\"https://platform.twitter.com/widgets.js\\" charset=\\"utf-8\\"><\/script>\\r\\n\\r\\n<iframe id=\\"rufous-sandbox\\" scrolling=\\"yes\\" frameborder=\\"0\\" allowtransparency=\\"true\\" allowfullscreen=\\"true\\" style={{ position: \'absolute\', visibility: \'hidden\', display: \'none\', width: \'0px\', height: \'0px\', padding: \'0px\', border: \'none\' }} title=\\"Twitter analytics iframe\\"></iframe>\\r\\n\\r\\n### Please Stamp\\r\\n\\r\\n- Go to [Bazar](https://bazar.g8way.io/#/collection/ADd6xeeWq_pYbu0m7ZlihV5CQkjOCKJIb9h7gWEDB6k)\\r\\n- Click it, no need any gas fees\\r\\n- ![stamp](/img/stamp.png)"},{"id":"seishun","metadata":{"permalink":"/blog/seishun","source":"@site/blog/seishun.mdx","title":"Seishun Complex","description":"Beatmap Info","date":"2023-10-10T06:58:43.000Z","formattedDate":"October 10, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"seishun","title":"Seishun Complex","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Highlight","permalink":"/blog/yo"},"nextItem":{"title":"Yume Chizu","permalink":"/blog/yume"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1867294#osu/3842880)\\r\\n- BPM: 190\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/QO_ElN_ioqmiIYIJHYQYvJXEWbHpHYilAE0TTBoi_P8\\" type=\\"video/mp4\\"></video>"},{"id":"yume","metadata":{"permalink":"/blog/yume","source":"@site/blog/yume.mdx","title":"Yume Chizu","description":"Beatmap Info","date":"2023-10-10T06:58:43.000Z","formattedDate":"October 10, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"yume","title":"Yume Chizu","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Seishun Complex","permalink":"/blog/seishun"},"nextItem":{"title":"Star Beat","permalink":"/blog/star-beat"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1068768#osu/2237468)\\r\\n- BPM: 176\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/76J2RtMOav-Ez3S3BnTxVYuD618a5vANhYZ1TT-EoLs\\" type=\\"video/mp4\\"></video>"},{"id":"star-beat","metadata":{"permalink":"/blog/star-beat","source":"@site/blog/star.mdx","title":"Star Beat","description":"Beatmap Info","date":"2023-10-09T18:13:26.000Z","formattedDate":"October 9, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"star-beat","title":"Star Beat","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Yume Chizu","permalink":"/blog/yume"},"nextItem":{"title":"Heavy Rotation","permalink":"/blog/heavy"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/650607#osu/1402930)\\r\\n- BPM: 195\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/V9k9uuSQ4a6jubJbNJkkODnUpu815q9bP_hR0GGoh1w\\" type=\\"video/mp4\\"></video>"},{"id":"heavy","metadata":{"permalink":"/blog/heavy","source":"@site/blog/heavy.mdx","title":"Heavy Rotation","description":"Beatmap Info","date":"2023-10-08T08:40:54.000Z","formattedDate":"October 8, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"heavy","title":"Heavy Rotation","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Star Beat","permalink":"/blog/star-beat"},"nextItem":{"title":"C-Type","permalink":"/blog/c-type"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1556324#osu/3179304)\\r\\n- BPM: 178\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/pj9G7kAR4SkuNXbeUF0YisFPKkky3b3P244Wo1jcd6U\\" type=\\"video/mp4\\"></video>"},{"id":"c-type","metadata":{"permalink":"/blog/c-type","source":"@site/blog/c-type.mdx","title":"C-Type","description":"Beatmap Info","date":"2023-10-08T08:10:34.000Z","formattedDate":"October 8, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"c-type","title":"C-Type","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Heavy Rotation","permalink":"/blog/heavy"},"nextItem":{"title":"Pudding Funfair","permalink":"/blog/pudding"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/757146#osu/1620144)\\r\\n- BPM: 149.3\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/xTT-Tt7EmSdU_ALYDZSZqZqvk26KbA4rD7Q_gR5pIvA\\" type=\\"video/mp4\\"></video>"},{"id":"pudding","metadata":{"permalink":"/blog/pudding","source":"@site/blog/pudding.mdx","title":"Pudding Funfair","description":"Beatmap Info","date":"2023-10-08T08:10:34.000Z","formattedDate":"October 8, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"pudding","title":"Pudding Funfair","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"C-Type","permalink":"/blog/c-type"},"nextItem":{"title":"And Again And Again","permalink":"/blog/and-again"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/993369#osu/2225466)\\r\\n- BPM: 150\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/ACKWqx4OoHjb2BVpGynXOAWZ7D1Me6jfWyAT62ejhbk\\" type=\\"video/mp4\\"></video>"},{"id":"and-again","metadata":{"permalink":"/blog/and-again","source":"@site/blog/again.mdx","title":"And Again And Again","description":"Beatmap Info","date":"2023-10-03T10:23:29.000Z","formattedDate":"October 3, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"and-again","title":"And Again And Again","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Pudding Funfair","permalink":"/blog/pudding"},"nextItem":{"title":"Re Aoharu","permalink":"/blog/aoharu"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/801074#osu/1681634)\\r\\n- BPM: 150\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/Sdgker22LW85KWozIzONFUzkHjaF4oW7ijIx9sXrAcQ\\" type=\\"video/mp4\\"></video>"},{"id":"aoharu","metadata":{"permalink":"/blog/aoharu","source":"@site/blog/aoharu.mdx","title":"Re Aoharu","description":"Beatmap Info","date":"2023-10-03T10:23:29.000Z","formattedDate":"October 3, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"aoharu","title":"Re Aoharu","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"And Again And Again","permalink":"/blog/and-again"},"nextItem":{"title":"Marshmary","permalink":"/blog/marshmary"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1935191#osu/4001171)\\r\\n- BPM: 180\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/T1ydJjyz4tzFG8Vxs3VD8pqAmoIDcYV91VH0WrFejeU\\" type=\\"video/mp4\\"></video>"},{"id":"marshmary","metadata":{"permalink":"/blog/marshmary","source":"@site/blog/marshmary.mdx","title":"Marshmary","description":"Beatmap Info","date":"2023-10-03T10:23:29.000Z","formattedDate":"October 3, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"marshmary","title":"Marshmary","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Re Aoharu","permalink":"/blog/aoharu"},"nextItem":{"title":"Arkadia","permalink":"/blog/arkadia"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/962088#osu/2014470)\\r\\n- BPM: 182\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/g5GrUOC577qRtccBB1yIu31em8gPbvew129ArUS4X7M\\" type=\\"video/mp4\\"></video>"},{"id":"arkadia","metadata":{"permalink":"/blog/arkadia","source":"@site/blog/arkadia.mdx","title":"Arkadia","description":"Beatmap Info","date":"2023-10-02T20:23:28.000Z","formattedDate":"October 2, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"arkadia","title":"Arkadia","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Marshmary","permalink":"/blog/marshmary"},"nextItem":{"title":"Gurumi","permalink":"/blog/gurumi"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1695872#osu/3616425)\\r\\n- BPM: 200\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/2HaguVRp-cZw7jXfoLIjdpYtzwc8jvzKk0mnd83R9J8\\" type=\\"video/mp4\\"></video>"},{"id":"gurumi","metadata":{"permalink":"/blog/gurumi","source":"@site/blog/gurumi.mdx","title":"Gurumi","description":"Beatmap Info","date":"2023-09-30T15:36:05.000Z","formattedDate":"September 30, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"gurumi","title":"Gurumi","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Arkadia","permalink":"/blog/arkadia"},"nextItem":{"title":"Juveline","permalink":"/blog/juveline"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1312079#osu/2732132)\\r\\n- BPM: 185\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/bx5szOf1MxstkmvthtLiBCE7LLJZW8hIyfK4WgnWzIo\\" type=\\"video/mp4\\"></video>"},{"id":"juveline","metadata":{"permalink":"/blog/juveline","source":"@site/blog/juveline.mdx","title":"Juveline","description":"Beatmap Info","date":"2023-09-30T15:36:05.000Z","formattedDate":"September 30, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"juveline","title":"Juveline","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Gurumi","permalink":"/blog/gurumi"},"nextItem":{"title":"Non-breath Oblige","permalink":"/blog/buresu"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1280204#osu/2659371)\\r\\n- BPM: 200\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/HoeHIGEBOTYgRMIgaJlxmQcoonkWJrinR-IE83PUQeo\\" type=\\"video/mp4\\"></video>"},{"id":"buresu","metadata":{"permalink":"/blog/buresu","source":"@site/blog/buresu.mdx","title":"Non-breath Oblige","description":"Beatmap Info","date":"2023-09-30T09:20:03.000Z","formattedDate":"September 30, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"buresu","title":"Non-breath Oblige","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Juveline","permalink":"/blog/juveline"},"nextItem":{"title":"Colorful","permalink":"/blog/colorful"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/1889729#osu/3907767)\\r\\n- BPM: 148\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/JzgvfP7BhX78zm2u46BpkwbnTD1WrLFgF_bRuXFxY_M\\" type=\\"video/mp4\\"></video>"},{"id":"colorful","metadata":{"permalink":"/blog/colorful","source":"@site/blog/colorful.mdx","title":"Colorful","description":"Beatmap Info","date":"2023-09-30T09:20:03.000Z","formattedDate":"September 30, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"colorful","title":"Colorful","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Non-breath Oblige","permalink":"/blog/buresu"},"nextItem":{"title":"Girl A","permalink":"/blog/girl-a"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/931452#osu/1962198)\\r\\n- BPM: 192\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/GnDZJ_jT3xxtBqQ4iwFTnJjZ_NGnHw1aE4HmAUXmnEw\\" type=\\"video/mp4\\"></video>"},{"id":"girl-a","metadata":{"permalink":"/blog/girl-a","source":"@site/blog/girl.mdx","title":"Girl A","description":"Beatmap Info","date":"2023-09-30T09:20:03.000Z","formattedDate":"September 30, 2023","tags":[{"label":"Osu!","permalink":"/blog/tags/osu"}],"readingTime":16.494845360824744,"hasTruncateMarker":false,"authors":[{"name":"Megumii","title":"NPC","url":"https://megumii.blessingway.xyz","imageURL":"https://github.com/Megumiiiiii.png","key":"megumii"}],"frontMatter":{"slug":"girl-a","title":"Girl A","authors":["megumii"],"tags":["Osu!"],"hide_table_of_contents":true},"prevItem":{"title":"Colorful","permalink":"/blog/colorful"}},"content":"## Beatmap Info\\r\\n- [Link](https://osu.ppy.sh/beatmapsets/2064760#osu/4318886)\\r\\n- BPM: 260\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<video width=\\"100%\\" height=\\"auto\\" controls autoplay loop src=\\"https://arweave.net/Yko2NmADJdHuRIpLST96ieqKTspZH_PD2p7ynWFYDwE\\" type=\\"video/mp4\\"></video>"}]}')}}]);