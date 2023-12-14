Feature: Guidance list
  As a user of NICE org
  I can view and use the guidance lists

  Background:
    Given I have a screen that is 1366 by 768 pixels
    # When I accept all cookies
    And I open the url "/guidance/published"

Scenario: To verify the guidance list page header menu navigation
    # Then I expect that header menu navigation element ".Nav_nav__9GUWR" does exist
    # Then I can verify the header menu navigation link is displaying
    And I can verify the Guidance nav is displaying
    Then I can verify Standards and indicators nav is displaying
    And I can verify Life sciences nav is displaying
    Then I can verify British National Formulary nav is displaying
    And I can verify British National Formulary for Children nav is displaying
    Then I can verify the Clinical Knowledge Summaries nav is displaying
    And I can verify the About nav is displaying










    # When I click on the element "//*[@id='navlink-guidance']/span"
    # Then  I expect that element "h2" matches the text "Guidance"
    # When I wait on element "button.gn_U9jsJ"
    # When I click on the button "//*[@id='dropdown-guidance']/div/button"

# Scenario: To verify the guidance list page footer menu navigation
#     Then I can verify the footer menu navigation link is displaying


  # Scenario: To verify the guidance dropdown menu
  #   When I click on the element "//*[@id='navlink-guidance']/span"
  #   Then  I expect that element "h2" matches the text "Guidance"
  #   When I wait on element "button.gn_U9jsJ"
  #   When I click on the button "//*[@id='dropdown-guidance']/div/button"

  # Scenario: To verify the standards and indicators dropdown menu
  #   When I click on the element "//*[@id='navlink-standards-and-indicators']"
  #   Then I expect that element "a.gn_0ohjR.gn_igKXm" contains the text "View our quality standards"
  #   When I wait on element "button.gn_U9jsJ"
  #   When I click on the button "//*[@id='dropdown-standards-and-indicators']/div/button"

  # Scenario: To verify the life sciences dropdown menu
  #   When I click on the element "//*[@id='navlink-life-sciences']"
  #   Then I expect that element "//*[@id='dropdown-life-sciences']/div/section/a" contains the text "View life sciences"
  #    When I wait on element "button.gn_U9jsJ"
  #   When I click on the button "//*[@id='dropdown-life-sciences']/div/button"

  # Scenario: To verify the bnf dropdown menu
  #   When I click on the element "//*[@id='navlink-bnf']"
  #   Then I expect that element "//*[@id='dropdown-bnf']/div/section/a[1]" contains the text "View BNF"
  #    When I wait on element "button.gn_U9jsJ"
  #   When I click on the button "//*[@id='dropdown-bnf']/div/button"

  # Scenario: To verify the bnfc dropdown menu
  #   When I click on the element "//*[@id='navlink-bnfc']"
  #   Then I expect that element "//*[@id='dropdown-bnfc']/div/section/a[1]" contains the text "View BNFC"
  #    When I wait on element "button.gn_U9jsJ"
  #   When I click on the button "//*[@id='dropdown-bnfc']/div/button"


  # Scenario: To verify the cks dropdown menu
  #   When I click on the element "//*[@id='navlink-cks']"
  #   Then I expect that element "//*[@id='dropdown-cks']/div/section/a[1]" contains the text "View CKS"
  #    When I wait on element "button.gn_U9jsJ"
  #   When I click on the button "//*[@id='dropdown-cks']/div/button"


  # Scenario: To verify the dropdown about menu
  #   When I click on the element "//*[@id='navlink-about']"
  #   #When I wait on element "button#navlink-about.gn_wkwGC"
  #   Then I expect that element "//*[@id='dropdown-about']/div/section/a" contains the text "Explore about"
  #   When I wait on element "button.gn_U9jsJ"
  #   When I click on the button "//*[@id='dropdown-about']/div/button"
