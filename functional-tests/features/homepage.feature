Feature: Homepage
  As a user of NICE org
  I want to be able to use the NICE homepage

  Background:
    Given I have a screen that is 1366 by 768 pixels
    And I open the url "/"
    And I accept all cookies

  Scenario: Navigate to find guidance page
    When I click on the link "Find NICE guidance"
    Then I expect that the path is "/guidance"
    And I expect that element "h1" matches the text "NICE guidance"
    And I expect that the title is "Find guidance | NICE"

  Scenario: Perform a search
    Then I wait on element "[name='q']" to exist
    When I set "test" to the inputfield "#global-nav-header [name='q']"
    And I click on the button "#global-nav-header form[role='search'] button[type='submit']"
    Then I expect that the path is "/search?q=test"

  Scenario: Use search autocomplete
    Then I wait on element "#global-nav-header [name='q']" to exist
    When I set "paracet" to the inputfield "#global-nav-header [name='q']"
    Then I wait on element ".autocomplete__option" to exist
    And I expect that element ".autocomplete__option:first-child" matches the text "Paracetamol"
    When I press "ArrowDown"
    And I press "Enter"
    And I pause for 100ms
    Then I expect that the path is "/search?q=Paracetamol"

