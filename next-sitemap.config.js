/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bestkitesurfschools.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/privacy', '/terms'],
  transform: async (config, path) => {
    let priority = config.priority;
    if (path === '/') priority = 1.0;
    else if (path === '/best-kitesurf-schools-portugal') priority = 1.0;
    else if (path === '/kitesurf-portugal' || path === '/kitesurf-moledo') priority = 0.9;
    else if (path.includes('/schools/')) priority = 0.6;
    else if (path.startsWith('/kitesurf-') && path !== '/kitesurf-portugal' && path !== '/kitesurf-moledo') priority = 0.8;
    // article pages generally 0.7 which is default

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  }
}
