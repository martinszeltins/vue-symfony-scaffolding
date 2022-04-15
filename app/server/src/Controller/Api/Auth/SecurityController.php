<?php

namespace App\Controller\Api\Auth;

use Exception;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/auth")
 */
class SecurityController extends AbstractController
{
    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout(): void
    {
        throw new Exception('Do not forget to activate logout in security.yaml');
    }
}
