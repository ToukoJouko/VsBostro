// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const axios = require("axios");
const cheerio = require("cheerio");

// this method is called when extension is activated
// extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

let outputChannel = vscode.window.createOutputChannel("VsBostro");
outputChannel.show();

function activate(context) {
  // The command has been defined in the package.json file
  // The commandId parameter must match the command field in package.json

  const bistroUrl =
    "https://www.foodandco.fi/modules/json/json/Index?costNumber=0433&language=fi";
  const futuraUrl =
    "https://www.foodandco.fi/modules/json/json/Index?costNumber=041704&language=fi";
  const careliaUrl =
    "https://www.foodandco.fi/modules/json/json/Index?costNumber=0417&language=fi";
  const auraUrl =
    "https://www.foodandco.fi/modules/json/json/Index?costNumber=0413&language=fi";
  const naturaUrl =
    "https://www.foodandco.fi/modules/json/json/Index?costNumber=041702&language=fi";
  const porvariUrl = "https://www.ravintolasulo.fi/lounas-puisto/";

  //BISTRO
  let bistroCommand = vscode.commands.registerCommand(
    "vsbostro-extension.bistroMenu",
    function () {
      // Command goes through some JSON data and picks the important things from the data. Every command works the same way.
      outputChannel.clear();
      axios
        .get(bistroUrl)
        .then((response) => {
          const todaysMenu = response.data.MenusForDays[0].SetMenus;
          const lunchTime = response.data.MenusForDays[0].LunchTime;

          if (todaysMenu.length === 0) {
            outputChannel.append(
              "Ravintola on tänään suljettu, tai ruokaa ei ole saatavilla jostain muusta syystä."
            );
            vscode.window.showInformationMessage(":-(");
          } else {
            outputChannel.append("Bistro on tänään auki " + lunchTime);
            outputChannel.append(
              "\n-------------------------------------------------------------------------\n"
            );
            todaysMenu.map((food) => {
              outputChannel.append(food.Name + ":\n\n");
              food.Components.map((component) => {
                outputChannel.append(component + "\n");
              });
              outputChannel.append("\n" + food.Price);
              outputChannel.append(
                "\n-------------------------------------------------------------------------\n"
              );
            });
            outputChannel.append(
              "(G) Gluteeniton, (L) Laktoositon, (VL) Vähälaktoosinen, (M) Maidoton, (*) Suomalaisten ravitsemussuositusten mukainen, (Veg) Soveltuu vegaaniruokavalioon, (VS) Sis. tuoretta valkosipulia, (A) Sis. allergeeneja"
            );
            vscode.window.showInformationMessage("SPONSORED BY: Kela🐀");
          }
        })
        .catch((error) => {
          outputChannel.append(
            "Jokin meni vikaan! Voit tarkistaa ravintolan tilanteen seuraavasta linkistä: https://www.foodandco.fi/ravintolat/Ravintolat-kaupungeittain/joensuu/kampusbistro/"
          );
        });
    }
  );

  //FUTURA
  let futuraCommand = vscode.commands.registerCommand(
    "vsbostro-extension.futuraMenu",
    function () {
      outputChannel.clear();
      axios
        .get(futuraUrl)
        .then((response) => {
          const todaysMenu = response.data.MenusForDays[0].SetMenus;
          const lunchTime = response.data.MenusForDays[0].LunchTime;

          if (todaysMenu.length === 0) {
            outputChannel.append(
              "Ravintola on tänään suljettu, tai ruokaa ei ole saatavilla jostain muusta syystä."
            );
            vscode.window.showInformationMessage(":-(");
          } else {
            outputChannel.append(
              "Futuran ravintola on tänään auki " + lunchTime
            );
            outputChannel.append(
              "\n-------------------------------------------------------------------------\n"
            );
            todaysMenu.map((food) => {
              outputChannel.append(food.Name.toUpperCase() + ":\n\n");
              food.Components.map((component) => {
                outputChannel.append(component + "\n");
              });
              outputChannel.append("\n" + food.Price);
              outputChannel.append(
                "\n-------------------------------------------------------------------------\n"
              );
            });
            outputChannel.append(
              "(G) Gluteeniton, (L) Laktoositon, (VL) Vähälaktoosinen, (M) Maidoton, (*) Suomalaisten ravitsemussuositusten mukainen, (Veg) Soveltuu vegaaniruokavalioon, (VS) Sis. tuoretta valkosipulia, (A) Sis. allergeeneja"
            );
            vscode.window.showInformationMessage("SPONSORED BY: Kela🐀");
          }
        })
        .catch((error) => {
          outputChannel.append(
            "Jokin meni vikaan! Voit tarkistaa ravintolan tilanteen seuraavasta linkistä: https://www.foodandco.fi/ravintolat/Ravintolat-kaupungeittain/joensuu/futura/"
          );
        });
    }
  );

  //CARELIA
  let careliaCommand = vscode.commands.registerCommand(
    "vsbostro-extension.careliaMenu",
    function () {
      outputChannel.clear();
      axios
        .get(careliaUrl)
        .then((response) => {
          const todaysMenu = response.data.MenusForDays[0].SetMenus;
          const lunchTime = response.data.MenusForDays[0].LunchTime;

          if (todaysMenu.length === 0) {
            outputChannel.append(
              "Ravintola on tänään suljettu, tai ruokaa ei ole saatavilla jostain muusta syystä."
            );
            vscode.window.showInformationMessage(":-(");
          } else {
            outputChannel.append(
              "Carelian ravintola on tänään auki " + lunchTime
            );
            outputChannel.append(
              "\n-------------------------------------------------------------------------\n"
            );
            todaysMenu.map((food) => {
              outputChannel.append(food.Name.toUpperCase() + ":\n\n");
              food.Components.map((component) => {
                outputChannel.append(component + "\n");
              });
              outputChannel.append("\n" + food.Price);
              outputChannel.append(
                "\n-------------------------------------------------------------------------\n"
              );
            });
            outputChannel.append(
              "(G) Gluteeniton, (L) Laktoositon, (VL) Vähälaktoosinen, (M) Maidoton, (*) Suomalaisten ravitsemussuositusten mukainen, (Veg) Soveltuu vegaaniruokavalioon, (VS) Sis. tuoretta valkosipulia, (A) Sis. allergeeneja"
            );

            vscode.window.showInformationMessage("SPONSORED BY: Kela🐀");
          }
        })
        .catch((error) => {
          outputChannel.append(
            "Jokin meni vikaan! Voit tarkistaa ravintolan tilanteen seuraavasta linkistä: https://www.foodandco.fi/ravintolat/Ravintolat-kaupungeittain/joensuu/opiskelijaravintola-carelia/"
          );
        });
    }
  );

  //AURA
  let auraCommand = vscode.commands.registerCommand(
    "vsbostro-extension.auraMenu",
    function () {
      outputChannel.clear();
      axios
        .get(auraUrl)
        .then((response) => {
          const todaysMenu = response.data.MenusForDays[0].SetMenus;
          const lunchTime = response.data.MenusForDays[0].LunchTime;

          if (todaysMenu.length === 0) {
            outputChannel.append(
              "Ravintola on tänään suljettu, tai ruokaa ei ole saatavilla jostain muusta syystä."
            );
            vscode.window.showInformationMessage(":-(");
          } else {
            outputChannel.append("Aura on tänään auki " + lunchTime);
            outputChannel.append(
              "\n-------------------------------------------------------------------------\n"
            );
            todaysMenu.map((food) => {
              outputChannel.append(food.Name.toUpperCase() + ":\n\n");
              food.Components.map((component) => {
                outputChannel.append(component + "\n");
              });
              outputChannel.append("\n" + food.Price);
              outputChannel.append(
                "\n-------------------------------------------------------------------------\n"
              );
            });
            outputChannel.append(
              "(G) Gluteeniton, (L) Laktoositon, (VL) Vähälaktoosinen, (M) Maidoton, (*) Suomalaisten ravitsemussuositusten mukainen, (Veg) Soveltuu vegaaniruokavalioon, (VS) Sis. tuoretta valkosipulia, (A) Sis. allergeeneja"
            );
            vscode.window.showInformationMessage("SPONSORED BY: Kela🐀");
          }
        })
        .catch((error) => {
          outputChannel.append(
            "Jokin meni vikaan! Voit tarkistaa ravintolan tilanteen seuraavasta linkistä: https://www.foodandco.fi/ravintolat/Ravintolat-kaupungeittain/joensuu/aura/"
          );
        });
    }
  );

  //NATURA
  let naturaCommand = vscode.commands.registerCommand(
    "vsbostro-extension.naturaMenu",
    function () {
      outputChannel.clear();
      axios
        .get(naturaUrl)
        .then((response) => {
          const todaysMenu = response.data.MenusForDays[0].SetMenus;
          const lunchTime = response.data.MenusForDays[0].LunchTime;

          if (todaysMenu.length === 0) {
            outputChannel.append(
              "Ravintola on tänään suljettu, tai ruokaa ei ole saatavilla jostain muusta syystä."
            );
            vscode.window.showInformationMessage(":-(");
          } else {
            outputChannel.append(
              "Naturan ranvintola on tänään auki " + lunchTime
            );
            outputChannel.append(
              "\n-------------------------------------------------------------------------\n"
            );
            todaysMenu.map((food) => {
              if (food.Name === null) {
                outputChannel.append("LISÄKSI:\n\n");
              } else {
                outputChannel.append(food.Name.toUpperCase() + ":\n\n");
              }

              food.Components.map((component) => {
                outputChannel.append(component + "\n");
              });

              if (food.Price !== null) {
                outputChannel.append("\n" + food.Price);
              }
              outputChannel.append(
                "\n-------------------------------------------------------------------------\n"
              );
            });
            outputChannel.append(
              "(G) Gluteeniton, (L) Laktoositon, (VL) Vähälaktoosinen, (M) Maidoton, (*) Suomalaisten ravitsemussuositusten mukainen, (Veg) Soveltuu vegaaniruokavalioon, (VS) Sis. tuoretta valkosipulia, (A) Sis. allergeeneja"
            );
            vscode.window.showInformationMessage("SPONSORED BY: Kela🐀");
          }
        })
        .catch((error) => {
          outputChannel.append(
            "Jokin meni vikaan! Voit tarkistaa ravintolan tilanteen seuraavasta linkistä: https://www.foodandco.fi/ravintolat/Ravintolat-kaupungeittain/joensuu/natura/"
          );
        });
    }
  );

  //SULO/PORVARI
  let porvariCommand = vscode.commands.registerCommand(
    "vsbostro-extension.porvariMenu",
    function () {
      outputChannel.clear();
      axios
        .get(porvariUrl)
        .then((response) => {
          const data = response.data;

          const $ = cheerio.load(data);
          const menuItems = $(".post-content p");

          let menuItemList = [];

          menuItems.each((index, item) => {
            const menuItem = $(item).text();
            menuItemList.push(menuItem);
          });
          //const openHours = menuItemList[1];

          //remove some useless info from menuItemList
          menuItemList.splice(0, 4);

          let days = [];

          //get days from the scraped data
          for (let i = 0; i < menuItemList.length; i++) {
            if (
              menuItemList[i] === "MAANANTAI" ||
              menuItemList[i] === "TIISTAI" ||
              menuItemList[i] === "KESKIVIIKKO" ||
              menuItemList[i] === "TORSTAI" ||
              menuItemList[i] === "PERJANTAI"
            ) {
              days.push(menuItemList[i]);
              menuItemList.splice(i, 1);
            }
          }

          let separatedMenuItemList = [];

          //days menu is a long string. Separate menu items from each other
          menuItemList.forEach((item) => {
            const newItem = item.split("€");
            separatedMenuItemList.push(newItem);
          });

          //and add the €-characters back to the separated items
          for (let i = 0; i < separatedMenuItemList.length; i++) {
            for (let j = 0; j < separatedMenuItemList[i].length - 1; j++) {
              separatedMenuItemList[i][j] = separatedMenuItemList[i][j].replace(
                " (Suomi)",
                ""
              );
              separatedMenuItemList[i][j] = separatedMenuItemList[i][j] + "€";
            }
          }

          let menuItemDict = {};
          days.forEach(
            (day, i) => (menuItemDict[day] = separatedMenuItemList[i])
          );

          const currentDate = new Date();
          let currentDayName = currentDate.getDay();

          const daysMenu = (menuItem) => {
            outputChannel.append(
              "Ravintola Sulo Puisto avoinna arkisin ma-pe klo 7.45-15.30.\nLounas noutopöydästä arkisin ma-pe klo 10.30-14.00.\n"
            );
            outputChannel.append(
              "-------------------------------------------------------------------------\nTämän päivän menu:\n\n"
            );
            for (let i = 0; i < menuItem.length; i++) {
              outputChannel.append(menuItem[i] + "\n");
            }
            outputChannel.append(
              "-------------------------------------------------------------------------\n"
            );
            outputChannel.append(
              "(G) Gluteeniton, (L) Laktoositon, (M) Maidoton, (V) Soveltuu vegaaniruokavalioon"
            );
          };

          //print menu according to the current day
          if (currentDayName === 1) {
            daysMenu(menuItemDict.MAANANTAI);
          } else if (currentDayName === 2) {
            daysMenu(menuItemDict.TIISTAI);
          } else if (currentDayName === 3) {
            daysMenu(menuItemDict.KESKIVIIKKO);
          } else if (currentDayName === 4) {
            daysMenu(menuItemDict.TORSTAI);
          } else if (currentDayName === 5) {
            daysMenu(menuItemDict.PERJANTAI);
          } else {
            outputChannel.append(
              "Ravintola on tänään suljettu, tai ruokaa ei ole saatavilla jostain muusta syystä."
            );
            vscode.window.showInformationMessage(":-(");
          }
        })
        .catch((error) => {
          outputChannel.append(
            "Jokin meni vikaan! Voit tarkistaa ravintolan tilanteen seuraavasta linkistä: https://www.ravintolasulo.fi/lounas-puisto/"
          );
        });
    }
  );

  context.subscriptions.push(
    bistroCommand,
    futuraCommand,
    careliaCommand,
    auraCommand,
    naturaCommand,
    porvariCommand
  );
}

// this method is called when extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
