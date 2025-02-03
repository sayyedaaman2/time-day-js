// app.js
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import MicroModal from 'micromodal';

dayjs.extend(utc);
dayjs.extend(timezone);

// Function to update the time based on timezone
function updateTime(timezone = 'UTC') {
    const now = dayjs().tz(timezone);
    document.getElementById("time").textContent = now.format("hh:mm:ss A");
    document.getElementById("date").textContent = now.format("dddd, MMMM D, YYYY");

    // Update the current timezone
    document.getElementById("current-timezone").textContent = timezone;
}

// Handle the timezone selection and update the time
document.getElementById("timezone-confirm").addEventListener("click", () => {
    const selectedTimezone = document.getElementById("timezone-select").value;
    updateTime(selectedTimezone);  // Update the time with the selected timezone
    MicroModal.close("timezone-modal");  // Close the modal
});

// Initialize MicroModal
MicroModal.init();

// Update time initially with default timezone
updateTime(); 

// Update time every second
setInterval(() => {
    const selectedTimezone = document.getElementById("timezone-select")?.value || 'UTC';
    updateTime(selectedTimezone);
}, 1000);
