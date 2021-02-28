import dotenv from 'dotenv';
import Sheets from './sheets/Sheets';
import credentials from './credential/credential.json';

dotenv.config();

const SHEET_ID = process.env.SHEETS_ID as string;
const sheet = new Sheets(credentials, SHEET_ID);

export default sheet;
