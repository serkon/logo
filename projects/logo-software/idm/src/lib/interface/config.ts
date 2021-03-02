import { AuthorizationType } from './authorization-type';

/**
 * IDM configuration
 */
export interface IdmConfig {
  /**
   * IDM API URL. Default is 'http://dev-linux.logo-paas.com:5100'
   */
  URI?: string;

  /**
   * User API endpoints and options
   */
  USER?: {
    /**
     * User list API url. Default is 'api/users/list'
     */
    LIST: string;
  };

  /**
   * Tenant API endpoints and options
   */
  TENANT?: {
    /**
     * Get default Tenant API. Default is 'api/users/{userId}/defaulttenant'
     */
    DEFAULT: string;
  };

  /**
   * Token API endpoints and options
   */
  TOKEN?: {
    /**
     * Token authorization type. There are two types which are IMPLICIT or CODE. Default is IMPLICIT.
     */
    AUTH_TYPE?: AuthorizationType,
    /**
     * Token get API address. Default is 'api/Token/GetToken'. But it was not holds on IDM servers. It must be define BackEnd logic. Because this service needs secret_key also.
     */
    GET?: string,
    /**
     * Token validate API address. Default is 'api/token/validate'.
     */
    VALIDATE?: string,
  };

  /**
   * Direction options
   */
  DIRECTION?: {
    /**
     * If user logged in but don't have any roles matched to access requested page, maybe wants to be client redirected to the `unauthorized` page.
     * If it set to true it will redirect below defined 403 path. Default is true.
     */
    REDIRECT?: boolean,
    /**
     * 403 unauthorized page URL. Client will be redirected if DIRECTION.REDIRECT sets to true.
     */
    '403'?: string,
    /**
     * 500 server error pages URL. Client will be redirected if DIRECTION.REDIRECT sets to true.
     */
    '500'?: string,
  };

  /**
   * If client needs their own login page with this option it will be able.
   */
  LOGIN_PAGE?: {
    /**
     * Login page url. Default is '/login'
     */
    URI?: string,
    /**
     * Custom login page will be availabe if set true. Default is false.
     */
    STATUS?: boolean,
  };

  /**
   * After user logged in on IDM login page client redirected to provided to path with RETURN_URI. Default is 'http://localhost:4200'
   */
  RETURN_URI: string,
}
