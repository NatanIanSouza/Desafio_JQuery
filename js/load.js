$(document).ready(function(){

    //Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML

    $('a').click(function(e){
        e.preventDefault()

        //Criar uma variável local que receba o atributo href do link
        let page = $(this).attr('href')

        $('.modal-title').empty()
        $('.modal-body').empty()

        //Verificar qual conteúdo eu devo carregar
        switch(page){
            //Se for para abria a página sobre mim...
            case 'convencional': 
                $('.modal-title').append('convencional')
                $('.modal-body').append(` <p class="text-danger" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p class="text-primary" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>`)
                $('#modal-info').modal('show')
            break
            //Se for para abria a página trabalhos...
            case 'mountain': 
                $('.modal-title').append('mountain')
                $('.modal-body').append(` <p class="text-danger" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p class="text-primary" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p class="text-warning" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>`)
                $('#modal-info').modal('show') 
            break
            //Se for para abria a página meus clientes...
            case 'road': 
                $('.modal-title').append('road')
                $('.modal-body').append(` <p class="text-danger" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p class="text-primary" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p class="text-warning" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p class="text-info" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>`)
                $('#modal-info').modal('show') 
            break
            //Se for para abria a página meus contatos...
            case 'bmx': 
                $('.modal-title').append('bmx')
                $('.modal-body').append(` <p class="text-danger" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p class="text-primary" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p class="text-warning" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p class="text-info" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>
                <p class="text-success" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates temporibus at deleniti nam dolorem voluptatem perspiciatis nostrum ipsa iusto? Perspiciatis vel deserunt error dolores reiciendis cumque necessitatibus? Modi, molestias?</p>`)
                $('#modal-info').modal('show')  
            break
            default: alert('link não encontrado')
        }

    })
})