<?php

namespace App\Request\TestRequest;

use App\Request\FormRequest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;

class TestIndexRequest extends FormRequest
{
    public function validate(Request $request)
    {
        $this->authorize($request);
        $this->validateRequest($request);
    }

    public function authorize(Request $request)
    {
        //
    }

    public function validateRequest(Request $request)
    {
        $constraint = new Assert\Collection([
            'fields' => [
                'username' => new Assert\NotBlank(),
                'email'    => new Assert\NotBlank(),
                'password' => new Assert\NotBlank(),
            ],
        ]);

        $this->performValidation($request->request->all(), $constraint);
    }
}
