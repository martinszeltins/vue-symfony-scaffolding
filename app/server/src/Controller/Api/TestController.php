<?php

namespace App\Controller\Api;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/test")
 */
class TestController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function index(UserRepository $userRepository): Response
    {
        $user = $userRepository->find(1);

        return $this->json([
            'username' => $user->getUsername(),
        ]);
    }
}
