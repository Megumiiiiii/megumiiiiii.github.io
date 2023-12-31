// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCode = require('prism-react-renderer/themes/vsLight');
// const darkA = require('prism-react-renderer/themes/vsDark');
const dark = require('prism-react-renderer/themes/nightOwl');
// const darkC = require('prism-react-renderer/themes/duotoneDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '𝄞',
  tagline: '',
  favicon: 'img/a.png',

  // Set the production url of your site here
  url: 'https://k.megumii.xyz',
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
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Megumiiiiii/megumiiiiii.github.io/edit/main/',
        },
        blog: {
          blogTitle: 'Random Post',
          blogDescription: 'Just a random post',
          blogSidebarTitle: '.',
          postsPerPage: 'ALL',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 0.97}}),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
        gtag: {
          trackingID: 'G-7P16H5X5M1',
        },
      }),
    ],
  ],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'megumii, by megumii, about megumii, megumii katou, megumii docs, megumii guide, guide by megumii, megumii github, docs, documents, dokumentasi, guide, document, node, tutorial, how to, cara, tutorial node untuk pemula, cara menjalankan node'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      headTags: [
        {
          tagName: 'link',
          attributes: {
            rel: 'canonical',
            href: 'https://megumii.xyz',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'canonical',
            href: 'https://www.megumii.xyz',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect',
            href: 'ar://megumii',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'canonical',
            href: 'https://megumii.eth.limo',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'canonical',
            href: 'https://megumii.tez.page',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'canonical',
            href: 'https://megumii.blessingway.xyz',
          },
        },
      ],
      image: 'img/miku.jpg',
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Kessoku',
        hideOnScroll: true,
        logo: {
          alt: 'A',
          src: 'img/a.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'What',
          },
          {to: '/blog', label: 'Random Post', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://kessoku.xyz',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Discord',
            items: [
                {
                   html: `
                   <a href="https://discordapp.com/users/873803230042263563" target="_blank" rel="nofollow">
                      <img src="https://lanyard.cnrad.dev/api/873803230042263563?idleMessage=doing%20something%20else..."  alt="Discord Presence"></img>
                      </a>`,
              },
          ],
          },
          {},
          {
            title: 'Github',
            items: [
                {
                   html: `
                      <a href="https://github.com/Megumiiiiii" target="_blank" rel="nofollow">
                      <img src="https://img.shields.io/static/v1?label=Github&message=727&logo=GitHub&color=b9bbbd" alt="github"></img>
                      </a>`,
              },
          ],
          },
          {},
          {
            title: 'X',
            items: [
                {
                   html: `
                      <a href="https://x.com/megumii_tez" ttarget="_blank" rel="nofollow">
                      <img src="https://img.shields.io/static/v1?label=Twitter&message=727&logo=X&color=ffffff" alt="x"></img>
                      </a>`,
              },
          ],
          },
          {},
          {
            title: 'Telegram',
            items: [
                {
                   html: `
                      <a href="https://KatouMegumii.t.me" target="_blank" rel="nofollow">
                      <img src="https://img.shields.io/static/v1?label=Telegram&message=727&logo=Telegram&color=48bffa" alt="telegram"></img>
                      </a>`,
              },
          ],
          },
          {},
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
          {
            items:[
            { html: `
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3151803879329926" crossorigin="anonymous"></script>`
            },],
          },
        ],
        logo: {
          alt: 'a',
          src: 'img/miku.gif',
          width: 'auto',
          height: 'auto',
        },
        copyright: `<a href="https://github.com/Megumiiiiii/megumiiiiii.github.io/blob/main/LICENSE" target="_blank" rel="nofollow">Copyright</a> © ${new Date().getFullYear()} Kessoku, Inc. Built with Docusaurus | Powered by Arweave and Github.`,
      },
      prism: {
        theme: dark,
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
        ],
      },
      trailingSlash: true,
    }),
};

module.exports = config;
