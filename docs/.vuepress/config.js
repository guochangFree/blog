module.exports = {
    base: "/",
    title: 'JAVA教程',
    description: '架构师教程',
    themeConfig: {
        nav: [
            {
                text: 'Languages',
                items: [
                    {text: '中文', link: '/language/chinese'},
                    {text: 'English', link: '/language/english'}
                ]
            },
            {
                text: "github主页",
                link: "https://github.com/guochangFree"
            }
        ],

        sidebar: 'auto',

        sidebarDepth: 2
    }
}
