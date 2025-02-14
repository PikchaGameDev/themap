import { Character } from "./Character.js";
import { FriendListModal } from "./FriendListModal.js";
import { FriendSlider } from "./FriendSlider.js";

export class Game {
  map;

  chatButton;
  messageButton;
  placesButton;
  universityButton;

  mainCharacter;

  pointNumber = 0;

  constructor() {
    this.map = document.createElement("div");

    this.map.classList.add("map");
  }

  initGameObjects() {
    this.map.insertAdjacentElement("beforeEnd", this.createFriendsCarousel());
    this.map.insertAdjacentElement("beforeEnd", this.createButtonsGroup());
    this.map.insertAdjacentElement("beforeEnd", this.createMainCharacter());
  }

  createMainCharacter() {
    this.mainCharacter = new Character();

    return this.mainCharacter.getView();
  }

  createFriendsCarousel() {
    const slider = new FriendSlider();

    return slider.getView();
  }

  createButtonsGroup() {
    const buttonsContainer = document.createElement("div");

    buttonsContainer.classList.add("buttons-container");

    this.chatButton = document.createElement("div");
    this.chatButton.classList.add("simple-button", "chat");

    this.messageButton = document.createElement("div");
    this.messageButton.classList.add("simple-button", "message");

    this.placesButton = document.createElement("div");
    this.placesButton.classList.add("simple-button", "places");

    this.universityButton = document.createElement("div");
    this.universityButton.classList.add("wide-button", "university");

    buttonsContainer.insertAdjacentElement("beforeEnd", this.chatButton);
    buttonsContainer.insertAdjacentElement("beforeEnd", this.universityButton);
    buttonsContainer.insertAdjacentElement("beforeEnd", this.messageButton);
    buttonsContainer.insertAdjacentElement("beforeEnd", this.placesButton);

    return buttonsContainer;
  }

  handlePlacesButtonClick() {
    const friendListModal = new FriendListModal();

    this.map.append(friendListModal.getView());
  }

  handleUniversityButtonClick() {
    if (this.pointNumber === 5) {
      this.pointNumber = 0;

      this.mainCharacter.setStartPosition();

      return;
    }

    this.mainCharacter.setPosition(this.pointNumber);

    this.pointNumber++;
  }

  addListeners() {
    this.chatButton.addEventListener("click", () => {
      console.log("click chat");
    });

    this.messageButton.addEventListener("click", () => {
      console.log("click message");
    });

    this.placesButton.addEventListener(
      "click",
      this.handlePlacesButtonClick.bind(this)
    );

    this.universityButton.addEventListener(
      "click",
      this.handleUniversityButtonClick.bind(this)
    );
  }

  getView() {
    return this.map;
  }
}
