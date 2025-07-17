import { shell as authShell } from '../../auth/shell/shell';
import { shell as dashboardShell } from '../../dashboard/shell/shell';
import { cardsShell as cardsShell } from '../../cards/shell/cardsShell';

export const shellHost = '[host] shell' + authShell + dashboardShell + cardsShell
