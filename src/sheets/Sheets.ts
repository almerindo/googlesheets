/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-unresolved */

import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet,
  ServiceAccountCredentials,
} from 'google-spreadsheet';

class Sheets {
  doc: GoogleSpreadsheet;

  credentials: ServiceAccountCredentials;

  constructor(credentials: ServiceAccountCredentials, sheetId: string) {
    this.doc = new GoogleSpreadsheet(sheetId);
    this.credentials = credentials;
  }

  public getCredential() {
    return this.credentials;
  }

  public async connect(): Promise<boolean> {
    try {
      await this.doc.useServiceAccountAuth(this.credentials);
      await this.doc.loadInfo();
      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  }

  public async getSheetCount(): Promise<number> {
    return this.doc.sheetCount;
  }

  public async getSheetByIndex(
    index: number,
  ): Promise<GoogleSpreadsheetWorksheet> {
    return this.doc.sheetsByIndex[index];
  }
}

export default Sheets;
