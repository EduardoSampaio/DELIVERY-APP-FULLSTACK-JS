"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// node_modules/reflect-metadata/Reflect.js
var require_Reflect = __commonJS({
  "node_modules/reflect-metadata/Reflect.js"() {
    "use strict";
    var Reflect2;
    (function(Reflect3) {
      (function(factory) {
        var root = typeof globalThis === "object" ? globalThis : typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
        var exporter = makeExporter(Reflect3);
        if (typeof root.Reflect !== "undefined") {
          exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter, root);
        if (typeof root.Reflect === "undefined") {
          root.Reflect = Reflect3;
        }
        function makeExporter(target, previous) {
          return function(key, value) {
            Object.defineProperty(target, key, {
              configurable: true,
              writable: true,
              value
            });
            if (previous) previous(key, value);
          };
        }
        __name(makeExporter, "makeExporter");
        function functionThis() {
          try {
            return Function("return this;")();
          } catch (_) {
          }
        }
        __name(functionThis, "functionThis");
        function indirectEvalThis() {
          try {
            return (0, eval)("(function() { return this; })()");
          } catch (_) {
          }
        }
        __name(indirectEvalThis, "indirectEvalThis");
        function sloppyModeThis() {
          return functionThis() || indirectEvalThis();
        }
        __name(sloppyModeThis, "sloppyModeThis");
      })(function(exporter, root) {
        var hasOwn = Object.prototype.hasOwnProperty;
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function";
        var supportsProto = {
          __proto__: []
        } instanceof Array;
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
          // create an object in dictionary mode (a.k.a. "slow" mode in v8)
          create: supportsCreate ? function() {
            return MakeDictionary(/* @__PURE__ */ Object.create(null));
          } : supportsProto ? function() {
            return MakeDictionary({
              __proto__: null
            });
          } : function() {
            return MakeDictionary({});
          },
          has: downLevel ? function(map, key) {
            return hasOwn.call(map, key);
          } : function(map, key) {
            return key in map;
          },
          get: downLevel ? function(map, key) {
            return hasOwn.call(map, key) ? map[key] : void 0;
          } : function(map, key) {
            return map[key];
          }
        };
        var functionPrototype = Object.getPrototypeOf(Function);
        var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
        var metadataRegistry = GetOrCreateMetadataRegistry();
        var metadataProvider = CreateMetadataProvider(metadataRegistry);
        function decorate(decorators, target, propertyKey, attributes) {
          if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators)) throw new TypeError();
            if (!IsObject(target)) throw new TypeError();
            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
            if (IsNull(attributes)) attributes = void 0;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(decorators, target, propertyKey, attributes);
          } else {
            if (!IsArray(decorators)) throw new TypeError();
            if (!IsConstructor(target)) throw new TypeError();
            return DecorateConstructor(decorators, target);
          }
        }
        __name(decorate, "decorate");
        exporter("decorate", decorate);
        function metadata(metadataKey, metadataValue) {
          function decorator(target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          __name(decorator, "decorator");
          return decorator;
        }
        __name(metadata, "metadata");
        exporter("metadata", metadata);
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        __name(defineMetadata, "defineMetadata");
        exporter("defineMetadata", defineMetadata);
        function hasMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        __name(hasMetadata, "hasMetadata");
        exporter("hasMetadata", hasMetadata);
        function hasOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        __name(hasOwnMetadata, "hasOwnMetadata");
        exporter("hasOwnMetadata", hasOwnMetadata);
        function getMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        __name(getMetadata, "getMetadata");
        exporter("getMetadata", getMetadata);
        function getOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        __name(getOwnMetadata, "getOwnMetadata");
        exporter("getOwnMetadata", getOwnMetadata);
        function getMetadataKeys(target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryMetadataKeys(target, propertyKey);
        }
        __name(getMetadataKeys, "getMetadataKeys");
        exporter("getMetadataKeys", getMetadataKeys);
        function getOwnMetadataKeys(target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        __name(getOwnMetadataKeys, "getOwnMetadataKeys");
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        function deleteMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
          var provider = GetMetadataProvider(
            target,
            propertyKey,
            /*Create*/
            false
          );
          if (IsUndefined(provider)) return false;
          return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
        }
        __name(deleteMetadata, "deleteMetadata");
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsConstructor(decorated)) throw new TypeError();
              target = decorated;
            }
          }
          return target;
        }
        __name(DecorateConstructor, "DecorateConstructor");
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsObject(decorated)) throw new TypeError();
              descriptor = decorated;
            }
          }
          return descriptor;
        }
        __name(DecorateProperty, "DecorateProperty");
        function OrdinaryHasMetadata(MetadataKey, O, P) {
          var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn2) return true;
          var parent = OrdinaryGetPrototypeOf(O);
          if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
          return false;
        }
        __name(OrdinaryHasMetadata, "OrdinaryHasMetadata");
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(provider)) return false;
          return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
        }
        __name(OrdinaryHasOwnMetadata, "OrdinaryHasOwnMetadata");
        function OrdinaryGetMetadata(MetadataKey, O, P) {
          var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn2) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
          var parent = OrdinaryGetPrototypeOf(O);
          if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
          return void 0;
        }
        __name(OrdinaryGetMetadata, "OrdinaryGetMetadata");
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(provider)) return;
          return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        __name(OrdinaryGetOwnMetadata, "OrdinaryGetOwnMetadata");
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            true
          );
          provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
        }
        __name(OrdinaryDefineOwnMetadata, "OrdinaryDefineOwnMetadata");
        function OrdinaryMetadataKeys(O, P) {
          var ownKeys = OrdinaryOwnMetadataKeys(O, P);
          var parent = OrdinaryGetPrototypeOf(O);
          if (parent === null) return ownKeys;
          var parentKeys = OrdinaryMetadataKeys(parent, P);
          if (parentKeys.length <= 0) return ownKeys;
          if (ownKeys.length <= 0) return parentKeys;
          var set = new _Set();
          var keys = [];
          for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          return keys;
        }
        __name(OrdinaryMetadataKeys, "OrdinaryMetadataKeys");
        function OrdinaryOwnMetadataKeys(O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*create*/
            false
          );
          if (!provider) {
            return [];
          }
          return provider.OrdinaryOwnMetadataKeys(O, P);
        }
        __name(OrdinaryOwnMetadataKeys, "OrdinaryOwnMetadataKeys");
        function Type(x) {
          if (x === null) return 1;
          switch (typeof x) {
            case "undefined":
              return 0;
            case "boolean":
              return 2;
            case "string":
              return 3;
            case "symbol":
              return 4;
            case "number":
              return 5;
            case "object":
              return x === null ? 1 : 6;
            default:
              return 6;
          }
        }
        __name(Type, "Type");
        function IsUndefined(x) {
          return x === void 0;
        }
        __name(IsUndefined, "IsUndefined");
        function IsNull(x) {
          return x === null;
        }
        __name(IsNull, "IsNull");
        function IsSymbol(x) {
          return typeof x === "symbol";
        }
        __name(IsSymbol, "IsSymbol");
        function IsObject(x) {
          return typeof x === "object" ? x !== null : typeof x === "function";
        }
        __name(IsObject, "IsObject");
        function ToPrimitive(input, PreferredType) {
          switch (Type(input)) {
            case 0:
              return input;
            case 1:
              return input;
            case 2:
              return input;
            case 3:
              return input;
            case 4:
              return input;
            case 5:
              return input;
          }
          var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
          var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
          if (exoticToPrim !== void 0) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result)) throw new TypeError();
            return result;
          }
          return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        __name(ToPrimitive, "ToPrimitive");
        function OrdinaryToPrimitive(O, hint) {
          if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
              var result = toString_1.call(O);
              if (!IsObject(result)) return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O);
              if (!IsObject(result)) return result;
            }
          } else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O);
              if (!IsObject(result)) return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
              var result = toString_2.call(O);
              if (!IsObject(result)) return result;
            }
          }
          throw new TypeError();
        }
        __name(OrdinaryToPrimitive, "OrdinaryToPrimitive");
        function ToBoolean(argument) {
          return !!argument;
        }
        __name(ToBoolean, "ToBoolean");
        function ToString(argument) {
          return "" + argument;
        }
        __name(ToString, "ToString");
        function ToPropertyKey(argument) {
          var key = ToPrimitive(
            argument,
            3
            /* String */
          );
          if (IsSymbol(key)) return key;
          return ToString(key);
        }
        __name(ToPropertyKey, "ToPropertyKey");
        function IsArray(argument) {
          return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
        }
        __name(IsArray, "IsArray");
        function IsCallable(argument) {
          return typeof argument === "function";
        }
        __name(IsCallable, "IsCallable");
        function IsConstructor(argument) {
          return typeof argument === "function";
        }
        __name(IsConstructor, "IsConstructor");
        function IsPropertyKey(argument) {
          switch (Type(argument)) {
            case 3:
              return true;
            case 4:
              return true;
            default:
              return false;
          }
        }
        __name(IsPropertyKey, "IsPropertyKey");
        function SameValueZero(x, y) {
          return x === y || x !== x && y !== y;
        }
        __name(SameValueZero, "SameValueZero");
        function GetMethod(V, P) {
          var func = V[P];
          if (func === void 0 || func === null) return void 0;
          if (!IsCallable(func)) throw new TypeError();
          return func;
        }
        __name(GetMethod, "GetMethod");
        function GetIterator(obj) {
          var method = GetMethod(obj, iteratorSymbol);
          if (!IsCallable(method)) throw new TypeError();
          var iterator = method.call(obj);
          if (!IsObject(iterator)) throw new TypeError();
          return iterator;
        }
        __name(GetIterator, "GetIterator");
        function IteratorValue(iterResult) {
          return iterResult.value;
        }
        __name(IteratorValue, "IteratorValue");
        function IteratorStep(iterator) {
          var result = iterator.next();
          return result.done ? false : result;
        }
        __name(IteratorStep, "IteratorStep");
        function IteratorClose(iterator) {
          var f = iterator["return"];
          if (f) f.call(iterator);
        }
        __name(IteratorClose, "IteratorClose");
        function OrdinaryGetPrototypeOf(O) {
          var proto = Object.getPrototypeOf(O);
          if (typeof O !== "function" || O === functionPrototype) return proto;
          if (proto !== functionPrototype) return proto;
          var prototype = O.prototype;
          var prototypeProto = prototype && Object.getPrototypeOf(prototype);
          if (prototypeProto == null || prototypeProto === Object.prototype) return proto;
          var constructor = prototypeProto.constructor;
          if (typeof constructor !== "function") return proto;
          if (constructor === O) return proto;
          return constructor;
        }
        __name(OrdinaryGetPrototypeOf, "OrdinaryGetPrototypeOf");
        function CreateMetadataRegistry() {
          var fallback;
          if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
            fallback = CreateFallbackProvider(root.Reflect);
          }
          var first;
          var second;
          var rest;
          var targetProviderMap = new _WeakMap();
          var registry = {
            registerProvider,
            getProvider,
            setProvider
          };
          return registry;
          function registerProvider(provider) {
            if (!Object.isExtensible(registry)) {
              throw new Error("Cannot add provider to a frozen registry.");
            }
            switch (true) {
              case fallback === provider:
                break;
              case IsUndefined(first):
                first = provider;
                break;
              case first === provider:
                break;
              case IsUndefined(second):
                second = provider;
                break;
              case second === provider:
                break;
              default:
                if (rest === void 0) rest = new _Set();
                rest.add(provider);
                break;
            }
          }
          __name(registerProvider, "registerProvider");
          function getProviderNoCache(O, P) {
            if (!IsUndefined(first)) {
              if (first.isProviderFor(O, P)) return first;
              if (!IsUndefined(second)) {
                if (second.isProviderFor(O, P)) return first;
                if (!IsUndefined(rest)) {
                  var iterator = GetIterator(rest);
                  while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                      return void 0;
                    }
                    var provider = IteratorValue(next);
                    if (provider.isProviderFor(O, P)) {
                      IteratorClose(iterator);
                      return provider;
                    }
                  }
                }
              }
            }
            if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
              return fallback;
            }
            return void 0;
          }
          __name(getProviderNoCache, "getProviderNoCache");
          function getProvider(O, P) {
            var providerMap = targetProviderMap.get(O);
            var provider;
            if (!IsUndefined(providerMap)) {
              provider = providerMap.get(P);
            }
            if (!IsUndefined(provider)) {
              return provider;
            }
            provider = getProviderNoCache(O, P);
            if (!IsUndefined(provider)) {
              if (IsUndefined(providerMap)) {
                providerMap = new _Map();
                targetProviderMap.set(O, providerMap);
              }
              providerMap.set(P, provider);
            }
            return provider;
          }
          __name(getProvider, "getProvider");
          function hasProvider(provider) {
            if (IsUndefined(provider)) throw new TypeError();
            return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
          }
          __name(hasProvider, "hasProvider");
          function setProvider(O, P, provider) {
            if (!hasProvider(provider)) {
              throw new Error("Metadata provider not registered.");
            }
            var existingProvider = getProvider(O, P);
            if (existingProvider !== provider) {
              if (!IsUndefined(existingProvider)) {
                return false;
              }
              var providerMap = targetProviderMap.get(O);
              if (IsUndefined(providerMap)) {
                providerMap = new _Map();
                targetProviderMap.set(O, providerMap);
              }
              providerMap.set(P, provider);
            }
            return true;
          }
          __name(setProvider, "setProvider");
        }
        __name(CreateMetadataRegistry, "CreateMetadataRegistry");
        function GetOrCreateMetadataRegistry() {
          var metadataRegistry2;
          if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
            metadataRegistry2 = root.Reflect[registrySymbol];
          }
          if (IsUndefined(metadataRegistry2)) {
            metadataRegistry2 = CreateMetadataRegistry();
          }
          if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
            Object.defineProperty(root.Reflect, registrySymbol, {
              enumerable: false,
              configurable: false,
              writable: false,
              value: metadataRegistry2
            });
          }
          return metadataRegistry2;
        }
        __name(GetOrCreateMetadataRegistry, "GetOrCreateMetadataRegistry");
        function CreateMetadataProvider(registry) {
          var metadata2 = new _WeakMap();
          var provider = {
            isProviderFor: /* @__PURE__ */ __name(function(O, P) {
              var targetMetadata = metadata2.get(O);
              if (IsUndefined(targetMetadata)) return false;
              return targetMetadata.has(P);
            }, "isProviderFor"),
            OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
            OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
            OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
            OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
            OrdinaryDeleteMetadata
          };
          metadataRegistry.registerProvider(provider);
          return provider;
          function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = metadata2.get(O);
            var createdTargetMetadata = false;
            if (IsUndefined(targetMetadata)) {
              if (!Create) return void 0;
              targetMetadata = new _Map();
              metadata2.set(O, targetMetadata);
              createdTargetMetadata = true;
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
              if (!Create) return void 0;
              metadataMap = new _Map();
              targetMetadata.set(P, metadataMap);
              if (!registry.setProvider(O, P, provider)) {
                targetMetadata.delete(P);
                if (createdTargetMetadata) {
                  metadata2.delete(O);
                }
                throw new Error("Wrong provider for target.");
              }
            }
            return metadataMap;
          }
          __name(GetOrCreateMetadataMap, "GetOrCreateMetadataMap");
          function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap)) return false;
            return ToBoolean(metadataMap.has(MetadataKey));
          }
          __name(OrdinaryHasOwnMetadata2, "OrdinaryHasOwnMetadata");
          function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap)) return void 0;
            return metadataMap.get(MetadataKey);
          }
          __name(OrdinaryGetOwnMetadata2, "OrdinaryGetOwnMetadata");
          function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              true
            );
            metadataMap.set(MetadataKey, MetadataValue);
          }
          __name(OrdinaryDefineOwnMetadata2, "OrdinaryDefineOwnMetadata");
          function OrdinaryOwnMetadataKeys2(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap)) return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
              var next = IteratorStep(iterator);
              if (!next) {
                keys.length = k;
                return keys;
              }
              var nextValue = IteratorValue(next);
              try {
                keys[k] = nextValue;
              } catch (e) {
                try {
                  IteratorClose(iterator);
                } finally {
                  throw e;
                }
              }
              k++;
            }
          }
          __name(OrdinaryOwnMetadataKeys2, "OrdinaryOwnMetadataKeys");
          function OrdinaryDeleteMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap)) return false;
            if (!metadataMap.delete(MetadataKey)) return false;
            if (metadataMap.size === 0) {
              var targetMetadata = metadata2.get(O);
              if (!IsUndefined(targetMetadata)) {
                targetMetadata.delete(P);
                if (targetMetadata.size === 0) {
                  metadata2.delete(targetMetadata);
                }
              }
            }
            return true;
          }
          __name(OrdinaryDeleteMetadata, "OrdinaryDeleteMetadata");
        }
        __name(CreateMetadataProvider, "CreateMetadataProvider");
        function CreateFallbackProvider(reflect) {
          var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
          var metadataOwner = new _WeakMap();
          var provider = {
            isProviderFor: /* @__PURE__ */ __name(function(O, P) {
              var metadataPropertySet = metadataOwner.get(O);
              if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
                return true;
              }
              if (getOwnMetadataKeys2(O, P).length) {
                if (IsUndefined(metadataPropertySet)) {
                  metadataPropertySet = new _Set();
                  metadataOwner.set(O, metadataPropertySet);
                }
                metadataPropertySet.add(P);
                return true;
              }
              return false;
            }, "isProviderFor"),
            OrdinaryDefineOwnMetadata: defineMetadata2,
            OrdinaryHasOwnMetadata: hasOwnMetadata2,
            OrdinaryGetOwnMetadata: getOwnMetadata2,
            OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
            OrdinaryDeleteMetadata: deleteMetadata2
          };
          return provider;
        }
        __name(CreateFallbackProvider, "CreateFallbackProvider");
        function GetMetadataProvider(O, P, Create) {
          var registeredProvider = metadataRegistry.getProvider(O, P);
          if (!IsUndefined(registeredProvider)) {
            return registeredProvider;
          }
          if (Create) {
            if (metadataRegistry.setProvider(O, P, metadataProvider)) {
              return metadataProvider;
            }
            throw new Error("Illegal state.");
          }
          return void 0;
        }
        __name(GetMetadataProvider, "GetMetadataProvider");
        function CreateMapPolyfill() {
          var cacheSentinel = {};
          var arraySentinel = [];
          var MapIterator = (
            /** @class */
            function() {
              function MapIterator2(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
              }
              __name(MapIterator2, "MapIterator");
              MapIterator2.prototype["@@iterator"] = function() {
                return this;
              };
              MapIterator2.prototype[iteratorSymbol] = function() {
                return this;
              };
              MapIterator2.prototype.next = function() {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                  var result = this._selector(this._keys[index], this._values[index]);
                  if (index + 1 >= this._keys.length) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  } else {
                    this._index++;
                  }
                  return {
                    value: result,
                    done: false
                  };
                }
                return {
                  value: void 0,
                  done: true
                };
              };
              MapIterator2.prototype.throw = function(error) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                throw error;
              };
              MapIterator2.prototype.return = function(value) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                return {
                  value,
                  done: true
                };
              };
              return MapIterator2;
            }()
          );
          var Map1 = (
            /** @class */
            function() {
              function Map12() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              __name(Map12, "Map1");
              Object.defineProperty(Map12.prototype, "size", {
                get: /* @__PURE__ */ __name(function() {
                  return this._keys.length;
                }, "get"),
                enumerable: true,
                configurable: true
              });
              Map12.prototype.has = function(key) {
                return this._find(
                  key,
                  /*insert*/
                  false
                ) >= 0;
              };
              Map12.prototype.get = function(key) {
                var index = this._find(
                  key,
                  /*insert*/
                  false
                );
                return index >= 0 ? this._values[index] : void 0;
              };
              Map12.prototype.set = function(key, value) {
                var index = this._find(
                  key,
                  /*insert*/
                  true
                );
                this._values[index] = value;
                return this;
              };
              Map12.prototype.delete = function(key) {
                var index = this._find(
                  key,
                  /*insert*/
                  false
                );
                if (index >= 0) {
                  var size = this._keys.length;
                  for (var i = index + 1; i < size; i++) {
                    this._keys[i - 1] = this._keys[i];
                    this._values[i - 1] = this._values[i];
                  }
                  this._keys.length--;
                  this._values.length--;
                  if (SameValueZero(key, this._cacheKey)) {
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                  }
                  return true;
                }
                return false;
              };
              Map12.prototype.clear = function() {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              };
              Map12.prototype.keys = function() {
                return new MapIterator(this._keys, this._values, getKey);
              };
              Map12.prototype.values = function() {
                return new MapIterator(this._keys, this._values, getValue);
              };
              Map12.prototype.entries = function() {
                return new MapIterator(this._keys, this._values, getEntry);
              };
              Map12.prototype["@@iterator"] = function() {
                return this.entries();
              };
              Map12.prototype[iteratorSymbol] = function() {
                return this.entries();
              };
              Map12.prototype._find = function(key, insert) {
                if (!SameValueZero(this._cacheKey, key)) {
                  this._cacheIndex = -1;
                  for (var i = 0; i < this._keys.length; i++) {
                    if (SameValueZero(this._keys[i], key)) {
                      this._cacheIndex = i;
                      break;
                    }
                  }
                }
                if (this._cacheIndex < 0 && insert) {
                  this._cacheIndex = this._keys.length;
                  this._keys.push(key);
                  this._values.push(void 0);
                }
                return this._cacheIndex;
              };
              return Map12;
            }()
          );
          return Map1;
          function getKey(key, _) {
            return key;
          }
          __name(getKey, "getKey");
          function getValue(_, value) {
            return value;
          }
          __name(getValue, "getValue");
          function getEntry(key, value) {
            return [
              key,
              value
            ];
          }
          __name(getEntry, "getEntry");
        }
        __name(CreateMapPolyfill, "CreateMapPolyfill");
        function CreateSetPolyfill() {
          var Set1 = (
            /** @class */
            function() {
              function Set12() {
                this._map = new _Map();
              }
              __name(Set12, "Set1");
              Object.defineProperty(Set12.prototype, "size", {
                get: /* @__PURE__ */ __name(function() {
                  return this._map.size;
                }, "get"),
                enumerable: true,
                configurable: true
              });
              Set12.prototype.has = function(value) {
                return this._map.has(value);
              };
              Set12.prototype.add = function(value) {
                return this._map.set(value, value), this;
              };
              Set12.prototype.delete = function(value) {
                return this._map.delete(value);
              };
              Set12.prototype.clear = function() {
                this._map.clear();
              };
              Set12.prototype.keys = function() {
                return this._map.keys();
              };
              Set12.prototype.values = function() {
                return this._map.keys();
              };
              Set12.prototype.entries = function() {
                return this._map.entries();
              };
              Set12.prototype["@@iterator"] = function() {
                return this.keys();
              };
              Set12.prototype[iteratorSymbol] = function() {
                return this.keys();
              };
              return Set12;
            }()
          );
          return Set1;
        }
        __name(CreateSetPolyfill, "CreateSetPolyfill");
        function CreateWeakMapPolyfill() {
          var UUID_SIZE = 16;
          var keys = HashMap.create();
          var rootKey = CreateUniqueKey();
          return (
            /** @class */
            function() {
              function WeakMap1() {
                this._key = CreateUniqueKey();
              }
              __name(WeakMap1, "WeakMap1");
              WeakMap1.prototype.has = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? HashMap.has(table, this._key) : false;
              };
              WeakMap1.prototype.get = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? HashMap.get(table, this._key) : void 0;
              };
              WeakMap1.prototype.set = function(target, value) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  true
                );
                table[this._key] = value;
                return this;
              };
              WeakMap1.prototype.delete = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? delete table[this._key] : false;
              };
              WeakMap1.prototype.clear = function() {
                this._key = CreateUniqueKey();
              };
              return WeakMap1;
            }()
          );
          function CreateUniqueKey() {
            var key;
            do
              key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
          }
          __name(CreateUniqueKey, "CreateUniqueKey");
          function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
              if (!create) return void 0;
              Object.defineProperty(target, rootKey, {
                value: HashMap.create()
              });
            }
            return target[rootKey];
          }
          __name(GetOrCreateWeakMapTable, "GetOrCreateWeakMapTable");
          function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i) buffer[i] = Math.random() * 255 | 0;
            return buffer;
          }
          __name(FillRandomBytes, "FillRandomBytes");
          function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
              var array = new Uint8Array(size);
              if (typeof crypto !== "undefined") {
                crypto.getRandomValues(array);
              } else if (typeof msCrypto !== "undefined") {
                msCrypto.getRandomValues(array);
              } else {
                FillRandomBytes(array, size);
              }
              return array;
            }
            return FillRandomBytes(new Array(size), size);
          }
          __name(GenRandomBytes, "GenRandomBytes");
          function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            data[6] = data[6] & 79 | 64;
            data[8] = data[8] & 191 | 128;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
              var byte = data[offset];
              if (offset === 4 || offset === 6 || offset === 8) result += "-";
              if (byte < 16) result += "0";
              result += byte.toString(16).toLowerCase();
            }
            return result;
          }
          __name(CreateUUID, "CreateUUID");
        }
        __name(CreateWeakMapPolyfill, "CreateWeakMapPolyfill");
        function MakeDictionary(obj) {
          obj.__ = void 0;
          delete obj.__;
          return obj;
        }
        __name(MakeDictionary, "MakeDictionary");
      });
    })(Reflect2 || (Reflect2 = {}));
  }
});

// src/infrastructure/config/datasource.ts
var datasource_exports = {};
__export(datasource_exports, {
  AppDataSource: () => AppDataSource
});
module.exports = __toCommonJS(datasource_exports);

// src/core/domain/entities/user.ts
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

// src/infrastructure/config/datasource.ts
var import_reflect_metadata = __toESM(require_Reflect(), 1);
var import_typeorm2 = require("typeorm");
var AppDataSource = new import_typeorm2.DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [
    User
  ]
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppDataSource
});
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
