
import * as actions from '../src/actions/weatherStation'
import thunk from 'redux-thunk'
import * as types from '../src/constants/ActionTypes'
import fetchMock from 'fetch-mock'
import { APP_ID } from "../src/constants/generalConstants";
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates FETCH_DATA_FULFILLED when fetching todos has been done', () => {

        const region = 'Thane'

        fetchMock.getOnce(`https://api.openweathermap.org/data/2.5/forecast?q=${region}&units=metric&appid=${APP_ID}`,
            { body: {}, headers: { 'content-type': 'application/json' } })

        const expectedActions = [{ type: types.FETCH_DATA_FULFILLED, payload: {} }]

        const store = mockStore()
        
        
        return store.dispatch(actions.fetchData(region)).then(() => {
            // return of async actions
            expect(store.getActions()[0].type).toEqual(expectedActions[0].type)
        })
    })

    it('creates FETCH_DATA_REJECTED when fetching todos has been done', () => {

        const region = 'invalid city'

        fetchMock.getOnce(`https://api.openweathermap.org/data/2.5/forecast?q=${region}&units=metric&appid=${APP_ID}`,
            { body: {}, headers: { 'content-type': 'application/json' } })

        const expectedActions = [{ type: types.FETCH_DATA_REJECTED, payload: {} }]

        const store = mockStore()


        return store.dispatch(actions.fetchData(region)).then(() => {
            // return of async actions
            expect(store.getActions()[0].type).toEqual(expectedActions[0].type)
        })
    })
})