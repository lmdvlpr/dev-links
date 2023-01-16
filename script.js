// Update year on footer
document.getElementById('fullYear').innerHTML = new Date().getFullYear()

function toggleMode() {
  const html = document.documentElement

  /*  if (html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */

  html.classList.toggle('light')
}
