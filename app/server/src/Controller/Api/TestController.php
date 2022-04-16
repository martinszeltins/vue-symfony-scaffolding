<?php

namespace App\Controller\Api;

use App\Controller\BaseController;
use App\Request\TestRequest\TestIndexRequest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class TestController extends BaseController
{
    /**
     * @Route("/test")
     */
    public function index(Request $request, TestIndexRequest $testIndexRequest): Response
    {
        $testIndexRequest->validate($request);

        return $this->json([ 'status' => 'Test: OK!' ]);
    }
}
