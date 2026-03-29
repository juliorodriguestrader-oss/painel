export interface TradingBot {
  id: string;
  accountNumber: string;
  accountType: string;
  status: 'active' | 'paused' | 'blocked';
  expiryDate: string;
  expiryDays: number;
  modifiedAt: string;
}

export interface DashboardStats {
  activeLicenses: number;
  expiredLicenses: number;
  manualBlocks: number;
}
