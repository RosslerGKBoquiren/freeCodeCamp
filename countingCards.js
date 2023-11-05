// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

let count = 0;

function cc(card) {
    switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
        break;
    case 7:
    case 8:
    case 9:
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        count--;
        break;
    }

    if (count > 0) {
        return count + " Bet";
    } else if (count <= 0) {
        return count + " Hold";
    } else {
        return "Change Me";
    } 

// Your function should return a value for count and the text (Bet or Hold) with one space character between them.
// Cards Sequence 2, 3, 4, 5, 6 should return the string 5 Bet
// Cards Sequence 7, 8, 9 should return the string 0 Hold
// Cards Sequence 10, J, Q, K, A should return the string -5 Hold
// Cards Sequence 3, 7, Q, 8, A should return the string -1 Hold
// Cards Sequence 2, J, 9, 2, 7 should return the string 1 Bet
// Cards Sequence 2, 2, 10 should return the string 1 Bet
// Cards Sequence 3, 2, A, 10, K should return the string -1 Hold