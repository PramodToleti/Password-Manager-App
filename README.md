Website Link: https://webpassmanager.ccbp.tech/

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/passowrd-manager-output-v0.gif" alt="password manager" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

Objective of the project:

- The user is able to add and manage their passwords.
- By searching the website name, you can find the required password.
- You can hide and show your passwords. As all passwords are stored in local storage, they can be accessed at any time by the user.

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-sm-output-v2.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Masked Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-masked-passwords-sm-output-v2.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Show Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Masked Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-masked-passwords-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Show Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-lg-output.png)

</details>

The app has the following functionalities

- Initially, the website input, username input, and password input should be empty and [No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png) should be displayed
- When non-empty values are provided for the website, username, and password and the **Add** button is clicked,
  - A new password item should be added to the list of passwords
  - The passwords count should be incremented by one
  - The **stars image** should be displayed in the password items instead of the passwords
  - The value of the input fields for website, username, and password should be updated to their initial values
  - When the **Show Password** is checked, then the password should be displayed instead of the **stars image**
- When a non-empty value is provided in the search input field, then password items whose website is matched with the search input value irrespective of the case should be displayed
- When a non-empty value is provided in the search input field, and if the website of any password item does not match the value given in the search input, then [No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png) should be displayed
- When the delete button of a password item is clicked,
  - The respective password item should be deleted from the list of passwords
  - The passwords count should be decremented by one
- When all password items are deleted, then [No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png) should be displayed
</details>
