
# Time App with Day.js and MicroModal

This is a simple web app that displays the current time and date in various timezones. Users can select a timezone from a modal dialog, and the app will update the time accordingly. The app uses Day.js for date and time manipulation and MicroModal for managing the timezone selection modal.


## Features

- Displays current time and date, updated every second.
- Allows users to select a timezone from a modal.
- The selected timezone is applied, and the time on the page updates accordingly.
- The app shows the current selected timezone on the page.


## Technologies Used

- Day.js: A lightweight JavaScript library for manipulating and displaying dates and times.
- MicroModal: A lightweight, accessible modal library for showing the timezone selection modal.
- HTML/CSS/JavaScript: Basic web technologies to build and style the app.

## Installation

### 1.Install Time App with npm

```bash
git clone https://github.com/yourusername/time-app.git
cd time-app

```
### 2. Install dependencies  
```bash
npm install
```
This will install the required libraries, including dayjs, micromodal, and other dependencies.
### 3. Run the app
To start the app, open the ``` index.html ``` file in your browser. If you're using a local server, you can use it to serve the file.

### 4. (Optional) Bundle the code using Webpack
If you'd like to bundle your JavaScript using Webpack, you can run:
```bash
npx webpack
```
This will generate the bundled bundle.js in the dist folder, which you can include in the HTML file.
## Usage

- 1.Upon opening the app, the current time and date will be displayed based on the UTC timezone.
- 2.To select a different timezone, click the "Select Timezone" button to open a modal.
- 3.In the modal, select your desired timezone from the dropdown and click the "Confirm" button.
- 4.The time and timezone will be updated, and the modal will close.
The app will continue updating the time every second based on the selected timezone.

## Files
- index.html: The main HTML file that includes the structure and links to the JavaScript and CSS files.
- app.js: The main JavaScript file that manages the app's functionality, including updating time and handling timezone selection.
- style.css: The CSS file that contains styles for the modal and the page layout.

## License
This project is open-source and available under the MIT License.
