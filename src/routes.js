export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    routeHandler.setPwaSchema({
      name: 'React PWA',
      short_name: 'React PWA',
      start_url: '/',
      background_color: '#fff',
      theme_color: '#fff',
      description: 'React PWA with mobile and desktop support',
      display: 'fullscreen',
      // icons: [
      //   {
      //     src: "/path-to-pwa-icon-size-192x192.png",
      //     "sizes": "192x192"
      //   },
      //   {
      //     "src": "/path-to-pwa-icon-size-512x512.png",
      //     "sizes": "512x512"
      //   }
      // ]
    });
    routeHandler.setDefaultSeoSchema({
      title: 'React PWA',
    });

    const routes = [
      {
        path: '/',
        exact: true,
        component: () => import('./components/HelloPWA'),
        seo: {
          title: 'React PWA',
          description: 'React PWA with mobile and desktop support',
        },
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
