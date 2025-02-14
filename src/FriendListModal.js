import { data } from "./data.js";

export class FriendListModal {
  modalContainer;

  constructor() {
    this.modalContainer = document.createElement("div");

    this.modalContainer.classList.add("modal-container");

    this.modalContainer.innerHTML = this.createModal();

    this.addListeners();
  }

  hideModal() {
    this.modalContainer.remove();
  }

  createModal() {
    return `
        <div class="modal">
            <div class="modal-title">Рейтинг игроков</div>
            <div class="close-button"></div>
            <table class="modal-table">
                <thead class="table-header">
                    <tr class="row header-row">
                        <th class="cell">Место</th>
                        <th class="cell cell-large">Имя Фамилия</th>
                        <th class="cell">Опыт</th>
                    </tr>
                </thead>
                <tbody class="table-body">
                    ${data.rating
                      .sort((a, b) => a.points - b.points)
                      .map((person, i) => {
                        return `
                            <tr class="row">
                                <th class="cell"><span class"badge"><span>${
                                  i + 1
                                }</th>
                                <td class="cell cell-large">
                                    <span class="badge ${
                                      data.friends.findIndex(
                                        (friend) => person.id === friend.id
                                      ) !== -1
                                        ? "badge-green"
                                        : ""
                                    }"></span>
                                    ${`${person.name} ${person.lastName}`}
                                </td>
                                <td class="cell">${person.points}</td>
                            </tr>
                        `;
                      })
                      .join(" ")}
                </tbody>
            </table>
        </div>
    `;
  }

  addListeners() {
    const closeButton = this.modalContainer.querySelector(".close-button");

    closeButton?.addEventListener("click", () => {
      this.hideModal();
    });
  }

  getView() {
    return this.modalContainer;
  }
}
