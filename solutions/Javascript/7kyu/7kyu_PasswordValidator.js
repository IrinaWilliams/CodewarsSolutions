https://www.codewars.com/kata/password-validator/train/javascript
/*
Description
Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

There needs to be at least 1 uppercase letter.  /[A-Z]/
There needs to be at least 1 lowercase letter. /[a-z]/
There needs to be at least 1 number. /\d/
The password needs to be at least 8 characters long. //str.length >= 8
You are permitted to use any methods to validate the password.

Examples:
password("Abcd1234"); ===> true
password("Abcd123"); ===> false
password("abcd1234"); ===> false
password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
password("ABCD1234"); ===> false
password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;
Extra info
You will only be passed strings.
The string can contain any standard keyboard character.
Accepted strings can be any length, as long as they are 8 characters or more.
*/

function password(str) {
    return str.length >= 8 && /[A-Z]/.test(str) && /[a-z]/.test(str) && /\d/.test(str);
}

/*Test.assertEquals(password("Abcd1234"), true);
Test.assertEquals(password("Abcd123"), false);
Test.assertEquals(password("abcd1234"), false);
Test.assertEquals(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"), true);
Test.assertEquals(password("ABCD1234"), false);
Test.assertEquals(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"), true);
Test.assertEquals(password("!@#$%^&*()-_+={}[]|\:;?/>.<,"), false);