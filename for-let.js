const ol = document.querySelector('ol'), n = 4;
for (let f = () => alert(`i: ${i.value}, j: ${j}`), i = { value: 0 }, j = 0; j < n; j++, i.value++) {
    const g = () => alert(`i: ${i.value}, j: ${j}`);
    const li = document.createElement('li');
    const buttonf = document.createElement('button'), buttong = document.createElement('button');
    buttonf.addEventListener('click', f); buttong.addEventListener('click', g);
    buttonf.innerText = 'f()'; buttong.innerText = 'g()';
    li.appendChild(buttonf); li.appendChild(buttong);
    ol.appendChild(li);
}
