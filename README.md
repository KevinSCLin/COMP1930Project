# COMP1930Project

file structure


CSS folder includes styling for all pages
\css
add_journalssstyle.css
bootstrap.min.css
editgoalstyle.css
global.css - used by all pages, including styling for navigation bar
goalAddedStyle.css
goals.css
goalsummary.css
indexstyle.css
journal_entrystyle.css
journalsstyle.css
journalsuccessfullyaddedstyle.css
mainstyle.css
newsubgoal.css
pastjournals_viewstyle.css
pastjournalsstyle.css
settingsstyle.css


scripts folder include Firebase API related javascript codes
\scripts
app.js - Firebase API & project specific settings
goals.js
loginverification.js - Firebase login API redirect
logoutFunction.js - Firebase logout API redirect 


top-level directory contains all html pages

add_journals.html - users save new journal here
add_more_subgoals.html - users add more subgoals to an existing goal here
edit_goal.html - users can select an existing goal here, and clicking on goal to redirect edit_target_goal.html to edit details of the clicked goal
edit_target_goal.html - users can edit existing goal's information here (e.g. title, deadline, priority, description)
goalchangesuccessful.html - page to show a changing goal successful, then auto-redict to main page
goals.html - users can add new goals here, and enter goal name, description, priority, and deadline
goalsuccessfullyadded.html - after creating a goal, this page asks for user to create subgoals
goalsummarypage.html - shows subgoal completion via checkboxes and links to add_more_subgoals to add more subgoal for the current goal
index.html - landing page with login button
journal_entry.html - this page displays all exisiting goals and user clicks one to link to add_journals to add journals
journals.html - page with buttons to add_journals and pastjournals
journalsuccessfullyadded.html - page to show a journal successfully added, then redirect back to journal.html
login.html - login page with Firebase email authentication
main.html - home page showing all goals' and their completion percentage bar
pastjournals.html - shows all existing goals, with user's selection redirecting to pastjournals_view.html to view goal-specific journals
pastjournals_view.html - page showing all saved journals for a particular goal. User can sort by newest or oldest
redirect.html - this page appears if user is not logged in while trying to open any other pages
settings.html - template page for settings
subgoals.html - this page appears after creating a goal, and user chooses to create subgoals here
subgoalsuccessfullyadded.html - page appears after user saved subgoals in subgoals.html, then auto redirects to main.html
