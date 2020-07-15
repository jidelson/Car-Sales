import { bindActionCreators } from "redux"

export const addFeature = (featureId) => {
    return{ type: 'ADD_FEATURE', payload: featureId}
}

export const removeFeature = (featureId) => {
    return{ type: 'REMOVE_FEATURE', payload: featureId}
}