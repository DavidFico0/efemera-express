const fs = require('fs');
const path = require('path');
const newsLetter = path.join('public', 'json', 'newsLetter.json');
const contatos = path.join('public', 'json', 'contatos.json');

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
    },

    newsletter: (req, res) => {
        let {email} = req.body;
        let news = {email};
        news.email = req.body.email;
        let newsJson = [];
        console.log(newsJson);

        if(fs.existsSync(newsLetter)){
            newsJson = fs.readFileSync(newsLetter, {encoding:'utf-8'});
            newsJson = JSON.parse(newsJson);
            newsJson.push(news)
            newsJson = JSON.stringify(newsJson);
            fs.writeFileSync(newsLetter, newsJson)
        } else {
            newsJson.push(JSON.stringify([news]));
            fs.writeFileSync(newsLetter, newsJson);
        }
        
        res.render('news-sucess', { title:"Sucesso", email});
    },

    contato: (req, res) => {
        let{nome, email, mensagem} = req.body;
        let infoContato = { nome, email, mensagem};
        let contatosJson = []

        if(fs.existsSync(contatos)){
            contatosJson = fs.readFileSync(contatos, {encoding:'utf-8'});
            contatosJson = JSON.parse(contatosJson);
            contatosJson.push(infoContato);
            contatosJson = JSON.stringify(contatosJson);
            fs.writeFileSync(contatos, contatosJson);
        } else {
            contatosJson.push(JSON.stringify([infoContato]))
            fs.writeFileSync(contatos, contatosJson);
        }

        res.render('email-sucess', {nome, email, mensagem, title: 'Contato'});
    },

    listarContatos: (req, res) => {
        let listaContatos = fs.readFileSync(contatos, {encoding:'utf-8'});
        listaContatos = JSON.parse(listaContatos);

        res.render('lista-contatos', {listaContatos: listaContatos, title:'Lista de Contatos'})
    }
}

module.exports = homeController;