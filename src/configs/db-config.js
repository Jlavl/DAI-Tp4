import { userInfo } from "os";
import { portalSuspended } from "pg-protocol/dist/messages";

const config = {
    host: "locahost",
    database: "dai-events",
    user    : "postgres",
    password: "root",
    port    : 5432
}