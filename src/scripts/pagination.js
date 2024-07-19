import ticketTemplate from '../templates/tickets.hbs';
import TicketsApi from './ticketsAPI.js';

async function CardsPagination() {
  let ticketsData = await TicketsApi.getRandom();
  ticketsData = ticketsData._embedded.events;
  let currentPage = 1;
  let rows = 20;

  function displayList(arrData, rowPerPage, page) {
    const containerPost = document.querySelector('#cardsContainer');
    containerPost.innerHTML = '';
    page--;

    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end);

    const html = ticketTemplate({
      ticket: paginatedData,
    });
    containerPost.innerHTML = html;
  }

  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector('.pagination');
    paginationEl.innerHTML = '';

    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl);
    }
    paginationEl.appendChild(ulEl);
  }

  function displayPaginationBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item');
    liEl.innerText = page;

    if (currentPage === page) liEl.classList.add('pagination__item--active');

    liEl.addEventListener('click', () => {
      currentPage = page;
      displayList(ticketsData, rows, currentPage);

      const currentItemLi = document.querySelector(
        'li.pagination__item--active'
      );
      if (currentItemLi) {
        currentItemLi.classList.remove('pagination__item--active');
      }

      liEl.classList.add('pagination__item--active');
    });

    return liEl;
  }

  displayList(ticketsData, rows, currentPage);
  displayPagination(ticketsData, rows);
}

CardsPagination();
