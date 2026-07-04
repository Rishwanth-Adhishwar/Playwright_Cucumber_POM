@smoke
Feature: Registeration For TUtorials Ninja Website

  Background:
    Given The user is on Home Page

  Scenario: Registering a new user with valid Credentials
    When The User Clicks on My account link in Homepage
    And The User clicks Register In Drop Down
    And The User Enters Personal Details and Password
    And The User check the privacy policy Checkbox
    And The User Clicks on Continue Button
    Then The user should be Successfully Registered

  Scenario: Registering a new user with leaving Mandatory Field
    When The User Clicks on My account link in Homepage
    And The User clicks Register In Drop Down
    And The User Enters Personal Details and Password by laeving one Mandatory Field
    And The User check the privacy policy Checkbox
    And The User Clicks on Continue Button
    Then The user should be Displayed With Warning Message
