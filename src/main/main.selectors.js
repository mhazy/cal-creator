import { selectIsAuthReady, selectIsAuthorized } from "../auth";
import { createStructuredSelector } from "reselect";

export const storeConnector = createStructuredSelector({
  isAuthReady: selectIsAuthReady,
  isAuthorized: selectIsAuthorized
});
