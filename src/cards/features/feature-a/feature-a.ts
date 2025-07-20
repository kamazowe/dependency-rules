import { featureAInternal } from './feature-a-internal';
import { cardsLegacyExportToFeature } from '../../legacy/legacy-export-to-feature/legacy-export-to-feature';
import { cardsDataAccess } from '../../data-access/data-access';
import { authApi } from '../../../auth/api/api';

export const cardsFeatureA = '[cards] feature A' + featureAInternal + cardsLegacyExportToFeature + cardsDataAccess + cardsDataAccess + authApi;
