myEvent = {
    nameOrg: localStorage.getItem('nameOrg'),
    tel: localStorage.getItem('tel'),
    email: localStorage.getItem('email'),
    city: localStorage.getItem('city'),
    info: localStorage.getItem('info'),
    ava: localStorage.getItem('ava'),
    detailed: localStorage.getItem('detailed'),
    r: localStorage.getItem('r'),
    a: localStorage.getItem('a'),
    date: localStorage.getItem('date'),
    time: localStorage.getItem('time')
}

// let textDate = document.querySelector('.date-text')

document.querySelector('.rating-text').innerText = myEvent.r
document.querySelector('.info-text').innerText = myEvent.info
document.querySelector('.info-city').innerText = 'г. ' + myEvent.city + ','
document.querySelector('.address-text').innerText = myEvent.a
document.querySelector('.date-text').innerText =  myEvent.date
document.querySelector('.time-text').innerText =  myEvent.time
document.querySelector('.tel-text').innerText =  myEvent.tel
document.querySelector('.email-text').innerText =  myEvent.email
document.querySelector('.info-name').innerText =  myEvent.nameOrg
document.querySelector('.info-photo').innerHTML =  `<img src="${myEvent.ava}">`
document.querySelector('.detailed-info').innerText =  myEvent.detailed

const modal = $.modal()
let mod = document.querySelector('.mod')
let text = document.querySelector('.text-b')
// let container = document.querySelector('.amodal')
//
function modalWindow() {
    modal.open()
    setTimeout(function () {
        modal.close()
    }, 5000)
}
function finish() {
    setTimeout(function () {
        mod.style.pointerEvents = 'none'
        text.innerText = 'На модерации'
    },5000)
}

mod.addEventListener('click', function () {
    modalWindow()
    finish()
})