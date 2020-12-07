/**
 * Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers.
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
 */


function telephoneCheck(str) {
    /**
     * what this regex does is, 1st check for 1 and optional space, but this 1 and optional space is also optional.
     * then it checks for ( 3 digits ) or just three digits. then optional space or -. then 3 more digits. Again cheks for optional
     * space or dash. finally 4 digits.
     */
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }
  telephoneCheck("555-555-5555");