class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
    this.body=Bodies.rectangle(x,y,100,150,options)
    //this.h=height
    //this.w=width
    this.image=loadImage("tree.png")
    World.add(world,this.body)
    
    }
display(){
imageMode(CENTER)
image(this.image,650,400,250,600)
}

}