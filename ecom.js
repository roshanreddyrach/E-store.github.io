const mobileMenu = document.querySelector('.mobile')
const menuBar = document.querySelector('.menuBar')
const menuCancel = document.querySelector('.cancel')
const mobaList = document.querySelector('.mobaList')
const socialMedia = document.querySelector('.socialMedia')

menuBar.addEventListener('click',()=>{
    if(mobileMenu.classList.contains('mobile1')){

            mobileMenu.classList.remove('mobile1')



}
else{
    mobileMenu.classList.add('mobile1')
    mobaList.classList.add('mobaAnimation')
    socialMedia.classList.add('mediaAnimation')
}
})
menuCancel.addEventListener('click',()=>{
    mobileMenu.classList.remove('mobile1')
    mobaList.classList.remove('mobaAnimation')
    socialMedia.classList.remove('mediaAnimation')


})