const labelMap = {
    1:{name:'A', color:"aqua"},
    2:{name:'B', color:"brown"},
    3:{name:'C', color:"azure"},
    4:{name:'D', color:"aquamarine"},
    5:{name:'E', color:"bisque"},
    6:{name:'F', color:"blue"},
    7:{name:'G', color:"blueviolet"},
    8:{name:'H', color:"coral"},
    9:{name:'I', color:"cadetblue"},
    10:{name:'J', color:"chocolate"},
    11:{name:'K', color:"crimson"},
    12:{name:'L', color:"cyan"},
    13:{name:'M', color:"black"},
    14:{name:'N', color:"ForestGreen"},
    15:{name:'O', color:"Gold"},
    16:{name:'P', color:"Gray"},
    17:{name:'Q', color:"GoldenRod"},
    18:{name:'R', color:"Green"},
    19:{name:'S', color:"Pink"},
    20:{name:'T', color:"Indigo"},
    21:{name:'U', color:"Lime"},
    22:{name:'V', color:"navy"},
    23:{name:'W', color:"olive"},
    24:{name:'X', color:"orange"},
    25:{name:'Y', color:"orchid"},
    26:{name:'Z', color:"red"},
}

export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
        }
    }
}