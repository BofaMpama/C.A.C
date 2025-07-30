import { provider } from "./auth_google_provider_create";
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});