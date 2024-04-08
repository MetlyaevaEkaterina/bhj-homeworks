document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.reveal');
 
    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;
 
        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;
 
            if (blockPosition < windowHeight - 100) {
                block.classList.add('reveal_active');
            }
        });
    }
 
    checkBlocksVisibility();
 
    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });
})