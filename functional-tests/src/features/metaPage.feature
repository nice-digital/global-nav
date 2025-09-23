Feature: Services sign in page
  As a user of sign in page for different services like META
  I can view and use the header nav page

  Background:
    Given I have a screen that is 1366 by 768 pixels
    # When I accept all cookies
    And I open the url "https://beta-accounts.nice.org.uk//signin?wa=wsignin1.0&wtrealm=https://test-medtech.nice.org.uk&wctx=&rm=0&id=passive&ru=https://test-medtech.nice.org.uk/&ReturnUrl=https://test-medtech.nice.org.uk"
    # When I log into the admin page with username "martingmeta20+idam1@gmail.com" and password "IDAM_PASSWORD"

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
