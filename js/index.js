const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('#btn')

button.addEventListener('click', add)

form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Dia já incluso')
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  nlwSetup.data()
}


// const data = {
//   run:['01-01', '01-02', '01-06'],
//   water: ['01-03'],
//   gym: [],
//   sleep: [],
//   study: []

// }

// nlwSetup.setData(data)
// nlwSetup.load()


