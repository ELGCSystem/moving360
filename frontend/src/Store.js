import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,

    houseData: {

        dataBasic: localStorage.getItem('dataBasic')
        ? JSON.parse(localStorage.getItem('dataBasic'))
        : {},

        surface: localStorage.getItem('surface')
        ? JSON.parse(localStorage.getItem('surface'))
        : {},

        location: localStorage.getItem('location')
        ? JSON.parse(localStorage.getItem('location'))
        : {},

        mainFeatures: localStorage.getItem('mainFeatures')
        ? JSON.parse(localStorage.getItem('mainFeatures'))
        : {},

        general: localStorage.getItem('general')
        ? JSON.parse(localStorage.getItem('general'))
        : {},

        otherEnvironments: localStorage.getItem('otherEnvironments')
        ? JSON.parse(localStorage.getItem('otherEnvironments'))
        : {},

        installations: localStorage.getItem('installations')
        ? JSON.parse(localStorage.getItem('installations'))
        : {},

        services: localStorage.getItem('services')
        ? JSON.parse(localStorage.getItem('services'))
        : {},

        multimedia: localStorage.getItem('multimedia')
        ? JSON.parse(localStorage.getItem('multimedia'))
        : {},

        additionalInformation: localStorage.getItem('additionalInformation')
        ? JSON.parse(localStorage.getItem('additionalInformation'))
        : {},

        contactOwner: localStorage.getItem('contactOwner')
        ? JSON.parse(localStorage.getItem('contactOwner'))
        : {},
    }
}

function reducer(state, action) {
    switch (action) {
        case 'USER_SIGNIN':
            return { ...state, userInfo: action.payload };

        case 'USER_SIGNOUT':
            return { ...state, userInfo: null };

        case 'SAVE_DATA_BASIC':
            return { 
                ...state, 
                houseData: {
                     ...state.houseData,
                     dataBasic: action.payload 
                } 
            };

        case 'SAVE_SURFACE':
            return { 
                ...state, 
                houseData: {
                     ...state.houseData,
                     surface: action.payload 
                } 
            };

        case 'SAVE_LOCATION':
            return { 
                ...state, 
                houseData: {
                     ...state.houseData,
                     location: action.payload 
                } 
            };

        case 'SAVE_MAIN_FEATURES':
            return { 
                ...state, 
                houseData: {
                     ...state.houseData,
                     mainFeatures: action.payload 
                } 
            };

        case 'SAVE_GENERAL':
            return { 
                ...state, 
                houseData: {
                     ...state.houseData,
                     general: action.payload 
                } 
            };

        case 'SAVE_OTHER_ENVIRONMENTS':
            return { 
                ...state, 
                houseData: {
                     ...state.houseData,
                     otherEnvironments: action.payload 
                } 
            };

        case 'SAVE_INSTALLATIONS':
            return { 
                ...state, 
                houseData: {
                     ...state.houseData,
                     installations: action.payload 
                } 
            };

        case 'SAVE_SERVICES':
            return { 
                ...state, 
                houseData: {
                     ...state.houseData,
                     services: action.payload 
                } 
            };

        case 'SAVE_MULTIMEDIA':
            return { 
                ...state, 
                houseData: {
                     ...state.houseData,
                     multimedia: action.payload 
                } 
            };

        case 'SAVE_ADDITIONAL_INFORMATION':
            return { 
                ...state, 
                houseData: {
                     ...state.houseData,
                     additionalInformation: action.payload 
                } 
            };

        case 'SAVE_CONTACT_OWNER':
            return { 
                ...state, 
                houseData: {
                     ...state.houseData,
                     contactOwner: action.payload 
                } 
            };

        default:
            return state;
    }
}

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}