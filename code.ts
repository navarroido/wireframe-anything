//getting user selection
for(const node of figma.currentPage.selection)
{

//   if("fills" in node)
// console.log(node.fills);

const parentNode = node;
  //duplicateing the selected node
  let duplicateFrame = figma.createFrame();

  //changing position
  duplicateFrame.x = node.x + node.width + 200;
  duplicateFrame.y = node.y;

  // resize the duplicated node
  duplicateFrame.resize(node.width,node.height);


  function skelify(node:any){
    for(const child of node.children)
    {
      if ((child.height > 0.01) && (child.width > 0.01)) {
  
            if((child.type !== 'FRAME' && (child.type !== 'GROUP') && (child.type !== 'INSTANCE')))
            {
              var skelement;

              switch (child.type) {
                case 'Elipce':
                  skelement = figma.createEllipse
                  break;
              
                default:
                  skelement = figma.createRectangle();
                  skelement.cornerRadius = 6;
                  break;
              }




              //general style
              skelement.fills = [{
                type: "SOLID",
                color: {
                  b: 0.9725490212440491,
                  g: 0.9607843160629272,
                  r: 0.9529411792755127
              }
  
              }];
              skelement.resize(child.width,child.height);


              //position
              skelement.x = child.absoluteTransform[0][2] - parentNode.absoluteTransform[0][2];
              skelement.y = child.absoluteTransform[1][2] - parentNode.absoluteTransform[1][2];
  

  
  
              duplicateFrame.appendChild(skelement);
            }
            else {
              skelify(child);
            }
  
  
      }
  
  }
  }

 skelify(node);  

  
}
figma.closePlugin();
