# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


## Design

src/components/Navbar.astro
製作Navbar as Razer

## Vercel Auto Deploy with Cron Job

npm install @types/node --save-dev
-> 讓 .ts 能夠認出 process.env / 直接使用import.meta.env

在src/pages/底下創建新的URL
e.g. src/pages/XXX.ts
然後在root 新建vercel.json

### 千萬記得 gitignore -> .vercel/ ###
超重要 找了1晚上的bug 都讀不到API

安全性: 在Vercel 設置 Environment variable, CRON_ SECRET

## 彈跳式超連結
<a href="https://myship.7-11.com.tw/general/detail/GM2601272856786" 
id="vendor" 
class="box" 
target="_blank" 
rel="noopener noreferrer">
--> target: 彈跳式, rel: 安全性