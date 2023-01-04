const initialState = {
    dataBasic: null,
    dataEntrepreneurship: null,
    dataCountry: null,
    surface: null,
    location: null,
    mainFeatures: null,
    generalFeatures: null,
    otherEnvironments: null,
    installations: null,
    services: null,

    building: {
        mainFeatures: null,
        installations: null,
        services: null,
    },

    multimedia: null,
    additionalInformation: null,
    contactOwner: null,
    statistics: null
};

export default function estateReducer(state = initialState, action) {
    switch(action.type) {
        case 'SAVE_DATA_BASIC':
            return { ...state, dataBasic: action.payload };

        case 'SAVE_DATA_ENTREPRENEURSHIP':
            return { ...state, dataEntrepreneurship: action.payload };

        case 'SAVE_DATA_COUNTRY':
            return { ...state, dataCountry: action.payload };

        case 'SAVE_SURFACE':
            return { ...state, surface: action.payload };

        case 'SAVE_LOCATION':
            return { ...state, location: action.payload };

        case 'SAVE_MAIN_FEATURES':
            return { ...state, mainFeatures: action.payload };

        case 'SAVE_GENERAL_FEATURES':
            return { ...state, generalFeatures: action.payload };

        case 'SAVE_OTHER_ENVIRONMENTS':
            return { ...state, otherEnvironments: action.payload };

        case 'SAVE_INSTALLATIONS':
            return { ...state, installations: action.payload };

        case 'SAVE_SERVICES':
            return { ...state, services: action.payload };
            
        case 'SAVE_BUILDING_MAIN_FEATURES':
            return { 
                ...state, building: {
                    ...state.building, mainFeatures: action.payload
                }
            };
            
        case 'SAVE_BUILDING_INSTALLATIONS':
            return { 
                ...state, building: {
                    ...state.building, installations: action.payload
                }
            };

        case 'SAVE_BUILDING_SERVICES':
            return { 
                ...state, building: {
                    ...state.building, services: action.payload
                }
            };

        case 'SAVE_MULTIMEDIA':
            return { ...state, multimedia: action.payload };

        case 'SAVE_ADDITIONAL_INFORMATION':
            return { ...state, additionalInformation: action.payload };

        case 'SAVE_CONTACT_OWNER':
            return { ...state, contactOwner: action.payload };

        default:
            return state;
    }
}

export const saveDataAction = (type, payload) => async (dispatch, getState) =>
    dispatch({ type: type, payload: payload });