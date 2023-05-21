Feature: Test Web Open Cruise

  Background:
    Given I visit the application

  Scenario: TEST01
    When I connect with valid credentials
    Then I should see the welcome message
    And I take a screenshot

  Scenario: TEST02
    When I connect with invalid credentials
    Then I should see an error message
    And I take a screenshot

  Scenario: TEST03
    Given I have created a Particulier account
    When I connect as Admin
    And I activate the account
    And I logout
    And I login with the created account
    Then I should see the welcome message
    And I take a screenshot
    And I logout

  Scenario: TEST04
    Given I have created a Professionnel account
    When I connect as Admin
    And I activate the account
    And I logout
    And I login with the created account
    Then I should see the welcome message
    And I take a screenshot
    And I logout

  Scenario: TEST05
    Given I have an existing Particulier account
    When I try to create another account with the same email
    Then I should see an error message
    And I take a screenshot
