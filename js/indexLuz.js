document.getElementById("luces").addEventListener("click",luces);

var cont=0;

	function luces()
	{

		var vid= document.getElementById("video",);
		var nav= document.getElementById("navindx");
		var footer=document.getElementById("footindx");
		var v=["media/Traffic - 6457.mp4","media/nubes.mp4"];
		var gale=document.getElementById("galeria");
		var nos=document.getElementById("nosotros");
		var nos2=document.getElementById("nos2");
		var serv=document.getElementById("servicios");
		var contact=document.getElementById("contacto");
		var logo1=document.getElementById("logo1");
		var logo2=document.getElementById("logo2");
		 	
		 	if (cont==0){
		 		vid.src=v[0];
		 		nav.className="navbar navbar-osc navbar-expand-lg navbar-dark";
		 		footer.className=" navbar-osc foot d-none d-lg-block mt-5 fixed-bottom w-100";

		 		gale.href="paginas/galeria-dark.html";
				nos.href="paginas/nosotros-dark.html";
				nos2.href="paginas/nosotros-dark.html";
		 		serv.href="paginas/servicios-dark.html";
				contact.href="paginas/contacto-dark.html";
				logo1.href="paginas/galeria-dark.html";
				logo2.href="paginas/galeria-dark.html";


		 		cont=1;}
		 	else {
		 		vid.src=v[1];
		 		nav.className="navbar navbar-expand-lg navbar-light bg-light ";
		 		footer.className=" foot d-none d-lg-block mt-5 fixed-bottom navbar-clar ";

		 		gale.href="paginas/galeria.html";
				nos.href="paginas/nosotros.html";
				nos2.href="paginas/nosotros.html";
		 		serv.href="paginas/servicios.html";
				contact.href="paginas/contacto.html";
				logo1.href="paginas/galeria.html";
				logo2.href="paginas/galeria.html";

		 		cont=0;
		 	}
		 
	}


