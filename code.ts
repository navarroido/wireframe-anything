//getting user selection
for(const node of figma.currentPage.selection)
{

//   if("fills" in node)
// console.log(node.fills);

  //duplicateing the selected node
  let duplicateFrame = figma.createFrame();

  //changing position
  duplicateFrame.x = node.x + node.width + 200;
  duplicateFrame.y = node.y;

  // resize the duplicated node
  duplicateFrame.resize(node.width,node.height);
if(node.type == 'FRAME' || node.type == 'GROUP')
{
  for(const child of node.children)
  {
    var skelement;
    skelement = figma.createRectangle();
    skelement.resize(child.width,child.height);

    skelement.x = child.x;
    skelement.y = child.y;

    skelement.cornerRadius = 6;
    skelement.fills = [{
      type: "SOLID",
      color: {
        b: 0.9725490212440491,
        g: 0.9607843160629272,
        r: 0.9529411792755127
    }

    }];


    duplicateFrame.appendChild(skelement);
  }
}
  
}
figma.closePlugin();
