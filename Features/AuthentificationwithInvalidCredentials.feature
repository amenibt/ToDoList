@wrongsign
Feature: Sign-in with invalid credentiels
	As a user, I want to connect with invalid credentiels 

@incorrect_connexion
	Scenario: connect with wrong email
	Given  I launch the application
	When I enter the  invalid email
	And  I enter the password
	And I click on send button
	Then an error message shows