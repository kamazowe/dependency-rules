import { featureAInternal } from './feature-a-internal';
import { dashboardLegacyExportToFeature } from '../../legacy/legacy-export-to-feature/legacy-export-to-feature';
import { dashboardDataAccess } from '../../data-access/data-access';
import { cardsApi } from '../../../cards/api/api';

export const dashboardFeatureA = '[dashboard] feature A' + featureAInternal + dashboardLegacyExportToFeature + dashboardDataAccess + dashboardDataAccess + cardsApi;
