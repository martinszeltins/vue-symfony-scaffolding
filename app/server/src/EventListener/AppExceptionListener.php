<?php

namespace App\EventListener;

use Psr\Log\LoggerInterface;
use App\Exception\AppException;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class AppExceptionListener implements EventSubscriberInterface
{
    private LoggerInterface $logger;

    /**
     * @required
     */
    public function setLogger(LoggerInterface $logger): self
    {
        $this->logger = $logger;

        return $this;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::EXCEPTION => 'onKernelException',
        ];
    }

    public function onKernelException(ExceptionEvent $event)
    {
        $exception = $event->getThrowable();

        if (!$exception instanceof AppException) {
            return;
        }

        if ($this->hasFormViolations($exception)) {
            $this->setFormViolations($event, $exception);
            return;
        }

        $this->logger->critical($exception->getMessage(), [
            'exception' => $exception,
        ]);

        $data = ['exception' => $exception->getMessage()];

        $event->setResponse(new JsonResponse($data, $exception->getCode()));
    }

    private function hasFormViolations(AppException $exception)
    {
        $exceptionMessage = json_decode($exception->getMessage(), true);

        return isset($exceptionMessage['violations']);
    }

    private function setFormViolations(ExceptionEvent $event, AppException $exception)
    {
        $exceptionMessage = json_decode($exception->getMessage(), true);
        $violations = $exceptionMessage['violations'];

        $event->setResponse(new JsonResponse([
            'violations' => $violations,
        ], $exception->getCode()));
    }
}
