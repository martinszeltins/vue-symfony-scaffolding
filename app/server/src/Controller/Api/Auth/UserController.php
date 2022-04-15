<?php

namespace App\Controller\Api\Auth;

use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/auth")
 */
class UserController extends BaseController
{
    /**
     * @Route("/user")
     */
    public function show(): Response
    {
        $this->flashError('This is a message for you!');

        return $this->json($this->getUser(), 500, [], ['groups' => 'api']);
    }
}
