import { featureAInternal } from './feature-a-internal';
import { authLegacyExportToFeature } from '../../legacy/legacy-export-to-feature/legacy-export-to-feature';

export const featureA = '[auth] feature A' + featureAInternal + authLegacyExportToFeature;
