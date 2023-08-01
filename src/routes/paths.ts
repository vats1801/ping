// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_HOME = "/home";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
  registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
  verify: path(ROOTS_AUTH, "/verify"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  newPassword: path(ROOTS_AUTH, "/new-password"),
};



export const PATH_HOME = {
  root: ROOTS_HOME,
  kanban: path(ROOTS_HOME, "/kanban"),
  calendar: path(ROOTS_HOME, "/calendar"),
  fileManager: path(ROOTS_HOME, "/files-manager"),
  permissionDenied: path(ROOTS_HOME, "/permission-denied"),
  blank: path(ROOTS_HOME, "/blank"),
  general: {
    feed: path(ROOTS_HOME, "/feed"),
    explore: path(ROOTS_HOME, "/explore"),
    rooms: path(ROOTS_HOME, "/rooms"),
    activity: path(ROOTS_HOME, "/activity"),
    profile: path(ROOTS_HOME, "/profile"),

  },
  
};

export const PATH_DOCS = {
  root: "https://docs.minimals.cc",
  changelog: "https://docs.minimals.cc/changelog",
};

export const PATH_ZONE_ON_STORE =
  "https://mui.com/store/items/zone-landing-page/";

export const PATH_MINIMAL_ON_STORE =
  "https://mui.com/store/items/minimal-dashboard/";

export const PATH_FREE_VERSION =
  "https://mui.com/store/items/minimal-dashboard-free/";

export const PATH_FIGMA_PREVIEW =
  "https://www.figma.com/file/rWMDOkMZYw2VpTdNuBBCvN/%5BPreview%5D-Minimal-Web.26.11.22?node-id=0%3A1&t=ya2mDFiuhTXXLLF1-1";
