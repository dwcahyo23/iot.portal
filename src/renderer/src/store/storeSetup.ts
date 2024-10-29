import { Action, AnyAction, Reducer, Store, configureStore } from '@reduxjs/toolkit'
import { PERSIST_STORE_NAME } from '@renderer/constants/app.constant'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer, { AsyncReducers, RootState } from './rootReducer'

/* eslint-disable @typescript-eslint/no-explicit-any */

const persistConfig = {
  key: PERSIST_STORE_NAME,
  keyPrefix: '',
  storage,
  whitelist: ['auth', 'locale']
}

interface CustomStore extends Store<RootState, AnyAction> {
  asyncReducers?: AsyncReducers
}

const store: CustomStore = configureStore({
  reducer: persistReducer(persistConfig, rootReducer() as Reducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
  devTools: process.env.NODE_ENV === 'development'
})

store.asyncReducers = {}

export const persistor = persistStore(store)

export function injectReducer<S>(key: string, reducer: Reducer<S, Action>) {
  if (store.asyncReducers) {
    if (store.asyncReducers[key]) {
      return false
    }
    store.asyncReducers[key] = reducer
    store.replaceReducer(persistReducer(persistConfig, rootReducer(store.asyncReducers) as Reducer))
  }
  persistor.persist()
  return store
}

export type AppDispatch = typeof store.dispatch

export default store
