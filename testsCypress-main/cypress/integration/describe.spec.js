/// <reference types="cypress" />

it.only('A external test...', () => {

})

describe('Should group tests...', () => {
    describe('Should group more specific tests...', () => {
        it('A specifc=ic test...', () => {

        })
    })

    describe('Should group more specific tests 2...', () => {
        it('A specific test 2 ...', () => {

        })
    })

    it('A internal test...', () => {

    })
})

