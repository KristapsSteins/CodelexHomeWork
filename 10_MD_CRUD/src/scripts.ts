import axios from 'axios';

type Animal = [{
  id: number;
  title: string;
  description: string;
}]

const cardContainer = document.querySelector<HTMLDivElement>('#card-container');
const addButtonBox = document.querySelector<HTMLDivElement>('#addButtonBox');
const addButton = document.querySelector<HTMLButtonElement>('#addButton');

axios.get<Animal>('http://localhost:3004/animals').then(({ data }) => {
  makeCards(data, cardContainer);
});

addButton.addEventListener('click', () => {
  addButton.style.display = 'none';
  // create form element
  const form = document.createElement('form');
  const inputBox = document.createElement('div');
  inputBox.classList.add('inputBox');
  const titleLabel = document.createElement('label');
  titleLabel.innerHTML = 'Title:';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('placeholder', 'Title');
  titleInput.classList.add('form-control');

  // create description text area
  const descriptionLabel = document.createElement('label');
  descriptionLabel.innerHTML = 'Description:';
  const descriptionTextArea = document.createElement('textarea');
  descriptionTextArea.setAttribute('placeholder', 'Description');
  descriptionTextArea.classList.add('form-control');

  // create submit button
  const submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit';
  submitButton.classList.add('btn', 'btn-primary');

  // append all elements
  inputBox.appendChild(titleLabel);
  inputBox.appendChild(titleInput);
  inputBox.appendChild(descriptionLabel);
  inputBox.appendChild(descriptionTextArea);
  inputBox.appendChild(submitButton);
  form.appendChild(inputBox);
  addButtonBox.appendChild(form);

  // add event listener to form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const description = descriptionTextArea.value;
    if (!title || !description) {
      alert('Mosk ieraksti kko');
    } else {
      axios.post('http://localhost:3004/animals', { title, description })
        .then(({ data }) => {
          makeCards(data, cardContainer);
        });
      form.remove();
    }
  });
});

function makeCards(animalArray: Animal, cardContainers: HTMLDivElement) {
  animalArray.forEach((animal) => {
    const card = document.createElement('div');
    card.id = `animal-card-${animal.id}`;
    card.classList.add('card__animal');

    const link = document.createElement('a');
    link.href = '#';

    const img = document.createElement('img');
    img.src = 'https://icon-library.com/images/image-loading-icon/image-loading-icon-12.jpg';
    link.appendChild(img);

    const title = document.createElement('h5');
    title.innerHTML = `${animal.title}`;
    link.appendChild(title);

    const description = document.createElement('p');
    description.innerHTML = `${animal.description}`;
    description.classList.add('paragraph');
    link.appendChild(description);

    const buttonBox = document.createElement('div');
    buttonBox.classList.add('button');
    link.appendChild(buttonBox);

    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.classList.add('button__btn');
    buttonBox.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('button__btn');
    buttonBox.appendChild(deleteButton);

    card.appendChild(link);
    cardContainers.appendChild(card);

    deleteButton.addEventListener('click', () => {
      axios.delete(`http://localhost:3004/animals/${animal.id}`)
        .then(() => {
          card.remove();
        });
    });

    editButton.addEventListener('click', () => {
      const form = document.createElement('form');
      const inputBox = document.createElement('div');
      inputBox.classList.add('inputBox');
      const titleLabel = document.createElement('label');
      titleLabel.innerHTML = 'Title:';
      const titleInput = document.createElement('input');
      titleInput.setAttribute('type', 'text');
      titleInput.setAttribute('placeholder', 'Title');
      titleInput.value = animal.title;
      const descriptionLabel = document.createElement('label');
      descriptionLabel.innerHTML = 'Description:';
      const descriptionInput = document.createElement('textarea');
      descriptionInput.setAttribute('type', 'text');
      descriptionInput.setAttribute('placeholder', 'Description');
      descriptionInput.value = animal.description;
      const submitButton = document.createElement('button');
      submitButton.classList.add('button__btn');
      submitButton.innerHTML = 'Submit';
      form.appendChild(inputBox);
      inputBox.appendChild(titleLabel);
      inputBox.appendChild(titleInput);
      inputBox.appendChild(descriptionLabel);
      inputBox.appendChild(descriptionInput);
      inputBox.appendChild(submitButton);
      card.appendChild(form);
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const titleNew = titleInput.value;
        const descriptionNew = descriptionInput.value;
        if (!titleNew || !descriptionNew) {
          alert('Dunduks esi, ko tu dari?');
        } else {
          axios.put(`http://localhost:3004/animals/${animal.id}`, { title: titleNew, description: descriptionNew })
            .then(() => {
              title.innerHTML = titleNew;
              description.innerHTML = descriptionNew;
              form.remove();
            });
        }
      });
    });
  });
}
