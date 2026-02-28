export type UtilityReading = {
  electricity: number; // kWh
  water: number; // liters
  gas: number; // units
  paper: number; // kg
};

export const generateMonthlyReadings = (): UtilityReading => {
  return {
    electricity: Math.floor(Math.random() * 500) + 100,
    water: Math.floor(Math.random() * 2000) + 500,
    gas: Math.floor(Math.random() * 50) + 10,
    paper: Math.floor(Math.random() * 20) + 1,
  };
};

export const calculateBill = (reading: UtilityReading) => {
  return {
    electricity: reading.electricity * 5, // ₹5 per kWh
    water: reading.water * 0.5,           // ₹0.5 per liter
    gas: reading.gas * 20,                // ₹20 per unit
    paper: reading.paper * 10,            // ₹10 per kg
  };
};