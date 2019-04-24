import m from 'mithril';

const Layout = {
    view: function(vnode){
        return m('main.layout', [
            m('nav.menu', [
                m("a[href='/list']", {oncreate: m.route.link}, 'Users')
            ]),
            m('section', vnode.children)
        ])
    }
}

export default Layout