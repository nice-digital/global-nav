Feature: Nice Account page
  As a user of Nice Account page
  I can view and use the header nav page

  Background:
    Given I have a screen that is 1366 by 768 pixels
    And I open the url "https://beta-accounts.nice.org.uk/"
    # When I log into the admin page with username "IDAM_EMAIL6" and password "IDAM_PASSWORD"

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
