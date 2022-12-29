import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,

    estateData: {

        dataBasic: localStorage.getItem('dataBasic')
        ? JSON.parse(localStorage.getItem('dataBasic'))
        : {},

        dataEntrepreneurship: localStorage.getItem('dataEntrepreneurship')
        ? JSON.parse(localStorage.getItem('dataEntrepreneurship'))
        : {},

        dataCountry: localStorage.getItem('dataCountry')
        ? JSON.parse(localStorage.getItem('dataCountry'))
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

        generalFeatures: localStorage.getItem('generalFeatures')
        ? JSON.parse(localStorage.getItem('generalFeatures'))
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

        building: {
            mainFeatures: localStorage.getItem('buildingMainFeatures')
            ? JSON.parse(localStorage.getItem('buildingMainFeatures'))
            : {},

            installations: localStorage.getItem('buildingInstallations')
            ? JSON.parse(localStorage.getItem('buildingInstallations'))
            : {},

            services: localStorage.getItem('buildingServices')
            ? JSON.parse(localStorage.getItem('buildingServices'))
            : {},
        },

        multimedia: localStorage.getItem('multimedia')
        ? JSON.parse(localStorage.getItem('multimedia'))
        : {},

        additionalInformation: localStorage.getItem('additionalInformation')
        ? JSON.parse(localStorage.getItem('additionalInformation'))
        : {},

        contactOwner: localStorage.getItem('contactOwner')
        ? JSON.parse(localStorage.getItem('contactOwner'))
        : {},

        statistics: null
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
                estateData: {
                     ...state.estateData,
                     dataBasic: action.payload 
                } 
            };

        case 'SAVE_DATA_ENTREPRENEURSHIP':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     dataEntrepreneurship: action.payload 
                } 
            };

        case 'SAVE_DATA_COUNTRY':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     dataCountry: action.payload 
                } 
            };

        case 'SAVE_SURFACE':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     surface: action.payload 
                } 
            };

        case 'SAVE_LOCATION':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     location: action.payload 
                } 
            };

        case 'SAVE_MAIN_FEATURES':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     mainFeatures: action.payload 
                } 
            };

        case 'SAVE_GENERAL_FEATURES':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     generalFeatures: action.payload 
                } 
            };

        case 'SAVE_OTHER_ENVIRONMENTS':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     otherEnvironments: action.payload 
                } 
            };

        case 'SAVE_INSTALLATIONS':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     installations: action.payload 
                } 
            };

        case 'SAVE_SERVICES':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     services: action.payload 
                } 
            };

        case 'SAVE_BUILDING_MAIN_FEATURES':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     building: {
                        ...state.building,
                        mainFeatures: action.payload
                     } 
                } 
            };
        
        case 'SAVE_BUILDING_INSTALLATIONS':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     building: {
                        ...state.building,
                        installations: action.payload
                     } 
                } 
            };

        case 'SAVE_BUILDING_SERVICES':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     building: {
                        ...state.building,
                        services: action.payload
                     } 
                } 
            };

        case 'SAVE_MULTIMEDIA':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     multimedia: action.payload 
                } 
            };

        case 'SAVE_ADDITIONAL_INFORMATION':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
                     additionalInformation: action.payload 
                } 
            };

        case 'SAVE_CONTACT_OWNER':
            return { 
                ...state, 
                estateData: {
                     ...state.estateData,
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