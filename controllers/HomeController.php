<?php

require_once 'BaseController.php';

class HomeController extends BaseController
{

    public function index()
    {
        echo $this->view('home');
    }
}
