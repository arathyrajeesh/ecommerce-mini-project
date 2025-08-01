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
const change=()=>{
    document.getElementById('hide').style.display === 'none' ? 'inline' : 'none';
}

const comment = [
    {
        comm:'Pulvinar nostrud class cum facilis?',
        description:'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
},
{
    comm : 'Pon excepturi numquam, facilis?',
    description:'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.'

},
 {
        comm:'Pon excepturi numquam, facilis?',
        description:'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.'
},
{
    comm : 'Consequat nesciunt fusce facilisi?',
    description:'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus nec ullamcorper mattis, pulvinar dapibus leo.'

},
 {
        comm:'Pon excepturi numquam, facilis?',
        description:'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.'
},
{
    comm : 'Consequat nesciunt fusce facilisi?',
    description:'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus nec ullamcorper mattis, pulvinar dapibus leo.'

}

]

let question = document.getElementById('review-first');
let questionComment="";
comment.map((item)=>{
    questionComment = questionComment + `<div class='doubts'>
                                    <div class='question'>
                                        <h3>${item.comm}</h3>
                                    </div>
                                    <span class="showcase">${item.description}</span>
                                    </div>`
})
question.innerHTML = questionComment;

// const show = () => {
//     document.querySelector('.showcase').style.display = 'block';
// }
document.querySelectorAll('.question').forEach((q) => {
  q.addEventListener('click', () => {
    const showcase = q.nextElementSibling;
    showcase.style.display = (showcase.style.display === 'block') ? 'none' : 'block';
    // showcase.classList.toggle('open');

  });
});
