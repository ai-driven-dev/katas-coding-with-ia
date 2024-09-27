defmodule Refactoring.AssertionActionService do
  require Logger

  def get_assertion_action_response(%{is_claims_required: true} = request, claims_infos, requested_email) do
    if request.is_claims_required and not validate_mandatory_claims(claims_infos, requested_email) do
      %{
        status: :error,
        message: "The mandatory claims are not correctly configured in the identity provider"
      }
    else
      %{status: :success}
    end
  end

  def get_assertion_action_response(_request, _claims_infos, _requested_email) do
    %{status: :success}
  end

  
  defp validate_mandatory_claims(claims_infos, requested_email) do

    claims_is_valid = if claims_infos.email == nil or claims_infos.email == "" do
      Logger.warning("The claim email is not correctly configured in the identity provider for this user #{requested_email}", [])
      false
    else
      true
    end

    claims_is_valid = if claims_infos.username == nil or claims_infos.username == "" do
      Logger.warning("The claim username is not correctly configured in the identity provider for this user #{requested_email}", [])
      false
    else
      claims_is_valid
    end

    claims_is_valid = if claims_infos.first_name == nil or claims_infos.first_name == "" do
      Logger.warning("The claim first_name is not correctly configured in the identity provider for this user #{requested_email}", [])
      false
    else
      claims_is_valid
    end

    claims_is_valid = if claims_infos.last_name == nil or claims_infos.last_name == "" do
      Logger.warning("The claim last_name is not correctly configured in the identity provider for this user #{requested_email}", [])
      false
    else
      claims_is_valid
    end

    claims_is_valid
  end
end
