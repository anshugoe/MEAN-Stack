$(document).ready(()=> {
    $('#input').on("change",(evt)=>{
        let text=$('#input').val();
        $.get('/users',{text:text})
            .done((data)=>{
                console.log(data);
                $('#results').prepend('<li>'+data['result']+'</li>')
                $('#input').val('');
            })
    })
})