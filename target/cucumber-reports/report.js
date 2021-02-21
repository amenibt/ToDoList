$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddTasks.feature");
formatter.feature({
  "line": 2,
  "name": "Sign-in",
  "description": "As a user, I want to connect",
  "id": "sign-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@signin"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "connect as user",
  "description": "",
  "id": "sign-in;connect-as-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@connexion"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the email",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on send button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 13,
  "name": "Add a task",
  "description": "",
  "id": "sign-in;add-a-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@add_task"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the tasks page shows",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter the task name",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter the description",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I press add button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 20,
  "name": "edit a task status",
  "description": "",
  "id": "sign-in;edit-a-task-status",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@edit_task"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "the new task displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on task status",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "data should be updated in localstorage",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("AuthentificationwithInvalidCredentials.feature");
formatter.feature({
  "line": 2,
  "name": "Sign-in with invalid credentiels",
  "description": "As a user, I want to connect with invalid credentiels",
  "id": "sign-in-with-invalid-credentiels",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@wrongsign"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "connect with wrong email",
  "description": "",
  "id": "sign-in-with-invalid-credentiels;connect-with-wrong-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@incorrect_connexion"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the  invalid email",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on send button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "an error message shows",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Deconnexion.feature");
formatter.feature({
  "line": 2,
  "name": "logout",
  "description": "As a user, I want to logout",
  "id": "logout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@logout"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the email",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter the password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on send button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "logout",
  "description": "",
  "id": "logout;logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@deconnexion"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on logout btn",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "The Home page displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});