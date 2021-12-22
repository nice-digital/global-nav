Feature: Header
  As a user of NICE org
  I want to be able to use the mega nav

  Background:
    Given I have a screen that is 1200 by 768 pixels
    And I go to the GlobalNav homepage
    And I accept all cookies

  Scenario: To verify the drop down guidance test
    When I click on the element "//*[@id='navlink-guidance']/span"
    Then  I expect that element "h2" matches the text "Guidance"
    When I wait on element "button.gn_O6Y90"
    When I click on the button "button.gn_O6Y90"

  Scenario: To verify the drop down standards and indicators test
    When I click on the element "//*[@id='navlink-standards-and-indicators']"
    When I wait on element "button#navlink-standards-and-indicators.gn_wkwGC"
    Then I expect that element "a.gn_4I9VC.gn_1O8Gt" contains the text "View our quality standards"
    When I wait on element "button.gn_O6Y90"
    When I click on the button "//*[@id='dropdown-standards-and-indicators']/div/button"

  Scenario: To verify the drop down life sciences test
    When I click on the element "//*[@id='navlink-life-sciences']"
    Then I expect that element "//*[@id='dropdown-life-sciences']/div/section/a" contains the text "View life sciences"
    When I wait on element "button.gn_O6Y90"
    When I click on the button "//*[@id='dropdown-life-sciences']/div/button"

  Scenario: To verify the dorp down bnf
    When I click on the element "//*[@id='navlink-bnf']"
    Then I expect that element "//*[@id='dropdown-bnf']/div/section/a[1]" contains the text "View BNF"
    When I wait on element "button.gn_O6Y90"
    When I click on the button "//*[@id='dropdown-bnf']/div/button"

  Scenario: To verify the drop down bnfc
    When I click on the element "//*[@id='navlink-bnfc']"
    Then I expect that element "//*[@id='dropdown-bnfc']/div/section/a[1]" contains the text "View BNFC"
    When I wait on element "button.gn_O6Y90"
    When I click on the button "//*[@id='dropdown-bnfc']/div/button"


  Scenario: To verify the drop down cks
    When I click on the element "//*[@id='navlink-cks']"
    Then I expect that element "//*[@id='dropdown-cks']/div/section/a[1]" contains the text "View CKS"
    When I wait on element "button.gn_O6Y90"
    When I click on the button "//*[@id='dropdown-cks']/div/button"


  Scenario: To verify the  drop down about
    When I click on the element "//*[@id='navlink-about']"
    When I wait on element "button#navlink-about.gn_wkwGC"
    Then I expect that element "//*[@id='dropdown-about']/div/section/a" contains the text "Explore about us"
    When I wait on element "button.gn_O6Y90"
    When I click on the button "//*[@id='dropdown-about']/div/button"

  Scenario: To verify the drop down more
    When I click on the element "//*[@id='navlink-more']"
    When I wait on element "button#navlink-more.gn_wkwGC"
    Then I expect that element "//*[@id='dropdown-more']/div/section/div/div[1]/p[2]/a" contains the text "Evidence search"
    When I wait on element "button.gn_O6Y90"
    When I click on the button "//*[@id='dropdown-more']/div/button"

  Scenario: To verify the accessbility scenario
    Then the page should have no accessibility issues

