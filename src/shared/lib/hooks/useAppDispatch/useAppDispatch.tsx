import { useDispatch } from 'react-redux';
// TODO: Поменять порядок импортов. вынести стор типы в shared
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { type AppDispatch } from 'app/providers/StoreProvider';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
