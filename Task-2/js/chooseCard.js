export function chooseCard(e) {
    const circle = e.currentTarget.querySelector('.product__weight');
    const phrase = e.currentTarget.querySelector('.product__phrase');

    if (e.currentTarget.dataset.available === 'false') {
        return
    }

    if (e.currentTarget.dataset.taken === 'false') {
        console.log('dfdsfdsd');
        e.currentTarget.dataset.taken = 'true';
        e.currentTarget.style.border = '3px solid #D91667'
        circle.style.backgroundColor = '#D91667';
        phrase.innerText = '';
        phrase.innerText = 'Печень утки разварная с артишоками.'
    } else {
        e.currentTarget.dataset.taken = 'false';
        e.currentTarget.style.border = 'none';
        circle.style.backgroundColor = '#1698D9';
        phrase.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="product__buy" href="#">купи</a> .'
    }
}
