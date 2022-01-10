const team = document.querySelector('.team');

devs.map(data =>{

    team.innerHTML += `
    
    <div class="team-item">
            <img src="${data.photo}" alt="">
            <h2>${data.Name}</h2>
            <span>${data.skill}</span>
            <p>Lorem ipsum dolor sit, amet consectetur</p>
            <p>${data.location}</p>
            <span>${data.age}</span>
    </div>
    
    `;

});


