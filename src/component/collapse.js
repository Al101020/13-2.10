import './collapse.css';

const titleDz = document.querySelector('#titleDz');// console.log(titleDz);

function collapse() {
  const divCollapse = document.createElement('div');
  divCollapse.id = 'divCollapse';
  divCollapse.innerHTML = '<button type="button" id="btnCollapse">Collapse</button>';
  titleDz.after(divCollapse);

  const btnCollapse = document.querySelector('#btnCollapse'); // console.log(btnCollapse);

  const divTextCollapse = document.createElement('div');
  divTextCollapse.id = 'divTextCollapse';
  divTextCollapse.classList.add('divTextCollapse');

  const span1 = document.createElement('span');
  span1.classList.add('span1');
  span1.textContent = 'Anim pariatur cliche reprehenderit, enim eiusmod high life\n';

  const span2 = document.createElement('span');
  span2.classList.add('span2');
  span2.textContent = 'accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,\n';

  const span3 = document.createElement('span');
  span3.classList.add('span3');
  span3.textContent = 'craft beer labore wes anderson cred nesciunt sapiente ea proident.';

  divTextCollapse.appendChild(span1);
  divTextCollapse.appendChild(span2);
  divTextCollapse.appendChild(span3);

  btnCollapse.after(divTextCollapse);

  const copy = document.createElement('div');
  copy.classList.add('copy');
  copy.textContent = 'copy';
  divTextCollapse.after(copy);

  btnCollapse.addEventListener('click', () => {
    if (copy.classList.contains('collapseCopy')) { // console.log('есть класс collapseCopy');
      copy.classList.remove('collapseCopy');// удаляем класс collapseCopy
      copy.classList.add('noCollapseCopy');// добовляем класс noCollapseCopy
    } else if (copy.classList.contains('noCollapseCopy')) { // console.log('есть класс noCollapseCopy');
      copy.classList.remove('noCollapseCopy');// удаляем класс noCollapseCopy
      copy.classList.add('collapseCopy');// добовляем класс collapseCopy
    } else { // console.log('НЕТ классов ни collapseCopy, ни noCollapseCopy');
      copy.classList.add('collapseCopy');
    }
  });
}

collapse();
