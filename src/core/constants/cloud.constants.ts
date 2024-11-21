export const HttpStatusCodes = Object.freeze({
  // Informational
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,

  // Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  ALREADY_REPORTED: 208,
  IM_USED: 226,

  // Redirection
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  USE_PROXY: 305,
  UNUSED: 306,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,

  // Client Errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  I_AM_A_TEAPOT: 418,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_ENTITY: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,

  // Server Errors
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NOT_EXTENDED: 510,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
});

export const ResponseMessages = Object.freeze({
  // paths
  LOG_BASE_DIR: "/var/www/example.com/log",

  //////////////////////////////

  // numbers
  ONE_DAY_SECONDS: 60 * 60 * 24,
  FOUR_HOURS_SECONDS: 60 * 60 * 4,

  //////////////////////////////

  // general messages
  RES_MSG_AN_ERROR_OCCURRED_EN:
    "Sorry, something went wrong, we are working to solve the issue as soon as possible.",

  RES_MSG_INVALID_TOKEN_EN: "Your session is expired, please login.",
  RES_MSG_INVALID_HASH_EN: "Hash is not correct",
  RES_MSG_HEALTH_CHECK: "Your backend is running very well.",

  RES_MSG_NOT_FOUND_URL_EN: "Sorry, the url requested not found.",

  RES_MSG_UNAUTHORIZED_CLIENT_EN: "Unauthorized client.",

  RES_MSG_UNAUTHORIZED_ADMIN_EN: "Unauthorized to perform this request.",

  RES_MSG_WRONG_CREDENTIALS_EN: "Wrong credentials.",

  RES_MSG_PAGE_OUT_OF_BOUNDS_EN: "Page out of bounds.",

  //////////////////////////////
  //master
  RES_MSG_MASTER_ENTRY_DELETED: "Master entry deleted.",
  // manager
  RES_MSG_MANAGER_CREATED_SUCCESSFULLY_EN: "Manager created successfully.",

  RES_MSG_MANAGER_LOGIN_SUCCESSFULLY_EN: "Manager login successfully.",

  RES_MSG_MANAGER_ALREADY_EXISTS_EN: "Manager is already exists.",

  RES_MSG_MANAGER_NOT_FOUND_EN: "Manager not found.",

  RES_MSG_MANAGER_DELETED_SUCCESSFULLY_EN: "Manager deleted successfully.",

  RES_MSG_MANAGER_UPDATED_SUCCESSFULLY_EN: "Manager updated successfully.",

  //////////////////////////////

  // user
  RES_MSG_USER_CREATED_SUCCESSFULLY_EN: "User created successfully.",

  RES_MSG_USER_LOGIN_SUCCESSFULLY_EN: "User login successfully.",

  RES_MSG_USER_EMAIL_ALREADY_EXISTS_EN: "User email is already exists.",
  RES_MSG_USERNAME_ALREADY_EXISTS_EN: "Username is already exists.",

  RES_MSG_USER_NUMBER_ALREADY_EXISTS_EN: "User phone number is already exists.",

  RES_MSG_USER_NOT_FOUND_EN: "User not found.",

  RES_MSG_USER_NOT_VERIFIED_EN:
    "User not verified, please verify your account.",

  RES_MSG_USER_TOKEN_NOT_FOUND_EN: "User token not found.",

  RES_MSG_USER_DELETED_SUCCESSFULLY_EN: "User deleted successfully.",

  RES_MSG_INVALID_PASSWORD: "Invalid credentials",
  RES_MSG_USER_UPDATED_SUCCESSFULLY_EN: "User updated successfully.",

  RES_MSG_USER_FORGET_PASSWORD_CODE_SENT_SUCCESSFULLY_EN:
    "Forget password code sent successfully.",
  RES_MSG_USER_PASSWORD_UPDATED_SUCCESSFULLY_EN:
    "Password updated successfully!",
  ACCESS_TOKEN_CREATED_SUCCESSFULLY_EN: "Access Token Created",

  RES_MSG_USER_CODE_SENT_SUCCESSFULLY_EN: "Otp code sent successfully.",

  RES_MSG_USER_OTP_WRONG_EN:
    "Verification code wrong or expired, please request another one.",

  RESEND_OTP_SEND: "Re-send code sent successfully.",
  RESEND_OTP_ALREADY_SEND: "Re-send code already sent.",

  OK: "OK",
  CREATED: "CREATED",
  ACCEPTED: "ACCEPTED",
  NON_AUTHORITATIVE_INFORMATION: "NON_AUTHORITATIVE_INFORMATION",
  NO_CONTENT: "NO_CONTENT",
  RESET_CONTENT: "RESET_CONTENT",
  PARTIAL_CONTENT: "PARTIAL_CONTENT",
  MULTI_STATUS: "MULTI_STATUS",
  ALREADY_REPORTED: "ALREADY_REPORTED",
  IM_USED: "IM_USED",

  MULTIPLE_CHOICES: "MULTIPLE_CHOICES",
  MOVED_PERMANENTLY: "MOVED_PERMANENTLY",
  FOUND: "FOUND",
  SEE_OTHER: "SEE_OTHER",
  NOT_MODIFIED: "NOT_MODIFIED",
  USE_PROXY: "USE_PROXY",
  UNUSED: "UNUSED",
  TEMPORARY_REDIRECT: "TEMPORARY_REDIRECT",
  PERMANENT_REDIRECT: "PERMANENT_REDIRECT",

  BAD_REQUEST: "BAD_REQUEST",
  UNAUTHORIZED: "UNAUTHORIZED",
  PAYMENT_REQUIRED: "PAYMENT_REQUIRED",
  FORBIDDEN: "FORBIDDEN",
  NOT_FOUND: "NOT_FOUND",
  METHOD_NOT_ALLOWED: "METHOD_NOT_ALLOWED",
  NOT_ACCEPTABLE: "NOT_ACCEPTABLE",
  PROXY_AUTHENTICATION_REQUIRED: "PROXY_AUTHENTICATION_REQUIRED",
  REQUEST_TIMEOUT: "REQUEST_TIMEOUT",
  CONFLICT: "CONFLICT",
  GONE: "GONE",
  LENGTH_REQUIRED: "LENGTH_REQUIRED",
  PRECONDITION_FAILED: "PRECONDITION_FAILED",
  PAYLOAD_TOO_LARGE: "PAYLOAD_TOO_LARGE",
  URI_TOO_LONG: "URI_TOO_LONG",
  UNSUPPORTED_MEDIA_TYPE: "UNSUPPORTED_MEDIA_TYPE",
  RANGE_NOT_SATISFIABLE: "RANGE_NOT_SATISFIABLE",
  EXPECTATION_FAILED: "EXPECTATION_FAILED",
  I_AM_A_TEAPOT: "I_AM_A_TEAPOT",
  MISDIRECTED_REQUEST: "MISDIRECTED_REQUEST",
  UNPROCESSABLE_ENTITY: "UNPROCESSABLE_ENTITY",
  LOCKED: "LOCKED",
  FAILED_DEPENDENCY: "FAILED_DEPENDENCY",
  TOO_EARLY: "TOO_EARLY",
  UPGRADE_REQUIRED: "UPGRADE_REQUIRED",
  PRECONDITION_REQUIRED: "PRECONDITION_REQUIRED",
  TOO_MANY_REQUESTS: "TOO_MANY_REQUESTS",
  REQUEST_HEADER_FIELDS_TOO_LARGE: "REQUEST_HEADER_FIELDS_TOO_LARGE",
  UNAVAILABLE_FOR_LEGAL_REASONS: "UNAVAILABLE_FOR_LEGAL_REASONS",

  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_IMPLEMENTED: "NOT_IMPLEMENTED",
  BAD_GATEWAY: "BAD_GATEWAY",
  SERVICE_UNAVAILABLE: "SERVICE_UNAVAILABLE",
  GATEWAY_TIMEOUT: "GATEWAY_TIMEOUT",
  HTTP_VERSION_NOT_SUPPORTED: "HTTP_VERSION_NOT_SUPPORTED",
  VARIANT_ALSO_NEGOTIATES: "VARIANT_ALSO_NEGOTIATES",
  INSUFFICIENT_STORAGE: "INSUFFICIENT_STORAGE",
  LOOP_DETECTED: "LOOP_DETECTED",
  NOT_EXTENDED: "NOT_EXTENDED",
  NETWORK_AUTHENTICATION_REQUIRED: "NETWORK_AUTHENTICATION_REQUIRED",
});
