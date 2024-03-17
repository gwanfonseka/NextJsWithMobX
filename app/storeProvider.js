'use client';

import { createContext, useContext } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import AppStore from '@/lib/store'; // Import AppStore instead of store

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const store = useLocalObservable(() => new AppStore());

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => {
    const store = useContext(StoreContext);
    if (!store) {
        throw new Error('error')
    }
    return store;
}