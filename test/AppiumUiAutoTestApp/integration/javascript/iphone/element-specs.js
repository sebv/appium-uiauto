#import "../vendors/tuneup.js";
#import "../../../../../../uiauto/bootstrap.js";

test("getWithName", function(/*target, app*/) {
  var el = $.mainApp().getWithName('Name');
  assertNotNull(el);
});
