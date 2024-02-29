import { createFeatureSelector, createSelector } from "@ngrx/store";
import { featureName, usuario } from "../reducer";


export const selectUsuarioFeature = createFeatureSelector<usuario>(featureName)

export const selectUsuario = createSelector(selectUsuarioFeature,(state)=>state.usuario)