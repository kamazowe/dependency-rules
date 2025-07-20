import { authShell as authShell } from '../../auth/shell/shell';
import { dashboardShell } from '../../dashboard/shell/shell';
import { cardsShell} from '../../cards/shell/shell';

export const shellHost = '[host] shell' + authShell + dashboardShell + cardsShell
