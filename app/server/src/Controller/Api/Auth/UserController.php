<?php

namespace App\Controller\Api\Auth;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/auth")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/user")
     */
    public function show(): Response
    {
        return $this->json($this->getUser(), 200, [], ['groups' => 'api']);
    }
}
