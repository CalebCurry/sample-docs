// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Markdown Tutorial',
  tagline: 'Get Up to Speed with Markdown',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CalebCurry', // Usually your GitHub org/user name.
  projectName: 'sample-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/calebcurry/sample-docs/tree/main/',
        },
        blog:false,
        //blog: {
        //  showReadingTime: true,
          // Please change this to your repo.
        //  editUrl:
        //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Markdown Tutorial',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/calebcurry/sample-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://youtube.com/calebthevideomaker2',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/calebcurry',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/calebcurry',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Caleb Curry`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
