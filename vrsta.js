const btn = document.getElementById('btn');
const form = document.getElementById('form');
const error = document.getElementById('error');
const ljubimac = document.getElementById('da');
const vrsta = document.getElementById('vrsta');

const show = () => {
    let show = document.getElementById('zivotinje');
    if(show.style.display === 'none'){
        show.style.display = 'block';
    } else{
        show.style.display = 'none';
    }
}

const ljubimac = () => {
    if(ljubimac.checked == true){
        vrsta.style.display = 'block';
    }
};

ljubimac.addEventListener()
btn.addEventListener('click', show);