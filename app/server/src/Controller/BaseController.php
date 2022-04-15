<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

abstract class BaseController extends AbstractController
{
    public function getUser(): ?User
    {
        return parent::getUser();
    }

    public function persistAndFlush($entity): void
    {
        $repository = $this->getDoctrine()->getManager()->getRepository(get_class($entity));

        $repository->persistAndFlush($entity);
    }

    public function removeAndFlush($entity): void
    {
        $repository = $this->getDoctrine()->getManager()->getRepository(get_class($entity));

        $repository->removeAndFlush($entity);
    }

    public function jsonWithGroups($data, $groups, int $status = 200, array $headers = []): JsonResponse
    {
        return $this->json($data, $status, $headers, ['groups' => $groups]);
    }

    public function flashError(string $message)
    {
        $this->addFlash('error', $message);
    }
}
