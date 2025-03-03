"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app.ts
var app_exports = {};
__export(app_exports, {
  app: () => app
});
module.exports = __toCommonJS(app_exports);
var import_fastify = __toESM(require("fastify"), 1);

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
async function authRoutes(app2) {
  app2.get("/signin", signinController);
  app2.get("/signup", signupController);
}
__name(authRoutes, "authRoutes");

// src/app.ts
var app = (0, import_fastify.default)({
  logger: true
});
app.get("/health", async () => {
  return "Funcionando...";
});
app.register(authRoutes);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
