
function doGet() {
  return ContentService.createTextOutput("Student Feedback System is Running!");
}

function doPost(e) {

  var sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Sheet1");

  var name = e.parameter.name;
  var email = e.parameter.email;
  var course = e.parameter.course;
  var feedback = e.parameter.feedback;

  sheet.appendRow([
    new Date(),
    name,
    email,
    course,
    feedback
  ]);

  return ContentService.createTextOutput(
    "Feedback submitted successfully!"
  );
}
