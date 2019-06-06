const removeSelected = links => {
  for(let i = 0; i < links.length; i++){
    links.item(i).classList.remove('selected');
  }
};

const addSelected = link => {
  link.classList.add('selected');
};

const updateSelected = (links, link) => {
  removeSelected(links);
  addSelected(link);
};

const links = document.getElementsByClassName('nav-link');
for(let i = 0; i < links.length; i++){
  links[i].addEventListener('click', () => updateSelected(links, links[i]))
}
