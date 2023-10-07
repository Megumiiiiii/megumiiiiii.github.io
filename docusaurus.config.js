// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Elysian',
  tagline: 'A Permaweb',
  favicon: 'img/a.png',

  // Set the production url of your site here
  url: 'https://megumiiiiii.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Megumiiiiii', // Usually your GitHub org/user name.
  projectName: 'megumiiiiii.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id', 'ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/',
        },
        blog: {
          blogTitle: 'Random Post',
          blogDescription: 'Just a random post',
          blogSidebarTitle: 'Recent posts',
          postsPerPage: 3,
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/b.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Elysian',
        logo: {
          alt: 'A',
          src: 'img/a.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Random Post', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
            className: 'search',
          },
          {
            href: 'https://megumii.ar-io.dev',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social Media',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Megumiiiiii',
              },
              {
                label: 'X',
                href: 'https://x.com/megumii_tez',
              },
              {
                label: 'Telegram',
                href: 'https://KatouMegumii.t.me',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/users/873803230042263563',
              },
            ],
          },
          {},
          {title: '?',},
          {},   
          {title: '!!',},
          {},
          {title: '!!'},
          {},
          {title: '?'},
          {
            title: 'More',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Random Post',
                to: '/blog',
              },

            ],
          },
        ],
        logo: {
          alt: 'a',
          src: 'img/miku.gif',
          width: 'auto',
          height: 'auto',
        },
        copyright: `<a href="https://github.com/Megumiiiiii/megumiiiiii.github.io/blob/main/LICENSE">Copyright</a> © ${new Date().getFullYear()} Elysian, Inc. Built with 💜 by the Arweave community.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      trailingSlash: true,
    }),
};

module.exports = config;
