"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/core/domain/entities/user.ts
var user_exports = {};
__export(user_exports, {
  User: () => User
});
module.exports = __toCommonJS(user_exports);
var import_typeorm = require("typeorm");
function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate, "_ts_decorate");
function _ts_metadata(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata, "_ts_metadata");
var _User = class _User {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "firstname");
    __publicField(this, "lastname");
    __publicField(this, "email");
    __publicField(this, "password");
    __publicField(this, "avatar");
    __publicField(this, "createdAt");
  }
};
__name(_User, "User");
var User = _User;
_ts_decorate([
  (0, import_typeorm.PrimaryGeneratedColumn)("uuid"),
  _ts_metadata("design:type", String)
], User.prototype, "id", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    type: "varchar",
    nullable: false
  }),
  _ts_metadata("design:type", String)
], User.prototype, "firstname", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    type: "varchar",
    nullable: true
  }),
  _ts_metadata("design:type", String)
], User.prototype, "lastname", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    type: "varchar",
    unique: true
  }),
  _ts_metadata("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    type: "varchar",
    nullable: false
  }),
  _ts_metadata("design:type", String)
], User.prototype, "password", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    type: "varchar",
    nullable: true
  }),
  _ts_metadata("design:type", String)
], User.prototype, "avatar", void 0);
_ts_decorate([
  (0, import_typeorm.Column)({
    type: "date",
    default: /* @__PURE__ */ __name(() => "CURRENT_TIMESTAMP", "default")
  }),
  _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "createdAt", void 0);
User = _ts_decorate([
  (0, import_typeorm.Entity)("users")
], User);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  User
});
