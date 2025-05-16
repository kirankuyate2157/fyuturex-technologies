/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hirevia.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/api/*'],
};
