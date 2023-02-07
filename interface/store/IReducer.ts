interface IReducer {
    type: String,
    payload: Object,
    meta?: void
}

export type {
    IReducer,
}