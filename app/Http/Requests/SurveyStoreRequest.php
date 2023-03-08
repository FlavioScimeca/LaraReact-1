<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SurveyStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            "user_id" => $this->user()->id
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "title" => "required|string|max:1000",
            "image" => "nullable|string",
            "user_id" => "exists:users,id",
            "status" => "required|boolean",
            "description" => "required|nullable|string",
            "expire_date" => "required|nullable|date|after:today",
            "questions" => "array"
        ];
    }
}
