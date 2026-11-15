const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let t = 0;

function heartPoint(angle, scale) {
    const x = 16 * Math.pow(Math.sin(angle), 3);
    const y =
        -(13 * Math.cos(angle) -
        5 * Math.cos(2 * angle) -
        2 * Math.cos(3 * angle) -
        Math.cos(4 * angle));

    return {
        x: x * scale,
        y: y * scale
    };
}

function draw() {

    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    const cx = canvas.width/2;
    const cy = canvas.height/2;

    for(let i=0;i<220;i++){

        const a = (i/220)*Math.PI*2+t;

        const p = heartPoint(a,18);

        ctx.save();

        ctx.translate(cx+p.x,cy+p.y);

        const next = heartPoint(a+0.02,18);

        ctx.rotate(Math.atan2(next.y-p.y,next.x-p.x));

        ctx.font="20px Arial";
        ctx.fillStyle="#ffd1e6";

        ctx.shadowColor="#ff8fc6";
        ctx.shadowBlur=18;

        ctx.fillText("I love you",-30,0);

        ctx.restore();
    }

    t+=0.01;

    requestAnimationFrame(draw);
}

draw();