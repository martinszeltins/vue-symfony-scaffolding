<?php

namespace App\Subscriber;

use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class RequestSubscriber implements EventSubscriberInterface
{
    private Security $security;

    /**
     * @required
     */
    public function setSecurity(Security $security): self
    {
        $this->security = $security;

        return $this;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST   => ['onKernelRequest'],
            KernelEvents::RESPONSE  => ['onKernelResponse'],
        ];
    }

    public function onKernelRequest(RequestEvent $event)
    {
        $request = $event->getRequest();

        if (false === $this->isJsonRequest($request)) {
            return;
        }

        if (empty($request->getContent())) {
            return;
        }

        if (false === $this->transformJsonBody($request)) {
            $response = new JsonResponse([
                'error' => 'RequestSubscriber: Unable to transform JSON body into request.'
            ], 400);

            $event->setResponse($response);
        }
    }

    public function onKernelResponse(ResponseEvent $event)
    {
        if (! $event->getRequest()->hasSession()) {
            return;
        }

        $response = $event->getResponse();

        if (! $this->isJsonResponse($response)) {
            return;
        }

        $request  = $event->getRequest();
        $content  = json_decode($response->getContent(), true);
        $flashBag = $request->getSession()->getFlashBag();

        // Add flash messages to the response content
        if (! isset($content['_flashMessages'])) {
            $content['_flashMessages'] = [];
        }

        foreach ($flashBag->all() as $type => $messages) {
            foreach ($messages as $message) {
                $content['_flashMessages'][] = [
                    'type'    => $type,
                    'message' => $message,
                ];
            }
        }

        $response->setContent(json_encode($content));

        $event->setResponse($response);
    }

    private function isJsonResponse(Response $response): bool
    {
        return $response instanceof JsonResponse;
    }


    private function transformJsonBody(Request $request): bool
    {
        $data = json_decode($request->getContent(), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return false;
        }

        if ($data === null) {
            return true;
        }

        $request->request->replace($data);

        return true;
    }

    private function isJsonRequest(Request $request): bool
    {
        return 'json' === $request->getContentType() || 'json' === $request->getRequestFormat();
    }
}
