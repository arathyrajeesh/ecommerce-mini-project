
let image = document.getElementById('picture');
let images = [ 
    'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D',	
    'https://cdn.pixabay.com/photo/2014/12/07/18/37/rice-560047_1280.jpg',
    'https://media.istockphoto.com/id/1754036873/photo/young-farmer-in-a-wheat-field-using-a-tablet-and-examining-crop.jpg?s=612x612&w=0&k=20&c=UZk3kCFCt7bvDM5XiuwHDuueSmINRVjbEyrsNmHjprE='
];

setInterval(() =>{
    let random = Math.floor(Math.random()*images.length);
    image.src = images[random];

},1800);



// up count 
let displayValue = document.querySelectorAll('.num');
let interval = 4000;

displayValue.forEach((displayValue)=>{
    let startValue = parseInt(displayValue.getAttribute('data-start')) || 0;
    let endValue = parseInt(displayValue.getAttribute('data-val'))
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(()=>{
        startValue +=1;
        displayValue.textContent = startValue
        if(startValue == endValue){
        clearInterval(counter);
        }
    },duration)
   

})

const data = [
    {
        message : 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        name : 'Mila Kunit',
        photo : 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png'
    }
]

let person = document.getElementById('comment');
let personComment="";
data.map((item)=>{
    personComment = personComment + `<div class='review'>
                                    <span>
                                        <i class="fa-solid fa-star" style="color: #cad709;"></i>
                                        <i class="fa-solid fa-star" style="color: #cad709;"></i>
                                        <i class="fa-solid fa-star" style="color: #cad709;"></i>
                                        <i class="fa-solid fa-star" style="color: #cad709;"></i>
                                        <i class="fa-solid fa-star" style="color: #cad709;"></i>
                                    </span>
                                    <p>${item.message}</p>
                                    <span class="personal">
                                        <img src="${item.photo}">
                                        <h4>${item.name}</h4>
                                    </span>
                                    </div>`
})
comment.innerHTML = personComment;