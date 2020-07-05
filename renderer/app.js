// Modules
const fs = require('fs')

let home = document.querySelector('#home')
let main = document.querySelector('#main')
let tagId

window.addEventListener('load', e => {
    let content = fs.readFileSync(`${__dirname}/templates/home.html`).toLocaleString()
    main.innerHTML = content
})

home.addEventListener('click', e => {
    location.reload()
}, false)

exports.loadTemplate = (tagId) => {
    let tag = document.querySelector(tagId)
    tag.addEventListener('click', e => {
        e.preventDefault()
        let content = fs.readFileSync(`${__dirname}/templates/${tag.dataset.tmpl}.html`).toLocaleString()
        main.innerHTML = content.replace('{{title}}', tag.dataset.title)
        let js = require(`${__dirname}/templates/${tag.dataset.tmpl}`)
        js.init()
    }, false)
}

tagId = '#salon'
this.loadTemplate(tagId)

tagId = '#sdj'
this.loadTemplate(tagId)
