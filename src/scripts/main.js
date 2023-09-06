document.addEventListener('DOMContentLoaded', function() {
    const exorcismo = document.querySelector('.digitando__conteudo__exorcismo');
    const questions = document.querySelectorAll('[data-faq-question]');
    const customCursor = document.querySelector('.custom__cursor');
    

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
});
    
    

    
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer);
    }
    
    // window.addEventListener('load', function() {
    //     const logosupernatural = document.querySelector('.logo__supernatural__item');
    //     setTimeout(function () {
    //         logosupernatural.style.opacity = 1.7;
    //         logosupernatural.style.transform = 'scale(1.05)';
    //     }, 500);
    // });

    window.addEventListener('load', function() {
        const logosupernatural = document.querySelector('.logo__supernatural__item');
        const traseiraImpala = document.querySelector('.header__container__impala');
        
        function fadeIn() {
            traseiraImpala.style.opacity = 1.7;
            traseiraImpala.style.transform = 'scale(1.05)';
            logosupernatural.style.opacity = 1.7;
            logosupernatural.style.transform = 'scale(1.05)';
            setTimeout(fadeOut, 3000); // 3000 milissegundos (3 segundos) para desaparecer
        }
    
        function fadeOut() {
            traseiraImpala.style.opacity = 0;
            traseiraImpala.style.transform = 'scale(1)';
            logosupernatural.style.opacity = 0;
            logosupernatural.style.transform = 'scale(1)';
            setTimeout(fadeIn, 3000); // 3000 milissegundos (3 segundos) para aparecer novamente
        }
    
        fadeIn(); // Inicialmente, chamamos a função fadeIn para iniciar a animação.
    });
    
    function ativaLetra(elemento) {
        const arrayTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrayTexto.forEach((Letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += Letra;
            }, 75 * i)
        });
    }

    function openOrCloseAnswer(elemento) {
        const classe = 'faq__questions__item--is-open';
        const elementoPai = elemento.target.parentNode;

        elementoPai.classList.toggle(classe);
    }


    ativaLetra(exorcismo);
});