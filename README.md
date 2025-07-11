This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## developer log
when deploying the tailwindcss, run to install:
```
npm install -D tailwindcss postcss autoprefixer
```

in database deployment, ref:
```
https://supabase.com/docs/guides/api/rest/generating-types
```

run:
```
npm install @supabase/auth-helpers-nextjs
npm install @supabase/auth-helpers-react
```

when deploying the login module, e.g. Modal partion, we are gonna install the radix-ui by running: 
```
npm install @radix-ui/react-dialog
```

Authentication Model:
```
npm install zustand
```

Add some elements to the Authentication modal
```
npm install @supabase/auth-ui-react
npm install @supabase/auth-ui-shared
```

```
npm install react-hot-toast
```

the upload modal relies on
```
npm install react-hook-form
npm install uniqid
npm install -D @types/uniqid
```

The search function relies on
```
npm install query-string
```

The volumn slider of player relies on
```
npm install @radix-ui/react-slider
```
To actually play a song, here we should should run the following line to install 
a package
```
npm install use-sound
```

add spinner
```
npm install react-spinners
```


```
npm install server-only
```

## problems
- 不支持userid
- 上传功能人机交互太差+图片带宽占用大
- 数据库和type结构存在严重问题
- 项目名称不对

## Plans
- 界面中文支持
- 完全修改底层逻辑
  - 数据库文件树+权限表配置 (done)
  - 前端支持虚拟路由, 在主界面使用虚拟路由内容模式, Library使用前端组件模式
  - 前端加入文件树
  - 前端加入权限管理
  - 组件渲染逻辑优化