import reducer from '../src/reducers'
import * as types from '../src/constants/ActionTypes'

describe('weather station reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                "weatherStation": { "data": null, "status": null }
            }
        )
    })

    it('should handle FETCH_DATA_FULFILLED', () => {
        expect(
            reducer([], {
                type: types.FETCH_DATA_FULFILLED,
                payload: {}
            })
        ).toEqual({ "weatherStation": { "data": {}, "status": "success" } })
    })

    it('should handle FETCH_DATA_REJECTED', () => {
        expect(
            reducer([], {
                type: types.FETCH_DATA_REJECTED,
                payload: {}
            })
        ).toEqual({ "weatherStation": { "data": null, "status": "failed" } })
    })
})