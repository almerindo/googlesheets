/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import fs from 'fs';
import Sheets from '../sheets/Sheets';
import credentials from '../credential/credential.json';

describe('GoogleSheets', () => {
  let sheet: Sheets;

  const writeLine = async (coluns: any[]): Promise<void> => {
    console.info(coluns);
    fs.appendFileSync(
      'hierarchy.csv',
      `"${coluns[0]}" , "${coluns[1]}", "${coluns[2]}", "${coluns[3]}"\n`,
    );
  };
  it('Should connect', async () => {
    sheet = new Sheets(
      credentials,
      '1dYCGkFA9zohB9klqE1ySPMyK31qWK2on929NvqHUzY4',
    );
    const connected = await sheet.connect();
    expect(connected).toBe(true);
  });

  it('Should getCount sheet', async () => {
    const total = await sheet.getSheetCount();

    expect(total).toBeGreaterThan(0);
  });

  it('Should getSheetByIndex ', async () => {
    const workSheet = await sheet.getSheetByIndex(1);
    expect(workSheet).toBeTruthy();
  });

  // it('Should getRows ', async () => {
  //   const workSheet = await sheet.getSheetByIndex(1);
  //   const rows = await workSheet.getRows();
  //   for (let index = 0; index < rows.length; index++) {
  //     const row = rows[index];
  //     const keys = Object.keys(row);
  //     if ((row[keys[3]], row[keys[4]], row[keys[5]], row[6])) {
  //       writeLine([row[keys[3]], row[keys[4]], row[keys[5]], row[6]]);
  //     }
  //     for (let j = 7; j < keys.length; j++) {
  //       const key = keys[j];
  //       if (row[key] && row[key].trim().length > 2) {
  //         writeLine([row[keys[3]], row[keys[4]], row[keys[5]], row[key]]);
  //       }
  //     }
  //   }

  //   expect(rows.length).toBeGreaterThan(0);
  // });
});
