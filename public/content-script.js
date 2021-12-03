const getColour = () => {
    const array = ['blue', 'red']
    return array[Math.round(Math.random())]
}

const colour = getColour()
document.body.style.border = `5px solid ${colour}`