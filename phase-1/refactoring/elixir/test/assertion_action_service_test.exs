defmodule Refactoring.AssertionActionServiceTest do
  use ExUnit.Case
  alias Refactoring.AssertionActionService

  test "valid assertion with claims required" do
    request = %{is_claims_required: true}
    claims_infos = %{email: "test@test.fr", username: "test", first_name: "test", last_name: "test"}
    response = AssertionActionService.get_assertion_action_response(request, claims_infos, "test@test.fr")
    assert response.status == :success
  end

  test "invalid assertion with claims required" do
    request = %{is_claims_required: true}
    claims_infos = %{email: "", username: "", first_name: "", last_name: ""}
    response = AssertionActionService.get_assertion_action_response(request, claims_infos, "test@test.fr")
    assert response.status == :error
  end

  test "valid assertion with claims infos empty but claims not required" do
    request = %{is_claims_required: false}
    claims_infos = %{email: "", username: "", first_name: "", last_name: ""}
    response = AssertionActionService.get_assertion_action_response(request, claims_infos, "test@test.fr")
    assert response.status == :success
  end
end
