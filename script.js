
let order = true;

let bSwitchBtn = document.querySelector('#b-switchBtn');
let bSectionElements = document.querySelector('#b-section-elements');

let div1 = document.createElement('div');
div1.classList.add('col-12', 'col-md-5', 'mt-5', 'ms-4', 'card', 'box-shad');
div1.innerHTML = 
    `<h5 class="very-little">Lorem ipsum</h5>
    <p class="subtitle2 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex pariatur molestiae soluta sunt earum, magnam rerum iure perferendis quae nisi numquam nobis aliquam consectetur explicabo.</p>`;
bSectionElements.appendChild(div1);

let div2 = document.createElement('div');
div2.classList.add('col-12', 'col-md-5', 'mt-5', 'main-icons-container');
div2.innerHTML = 
    `<div class="row icons-row mt-4 mt-md-0">
        <div class="col-2">
            <i class="card icon-box fa-solid fa-fire text-danger"></i>
        </div>
        <div class="col-2">
            <i class="card icon-box fa-solid fa-seedling text-success"></i>              
        </div>
        <div class="col-2">
            <i class="card icon-box fa-solid fa-bell text-warning"></i>
        </div>
    </div>
    <div class="row icons-row mt-4 mt-md-0">
        <div class="col-2">
            <i class="card icon-box fa-solid fa-box-open text-primary"></i>
        </div>
        <div class="col-2">
            <i class="card icon-box fa-solid fa-code-branch text-secondary"></i>
        </div>
        <div class="col-2">
            <i class="card icon-box fa-solid fa-shield-halved text-dark"></i>
        </div>
    </div>`;
bSectionElements.appendChild(div2);


bSwitchBtn.addEventListener('click', ()=> {

    if(!order){
        bSectionElements.appendChild(div1);
        bSectionElements.appendChild(div2);
        order=true;
    }else{
        bSectionElements.appendChild(div2);
        bSectionElements.appendChild(div1);
        order=false;
    }

})


