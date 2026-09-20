/* =====================================================
   MENU MOBILE
===================================================== */

function abrirMenu() {

    const menu =
        document.getElementById("menu");

    menu.classList.toggle("ativo");

}



/* =====================================================
   FECHAR MENU AO CLICAR
===================================================== */

document
    .querySelectorAll("#menu a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                document
                    .getElementById("menu")
                    .classList
                    .remove("ativo");

            }
        );

    });



/* =====================================================
   ANO AUTOMÁTICO
===================================================== */

document
    .getElementById("ano")
    .textContent =
    new Date().getFullYear();