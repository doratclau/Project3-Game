class Room {
  constructor(name) {
    this._name = name;
    this._description = "";
    this._linkedRooms = {};
    this._linkedItems = {};
    this._roomItem1 = "";
    this._roomItem2 = "";
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get roomItem1() {
    return this._roomItem1
  }

  get roomItem2() {
    return this._roomItem2
  }

  set name(value) {
    if (value.length < 4) {
      console.error("Room name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      console.error("Room description is too short.");
      return;
    }
    this._description = value;
  }

  set roomItem1(value) {
    this._roomItem1 = value;
  }

  set roomItem2(value) {
    this._roomItem2 = value;
  }

  //a method to produce friendly room description

  describe() {
    return "Looking around the " + this._name + " you can see " + this._description;

  }

  /**
   * a method to add rooms to link rooms to this one
   * it does this by adding them to _linkedRooms
   */
  linkRoom(direction, roomToLink) {
    this._linkedRooms[direction] = roomToLink;
  }
  
   //produce description of linked rooms
  getDetails() {
    const entries = Object.entries(this._linkedRooms);
    let details = []
    for (const [direction, room] of entries) {
      let text = " The " + room._name + " is to the " + direction;
      details.push(text);
    }
    return details;
  }

  
  //method to move to a new room
  move(direction) {
    if (direction in this._linkedRooms) {
      return this._linkedRooms[direction];
    } else {
      //make better error msg method
      alert("You can't go that way", );
      return this;
    }
  }
}

class roomItem1 {
  constructor(name) {
    this._name = name,
      this._description = "";
        this._hint = "";
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get hint() {
    return this._hint;
  }

  set name(value) {
    if (value.length < 4) {
      console.error("Item name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      console.error("Item decription is too short.");
      return;
    }
    this._description = value;
  }

  set hint(value) {
    if (value.length < 0) {
      console.error("Item decription is too short.");
      return;
    }
    this._hint = value;
  }

  //produce item description

  describe() {
    return "On your right, you have found a " + this._name + ", the " + this._name + " is " + this._description;
  }

  unlock(){
    prompt("Please enter the passcode");
  }

  getHint() {
    return "You found a number: " + this._hint;
  }
}


class roomItem2 {
  constructor(name) {
    this._name = name,
      this._description = "";
    this._message = "";
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get hint() {
    return this._hint;
  }

  set name(value) {
    if (value.length < 4) {
      console.error("Item name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      console.error("Item decription is too short.");
      return;
    }
    this._description = value;
  }

  set hint(value) {
    if (value.length < 0) {
      console.error("Item decription is too short.");
      return;
    }
    this._hint = value;
  }

  //description for the item
  describe() {
    return " On your left, you have also found a " + this._name + ", the " + this._name + " "  + this._description;
  }
//present hints of the item
  getMsg() {
    return this._hint;
  }

}


class Escape extends roomItem2 {
  constructor(name) {
    super(name)
    this._escape = ""
  }

  get escape() {
    return this._escape
  }

  set escape(value) {
    this._escape = value
  }

  msgEscape() {
    return "Congratulations! You opened the " + this._name + " and " + this._escape + " You win!";
  }

}

class Trap extends roomItem2 {
  constructor(name) {
    super(name)
    this._trap = "";
  }

  get trap() {
    return this._trap;
  }

  set trap(value) {
    this._trap = value;
  }

  //add description to trap
  msgTrap() {
    return "Beep beep beep! You opened the " + this._name + ", " + this._trap + " You lose. Game Over.";
  }
}

//create the indiviual room objects and add their descriptions
const Study = new Room("study");
Study.description = "a big room that has been painted in yellow colour. The warm colour makes me feel comfortable when the weather is cold.";
const Bathroom = new Room("bathroom");
Bathroom.description = "a tiled room with a huge bathtub and a smell of ocean breeze.";
const Bedroom = new Room("bedroom");
Bedroom.description = "a large room with the bed is placed beside the window, fresh air keep the room balance for breathing.";
const Hall = new Room("hall");
Hall.description = "a grand entrance hall with a lot of statues around the walls.";



//link the rooms together
Study.linkRoom("north", Bathroom);
Study.linkRoom("west", Hall);
Bathroom.linkRoom("south", Study);
Bathroom.linkRoom("west", Bedroom);
Bedroom.linkRoom("east", Bathroom);
Bedroom.linkRoom("south", Hall);
Hall.linkRoom("north", Bedroom);
Hall.linkRoom("east", Study);



//assign passcode to objects
const Painting = new roomItem1("painting");
Painting.description = "the Starry Night from Vincent van Gogh.";
Painting.hint = "11";

const Photo = new roomItem1("photo");
Photo.description = "a photo of a old man wearing a numbered jersey.";
Photo.hint = "24";

const Vase = new roomItem1 ("vase");
Vase.description = "broken. ";
Vase.hint = "07";

const Mirror = new roomItem1("mirror");
Mirror.description = "moist word written on wet mirror:";
Mirror.hint = "x > y > z ";

//assign item2

const Safe = new roomItem2("safe");
Safe.description = "requires passcode to unlock";
Safe.hint = "6-digits";

const RubberDuck = new roomItem2("rubber duck");
RubberDuck.description = "is floating in the bathtub.";
RubberDuck.hint = "there's nothing on it.";

//assign Escape route

const Trapdoor = new Escape("trapdoor");
Trapdoor.description = "is hidden underneath the desk";
Trapdoor.hint = "It's locked and you need a key."
Trapdoor.escape = "escaped through a secret tunnel."

//assign Trap route

const Door = new Trap("door");
Door.description = "is locked"
Door.hint = "It's locked and you need a key.";
Door.trap = "triggered the alarm and caught by the police."

console.log(Door)


//add items to rooms
Study.roomItem1 = Painting;
Study.roomItem2 = Safe;
Bathroom.roomItem1 = Mirror;
Bathroom.roomItem2 = RubberDuck;
Bedroom.roomItem1 = Painting;
Bedroom.roomItem2 = Trapdoor;
Hall.roomItem1 = Vase;
Hall.roomItem2 = Door;



 //display information about the current room

 function displayRoomInfo(room) {
  let occupantMsg = "";
  let itemMsg = "";
  if (room.roomItem1 === "") {
    if (room.roomItem2 == "") {
      occupantMsg = "";
    } else {
      occupantMsg = room.roomItem2.describe();
    }
  }  else {
    occupantMsg = room.roomItem1.describe() + room.roomItem2.describe() + ".";
  }

  textContent = "<p>" + room.describe() + "</p>" + "<p>" + occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";

  document.getElementById("textarea").innerHTML = textContent;
  document.getElementById("buttonarea").innerHTML = '><input type="text" placeholder="help" id="usertext" />';
  document.getElementById("usertext").focus();
}

function RefreshPage()
          {
            window.location = window.location.href;
          };

  function commandHandler(command, roomItem1, roomItem2) {
    switch (command) {
      case "unlock":
      //set password for the safe  
      let correctPw = "241107";
      //set number of attempts
        let maxAttempt = 3;
        let counter = 0;
        let guessed = false;
        //give number of attempts
        while (!guessed && counter < 3) {
          let safePw = prompt("Please enter the passcode:");
          if (safePw === correctPw) {
            alert ("Congratulations you unlocked the safe and found the key. \nUse command 'open' to unlock the locked.\n e.g. open door");
            guessed = true;
            displayRoomInfo(currentRoom);
          } else {
            alert ("Incorrect password. You have " + `${maxAttempt - counter -1}` + " attempt(s) left.");
          }
          counter++;
        } 
        if (counter == 3) {
          alert ("You triggered the alarm and caught by the police.\nYou lose.\nGame Over.")
          RefreshPage();
        }
        break;
      case "right":
        msg = roomItem1.getHint();
        alert(msg)
        displayRoomInfo(currentRoom);
        break;
      case "left":
        msg = roomItem2.getMsg();
        alert(msg)
        displayRoomInfo(currentRoom);
        break;
      case "open trapdoor":
        msg = roomItem2.msgEscape();
        alert(msg)
        break;
      case "open door":
        msg = roomItem2.msgTrap();
        alert(msg);
        RefreshPage();
        break;
      case "help":
        msg = "Command:\nTo navigate between rooms, input north, east, south, west.\nTo take a look at the object, input left, right.\nTo unlock the safe, input unlock."
        alert(msg)
        displayRoomInfo(currentRoom);
        break;
      default:
        alert("not there yet")
        break;
        //blank command box after commands 
    }
  }

  //inital game set up then handle commands from the user.


  function startGame() {
    //set and display start room
    currentRoom = Hall;
    displayRoomInfo(currentRoom);

    //handle commands
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        let command = document.getElementById("usertext").value.toLowerCase();
        const directions = ["north", "south", "east", "west"];
        const commands = ["unlock", "right", "left", "open trapdoor", "open door", "help"];
        if (directions.includes(command)) {
          currentRoom = currentRoom.move(command);
          displayRoomInfo(currentRoom);
        } else if (commands.includes(command)) {
          commandHandler(command, currentRoom.roomItem1, currentRoom.roomItem2)
        } else {
          document.getElementById("usertext").value = ""
          //change to text message for short time and then reshow
          alert("that is not a valid command please try again")
        }
      }
    });


  }

