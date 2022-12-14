# Multi Zones

08-28-2022
- Sample Multi Zone App, powered by Vercel

 TABLE OF CONTENT
---------------------------------------------------------------------------------------------------------------------
- Using multiple zones
- Resources
----------------------------------------------------------------------------------------------------------------

# Using multiple zones

With Next.js you can use multiple apps as a single app using its [multi-zones feature](https://nextjs.org/docs/advanced-features/multi-zones). This is a custom example using the [boiler-nextjs app](https://github.com/CarlosRangel17/boiler-nextjs) that shows how to use it.

- All pages should be unique across zones. For example, the `home` app should not have a `pages/blog/index.tsx` page.
- The `home` app is the main app and therefore it includes the rewrites that map to the `blog` app in [next.config.js](home/next.config.js)
- The `blog` app sets [`basePath`](https://nextjs.org/docs/api-reference/next.config.js/basepath) to `/blog` so that generated pages, Next.js assets and public assets are within the `/blog` subfolder.

## How to use

With multi zones you have multiple Next.js apps over a single app, therefore every app has its own dependencies and it runs independently.

To start the `/home` run the following commands from the root directory:

```bash
cd home
npm install && npm run dev
# or
cd home
yarn && yarn dev
```

The `/home` app should be up and running in [http://localhost:3000](http://localhost:3000)!

Starting the `/blog` app follows a very similar process. In a new terminal, run the following commands from the root directory :

```bash
cd blog
npm install && npm run dev
# or
cd blog
yarn && yarn dev
```

The `blog` app should be up and running in [http://localhost:4000](http://localhost:4000)!

### Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy the apps to Vercel, we'll use [monorepos support](https://vercel.com/blog/monorepos) to create a new project for each app.

To get started, push the example to GitHub/GitLab/Bitbucket and [import your repo to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example). We're not interested in the root directory, so make sure to select the `blog` directory (do not start with `home`):

_Import flow for blog app_

<img width="468" alt="Screen Shot 2022-08-28 at 10 58 40 AM" src="https://user-images.githubusercontent.com/11052295/187083268-4163dfd4-9949-45c3-890f-f6891fad5635.png" alt="Import flow for blog app">


Click continue and finish the import process. After that's done copy the domain URL that was assigned to your project, paste it on `home/.env`, and push the change to your repo:

```bash
# Replace this URL with the URL of your blog app
BLOG_URL="https://multi-zones-blog.vercel.app"
```

Now we'll go over the [import flow](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) again using the same repo but this time select the `home` directory instead:

_Import flow for home app_

<img width="475" alt="Screen Shot 2022-08-28 at 10 56 56 AM" src="https://user-images.githubusercontent.com/11052295/187083187-5d55f1d6-2eb4-4748-9b65-fe21b6986ee1.png" alt="Import flow for home app">


With the `home` app deployed you should now be able to see both apps running under the same domain!

Any future commits to the repo will trigger a deployment to the connected Vercel projects. See the [blog post about monorepos](https://vercel.com/blog/monorepos) to learn more.

## Resources

NextJS - Multi Zones
* https://nextjs.org/docs/advanced-features/multi-zones 
* https://www.techomoro.com/multi-zones-combine-multiple-next-js-apps/ 

The Evolution of SaaS Architecture - Monoliths, Micro Front-End, Jamstack
* https://frontegg.com/guides/saas-architecture/the-evolution-of-saas-architecture 

Micro-frontend with React and Next.js
* https://blog.logrocket.com/micro-frontend-react-next-js/#advantages-micro-frontends 

Micro-Frontends
* https://www.novafutur.com/post/micro-frontends-solving-the-monolith-issue
* https://www.novafutur.com/post/micro-frontends-solving-the-monolith-issue-part-2
* https://blog.logrocket.com/taming-the-front-end-monolith-dbaede402c39/ 
* https://levelup.gitconnected.com/micro-frontend-architecture-replacing-a-monolith-from-the-inside-out-61f60d2e14c1
* https://martinfowler.com/articles/micro-frontends.html


