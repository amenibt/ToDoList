@logout
Feature: logout
  As a user, I want to logout

  Background: 
    Given I launch the application
    When I enter the email
    And I enter the password
    And I click on send button

  @deconnexion
  Scenario: logout
    Given I click on logout btn
    Then The Home page displayed
