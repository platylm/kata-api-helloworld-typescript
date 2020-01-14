"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Application = /** @class */ (function () {
    function Application(port) {
        this.app = express_1.default();
        this.port = port;
        //route -> fn
        this.app.get('/hello', function (request, response) {
            //response.send('hello world')
            response.json({ 'hello': 'world' });
        });
    }
    Application.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("app listening on port " + _this.port);
        });
    };
    return Application;
}());
exports.default = Application;
