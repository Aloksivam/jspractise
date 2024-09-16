const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Nice, you triggered this alert message!', 'success')
//   })
// }

//change the card title to red


// document.getElementsByClassName("card-title")[0].style.color = 'red'



let ctitle = document.getElementById("cardtitle")
ctitle.style.color = 'red'

//make the 2nd title to green and third to purple
// let ctitle2 = document.getElementsByClassName("card-title")
// ctitle2[1].style.color = "green"
// ctitle2[2].style.color = "purple"


//queryselectore does their job by css selectors

let ctitle2 = document.querySelectorAll(".card-title")
ctitle2[1].style.color = "brown"
ctitle2[2].style.color = "purple"

let btnone = document.querySelectorAll(".this")
console.log( typeof btnone)
btnone.style.color = "orange"
alert("hi alok");