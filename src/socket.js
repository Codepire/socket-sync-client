import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// replace below url with server hosted url and port
const URL = "https://sockt-sync-server.onrender.com/";

export const socket = io(URL);
