// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const axios = require("axios");

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

  //BISTRO
  let bistroCommand = vscode.commands.registerCommand(
    "vsbostro-extension.bistroMenu",
    function () {
      // Command goes through some JSON data and picks the important things from the data. Every command works the same way.

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
            outputChannel.append("\n\n\nBistro on tänään auki " + lunchTime);
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
          outputChannel.append(error.message);
        });
    }
  );

  //FUTURA
  let futuraCommand = vscode.commands.registerCommand(
    "vsbostro-extension.futuraMenu",
    function () {
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
              "\n\n\nFuturan ravintola on tänään auki " + lunchTime
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
          outputChannel.append(error.message);
        });
    }
  );

  //CARELIA
  let careliaCommand = vscode.commands.registerCommand(
    "vsbostro-extension.careliaMenu",
    function () {
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
              "\n\n\nCarelian ravintola on tänään auki " + lunchTime
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
          outputChannel.append(error.message);
        });
    }
  );

  //AURA
  let auraCommand = vscode.commands.registerCommand(
    "vsbostro-extension.auraMenu",
    function () {
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
            outputChannel.append("\n\n\nAura on tänään auki " + lunchTime);
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
          outputChannel.append(error.message);
        });
    }
  );

  //NATURA
  let naturaCommand = vscode.commands.registerCommand(
    "vsbostro-extension.naturaMenu",
    function () {
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
              "\n\n\nNaturan ranvintola on tänään auki " + lunchTime
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
          outputChannel.append(error.message);
        });
    }
  );

  context.subscriptions.push(
    bistroCommand,
    futuraCommand,
    careliaCommand,
    auraCommand,
    naturaCommand
  );
}

// this method is called when extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
