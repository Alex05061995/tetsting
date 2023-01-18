export function chooseCard(e) {
    const circle = e.currentTarget.querySelector('.product__weight');
    const phrase = e.currentTarget.querySelector('.product__phrase');
    const border = e.currentTarget.querySelector('.product__border');

    if (e.currentTarget.dataset.available === 'false') {
        return
    }

    if (e.currentTarget.dataset.taken === 'false') {
        console.log('dfdsfdsd');
        e.currentTarget.dataset.taken = 'true';
        e.currentTarget.classList.remove('border-none')
        e.currentTarget.classList.add('border')
        circle.style.backgroundColor = '#D91667';
        phrase.innerText = '';
        phrase.innerText = 'Печень утки разварная с артишоками.'
        border.classList.remove('display-none');
        border.classList.add('display-block');
    } else {
        e.currentTarget.dataset.taken = 'false';
        e.currentTarget.classList.remove('border')
        e.currentTarget.classList.add('border-none');
        circle.style.backgroundColor = '#1698D9';
        phrase.innerHTML = 'Чего сидишь? Порадуй котэ, <a class="product__buy" href="#">купи</a> .';
        border.classList.add('display-none');
        border.classList.remove('display-block');
    }
}
