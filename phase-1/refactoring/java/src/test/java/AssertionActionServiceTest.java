import org.junit.jupiter.api.Test;
import com.example.refactoring.*;

import static org.junit.jupiter.api.Assertions.*;

public class AssertionActionServiceTest {
    private final AssertionActionService service = new AssertionActionService();

    @Test
    public void testValidAssertion_WithClaimsRequired() {
        AssertionConsumerServiceRequest request = new AssertionConsumerServiceRequest();
        request.setClaimsRequired(true);

        ClaimsInfos claimsInfos = new ClaimsInfos();
        claimsInfos.setEmail("test@test.fr");
        claimsInfos.setUserName("test");
        claimsInfos.setFirstName("test");
        claimsInfos.setLastName("test");

        AssertionActionResponse response = service.getAssertionActionResponse(request, claimsInfos, "test@test.fr");
        assertEquals(AssertionActionStatus.SUCCESS, response.getStatus());
    }

    @Test
    public void testInvalidAssertion_WithClaimsRequired() {
        AssertionConsumerServiceRequest request = new AssertionConsumerServiceRequest();
        request.setClaimsRequired(true);

        ClaimsInfos claimsInfos = new ClaimsInfos();
        claimsInfos.setEmail("");
        claimsInfos.setUserName("");
        claimsInfos.setFirstName("");
        claimsInfos.setLastName("");

        AssertionActionResponse response = service.getAssertionActionResponse(request, claimsInfos, "test@test.fr");
        assertEquals(AssertionActionStatus.ERROR, response.getStatus());
    }

    @Test
    public void testValidAssertion_WithClaimsInfos_Empty_But_ClaimsNotRequired() {
        AssertionConsumerServiceRequest request = new AssertionConsumerServiceRequest();
        request.setClaimsRequired(false);

        ClaimsInfos claimsInfos = new ClaimsInfos();
        claimsInfos.setEmail("");
        claimsInfos.setUserName("");
        claimsInfos.setFirstName("");
        claimsInfos.setLastName("");

        AssertionActionResponse response = service.getAssertionActionResponse(request, claimsInfos, "test@test.fr");
        assertEquals(AssertionActionStatus.SUCCESS, response.getStatus());
    }

    @Test
    public void testInvalidAssertion_WithSpecificClaimMissing() {
        AssertionConsumerServiceRequest request = new AssertionConsumerServiceRequest();
        request.setClaimsRequired(true);

        ClaimsInfos claimsInfos = new ClaimsInfos();
        claimsInfos.setEmail("");
        claimsInfos.setUserName("username");
        claimsInfos.setFirstName("firstname");
        claimsInfos.setLastName("lastname");

        AssertionActionResponse response = service.getAssertionActionResponse(request, claimsInfos, "test@test.com");
        assertEquals(AssertionActionStatus.ERROR, response.getStatus());
    }
}