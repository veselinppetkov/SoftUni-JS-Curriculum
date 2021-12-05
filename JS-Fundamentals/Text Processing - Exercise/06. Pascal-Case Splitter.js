function pascal(string) {
  let result = string[0];
  let lower = string.toLocaleLowerCase();

  for (let i = 1; i < string.length; i++) {
    if (string[i] != lower[i]) {
      result += `, `;
    }
    result += string[i];
  }
  console.log(result);
}

pascal("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascal("HoldTheDoor");
pascal("ThisIsSoAnnoyingToDo");
