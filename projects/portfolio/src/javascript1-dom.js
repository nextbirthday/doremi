window.addEventListener('load', function () {
  const txtX = document.getElementById('txt-x')
  const txtY = document.getElementById('txt-y')
  const txtSum = document.getElementById('txt-sum')
  const btnAdd = document.getElementById('btn-add')

  btnAdd.onclick = () => {
    const x = parseInt(txtX.value)
    const y = parseInt(txtY.value)

    console.log(x + y)

    txtSum.value = x + y
  }
})
