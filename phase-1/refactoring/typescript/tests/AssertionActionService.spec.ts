import { AssertionActionService } from '../src/AssertionActionService';
import { AssertionConsumerServiceRequest, ClaimsInfos } from '../src/AssertionActionService';

describe('AssertionActionService', () => {
    let service: AssertionActionService;

    beforeEach(() => {
        const mockLogger = {
            log: jest.fn(),
            error: jest.fn(),
            warn: jest.fn(),
            info: jest.fn(),
            debug: jest.fn()
        };
        service = new AssertionActionService(mockLogger);
    });

    describe('getAssertionActionResponse', () => {
        it('should return success when claims are not required', () => {
            const request: AssertionConsumerServiceRequest = {
                isClaimsRequired: false,
            };
            const claimsInfos: ClaimsInfos = {};
            const requestedEmail = '';

            const response = service.getAssertionActionResponse(request, claimsInfos, requestedEmail);

            expect(response.status).toBe('Success');
        });

        it('should return error when claims are required but not configured correctly', () => {
            const request: AssertionConsumerServiceRequest = {
                isClaimsRequired: true,
            };
            const claimsInfos: ClaimsInfos = {};
            const requestedEmail = 'test@example.com';

            const response = service.getAssertionActionResponse(request, claimsInfos, requestedEmail);

            expect(response.status).toBe('Error');
            expect(response.message).toBe(
                'The following mandatory claims are not correctly configured in the identity provider: ' +
                'email (UNDEFINED), userName (UNDEFINED), firstName (UNDEFINED), lastName (UNDEFINED)'
            );
        });

        it('should return success when claims are required and configured correctly', () => {
            const request: AssertionConsumerServiceRequest = {
                isClaimsRequired: true,
            };
            const claimsInfos: ClaimsInfos = {
                email: 'test@example.com',
                userName: 'test',
                firstName: 'test',
                lastName: 'test'
            };
            const requestedEmail = 'test@example.com';

            const response = service.getAssertionActionResponse(request, claimsInfos, requestedEmail);

            expect(response.status).toBe('Success');
        });
    });

    it('should return false when all mandatory fields are missing', () => {
        const claimsInfos: ClaimsInfos = {};

        const response = service.getAssertionActionResponse(
            { isClaimsRequired: true },
            claimsInfos,
            'test@example.com'
        );

        expect(response.status).toBe('Error');
    });

    it('should return false when fields are empty strings', () => {
        const claimsInfos: ClaimsInfos = {
            email: '',
            userName: '',
            firstName: '',
            lastName: ''
        };

        const response = service.getAssertionActionResponse(
            { isClaimsRequired: true },
            claimsInfos,
            'test@example.com'
        );

        expect(response.status).toBe('Error');
    });

    it('should return false when some fields are undefined', () => {
        const claimsInfos: ClaimsInfos = {
            email: 'test@example.com',
            userName: undefined,
            firstName: 'test',
            lastName: undefined
        };

        const response = service.getAssertionActionResponse(
            { isClaimsRequired: true },
            claimsInfos,
            'test@example.com'
        );

        expect(response.status).toBe('Error');
    });

    it('should return false when email and username are null', () => {
        const claimsInfos: ClaimsInfos = {
            email: null,
            userName: null,
            firstName: 'John',
            lastName: 'Doe'
        };

        const response = service.getAssertionActionResponse(
            { isClaimsRequired: true },
            claimsInfos,
            'test@example.com'
        );

        expect(response.status).toBe('Error');
    });

    it('should return false when firstName is empty and lastName is null', () => {
        const claimsInfos: ClaimsInfos = {
            email: 'test@example.com',
            userName: 'testuser',
            firstName: '',
            lastName: null
        };

        const response = service.getAssertionActionResponse(
            { isClaimsRequired: true },
            claimsInfos,
            'test@example.com'
        );

        expect(response.status).toBe('Error');
    });
});
