/*Para programar el botón que muestre el menú lateral*/
var btnMenuOpen = document.getElementById("btn-menu-open");
var menuLateral = document.getElementById("menu-lateral");
var btnMenuClose = document.getElementById("btn-menu-close");
var btnNavToggle = document.getElementById("btn-nav-toggle");
var navLinks = document.getElementById("nav-links");

btnMenuOpen.addEventListener("click",mostrarMenuLateral);
btnMenuClose.addEventListener("click",ocultarMenuLateral);
btnNavToggle.addEventListener("click",toggleNavLinks);
window.addEventListener("resize",arreglarNavLinks);

//Función para mostrar el menú lateral
function mostrarMenuLateral() {
    menuLateral.classList.add("mostrar");
}

//Función para ocultar el menú lateral
function ocultarMenuLateral() {
    menuLateral.classList.remove("mostrar");
} 

//Función para mostrar el nav
function toggleNavLinks() {
    navLinks.classList.toggle("mostrar");
}

function arreglarNavLinks() {
    if(window.innerWidth >= 900) {
        navLinks.classList.remove("mostrar");
    }
}

function cargarDatos() {
    var url = menuLateral.dataset.url;
    var datos = [];
    axios.get(url)
        .then(function(res) {
            //cumple
            console.log(res.data);
        }).catch(function(err) {
            //no me cumplen
            console.log(err);
        });
}

function generarLinks() {
    var menuLinks = document.getElementById("menu-links");
    menuLinks.innerHTML = "";

    var links = cargarDatos();
    console.table(links);
    if(links.length > 0) {
        //Llegaron datos
        for(var i = 0; i < links.length; i++) {
            var texto = document.createTextNode(links[i].nombre);
            var link = document.createElement("a");
            link.href = links[i].url;
            link.target = "name-iframe";
            link.appendChild(texto);

            var itemLista = document.createElement("li");
            itemLista.appendChild(link);

            menuLinks.appendChild(itemLista);
        }
    }else{
        var texto = document.createTextNode("No se ha encontrado ninguna actividad");
        var itemLista = document.createElement("li");
        itemLista.appendChild(texto);
        menuLinks.appendChild(itemLista);
    }
}

generarLinks();