const data=[
    {
        icon:'<i class="fa-solid fa-phone" style="color: #36d339;"></i>',
        title:'1234567890',
        subtitle:'5432109876'
        
    },
    {
        icon:'<i class="fa-solid fa-envelope" style="color: #55b63a;"></i>',
        title:'info@example.com',
        subtitle:'support@example.com'
    },
    {
        icon:'<i class="fa-solid fa-location-dot" style="color: #4abf5d;"></i>',
        title:'1569 Ave,New York,',
        subtitle:'NY 10028,USA'
    }
]
let details = document.getElementById('cards');
let essentials = '';
data.map((item)=>{
    essentials = essentials +`<div class='essen'>
                                <span>${item.icon}</span>
                                <p>${item.title}</p>
                                <p>${item.subtitle}</p>
                            </div>`
})
details.innerHTML = essentials;