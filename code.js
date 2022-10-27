var xval = 0;
onEvent("run", "click", function( ) {
  if (getText("run") == "run") {
    for (var i = 2; i <= getNumber("text_input1"); i++) {
      button("button"+(i), i);
      xval = xval + (100/i);
      setPosition("button"+(i), xval, getYPosition("button"+(i-1))-20, 100, 20);
      setText("label2", (xval+100)/100);
    }
    setText("run", "reset");
  } else {
    for (var j = 2; j <= getNumber("text_input1"); j++) {
      deleteElement("button"+(j));
      setText("run", "run");
    }
    xval = 0;
    setText("label2", "1.00");
  }
  
});
