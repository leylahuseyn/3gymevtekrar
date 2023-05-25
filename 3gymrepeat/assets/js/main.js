const btn =document.querySelector('.btn')
btn.addEventListener('click' ,function(){
    fetch('https://646efe0409ff19b1208663d0.mockapi.io/cards',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            image : document.querySelector('#image').value,
            name : document.querySelector('#name').value,
            price : document.querySelector('#price').value,
        })
    }).then(res=>{
        if(res.ok){
            console.log('true');
            document.querySelector('#image').value='';
            document.querySelector('#name').value='';
            document.querySelector('#price').value='';
        }
        else{
            console.log('error');
        }
    }).catch(()=>console.log('error'))
})