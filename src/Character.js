const positionsByPoints = [
  { x: 335, y: 405 },
  { x: 262, y: 449 },
  { x: 175, y: 470 },
  { x: 97, y: 437 },
  { x: 110, y: 375 },
];

export class Character {
  characterContainer;

  constructor() {
    this.characterContainer = document.createElement("div");

    this.characterContainer.classList.add("character-container");
  }

  setPosition(pointNumber) {
    this.characterContainer.style.left = 0;
    this.characterContainer.style.top = 0;

    this.characterContainer.style.transform =
      "translate(" +
      positionsByPoints[pointNumber].x +
      "px," +
      positionsByPoints[pointNumber].y +
      "px)";
  }

  setStartPosition() {
    this.characterContainer.style.transform =
      "translate(" + 430 + "px," + 440 + "px)";
  }

  getView() {
    return this.characterContainer;
  }
}
