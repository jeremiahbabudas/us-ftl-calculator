function copySheetToRepository() {
  var sourceSpreadsheetId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  var destinationSpreadsheetId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; #this sheet does not exist anymore    

  var sourceSpreadsheet = SpreadsheetApp.openById(sourceSpreadsheetId);
  var destinationSpreadsheet = SpreadsheetApp.openById(destinationSpreadsheetId);
  var sourceSheet = sourceSpreadsheet.getSheetByName('Calculator');
  var newSheetName = sourceSheet.getRange('B6').getValue();

  var newSheet = destinationSpreadsheet.insertSheet(newSheetName);
  var sourceRange = sourceSheet.getDataRange();
  var values = sourceRange.getValues();
  newSheet.getRange(1, 1, values.length, values[0].length).setValues(values);

  var destinationRange = newSheet.getRange(1, 1, values.length, values[0].length);
  destinationRange.setBackgrounds(sourceRange.getBackgrounds());
  destinationRange.setFontColors(sourceRange.getFontColors());
  destinationRange.setFontSizes(sourceRange.getFontSizes());
  destinationRange.setFontFamilies(sourceRange.getFontFamilies());
  destinationRange.setFontLines(sourceRange.getFontLines());
  destinationRange.setFontStyles(sourceRange.getFontStyles());
  destinationRange.setFontWeights(sourceRange.getFontWeights());
  destinationRange.setHorizontalAlignments(sourceRange.getHorizontalAlignments());
  destinationRange.setVerticalAlignments(sourceRange.getVerticalAlignments());
  destinationRange.setNumberFormats(sourceRange.getNumberFormats());

  for (var i = 1; i <= sourceRange.getNumRows(); i++) {
    newSheet.setRowHeight(i, sourceSheet.getRowHeight(i));
  }

  for (var j = 1; j <= sourceRange.getNumColumns(); j++) {
    newSheet.setColumnWidth(j, sourceSheet.getColumnWidth(j));
  }

  destinationSpreadsheet.setActiveSheet(newSheet);
  destinationSpreadsheet.moveActiveSheet(destinationSpreadsheet.getSheets().length);

  var sheets = destinationSpreadsheet.getSheets();
  if (sheets.length > 1 && sheets[0].getName() === 'Sheet1') {
    destinationSpreadsheet.deleteSheet(sheets[0]);
  }
}
