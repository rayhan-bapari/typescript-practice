import { Role, Status } from './enum';

function logMessage(message: string): void {
	console.log(message);
}

logMessage(`User 1 added ${Status.Pending} to ${Status.Processing} This Order`);

function login(role: Role, username: string): void {
    console.log(`User ${username} logged in as ${role}`);
}

function validateAccess(role: Role): void {
    switch (role) {
        case Role.Admin:
            console.log('Full system access granted');
            break;
        case Role.Manager:
            console.log('Limited access granted');
            break;
        default:
            console.log('Access denied, Because you are customer');
    }
}

// Example usage
const userRole = Role.Admin;
const username = 'John';

login(userRole, username);
validateAccess(userRole);
