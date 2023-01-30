const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target.closest('.h1', '.h2', '.h3')) {
        console.log('asd');
    }
});