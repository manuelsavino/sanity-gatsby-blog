export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eeaca2b9b3e0b9ce5e805c4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-knx1iwir',
                  apiId: 'a3a4be91-997a-4f7a-8e99-67f679ecbb39'
                },
                {
                  buildHookId: '5eeaca2c9b3e0b674fe80ba8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kv2gqxj5',
                  apiId: 'c7809897-730e-4101-9d67-c5f0ab2f1d44'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/manuelsavino/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kv2gqxj5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
