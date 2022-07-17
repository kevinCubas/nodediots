import { Pool } from "pg";
import connectionString from "./config/urlkeydb";

const db = new Pool({ connectionString });

export default db;