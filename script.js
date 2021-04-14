
const accordions = document.querySelectorAll('.accordion__item')

for (item of accordions) {
    item.addEventListener('click', function(){
        if (this.classList.contains('active')) {
            this.classList.remove('active')
        }
        else{
            for (element of accordions) {
                element.classList.remove('active')
            }
            this.classList.add('active')
        }
    })
}




// Версия с открытием любого блока
// const accordions_2 = document.querySelectorAll('.accordion__item_2')

// for (item of accordions_2) {
//     item.addEventListener('click', function(){
//         this.classList.toggle('active_2')
//     })
// }