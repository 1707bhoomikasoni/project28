class Juno{
    constructor(x,y,width,height){
var options={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,90,90)
this.image=loadImage("boy.png")
World.add(world,this.body)
}
display(){
    imageMode(CENTER)
    image(this.image,200,620,150,280)
}
}