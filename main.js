window.onload = () => {
    const uploadFile = document.getElementById('img-file')
    const uploadBtn = document.getElementById('img-btn')

    uploadBtn.addEventListener('click', function () {
        uploadFile.click()
    })

    uploadFile.addEventListener('change', function () {
        uploadBtn.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\))]+)$/)[1]
        let filename = document.getElementById('img-file').files[0].name;
        document.getElementById('img-btn').value = filename
    })
}


const addDate = document.querySelector('.btn')
const date = document.querySelector('.time-date')
element = date.innerHTML

addDate.addEventListener('click', function () {
    date.innerHTML = date.innerHTML + element
})

let form = document.getElementById('container');
let inputs = form.getElementsByTagName('input');
let textarea = form.getElementsByTagName('textarea')
let timeDateForm = document.querySelector('.time-date')
// let timeDateEl = timeDateForm.getElementsByTagName('input')
// let photo = document.getElementById('img-file')
// let photoCon = document.querySelector('.photo')
// let cross1 = photoCon.querySelector('.cross')

// function clearTimeDateInputs() {
//     for (let i of timeDateEl)
//         i.value = ''
// }
//
// function clearPhoto() {
//     photo.value = ''
// }

function clearAllFormInputs() {
    for (let input of inputs)
        input.value = '';
    for (let i of textarea)
        i.value = '';
}

// cross1.addEventListener('click', clearPhoto)
let further = document.querySelector('.further')
further.addEventListener('click', function () {
    localStorage.setItem('nameOrg', document.querySelector('.nameOrg').value.toString())
    localStorage.setItem('tel', document.querySelector('.tel').value.toString())
    localStorage.setItem('email', document.querySelector('.email').value.toString())
    localStorage.setItem('city', document.querySelector('.city').value.toString())
    localStorage.setItem('info', document.querySelector('.info').value.toString())
    localStorage.setItem('ava', document.querySelector('.ava').value.match(/[\/\\]([\w\d\s\.\-(\))]+)$/)[1].toString())
    localStorage.setItem('detailed', document.querySelector('.detailed').value.toString())
    localStorage.setItem('r', document.querySelector('.r').value.toString())
    localStorage.setItem('a', document.querySelector('.a').value.toString())
    localStorage.setItem('date', document.querySelector('.start-date').value.toString())
    localStorage.setItem('time', document.querySelector('.start-time').value.toString())
})

let button = document.getElementById('clear');
button.addEventListener('click', clearAllFormInputs);
button.addEventListener('click', function (){localStorage.clear()})

let text = document.querySelector('.text-a')
function red() {
    further.style.pointerEvents = 'none'
    further.style.backgroundColor = 'red'
    text.innerText = 'Не все поля введены'
}

function green() {
    further.style.pointerEvents = 'auto'
    further.style.backgroundColor = '#9b63f8'
    text.innerText = 'Далее'
}

function error() {
    for (let i of inputs)
        if (i.value === '') {
            red()
        } else {green()}
    for (let i of textarea)
        if (i.value === '') {
            red()
        } else {green()}
}
further.addEventListener('mousedown', error)
document.querySelector('.container').addEventListener('mousedown', green)

// let startDates = document.querySelectorAll('.start-date')
// let startTimes = document.getElementsByClassName('.start-time')
// function startDateTime() {
//     let elD = ''
//     for (let i of startDates) {
//         elD = elD + i.value.toString() + ','
//     }
//     localStorage.setItem('dates', elD)
//     // for (let i of startTimes) {
//     //
//     // }
// }
//
// further.addEventListener('mousedown', startDateTime)