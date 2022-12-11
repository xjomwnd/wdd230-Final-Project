const member = document.querySelector('.memberName');
if (member) {
    member.textContent = `${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`;
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName'); }

const emailMember = document.querySelector('.emailConfirmation');
if (emailMember) {
    emailMember.textContent = localStorage.getItem('emailM');
    localStorage.removeItem('emailM'); }

const phoneMember = document.querySelector('.phoneMember');
if (phoneMember) {
    phoneMember.textContent = localStorage.getItem('phoneM');
    localStorage.removeItem('phoneM'); }

// Directory
const displayDirectory = (dataDirectory) => {
    dataDirectory.companies.forEach ( 
        company => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h4');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let a = document.createElement('a');
        let link = document.createTextNode(company.URL);
        a.appendChild(link);
        a.href = company.URL;
        a.target = '_blank';
        name.textContent = company.name;
        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `Photo of ${company.name}`);
        address.textContent = company.address;
        phoneNumber.textContent = company.phoneNumber;
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(a);
        const cards = document.querySelector('.gridArticle');
        if (cards) { cards.appendChild(card); }
      }
    )
  }

// Spotlight
function shuffleCompanies(companies) {
  let currentIndex = companies.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = companies[currentIndex];
    companies[currentIndex] = companies[randomIndex];
    companies[randomIndex] = temporaryValue;
  } return companies;
}

function displaySpotlight(company,numberSpotlight) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let a = document.createElement('a');
    let link = document.createTextNode('WebSite');
    a.appendChild(link);
    a.href = company.URL;
    a.target = '_blank';
    logo.setAttribute('src', company.image);
    logo.setAttribute('alt', `Photo of ${company.name}`);
    logo.setAttribute('loading', 'lazy');
    address.textContent = company.address;
    phoneNumber.textContent = company.phoneNumber;
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(a);
    document.querySelector(`.spotlight${numberSpotlight}`).appendChild(card);}

const shuffleSpotlight = (dataSpotlight) => {
  const filterCompanies = dataSpotlight.companies.filter (( company ) => 
        company.membershipLevel == 1 || company.membershipLevel == 2);
        let filterCompaniesShuffle = shuffleCompanies(filterCompanies);
        for (let i=0; i<3; i++) {
          if (filterCompaniesShuffle[i]) {
            displaySpotlight(filterCompaniesShuffle[i], i+1);
          }    
        }
}
        
async function getDirectory() {
    const response = await fetch("./json/data.json");
    if (response.ok) {
      let data = await response.json();
      if (dir) {displayDirectory(data); }
      if (spotL) {shuffleSpotlight(data); } 
    }
  }
  const dir = document.querySelector('.menuDirectory');
  const spotL = document.querySelector('.spotlight');
  if (dir || spotL) { getDirectory(); }

// GridList
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

if (gridbutton || listbutton) {
  const display = document.querySelector(".gridArticle");
  gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  });
  listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
  });
}
/*////////////////////////////////////////////////////////////////////////////////////////*/