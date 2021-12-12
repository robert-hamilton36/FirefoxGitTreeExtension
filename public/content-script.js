const getColour = () => {
    const array = ['blue', 'red']
    return array[Math.round(Math.random())]
}

const colour = getColour()
document.body.style.border = `5px solid ${colour}`

browser.runtime.sendMessage({webpage: window.location.href})

let url = window.location.href;

['click','popstate'].forEach( evt =>
  window.addEventListener(evt, function () {
      requestAnimationFrame(()=>{
        if (url !== location.href) {
          browser.runtime.sendMessage({webpage: window.location.href})
        }
        url = location.href;
      })
  }, true)
)