function showBook(){
    document.getElementById('book-tab').style.display = 'block';
    document.getElementById('form-tab').style.display = 'none';
}
function showForm(){
    document.getElementById('book-tab').style.display = 'none';
    document.getElementById('form-tab').style.display = 'block';
}

window.onload = function(){
    showBook();
}
document.getElementById('book-form').addEventListener('submit', function(event){
    event.preventDefault();
    const spec = document.getElementById('spec').value;
    const name_doctor = document.getElementById('name-doctor').value;
    const ex = document.getElementById('ex').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    fetch('/book-form',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 

        })
    })
    .then(response=>{
        
    })
});