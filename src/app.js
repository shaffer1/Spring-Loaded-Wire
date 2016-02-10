
//The MIT License (MIT)
//Copyright (c) 2015 Alexander Shaffer

//Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files
//(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, 
//publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
//subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
//INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
//IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN 
//ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
//IN THE SOFTWARE.


var UI = require('ui');

var haveHWList = [0,0,0,0,0,0,0,0];
var selectedSubject = 0;

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
   selectedSubject=event.itemIndex;
  // Show a card with clicked item details
  var detailCard = new UI.Card({  
      title:'press up to add ',
    subtitle:'press down to subtract'
  });
  
  // Show the new Card
  detailCard.on('click','up',function(event){
   console.log("Last selcted subject is "+ String(selectedSubject)); 
   haveHWList[selectedSubject] +=1; 
   console.log("........HW count is"+ String(haveHWList[selectedSubject]));
   subjectList[selectedSubject].subtitle= String(haveHWList[selectedSubject]);
  });
  detailCard.on('click','down',function(event){
   console.log("Last selcted subject is "+ String(selectedSubject)); 
   haveHWList[selectedSubject] -=1; 
   console.log("........HW count is"+ String(haveHWList[selectedSubject]));
   subjectList[selectedSubject].subtitle= String(haveHWList[selectedSubject]);
  });
    
  detailCard.show();
});
  
