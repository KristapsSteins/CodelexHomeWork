import axios from 'axios';

type Countries = {
    name: string
    capital: string
    region: string
    currency: {
        code: string
        name?: string
        symbol: string
    }
    element?: HTMLElement
}

const tableList = document.querySelector<HTMLTableElement>('#body');

let country: Countries[] = [];
const table = tableList;

function createTable(countriesArray: Countries[]) {
  country = countriesArray.map((countries) => {
    // create the table row element
    const line = document.createElement('tr');
    // append the data to the row
    line.innerHTML += `
              <td>${countries.name}</td>
              <td>${countries.capital}</td>
              <td>${countries.region}</td>
              <td>${countries.currency.code}</td>
          `;
    // append the row to the table
    table.appendChild(line);
    // return the object with an added 'element' property
    return {
      name: countries.name,
      capital: countries.capital,
      region: countries.region,
      currency: countries.currency,
      element: line,
    };
  });
}

const startName = 'name';
const startOrder = 'asc';
let limit = 20;

async function updateTable(count: number, name: string, order: string) {
  try {
    const res = await axios.get(`http://localhost:3004/countries?_limit=${count}&_sort=${name}&_order=${order}`);
    table.innerHTML = '';
    const countriesArray = res.data;
    createTable(countriesArray);
  } catch (error) {
    console.error(error);
  }
}

updateTable(limit, startName, startOrder);

function search(searchTerm: string, type: string) {
  const searchTermLower = searchTerm.toLowerCase();
  country.forEach((counts) => {
    let isVisible;
    if (type === 'name') {
      isVisible = counts.name.toLowerCase().includes(searchTermLower);
    } else if (type === 'capital') {
      isVisible = counts.capital.toLowerCase().includes(searchTermLower);
    } else if (type === 'region') {
      isVisible = counts.region.toLowerCase().includes(searchTermLower);
    } else if (type === 'currency') {
      isVisible = counts.currency.code.toLowerCase().includes(searchTermLower);
    }
    counts.element.classList.toggle('hide', !isVisible);
  });
}

function searchKey(e: Event, searchType: string) {
  const targetElement = e.target as HTMLInputElement;
  const searchTerm = targetElement.value;
  search(searchTerm, searchType);
}

const searchCountry = document.querySelector('.js-country-search');
searchCountry.addEventListener('input', (e) => {
  searchKey(e, 'name');
});

const searchCapital = document.querySelector('.js-capital-search');
searchCapital.addEventListener('input', (e) => {
  searchKey(e, 'capital');
});

const searchCRegion = document.querySelector('.js-region-search');
searchCRegion.addEventListener('input', (e) => {
  searchKey(e, 'region');
});

const searchCurrency = document.querySelector('.js-currency-search');
searchCurrency.addEventListener('input', (e) => {
  searchKey(e, 'currency');
});

let isAscending = true;
let currentArrow = '&#x25b4;';

const tableName = document.querySelector('.js-th-name');
tableName.addEventListener('click', () => {
  const nameOfCountry = 'name';
  let sortOrder = 'asc';
  if (!isAscending) {
    sortOrder = 'desc';
    currentArrow = '&#x25be;';
  } else {
    currentArrow = '&#x25b4;';
  }
  updateTable(limit, nameOfCountry, sortOrder);
  isAscending = !isAscending;
  tableName.innerHTML = `Name ${currentArrow}`;
});

const tableCapital = document.querySelector('.js-th-capital');
tableCapital.addEventListener('click', () => {
  const capitalOfCountry = 'capital';
  let sortOrder = 'asc';
  if (!isAscending) {
    sortOrder = 'desc';
    currentArrow = '&#x25be;';
  } else {
    currentArrow = '&#x25b4;';
  }
  updateTable(limit, capitalOfCountry, sortOrder);
  isAscending = !isAscending;
  tableCapital.innerHTML = `Capital${currentArrow}`;
});

const tableRegion = document.querySelector('.js-th-region');
tableRegion.addEventListener('click', () => {
  const regionOfCountry = 'region';
  let sortOrder = 'asc';
  if (!isAscending) {
    sortOrder = 'desc';
    currentArrow = '&#x25be;';
  } else {
    currentArrow = '&#x25b4;';
  }
  updateTable(limit, regionOfCountry, sortOrder);
  isAscending = !isAscending;
  tableRegion.innerHTML = `Region${currentArrow}`;
});

const tableCurrency = document.querySelector('.js-th-currency');
tableCurrency.addEventListener('click', () => {
  const codeOfCurrency = 'currency.code';
  let sortOrder = 'asc';
  if (!isAscending) {
    sortOrder = 'desc';
    currentArrow = '&#x25be;';
  } else {
    currentArrow = '&#x25b4;';
  }
  updateTable(limit, codeOfCurrency, sortOrder);
  isAscending = !isAscending;
  tableCurrency.innerHTML = `Currency${currentArrow}`;
});

const button = document.querySelector('.js-btn');
button.addEventListener('click', () => {
  limit += 20;
  updateTable(limit, 'currency.code', isAscending ? 'asc' : 'desc');
});
