## 建構指令

1. init project:
```
npm install -g typings
npm install -g typescript

npm init                                      # generate package.json file
npm install typescript ts-loader --save-dev   # download & update package.json file
npm install jquery --save                     # download & update package.json file
npm install typings --save-dev                # download & update package.json file
npm install webpack --save-dev                # download & update package.json file

typings install dt~jquery --global --save     # generate typing.json file
tsc --init                                    # generate tsconfig.json file
```
1. edit src/Message.ts
1. edit src/app.ts
1. edit tsconfig.json:
*  update compilerOptions.sourceMap --> true
*  add files:
   *  typings/index.d.ts
   *  src/app.ts
1. edit webpack.config.js
1. edit index.html
1. open browser 