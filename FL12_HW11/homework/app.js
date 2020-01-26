const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function createI(className, nameOfI) {
  this.i = document.createElement('i');
  this.i.classList.add('material-icons', className);
  this.i.appendChild(document.createTextNode(nameOfI));
  return this.i;
}

function createLi(element) {
  this.li = document.createElement('li');
  this.li.textContent = element ? element.title : 'Folder is empty';
  return this.li;
}

function addClass(element) {
  if (element.folder) {
    this.li.classList.add('folder');
  }
}

function createTree(data) {
  let ul = document.createElement('ul');

  for (let item of data) {
    let ul1 = document.createElement('ul');

    ul.append(createI('orange', 'folder'), createLi(item));
    addClass(item);

    for (let elem of item.children) {
      elem.folder ? createI('orange', 'folder') : createI('gray', 'insert_drive_file');
      ul1.append(this.i, createLi(elem));

      addClass(elem);
      ul.append(ul1);

      if (elem.children === false || elem.children === null) {
        let ul2 = document.createElement('ul');
        
        createLi().classList.add('li-empty');
        ul2.append(this.li);
        ul1.append(ul2);
      }
      
      if (elem.children) {
        let ul2 = document.createElement('ul');

        for (let el of elem.children) {
          el.folder ? createI('orange', 'folder') : createI('gray', 'insert_drive_file');
          ul2.append(this.i, createLi(el));
          addClass(el);
          ul1.append(ul2);
        
          if (el.children === false || el.children === null) {
            let ul3 = document.createElement('ul'); 

            createLi().classList.add('li-empty');
            ul3.append(this.li);
            ul2.append(ul3);
            ul1.append(ul2);
          }
        }
      }
    }
  }
  rootNode.append(ul);
}

createTree(structure);

let el = document.getElementsByClassName('folder');

for (let i = 0; i < el.length; i++) {
  el[i].classList.add('unclicked');
  el[i].onclick = function() {
    el[i].classList.toggle('clicked');
    el[i].classList.toggle('unclicked');

    if (el[i].hasAttribute('class', 'clicked')) {
      el[i].nextSibling.style.display = 'block';
    }
  }
  
  el[i].ondblclick = function() {
    if (el[i].hasAttribute('class', 'unclicked')) {
      el[i].nextSibling.style.display = 'none';
    }
  }

  if (el[i].hasAttribute('class', 'unclicked')) {
    el[i].nextSibling.style.display = 'none';
  }
}