
var UI = require('ui');



var haveHWList = [0,2,1,1,0,0,0,0];

var subjectList = [
  {
    title: "first hour",
subtitle: String(haveHWList[0])
  },
  {
    title: "second hour",
subtitle: String(haveHWList[1])
  },
  {
    title: "third hour",
subtitle: String(haveHWList[2])
  },
  {
    title:"fourth hour",
subtitle: String(haveHWList[3])
  },
    {
    title:"fifth hour",
    subtitle: String(haveHWList[4])
  },
    {
    title:"sixth hour",
    subtitle: String(haveHWList[5])
  },
    {
    title:"seventh hour",
    subtitle: String(haveHWList[6])
  },
    {
    title:"eigth hour",
    subtitle: String(haveHWList[7]) 
  }
];



var Menu = new UI.Menu({
  sections: [{
    title: 'Homework List',
    items: subjectList 
  }]
});
// Show the Menu
Menu.show();
// Add a click listener for select button click
Menu.on('select', function(event) {

  
  console.log(event);
  // Show a card with clicked item details
  var detailCard = new UI.Card({  
    
      title:'press up to add ',
    subtitle:'press down to subtract'
 
  });
  // Show the new Card
  detailCard.show();
});
  Menu.on('up',function(event){
   haveHWList +=1 
  });    
