import { authFeatureA } from '../features/feature-a/feature-a';
import { featureB } from '../features/feature-b/feature-b';
import { authUtilX } from '../utils/util-x/util-x';
import { authDomain } from '../domain/domain';

export const authShell = '[auth] shell' + authFeatureA + featureB + authUtilX + authDomain
