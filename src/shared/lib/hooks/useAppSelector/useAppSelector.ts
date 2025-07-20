import { useSelector } from 'react-redux';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { type RootState } from 'app/providers/StoreProvider';

export const useAppSelector = useSelector.withTypes<RootState>();
