Feature: BNF page
  As a user of BNF page
  I can view and use the BNF page

  Background:
    Given I have a screen that is 1366 by 768 pixels
    # When I accept all cookies
    And I open the url "https://test-bnfc.nice.org.uk/"

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


# Scenario: To verify the guidance list page footer menu navigation
#   Then I can verify the footer menu navigation link is displaying
