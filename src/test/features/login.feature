Feature: Login Test FOr Tutorials Ninja Website

  Background:
    Given The user is on Home Page

  Scenario: valid login
    When The User Clicks on My account link in Homepage
    And The user clicks Login In Drop Down
    And The user Enters The valid Email
    And The User Enters The Valid Password
    And The User Clicks On Login Button
    Then The User Should be Succesfully Logged In
