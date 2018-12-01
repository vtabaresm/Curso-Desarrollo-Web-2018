<?php

namespace App\Controladores;

use Slim\Views\Twig;

class AplicacionControlador {
    private $view;

    public function __construct(Twig $view) {
        $this->view = $view;
    }

    public function paginaAplicacion($request, $response){
        return $this->view->render($response, 'aplicacion.twig');
    }

    public function consultarActividades($request, $response){
        $actividades = "SI CARGA";
        return $response->withJson(['actividades' => $actividades]);
    }
}