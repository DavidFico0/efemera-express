const homeController = {
    index: (req, res) => {
        let servicos = [
            {nome: 'Desenvolvimento Web', imagem: '/images/undraw_dev_focus.svg'},
            {nome: 'Marketing Digital', imagem: '/images/undraw_social_dashboard.svg'},
            {nome: 'Consultoria UX', imagem: '/images/undraw_mobile_apps.svg'}
        ]

        let banners = [
            {imagem: '/images/banner.jpg', active: true},
            {imagem:'/images/publicidade-como-aplicar.jpg', active: false},
            {imagem: '/images/publicidade-e-propaganda-1280x720.png', active: false}
        ]

        res.render('index', {title: "Home",  listaServicos: servicos, listaBanners:banners});
    }
}

module.exports = homeController;