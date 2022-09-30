This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/workflows#submit-your-extension) and you should be on your way for automated submission!



## 参考にしたページ

- [Plasmo Framework - Plasmo](https://docs.plasmo.com/)  
- [PlasmoHQ / plasmo：ブラウザ拡張フレームワーク](https://github.com/PlasmoHQ/plasmo)  
- [Quickstart with Tailwind CSS - Plasmo](https://docs.plasmo.com/quickstarts/with-tailwindcss)  
- [Quickstart with Chrome Storage - Plasmo](https://docs.plasmo.com/quickstarts/with-chrome-storage)  
- [examples/with-nextjs at main · PlasmoHQ/examples](https://github.com/PlasmoHQ/examples/tree/main/with-nextjs)  
- [examples/with-options-ui at main · PlasmoHQ/examples](https://github.com/PlasmoHQ/examples/tree/main/with-options-ui)  
- [examples/with-background at main · PlasmoHQ/examples](https://github.com/PlasmoHQ/examples/tree/main/with-background)  






