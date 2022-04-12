<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function index(UserRepository $user): Response
    {
        $myUser = $user->find(1);

        return $this->json([
            'message' => 'Welcome to the Home controller!',
            'path' => 'src/Controller/HomeController.php',
            'username' => $myUser->getUsername(),
        ]);
    }
}
