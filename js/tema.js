$(document).ready(function(){

    $('a').addClass('text-white')

    $('.btn-light').click(function(light){
        light.preventDefault()

        //Remover o CSS existente do nosso tema (jumbotron)
        //Selecionar o jumbotron e excluir o CSS existente
        $('.jumbotron').removeClass('bg-personal')
        $('.jumbotron').removeClass('bg-black')
        //Aplicar a classe Css que eu desejo
        $('.jumbotron').addClass('bg-light')
        $('a').addClass('text-dark')
        $('a').removeClass('text-white')

    })

    $('.btn-dark').click(function(light){
        light.preventDefault()

        //Remover o CSS existente do nosso tema (jumbotron)
        //Selecionar o jumbotron e excluir o CSS existente
        $('.jumbotron').removeClass('bg-personal')
        $('.jumbotron').removeClass('bg-light')
        //Aplicar a classe Css que eu desejo
        $('.jumbotron').addClass('bg-black')
        $('a').addClass('text-white')
        $('a').removeClass('text-dark')
    })

    $('.btn-primary').click(function(light){
        light.preventDefault()

        //Remover o CSS existente do nosso tema (jumbotron)
        //Selecionar o jumbotron e excluir o CSS existente
        $('.jumbotron').removeClass('bg-light')
        $('.jumbotron').removeClass('bg-black')
        //Aplicar a classe Css que eu desejo
        $('.jumbotron').addClass('bg-personal')
        $('a').addClass('text-white')
        $('a').removeClass('text-dark')
    })
})