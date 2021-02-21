@signin
Feature: Sign-in 
  As a user, I want to connect

  @connexion
  Scenario: connect as user
    Given I launch the application
    When I enter the email
    And I enter the password
    And I click on send button

  @add_task
  Scenario: Add a task
    Given the tasks page shows
    When I enter the task name
    And I enter the description
    And I press add button
   
  @edit_task
   Scenario: edit a task status
    Given the new task displayed
    When I click on task status
    Then data should be updated in localstorage
    
  
