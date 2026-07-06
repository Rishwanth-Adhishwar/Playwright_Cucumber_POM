@regression
Feature: Test Cart Functionality of Tutorials Ninja Ecommerce Application

  Background:
    Given The user is on Home Page
    When The User Clicks on My account link in Homepage
    And The user clicks Login In Drop Down
    And The user Enters The valid Email
    And The User Enters The Valid Password
    And The User Clicks On Login Button

  Scenario Outline:
    When The User Enter the product name as "<product>" in Search Bar
    And The User Clicks on Search Button
    And The user Clicks a Product On Search Results
    And The user Clicks On Add to cart Button in Product Description
    Then The User Should see a Success Message Product Added to Cart

    Examples:
      | product      |
      | iPhone       |
      | HTC Touch HD |
