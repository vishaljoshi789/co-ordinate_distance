
// variables

let formula_div_btn = document.querySelector('.formula');
let output_div_btn = document.querySelector('.output');
let output_screen_div = document.querySelector('.output-screen');
let output_back_btn = document.querySelector('.output-back-btn');
let output_main_text = document.querySelector('.output-main-text');
let calculate_btn = document.querySelector('#calculate-btn');
let clear_btn = document.querySelector('#clear-btn');
let graph_div_btn = document.querySelector('.graph');





// Mathematical formula 


formula_div_btn.addEventListener('click', ()=>{
    formula_div_btn.style.opacity = '0';
    output_screen_div.style.opacity = '1';
    output_screen_div.style.zIndex = '5';
    output_main_text.innerHTML = '<span class="mth-formula-text">&#402; : &#8730 (X1 - X2)&#178;  +  (Y1 - Y2)&#178;</span>'

})
output_back_btn.addEventListener('click', ()=>{
    formula_div_btn.style.opacity = '1';
    output_screen_div.style.opacity = '0';
    output_main_text.innerHTML = ''
    output_screen_div.style.zIndex = '-1';
})


// output of entries 

output_div_btn.addEventListener('click', ()=>{
    output_div_btn.style.opacity = '0';
    output_screen_div.style.opacity = '1';
    output_screen_div.style.zIndex = '5';
    x1 = document.querySelector('#X1').value;
    x2 = document.querySelector('#X2').value;
    y1 = document.querySelector('#Y1').value;
    y2 = document.querySelector('#Y2').value;
    output_main_text.innerHTML = `<span class="mth-formula-text">&#402; : &#8730 (X1 - X2)&#178;  +  (Y1 - Y2)&#178;</span>  <span>&#8730 (${x1} - ${x2})&#178; + (${y1} - ${y2})&#178;</span> <span>&#8730 (${(x1 - x2)**2}) + (${(y1-y2)**2})</span> <span> &#8730 ${((x1 - x2)**2)+ ((y1-y2)**2)}</span> <span>  ${Math.sqrt(((x1 - x2)**2)+ ((y1-y2)**2))}</span>`

})

output_back_btn.addEventListener('click', ()=>{
    output_div_btn.style.opacity = '1';
    output_screen_div.style.opacity = '0';
    output_main_text.innerHTML = ''
    output_screen_div.style.zIndex = '-1';

})

// calculate and clear button 

calculate_btn.addEventListener('click', ()=>{
    output_screen_div.style.opacity = '1';
    output_screen_div.style.zIndex = '5';
    x1 = document.querySelector('#X1').value;
    x2 = document.querySelector('#X2').value;
    y1 = document.querySelector('#Y1').value;
    y2 = document.querySelector('#Y2').value;
    output_main_text.innerHTML = `<span class="mth-formula-text">&#402; : &#8730 (X1 - X2)&#178;  +  (Y1 - Y2)&#178;</span>  <span>&#8730 (${x1} - ${x2})&#178; + (${y1} - ${y2})&#178;</span> <span>&#8730 (${(x1 - x2)**2}) + (${(y1-y2)**2})</span> <span> &#8730 ${((x1 - x2)**2)+ ((y1-y2)**2)}</span> <span>  ${Math.sqrt(((x1 - x2)**2)+ ((y1-y2)**2))}</span>`

})

clear_btn.addEventListener('click', ()=>{
    document.querySelector('#X1').value = '';
    document.querySelector('#X2').value = '';
    document.querySelector('#Y1').value = '';
    document.querySelector('#Y2').value = '';
    output_main_text.innerHTML = ''
})


// graph 

graph_div_btn.addEventListener('click', ()=>{
    graph_div_btn.style.opacity = '0';
    output_screen_div.style.opacity = '1';
    output_screen_div.style.backgroundColor = 'rgba(0, 0, 0, 0.800)'
    output_screen_div.style.zIndex = '5';
    output_main_text.innerHTML = '<canvas id="myChart" width="400" height="100"></canvas>'
    x1 = document.querySelector('#X1').value;
    x2 = document.querySelector('#X2').value;
    y1 = document.querySelector('#Y1').value;
    y2 = document.querySelector('#Y2').value;

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Co-ordinates',
                data: [{x:x1, y:y1},
                       {x:x2, y:y2}],
                borderColor: ['white',]
              }]
            },
        options: {
            responsive: true,
        }
        

    })
})

output_back_btn.addEventListener('click', ()=>{
    graph_div_btn.style.opacity = '1';
    output_screen_div.style.opacity = '0';
    output_main_text.innerHTML = ''
    output_screen_div.style.zIndex = '-1';
    output_screen_div.style.backgroundColor = '#7575755b'

})