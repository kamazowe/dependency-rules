import { featureAInternal } from './feature-a-internal';
import { authLegacyExportToFeature } from '../../legacy/legacy-export-to-feature/legacy-export-to-feature';
import { authDataAccess } from '../../data-access/data-access';

export const authFeatureA = '[auth] feature A' + featureAInternal + authLegacyExportToFeature + authDataAccess + authDataAccess;
