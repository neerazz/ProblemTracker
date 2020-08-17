# Problem Tracker for Leetcode

## Design

### Flow
1. If loaded page is Leetcode.com
2. Read the Problem title, Level, URL
3. Pop to start thinking timer (With next instruction).
4. On click, start timer from then.
5. Every 5 minutes give an alert about thinking time.
6. Change the with timer. 
7. When clicked on extention, give an option to start next timer.
8. **Once thinking is completed**, then start solving timer.
9. When solving completed. Submit the google form page.

### How to create a chore extension:

##### Create a folder, add manifest file.
> - Extensions start with manifest. 
> - [Click](https://developer.chrome.com/extensions/manifest#overview) for Field Summary.
##### The directory holding the manifest file can be added as an extension in developer mode in its current state.
> - Open the Extension Management page by navigating to chrome://extensions.
> - The Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
> - Enable Developer Mode by clicking the toggle switch next to Developer mode.
> - Click the LOAD UNPACKED button and select the extension directory.
> ![Load Extension](https://developer.chrome.com/static/images/get_started/load_extension.png)