<?php

namespace App\Controller\Api\Auth;

use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/auth")
 */
class AuthenticatedUserController extends BaseController
{
    /**
     * @Route("/authenticated-user")
     */
    public function show(): Response
    {
        return $this->json($this->getUser(), 200, [], ['groups' => 'api']);
    }
}
