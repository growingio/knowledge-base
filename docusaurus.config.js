// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GrowingIO 知识库',
  tagline: 'GrowingIO, 知识库',
  url: 'https://growingio.github.io.com/knowledge-base',
  baseUrl: '/knowledge-base/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  trailingSlash: false,
  organizationName: 'GrowingIO', // Usually your GitHub org/user name.
  projectName: 'knowledge-Base', // Usually your repo name.
  themeConfig:
    {
      navbar: {
        title: '',
        logo: {
          alt: 'GrowingIO Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_white.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: '知识库',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://www.growingio.com/',
            label: '官网',
            position: 'right',
          },
          {
            href: 'https://github.com/growingio',
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
                label: '知识库',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'SDK',
            items: [
              {
                label: 'Android',
                href: 'https://github.com/growingio/growingio-sdk-android-autotracker',
              },
              {
                label: 'iOS',
                href: 'https://github.com/growingio/growingio-sdk-ios-autotracker',
              },
              {
                label: 'Web',
                href: 'https://github.com/growingio/growingio-sdk-js-autotracker',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                href: 'https://www.growingio.com/',
                label: '官网',
              },
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/growingio',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 北京易数科技有限公司 -- Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['groovy','java','kotlin','swift','objectivec','php','dart'],
      },
    },

    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            // editUrl:
              // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],

    plugins: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          language: ["en","zh"],
        }
      ],
      // [
      //   '@docusaurus/plugin-content-docs',
      //   {
      //     id: 'question',
      //     path: 'question',
      //     routeBasePath: 'question',
      //     editUrl: 'https://github.com/growingio/growingio-sdk-docs/edit/master/',
      //     sidebarPath: require.resolve('./sidebarsQuestion.js'),
      //     showLastUpdateTime: true,
      //   }
      // ],
      [
        "docusaurus-plugin-includes",
        {
          injectedHtmlTags:{
            preBodyTags: [
              {
                tagName: "script",
                attributes: {
                  type: "text/javascript",
                  src: "https://growingio.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/-dtzt95/b/3/c95134bc67d3a521bb3f4331beb9b804/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?jsI18nTransformer=existing&locale=en-US&collectorId=d067cced",
                },
              }
            ],
          },
        },
      ],
    ],
};

module.exports = config;
