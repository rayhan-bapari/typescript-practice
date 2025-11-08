"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
function logMessage(message) {
    console.log(message);
}
logMessage(`User 1 added ${enum_1.Status.Pending} to ${enum_1.Status.Processing} This Order`);
function login(role, username) {
    console.log(`User ${username} logged in as ${role}`);
}
function validateAccess(role) {
    switch (role) {
        case enum_1.Role.Admin:
            console.log('Full system access granted');
            break;
        case enum_1.Role.Manager:
            console.log('Limited access granted');
            break;
        default:
            console.log('Access denied, Because you are customer');
    }
}
// Example usage
const userRole = enum_1.Role.Admin;
const username = 'John';
login(userRole, username);
validateAccess(userRole);
