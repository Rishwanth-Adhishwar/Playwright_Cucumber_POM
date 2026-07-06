@address
Feature: Address Add Functionality Test

  Background:
    Given The user is on Home Page
    When The User Clicks on My account link in Homepage
    And The user clicks Login In Drop Down
    And The user Enters The valid Email
    And The User Enters The Valid Password
    And The User Clicks On Login Button

  Scenario:
    And The User Clicks on Address Book
    And The User Clciks on New Adderess In Address Book Page
    And The User Enters Address Details
      | firstName | Rishwanth     |
      | lastName  | Adhishwar     |
      | company   | ABC           |
      | address   | ABC Road JDBC |
      | city      | Coimbatore    |
      | postCode  |        656003 |
    And The User Select Country options in DropDown
    And The User SelectRegion/state Options in DropDown
    And The User Clicks on Continue Button
    Then The User Should See A Success Message
