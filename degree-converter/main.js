document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', (e) => {
  document.getElementById('output').style.visibility = 'visible';
  const celci = e.target.value;
  document.getElementById('kelvinOutput').innerHTML = (5 / 5) * celci + 273.15;
  document.getElementById('fahOutput').innerHTML = (9 / 5) * celci + 32;
  document.getElementById('reamOutput').innerHTML = (4 / 5) * celci;
});
