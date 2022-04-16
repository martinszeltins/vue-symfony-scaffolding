<?php

namespace App\Request;

use App\Exception\AppException;
use Symfony\Component\Validator\Validation;

class FormRequest
{
    public function performValidation($request, $constraint)
    {
        $validator = Validation::createValidator();

        $requestViolations = [];
        $violations        = $validator->validate($request, $constraint);

        foreach ($violations as $violation) {
            $requestViolations[trim($violation->getParameters()['{{ field }}'], '"')] = [$violation->getMessage()];
        }

        if (count($violations) > 0) {
            throw new AppException(
                json_encode(['violations' => $requestViolations]
            ), 422);
        }
    }
}
