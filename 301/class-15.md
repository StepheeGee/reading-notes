# Authentication

## Class 15: 12.15.23

Prepared 12.14.23

**Summary/Statement:** OAuth is a flexible protocol that facilitates secure, token-based access to user data without sharing passwords. It enables third-party applications to access resources on behalf of users after authentication, offering various flows to suit different authentication and authorization scenarios. 

### Reading

[What is OAuth](https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html)

[Authorization and Authentication Flows](https://auth0.com/docs/flows)


1. **What is OAuth?**
   OAuth (Open Authorization) is an open-standard authorization protocol that enables secure token-based access control to APIs and resources without sharing the user's credentials. It allows third-party applications to access user data hosted by other services (like Facebook, Google, etc.) without exposing passwords.

2. **Give an example of what using OAuth would look like.**
   Imagine logging into a website using your Google or Facebook credentials instead of creating a new account. When you click "Login with Google" or "Login with Facebook," you're redirected to the respective service's authorization page. After granting permission, the website receives an access token to access your information from the service.

3. **How does OAuth work? What are the steps that it takes to authenticate the user?**
   - OAuth involves several steps:
     - **Authorization Request:** The client requests authorization from the user via a redirect to the authorization server.
     - **User Authentication:** The user authenticates and approves the request.
     - **Access Token Request:** The client sends an access token request to the authorization server.
     - **Access Token Response:** The authorization server sends back an access token.
     - **Access Protected Resource:** The client uses the access token to access the protected resource.

4. **What is OpenID?**
   OpenID is an authentication protocol that allows users to be authenticated by certain co-operating sites (known as relying parties) using a third-party service.

5. **What is the difference between authorization and authentication?**
   - **Authentication:** The process of verifying the identity of a user, ensuring that they are who they claim to be.
   - **Authorization:** The process of allowing or denying access to specific resources or functionalities based on the user's authenticated identity and permissions.

6. **What is Authorization Code Flow?**
   Authorization Code Flow is an OAuth flow used by web applications. It involves the exchange of an authorization code for an access token, utilizing a client secret.

7. **What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?**
   Authorization Code Flow with PKCE is an enhanced security version of the Authorization Code Flow. It prevents interception of the authorization code by attackers, especially in mobile or native applications.

8. **What is Implicit Flow with Form Post?**
   Implicit Flow with Form Post is an older OAuth flow that's less secure, primarily used for single-page web applications (SPAs). It delivers tokens directly via the browser rather than through a back-end server.

9. **What is Client Credentials Flow?**
   Client Credentials Flow is an OAuth flow where the client (an application) directly authenticates itself rather than a user. It's suitable for machine-to-machine authentication.

10. **What is Device Authorization Flow?**
    Device Authorization Flow is used for devices that have limited input capabilities, such as smart TVs or game consoles. It involves the user authorizing the device via another device, like a smartphone or computer.

11. **What is Resource Owner Password Flow?**
    Resource Owner Password Flow allows users to authenticate using their username and password directly against the authorization server, providing the client with their credentials. This flow is generally less secure and not recommended unless other flows are not feasible.

Resource: ChatGPT

### Bookmark and Review

[Auth0 for single page apps](https://auth0.com/docs/libraries/auth0-react)


### Things I want to know more about

- What is [this](https://github.com/auth0/node-jsonwebtoken)?

- Are AuthO and OAuth different?