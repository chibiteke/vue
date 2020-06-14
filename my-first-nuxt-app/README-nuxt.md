# Nuxt.js によるシンプルなアプリケーション開発

## Vue CLI によるアプリケーションひな形の作成

### cli-ini のグローバルインストール

```
PS D:\xampp\htdocs\vue> vue -V
@vue/cli 4.3.1
PS D:\xampp\htdocs\vue> npm i -g @vue/cli @vue/cli-init
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated vue-cli@2.9.6: This package has been deprecated in favour of @vue/cli
npm WARN deprecated coffee-script@1.12.7: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
C:\Users\chibi\AppData\Roaming\npm\vue -> C:\Users\chibi\AppData\Roaming\npm\node_modules\@vue\cli\bin\vue.js

> @apollo/protobufjs@1.0.4 postinstall C:\Users\chibi\AppData\Roaming\npm\node_modules\@vue\cli\node_modules\@apollo\protobufjs
> node scripts/postinstall

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.2.7 (node_modules\@vue\cli\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN jscodeshift@0.9.0 requires a peer of @babel/preset-env@^7.1.6 but none is installed. You must install peer dependencies yourself.

- @vue/cli-init@4.4.4
- @vue/cli@4.4.4
  added 279 packages from 212 contributors, removed 102 packages, updated 112 packages and moved 5 packages in 38.551s
  PS D:\xampp\htdocs\vue> vue -V
  @vue/cli 4.4.4
```

### Nuxt.js のスターターテンプレートを利用してプロジェクトの作成

```
PS D:\xampp\htdocs\vue> vue init nuxt-community/starter-template my-first-nuxt-app
? Project name my-first-nuxt-app
? Project description Nuxt.js project
? Author Reiko Makimoto <gracesystems2016@gmail.com>

vue-cli · Generated "my-first-nuxt-app".

To get started:

     cd my-first-nuxt-app
     npm install # Or yarn
     npm run dev
```

```
PS D:\xampp\htdocs\vue> cd .\my-first-nuxt-app\
PS D:\xampp\htdocs\vue\my-first-nuxt-app> npm install
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.

> core-js@2.6.11 postinstall D:\xampp\htdocs\vue\my-first-nuxt-app\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:

> https://opencollective.com/core-js > https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

> ejs@2.7.4 postinstall D:\xampp\htdocs\vue\my-first-nuxt-app\node_modules\ejs
> node ./postinstall.js

Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)

> nuxt@2.12.2 postinstall D:\xampp\htdocs\vue\my-first-nuxt-app\node_modules\nuxt
> opencollective || exit 0

                                     :-:
                                   .==-+:
                                  .==. :+- .-=-
                                 .==.   :==++-+=.
                                :==.     -**: :+=.
                               :+-      :*+++. .++.
                              :+-      -*= .++: .=+.
                             -+:      =*-   .+*: .=+:
                            -+:     .=*-     .=*-  =+:
                          .==:     .+*:        -*-  -+-
                         .=+:.....:+*-.........:=*=..=*-
                         .-=------=++============++====:

                          Thanks for installing nuxtjs
                 Please consider donating to our open collective
                        to help us maintain this package.

                           Number of contributors: 229
                              Number of backers: 331
                            Annual budget: US$ 71,885
                           Current balance: US$ 34,181

             Donate: https://opencollective.com/nuxtjs/donate

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN notsup Unsupported engine for watchpack-chokidar2@2.0.0: wanted: {"node":"<8.10.0"} (current: {"node":"12.16.1","npm":"6.13.4"})
npm WARN notsup Not compatible with your version of node/npm: watchpack-chokidar2@2.0.0
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.1.2 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.2.7 (node_modules\watchpack-chokidar2\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
added 1236 packages from 614 contributors and audited 1238 packages in 93.023s

42 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities

PS D:\xampp\htdocs\vue\my-first-nuxt-app> npm run dev

> my-first-nuxt-app@1.0.0 dev D:\xampp\htdocs\vue\my-first-nuxt-app
> nuxt

╭─────────────────────────────────────────────╮
│ │
│ Nuxt.js v2.12.2 │
│ Running in development mode (universal) │
│ │
│ Listening on: http://localhost:3000/ │
│ │
╰─────────────────────────────────────────────╯

i Preparing project for development 13:51:49
i Initial build may take a while 13:51:49
√ Builder initialized 13:51:49
√ Nuxt files generated 13:51:49

√ Client
Compiled successfully in 5.73s

√ Server
Compiled successfully in 5.34s

i Waiting for file changes 13:51:56
i Memory usage: 212 MB (RSS: 273 MB) 13:51:56
i Listening on: http://localhost:3000/ 13:51:56
```
