"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/api/routes/auth/auth.routes.ts
var auth_routes_exports = {};
__export(auth_routes_exports, {
  authRoutes: () => authRoutes
});
module.exports = __toCommonJS(auth_routes_exports);

// src/api/routes/auth/signin.controller.ts
async function signinController(request, reply) {
  return reply.status(200).send({
    status: "ok"
  });
}
__name(signinController, "signinController");

// src/api/routes/auth/signup.controller.ts
async function signupController(request, reply) {
  return reply.status(200).send("Register");
}
__name(signupController, "signupController");

// src/api/routes/auth/auth.routes.ts
async function authRoutes(app) {
  app.get("/signin", signinController);
  app.get("/signup", signupController);
}
__name(authRoutes, "authRoutes");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  authRoutes
});
