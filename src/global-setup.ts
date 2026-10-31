import dotenv from 'dotenv';

async function globalSetup(): Promise<void> {
  dotenv.config({ override: true }); //pobiera zmienne z pliku .env w pierwszej kolejności
}

export default globalSetup;
