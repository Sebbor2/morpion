var player;
var c = document.getElementById("grille");
var ctx = c.getContext("2d");

function init()
{
	player = 1;
    afficherGrille();
}

function afficherGrille ()
{
    var c = document.getElementById("grille");
    var ctx = c.getContext("2d");

    ctx.moveTo(100,0);
    ctx.lineTo(100,300);
    ctx.stroke();ctx.moveTo(200,0);
    ctx.lineTo(200,300);
    ctx.stroke();
    ctx.moveTo(0,100);
    ctx.lineTo(300,100);
    ctx.stroke();
    ctx.moveTo(0,200);
    ctx.lineTo(300,200);
    ctx.stroke();
}

function onclick_page(event)
{
  var x = event.clientX;
  var y = event.clientY;
	
    // joueur 1
    if (player == 1)
    {
        // Ligne haut
        if (x < 100 && y <100)
        {
            ctx.beginPath();
            ctx.arc(50,50,40,0,2*Math.PI);
            ctx.stroke();
        }
        if (x < 200 && x > 100 && y <100)
        {
            ctx.beginPath();
            ctx.arc(150,50,40,0,2*Math.PI);
            ctx.stroke();
        }
        if (x < 300 && x > 200 && y <100)
        {
            ctx.beginPath();
            ctx.arc(250,50,40,0,2*Math.PI);
            ctx.stroke();
        }

        // Ligne Milieu
        if (x < 100 && y > 100 && y < 200 )
        {
            ctx.beginPath();
            ctx.arc(50,150,40,0,2*Math.PI);
            ctx.stroke();
        }
        if (x < 200 && x > 100 && y > 100 && y < 200)
        {
            ctx.beginPath();
            ctx.arc(150,150,40,0,2*Math.PI);
            ctx.stroke();
        }
        if (x < 300 && x > 200 && y > 100 && y < 200)
        {
            ctx.beginPath();
            ctx.arc(250,150,40,0,2*Math.PI);
            ctx.stroke();
        }

        // Ligne bas
        if (x < 100 && y > 200 && y < 300 )
        {
            ctx.beginPath();
            ctx.arc(50,250,40,0,2*Math.PI);
            ctx.stroke();
        }
        if (x < 200 && x > 100 && y > 200 && y < 300)
        {
            ctx.beginPath();
            ctx.arc(150,250,40,0,2*Math.PI);
            ctx.stroke();
        }
        if (x < 300 && x > 200 && y > 200 && y < 300)
        {
            ctx.beginPath();
            ctx.arc(250,250,40,0,2*Math.PI);
            ctx.stroke();
        }
    }
    
    // Joueur 2
    if (player ==2)
    {
    // Ligne haut
    if (x < 100 && y <100)
    {
        ctx.beginPath();
        ctx.rect(20,20,150,100);
		ctx.stroke();
    }
    if (x < 200 && x > 100 && y <100)
    {
        ctx.beginPath();
        ctx.arc(150,50,40,0,2*Math.PI);
        ctx.stroke();
    }
    if (x < 300 && x > 200 && y <100)
    {
        ctx.beginPath();
        ctx.arc(250,50,40,0,2*Math.PI);
        ctx.stroke();
    }
    
    // Ligne Milieu
    if (x < 100 && y > 100 && y < 200 )
    {
        ctx.beginPath();
        ctx.arc(50,150,40,0,2*Math.PI);
        ctx.stroke();
    }
    if (x < 200 && x > 100 && y > 100 && y < 200)
    {
        ctx.beginPath();
        ctx.arc(150,150,40,0,2*Math.PI);
        ctx.stroke();
    }
    if (x < 300 && x > 200 && y > 100 && y < 200)
    {
        ctx.beginPath();
        ctx.arc(250,150,40,0,2*Math.PI);
        ctx.stroke();
    }
    
    // Ligne bas
    if (x < 100 && y > 200 && y < 300 )
    {
        ctx.beginPath();
        ctx.arc(50,250,40,0,2*Math.PI);
        ctx.stroke();
    }
    if (x < 200 && x > 100 && y > 200 && y < 300)
    {
        ctx.beginPath();
        ctx.arc(150,250,40,0,2*Math.PI);
        ctx.stroke();
    }
    if (x < 300 && x > 200 && y > 200 && y < 300)
    {
        ctx.beginPath();
        ctx.arc(250,250,40,0,2*Math.PI);
        ctx.stroke();
    }
    }

	if (player ==1)
    {
    	player =2;
    }
    else player =1;
}