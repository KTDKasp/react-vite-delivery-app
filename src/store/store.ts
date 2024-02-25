import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer, { JWT_PERSISTENT_STATE } from './user.slice';
import cartSliceReducer from './cart.slice';
import { saveState } from './storage';

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    cart: cartSliceReducer
  }
});

store.subscribe(() => {
  saveState({jwt :store.getState().user.jwt}, JWT_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;