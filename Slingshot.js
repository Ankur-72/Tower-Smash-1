class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.015,
            length: 10
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(1);
        stroke("#FF0033");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    

    fly(){
        this.launcher.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
}